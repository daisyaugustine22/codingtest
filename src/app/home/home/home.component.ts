import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  users: Array<any> = new Array<any>();
  addUser = false;
  @Input() userData;
  constructor(private service: HomeService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onUserAdd(event) {
    if (event && event.eventType === 'submitUser') {
      this.users.push({ user: event.formValue });
      this.addUser = false;
    }
  }

  getAllUsers() {
    var users = window.localStorage.getItem('users');
    if (users && users.length) {
      this.users = JSON.parse(users);
    }
  }
}
