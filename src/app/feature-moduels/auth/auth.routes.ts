import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const authRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent,...canActivate(()=>redirectLoggedInTo(['layout/chat'])) },
  { path: 'register', component: RegisterComponent,...canActivate(()=>redirectLoggedInTo(['layout/chat'])) },
];
