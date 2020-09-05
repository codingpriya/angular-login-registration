import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'login'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {title: 'register'}
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'dashboard' },
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
