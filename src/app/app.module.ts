import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindCarComponent } from './find-car/find-car.component';
import { FindPassengerComponent } from './find-passenger/find-passenger.component';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarPostingCardComponent } from './find-car/car-posting-card/car-posting-card.component';
import { PassengerPostingCardComponent } from './find-passenger/passenger-posting-card/passenger-posting-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindCarComponent,
    FindPassengerComponent,
    LoginComponent,
    WelcomePageComponent,
    PageNotFoundComponent,
    CarPostingCardComponent,
    PassengerPostingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
