import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }
  getAllUsers() {
    return this.http.get('https://randomuser.me/api/0.8/?results=20');
  }
}
