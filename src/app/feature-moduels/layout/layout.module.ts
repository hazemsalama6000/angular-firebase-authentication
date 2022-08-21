import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRouteModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [LayoutRouteModule,CommonModule],
})
export class LayoutModule {}
