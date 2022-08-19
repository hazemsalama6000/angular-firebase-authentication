import { Routes } from '@angular/router';

export const childLayout: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((a) => a.chatModule),
  },
];
