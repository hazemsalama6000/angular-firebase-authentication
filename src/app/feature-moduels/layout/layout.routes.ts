import { Routes } from "@angular/router";
import { childLayout } from "./child-routes.routes";
import { LayoutComponent } from "./layout.component";

export const layoutRoutes : Routes = [
  {path:'',component:LayoutComponent,children:childLayout}
];
