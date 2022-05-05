import { environment } from './../../environments/environment';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { AUTHORIZE_URL, BASE_URL, CURRENT_USER_URL } from '../constants';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  scope: string = 'user-top-read';
  redirect_uri: string = 'http://localhost:4200/callback';
  common_url: string = 'https://api.spotify.com/v1/';
  constructor(
    private http: HttpClient,
    private router: Router,
    private utilityService: UtilityService
  ) {}

  public login() {
    if (this.utilityService.hasTokenExpired()) {
      this.authorize();
    } else {
      this.router.navigateByUrl('/landing');
    }
  }

  public authorize(): void {
    this.utilityService.authorize();
  }

  public getCurrentUserProfile()  {
    return this.getQuery(CURRENT_USER_URL);
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
