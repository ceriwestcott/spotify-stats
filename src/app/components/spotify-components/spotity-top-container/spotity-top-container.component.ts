import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-spotity-top-container',
  templateUrl: './spotity-top-container.component.html',
  styleUrls: ['./spotity-top-container.component.scss']
})
export class SpotityTopContainerComponent implements OnInit {

  filtersGroup = new FormGroup({
    filter: new FormControl(),
    subFilter: new FormControl()
  })

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    debugger;
    this.spotifyService.getTop(this.filtersGroup.value).subscribe(x => JSON.stringify(x));
  }

}
