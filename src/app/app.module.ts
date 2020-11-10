import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FindCarComponent } from './pages/find-car/find-car.component';
import { FindPassengerComponent } from './pages/find-passenger/find-passenger.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarPostingCardComponent } from './pages/find-car/car-posting-card/car-posting-card.component';
import { PassengerPostingCardComponent } from './pages/find-passenger/passenger-posting-card/passenger-posting-card.component';
import { SearchFormWelcomepageComponent } from './components/search-form-welcomepage/search-form-welcomepage.component';


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
    PassengerPostingCardComponent,
    SearchFormWelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
