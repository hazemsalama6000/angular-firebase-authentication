import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth/services/auth.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(public authService: authService, private router: Router) {}

  SignOut() {
    this.authService.sinOut().subscribe(() => {
      this.router.navigate(['auth/login']);
    });
  }
}
