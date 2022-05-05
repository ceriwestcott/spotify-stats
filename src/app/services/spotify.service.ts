import { environment } from './../../environments/environment';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { AUTHORIZE_URL, BASE_URL, CURRENT_USER_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  scope: string = 'user-top-read';
  redirect_uri: string = 'http://localhost:4200/callback';
  common_url: string = 'https://api.spotify.com/v1/';
  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  public login() {
    if (this.hasTokenExpired()) {
      this.authorize();
    } else {
      this.router.navigateByUrl('/landing');
    }
  }

  public authorize(): void {

    let params = new HttpParams();
    params = params.append('response_type', 'token');
    params = params.append('client_id', environment.clientID);
    params = params.append('scope', this.scope);
    params = params.append('redirect_uri', this.redirect_uri);

    const spotify_auth_url = AUTHORIZE_URL + '?' + params.toString();
    this.document.location.href = spotify_auth_url;
  }

  public getCurrentUserProfile()  {
    return this.getQuery(CURRENT_USER_URL);
  }

  public hasTokenExpired(): boolean {
    let expiry_date = Number(localStorage.getItem('expiry_date'));
    return (new Date().getTime() / 1000) > Number(expiry_date ?? 0);
  }

  public getQuery(query: string) {
    const url: string = `${BASE_URL}${query}`;
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(url, { headers });
  }
}
