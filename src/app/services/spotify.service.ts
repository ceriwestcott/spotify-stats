import { environment } from './../../environments/environment';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

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

  private authorize(): void {
    var url = `https://accounts.spotify.com/authorize`;

    let params = new HttpParams();
    params = params.append('response_type', 'token');
    params = params.append('client_id', environment.clientID);
    params = params.append('scope', this.scope);
    params = params.append('redirect_uri', this.redirect_uri);
    params = params.append('showDialog', true);

    const spotify_auth_url = url + '?' + params.toString();
    this.document.location.href = spotify_auth_url;
  }

  public hasTokenExpired(): boolean {
    const expiry_date = Number(localStorage.getItem('expiry_date'));
    return new Date().getTime() / 1000 > expiry_date;
  }

  public getQuery(query: string) {
    const url: string = `${this.common_url}${query}`;

    //ToDo Token
    const headers = new HttpHeaders({
      Authorization: 'Bearer YOUR_TOKEN',
    });

    return this.http.get(url, { headers });
  }
}
