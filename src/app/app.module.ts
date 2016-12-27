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





import { SimpleTimer } from 'ng2-simple-timer';
import { NavbarComponent } from './website/navbar/navbar.component';
import { StartComponent } from './website/start/start.component';
import { MessengerComponent } from './website/messenger/messenger.component';
import { ResumeComponent } from './website/resume/resume.component';



@NgModule({
  declarations: [
    AppComponent,
    WaveComponent,
    SpinnerComponent,
    WebsiteComponent,
    NavbarComponent,
    StartComponent,
    MessengerComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    MaterialModule.forRoot()

  ],
  providers: [ SimpleTimer ],
  bootstrap: [AppComponent]
})
export class AppModule { }
