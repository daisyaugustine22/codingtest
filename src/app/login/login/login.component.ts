import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router) {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    let loginData = this.form.getRawValue();
    this.loginService.login().subscribe((res: Array<any>) => {
      console.log('success login', res,);
      if (res && res.length && res.find(x => (x.username === loginData.username && x.password === loginData.password))) {
        this.loginService.getAllUsers()
          .subscribe((res: any) => {
            window.localStorage.setItem('users', JSON.stringify(res.results));
            this.router.navigate(['./home']);
          },
            err => {
              //  
            });
      }
    },
      err => {
        console.log('error login');
      });
    console.log('loginData', loginData);
  }
}
