import { CallBackComponent } from './components/call-back/call-back.component';
import { LandingComponent } from './components/landing/landing.component';

import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallBackComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
