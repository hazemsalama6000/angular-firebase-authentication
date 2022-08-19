import { NgModule } from '@angular/core';
import { authRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations:[LoginComponent,RegisterComponent],
  imports: [authRoutingModule],
})
export class AuthModule {}
