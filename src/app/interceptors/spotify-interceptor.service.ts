import { DOCUMENT } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTHORIZE_URL, REDIRECT_URL, USER_TOP_READ } from '../constants';
import { SpotifyService } from '../services/spotify.service';
import { UtilityService } from '../services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyInterceptorService implements HttpInterceptor{

  constructor(private spotifyService: SpotifyService,
    private utilityService: UtilityService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.utilityService.hasTokenExpired())
      this.utilityService.hasTokenExpired();
    return next.handle(req);
  }

  public hasTokenExpired () {
    let expiry_date = Number(localStorage.getItem('expiry_date'));
    return (new Date().getTime() / 1000) > Number(expiry_date ?? 0);
  }
}
