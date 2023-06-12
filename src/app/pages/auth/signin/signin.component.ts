import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/auth/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm = this.fb.group({
    email: [''],
    password: [''],
    rememberMe: ['']
  })
  constructor(public fb: FormBuilder, public auth: AuthService, public router: Router) { }
  signIn() {
    const user = this.signinForm.value;
    delete user.rememberMe;
    this.auth.signIn(user as User).then(() => {
      this.router.navigate(['/me']);
    }).catch((error) => {
      alert(error);
    });
  }
}