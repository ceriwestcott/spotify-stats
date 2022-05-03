import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss'],
})
export class CallBackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const token = JSON.parse(
      this.route.snapshot.paramMap.get('access_token') || '{}'
    );
    const token_type = JSON.parse(
      this.route.snapshot.paramMap.get('token_type') || '{}'
    );
    if (!token) this.router.navigateByUrl('/login');
    localStorage.setItem('token', token);
    localStorage.setItem('token_type', token_type);
    this.router.navigateByUrl('/landing');
  }
}
