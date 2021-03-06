import { MatAppModule } from './mat-app/mat-app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallBackComponent } from './components/call-back/call-back.component';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingTestComponentComponent } from './components/landing-test-component/landing-test-component.component';
import { ProfileComponent } from './components/spotify-components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallBackComponent,
    LandingComponent,
    LandingTestComponentComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatAppModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
