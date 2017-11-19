import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileCardHeadComponent } from './profile-card-head/profile-card-head.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardHeadComponent,
    RatingStarComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
