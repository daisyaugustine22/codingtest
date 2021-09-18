import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  @Output() formData = new EventEmitter();
  form: FormGroup;
  constructor(private service: LoginService, private fb: FormBuilder) {
    this.form = this.fb.group({
      gender: [null, [Validators.required]],
      name: this.fb.group({
        title: [null, [Validators.required]],
        first: [null, [Validators.required]],
        last: [null, [Validators.required]],
      }),
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      phone: [null, []]
    });
  }

  ngOnInit(): void {
  }
  submit() {
    let formValue = this.form.getRawValue();
    this.formData.emit({ formValue: formValue, eventType: 'submitUser' });
  }

}
