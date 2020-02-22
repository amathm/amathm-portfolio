import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  private videoUrl = ['../../assets/videos/Glitch - 27706-1080p.mp4'];

  constructor() { }

  ngOnInit() {
  }

}
