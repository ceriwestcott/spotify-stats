import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-test-component',
  templateUrl: './landing-test-component.component.html',
  styleUrls: ['./landing-test-component.component.scss'],
})
export class LandingTestComponentComponent implements OnInit {
  token: string = '';
  expiry_date: string = '';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.token = localStorage.getItem('access_token') ?? '';
      this.expiry_date = localStorage.getItem('expiry_date') ?? '';
    }, 2000);
  }
}
