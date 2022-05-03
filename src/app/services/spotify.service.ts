import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  scope: string = 'user-top-read';
  redirect_uri: string = 'http://localhost:4200/callback';
  common_url: string = 'https://api.spotify.com/v1/';
  constructor(private http: HttpClient) {}

  public login() {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    });
    var url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(
      environment.clientID
    )}&scope=${encodeURIComponent(
      this.scope
    )}&redirect_uri=${encodeURIComponent(this.redirect_uri)}`;
    return this.http.get(url, { headers: headers });
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
