import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login() {
    return this.http.get('/assets/data/login.json')
      .pipe(map(data => data as Array<any>));
  }

  getAllUsers() {
    return this.http.get('https://randomuser.me/api/0.8/?results=20');
  }
}
