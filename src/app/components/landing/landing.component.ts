import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { pipe } from 'rxjs';
import { UserProfile } from 'src/app/interfaces/user.interface';
import { SpotifyService } from 'src/app/services/spotify.service';

@UntilDestroy()
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public time_frame = [
    { period: 'short_term', display_name: '1 MONTHS' },
    { period: 'medium_term', display_name: '6 MONTHS' },
    { period: 'long_term', display_name: '1 YEAR' },
  ];

  filteredData: any[] = [];
  user: UserProfile | any;
  fitler_type: string = '';
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService
      .getCurrentUserProfile()
      .pipe(untilDestroyed(this))
      .subscribe((user: any) => {
        this.user = user;
      });
  }

  onRadioChange(category: string, time_frame: string) {
    debugger;
    this.fitler_type = category;
    this.spotifyService.getTop(category, time_frame).subscribe((retVal) => {
      switch (category) {
        case 'tracks':
          this.handleTopTracks(retVal);
          break;
        case 'artists':
          this.handTopArtists(retVal);
          break;
      }
    });
    console.log(this.filteredData);
  }

  handleTopTracks(retVal: any) {
    this.filteredData = retVal.items.map((x: any) => {
      return {
        album: x.album,
        artist: x.artists[0],
        external_urls: x.external_urls.spotify,
        name: x.name,
      };
    });
  }
  handTopArtists(retVal: any) {
    throw new Error('Function not implemented.');
  }
}
