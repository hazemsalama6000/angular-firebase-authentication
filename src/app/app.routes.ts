import { Routes } from "@angular/router";


export const routes:Routes=[
  {path:'',redirectTo:'auth/login',pathMatch:'full'},
  {path:'auth',loadChildren : ()=> import('./feature-moduels/auth/auth.module').then(a=>a.AuthModule)},
  {path:'layout',loadChildren:()=>import('./feature-moduels/layout/layout.module').then(a=>a.LayoutModule)}
];
