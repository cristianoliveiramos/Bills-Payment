import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide: boolean = true

  constructor(private formBuilder: FormBuilder) {}

  updateErrorMessage() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  hidePassword() {
    this.hide ? this.hide = false : this.hide = true
    return this.hide
  }

}
