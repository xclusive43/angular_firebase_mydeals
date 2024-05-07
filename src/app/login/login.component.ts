import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
value: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value); // Submit form data
      this.authService.signInWithEmailPassword({email: this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value }).then((res: any)=>{
        console.log(res)
      }).catch((err: any) => {
        console.log(err)
      });

    }
  }
  googleAuth() {
  this.authService.signInWithGoogle().then((res: any) => {
        console.log(res)
      }).catch((err: any) => {
        console.log(err)
      });
  }
}
