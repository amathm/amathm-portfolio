import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialNavComponent } from './social-nav/social-nav.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { YoutubeApiSectionComponent } from './youtube-api-section/youtube-api-section.component';
import { ExperienceComponent } from './experience/experience.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialNavComponent,
    BannerComponent,
    FooterComponent,
    ContactFormComponent,
    YoutubeApiSectionComponent,
    ExperienceComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faTwitter, faYoutube);
  }
}
