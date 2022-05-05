import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  currentUser: UserProfile.UserProfile | undefined
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService.getCurrentUserProfile().subscribe((userData: UserProfile.UserProfile) => {
      this.currentUser = userData;
    })
  }

}
