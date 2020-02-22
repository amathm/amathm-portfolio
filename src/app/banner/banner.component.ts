import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  private videoUrl = ['../../assets/videos/Glitch - 27706-1080p.mp4', '../../assets/videos/Glitch - 27706-high-res.mp4'];

  constructor() { }

  ngOnInit() {
  }

}
