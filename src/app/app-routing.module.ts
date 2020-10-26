import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindCarComponent } from './find-car/find-car.component';
import { FindPassengerComponent } from './find-passenger/find-passenger.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const mainAppRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'find-car', component: FindCarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'find-passenger', component: FindPassengerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(mainAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
