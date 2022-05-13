import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotity-top-content',
  templateUrl: './spotity-top-content.component.html',
  styleUrls: ['./spotity-top-content.component.scss'],
})
export class SpotityTopContentComponent implements OnInit {
  @Input() type = '';
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
