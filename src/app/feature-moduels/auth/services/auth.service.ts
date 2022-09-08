import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { from } from 'rxjs';
import { ISignupCredentials } from '../models/ISignupCredentials.interface';
import { switchMap } from 'rxjs/operators';
import { ISignInCredential } from '../models/ISignInCredential.interface';

@Injectable({ providedIn: 'root' })
export class authService {
  islogging$ = authState(this.auth);

  constructor(private auth: Auth) {}

  signup({ displayName, email, password }: ISignupCredentials) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap( ( { user } )=> updateProfile(user,{displayName}) )
    );
  }

  signIn({email,password}:ISignInCredential){
    return from(signInWithEmailAndPassword(this.auth,email,password));
  }

  sinOut(){
   return from(this.auth.signOut());
  }

}
