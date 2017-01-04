import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { WaveComponent } from 'ng2-spin-kit/app/spinner/wave';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from '@angular/material';
import {AgmCoreModule} from "angular2-google-maps/core";





import { Ng2UtilsModule } from 'ng2-utils';
import { Ng2ScrollableModule } from 'ng2-scrollable';




import { SimpleTimer } from 'ng2-simple-timer';
import { NavbarComponent } from './website/navbar/navbar.component';
import { StartComponent } from './website/start/start.component';
import { MessengerComponent } from './website/messenger/messenger.component';
import { ResumeComponent } from './website/resume/resume.component';
import { PortfolioComponent } from './website/portfolio/portfolio.component';
import { TestimonialComponent } from './website/testimonial/testimonial.component';
import { PostsComponent } from './website/posts/posts.component';
import { ContactComponent } from './website/contact/contact.component';
import { SidebarTestComponent } from './sidebar-test/sidebar-test.component';



@NgModule({
  declarations: [
    AppComponent,
    WaveComponent,
    SpinnerComponent,
    WebsiteComponent,
    NavbarComponent,
    StartComponent,
    MessengerComponent,
    ResumeComponent,
    PortfolioComponent,
    TestimonialComponent,
    PostsComponent,
    ContactComponent,
    SidebarTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3uN3p-F7jpFl4BfRrs8xcV57Qtz8aB8E'
    }),
    Ng2ScrollableModule,
    Ng2UtilsModule
    

  ],
  providers: [ SimpleTimer ],
  bootstrap: [AppComponent]
})
export class AppModule { }
