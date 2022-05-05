import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user: UserProfile | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
