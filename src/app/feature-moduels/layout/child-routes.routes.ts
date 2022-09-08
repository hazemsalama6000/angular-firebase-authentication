import { Routes } from '@angular/router';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
export const childLayout: Routes = [
  {
    path: 'chat',
    ...canActivate(()=>redirectUnauthorizedTo(['auth/login'])),
    loadChildren: () => import('./chat/chat.module').then((a) => a.chatModule),
  },
];
