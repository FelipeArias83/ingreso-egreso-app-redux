import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { dashboardRoutes } from './auth/dashboard/dashboard.routes';
import { LoginComponent } from './auth/login/login.component';
import { RegiterComponent } from './regiter/regiter.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegiterComponent},
{
  path: '', component: DashboardComponent,
  children: dashboardRoutes
  
},
{path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
