import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConstants } from "../../constants/field-constants";
import { User } from "../../models/user";
import { UserService } from "src/app/services/user.service";
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userInformation: any = [];

  constructor(private _formBuilder: FormBuilder,
  private _userService: UserService,
  private _router: Router,
  private httpClient: HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = this._formBuilder.group({
        email: ['', {
            validators: [
                Validators.required
            ]
        }],
        password: ['', {
            validators: [
                Validators.required
            ]
        }]
    });
  }
  
  submit(){
    let login = this.loginForm.value;
    this.httpClient.get("assets/user-info.json").subscribe(data => {
      Object.assign(data).filter(res => {
          if(res.email === login.email && res.password === login.password){
            this.success(login);
          }
      });
    });
	}

  success(data){
			localStorage.setItem('userInfo', JSON.stringify(data));
			this._router.navigate(['/dashboard']);
	}
}