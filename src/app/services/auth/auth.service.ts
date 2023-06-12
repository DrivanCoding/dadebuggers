import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../../interfaces/auth/user';
import * as firebase from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  async signUp(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }
  async signIn(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }
  getMe(): Observable<any> {
    return this.auth.authState;
  }
}