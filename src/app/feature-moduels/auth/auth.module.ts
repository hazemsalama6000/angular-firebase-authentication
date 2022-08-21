import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations:[LoginComponent,RegisterComponent],
  imports: [authRoutingModule,FormsModule,ReactiveFormsModule],
})
export class AuthModule {}
