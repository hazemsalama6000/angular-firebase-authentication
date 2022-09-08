import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISignInCredential } from '../../models/ISignInCredential.interface';
import { authService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  SignInForm: FormGroup = this.fb.group({
    email: [],
    password: [],
  });

  constructor(
    private authService: authService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {}

  SignIn(model: ISignInCredential) {
    this.authService.signIn(model).subscribe(() => {
      this.route.navigate(['layout/chat']);
    });
  }
}
