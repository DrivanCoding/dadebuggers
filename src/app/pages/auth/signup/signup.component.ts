import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidatePasswords } from 'src/app/validators/password.validator';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = this.fb.group({
    email: [''],
    password: [''],
    confirmPassword: [''],
  }, {
    validator: ValidatePasswords('password', 'confirmPassword')
  })
  constructor(public fb: FormBuilder, public auth: AuthService, public router: Router) { }
  signup() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      delete user.confirmPassword;
      this.auth.signUp(user).then(() => {
        this.router.navigate(['/signin']);
      })
    };
  }
}