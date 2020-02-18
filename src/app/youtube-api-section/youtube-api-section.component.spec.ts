import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeApiSectionComponent } from './youtube-api-section.component';

describe('YoutubeApiSectionComponent', () => {
  let component: YoutubeApiSectionComponent;
  let fixture: ComponentFixture<YoutubeApiSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeApiSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeApiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
