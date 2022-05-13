import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss'],
})
export class CallBackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    debugger;
    if (
      this.utilityService.hasTokenExpired() ||
      !localStorage.getItem('access_token')
    ) {
      this.route.fragment.subscribe((fragments) => {
        fragments?.split('&').map((fragment) => {
          let fragmentArray = fragment.split('=');
          if (fragmentArray[0] === 'expires_in') {
            const expiry_date =
              Number(fragmentArray[1]) + new Date().getTime() / 1000;

            localStorage.setItem('expiry_date', expiry_date.toString());
          }
          localStorage.setItem(fragmentArray[0], fragmentArray[1]);
        });
      });
    }
    this.router.navigateByUrl('/landing');
  }
}
