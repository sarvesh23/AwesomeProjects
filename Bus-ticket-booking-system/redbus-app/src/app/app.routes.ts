import { Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignUpPageComponent } from    './component/sign-up-page/sign-up-page.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LoginPageComponent},
    {path:"signUp", component:SignUpPageComponent},
    {path:"home", component:HomeComponent},
  ];
