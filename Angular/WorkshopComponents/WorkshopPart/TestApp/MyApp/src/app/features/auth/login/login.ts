import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../core/services';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, Form, FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {

  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(?=.{6,})[a-zA-Z][a-zA-Z0-9._-]*@gmail\.(com|bg)$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

    ngAfterViewInit(): void {
      console.dir(this.loginForm);
    }
  
    get email(): AbstractControl<any, any> | null {
      return this.loginForm.get('email');
    }
  
    get password(): AbstractControl<any, any> | null {
      return this.loginForm.get('password');
    }
  
    get isEmailValid(): boolean {
      return this.email?.invalid && (this.email?.dirty || this.email?.touched) || false;
    }
  
    get isPasswordValid(): boolean {
      return this.password?.invalid && (this.password?.dirty || this.password?.touched) || false;
    }
  
    get emailErrorMessage(): string {
      if (this.email?.errors?.['required']) {
        return 'Email is required!';
      }
  
      if (this.email?.errors?.['pattern']) {
        return 'Email is not valid!';
      }
  
      return '';
    }
  
    get passwordErrorMessage(): string {
      if (this.password?.errors?.['required']) {
        return 'Password is required!';
      }
  
      if (this.password?.errors?.['minlength']) {
        return 'Password must be at least 5 characters!';
      }
  
      return '';
    }
  
    onSubmit(): void {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
  
        const response = this.authService.login(email, password);
  
        if (response === true) {
          this.router.navigate(['/home']);
        } else {
          this.markFormGroupTouched();
        }
      }
    }
  
    private markFormGroupTouched(): void {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      })
    }
  }
  
  
  export function emailValidator(emailControl: AbstractControl): ValidationErrors | null {
    const emailRegex = /^(?=.{6,})[a-zA-Z][a-zA-Z0-9._-]*@gmail\.(com|bg)$/;
  
    const email = emailControl.value;
  
    if (email && !emailRegex.test(email)) {
      return { emailValidator: true }
    }
  
    return null;
}
