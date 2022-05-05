import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/user.interface';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public currentUser: UserProfile | undefined
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService.getCurrentUserProfile().subscribe((userData) => {
      this.currentUser = userData as UserProfile;
    })
  }

}
