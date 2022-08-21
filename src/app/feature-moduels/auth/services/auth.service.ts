import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { from } from 'rxjs';
import { ISignupCredentials } from '../models/ISignupCredentials.interface';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class authService {
  islogging$ = authState(this.auth);

  constructor(private auth: Auth) {}
  
  signup({ displayName, email, password }: ISignupCredentials) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap( ( { user } )=> updateProfile(user,{displayName}) )
    );
  }

}
