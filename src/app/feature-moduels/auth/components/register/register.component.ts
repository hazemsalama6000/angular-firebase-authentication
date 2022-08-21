import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISignupCredentials } from '../../models/ISignupCredentials.interface';
import { authService } from '../../services/auth.service';

@Component({
  selector: '',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  Registerform: FormGroup = this.fb.group({
    email: [],
    password: [],
    displayName: [],
  });

  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private router: Router
  ) {}

  signUpt(model: ISignupCredentials) {
    this.authService.signup(model).subscribe(
      () => {this.router.navigate(['layout'])},
      (error) => {console.log(error)}
    );
  }
}
