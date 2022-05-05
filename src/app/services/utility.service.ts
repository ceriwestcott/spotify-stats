import { DOCUMENT } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AUTHORIZE_URL, REDIRECT_URL, USER_TOP_READ } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(    @Inject(DOCUMENT) private document: Document) { }
  

  public hasTokenExpired() : boolean {
    let expiry_date = Number(localStorage.getItem('expiry_date'));
    return (new Date().getTime() / 1000) > Number(expiry_date ?? 0);
  }

  public authorize(): void {

    let params = new HttpParams();
    params = params.append('response_type', 'token');
    params = params.append('client_id', environment.clientID);
    params = params.append('scope', USER_TOP_READ);
    params = params.append('redirect_uri', REDIRECT_URL);

    const spotify_auth_url = AUTHORIZE_URL + '?' + params.toString();
    this.document.location.href = spotify_auth_url;
  }
}
