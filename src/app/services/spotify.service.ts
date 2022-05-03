import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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
    });
    var url = `https://accounts.spotify.com/authorize`;
    let params = new HttpParams();
    params = params.append('response_type','token');
    params = params.append('client_id', environment.clientID);
    params = params.append('scope',this.scope);
    params = params.append('redirect_uri', this.redirect_uri);+9847AKO#43[ params.append('showDialog', true);
    debugger;
    return this.http.get(url, { params: params, headers: headers });
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
