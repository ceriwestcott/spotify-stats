import { MatAppModule } from './mat-app/mat-app.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpotityTopContainerComponent } from './components/spotify-components/spotity-top-container/spotity-top-container.component';
import { SpotityTopContentComponent } from './components/spotify-components/spotity-top-content/spotity-top-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallBackComponent,
    LandingComponent,
    LandingTestComponentComponent,
    ProfileComponent,
    NavBarComponent,
    SpotityTopContainerComponent,
    SpotityTopContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatAppModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
