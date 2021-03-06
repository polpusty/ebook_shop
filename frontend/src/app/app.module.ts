import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';

import { NewsletterService } from './newsletter/newsletter.service';
import { MessageService } from './message.service';
import { AuthenticationService } from './authentication.service';
import { HttpHeadersService } from './http-headers.service';
import { EbookService } from './ebook.service';
import { ReviewService } from './review.service';

import { NavigationComponent } from './navigation/navigation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidenavPrivateComponent } from './sidenav-private/sidenav-private.component';
import { AppRoutingModule } from './/app-routing.module';
import { EbooksComponent } from './ebooks/ebooks.component';
import { EbookDetailComponent } from './ebook-detail/ebook-detail.component';
import { LoansComponent } from './loans/loans.component';
import { ReviewComponent } from './review/review.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    NavigationComponent,
    SidenavComponent,
    LoginComponent,
    RegistrationComponent,
    SidenavPrivateComponent,
    EbooksComponent,
    EbookDetailComponent,
    LoansComponent,
    ReviewComponent,
    MyReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [
    NewsletterService,
    MessageService,
    AuthenticationService,
    HttpHeadersService,
    EbookService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
