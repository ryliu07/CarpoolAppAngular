import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindCarComponent } from './pages/find-car/find-car.component';
import { FindPassengerComponent } from './pages/find-passenger/find-passenger.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


const mainAppRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'find-car', component: FindCarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'find-passenger', component: FindPassengerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(mainAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
