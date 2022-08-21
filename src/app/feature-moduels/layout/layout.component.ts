import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { authService } from '../auth/services/auth.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent {
  constructor(private authService:authService){

  }
}
