import { ParseSourceFile } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //https://github.com/canarysuser/sample-app-new.git

  navigator: Router = inject(Router);
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  service: AuthService = inject(AuthService);
  model: { email: string, password: string } = { email: '', password: '' };


  onSubmit() {
    this.model = {
      email: this.loginForm.controls["email"].value,
      password: this.loginForm.controls["password"].value
    }
    console.log(this.model)
    this.service.authenticate(this.model.email, this.model.password)
      .subscribe((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.userId.toString());
          localStorage.setItem('userName', response.userName);
          localStorage.setItem('roleName', response.roleName);
          localStorage.setItem('expires', response.expires);
          this.navigator.navigate(['/admin/list']);
        }
        this.service.isAuthenticated = true;
      });
  }
}
