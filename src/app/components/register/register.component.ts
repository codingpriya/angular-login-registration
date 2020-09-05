import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConstants } from "../../constants/field-constants";
import { User } from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isPasswordMatch: boolean;
  registerValue: User;
  data = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this._formBuilder.group({
        email: ['', {
            validators: [
                Validators.required,
                Validators.pattern(FieldConstants.EMAIL)
            ]
        }],
        password: ['', {
            validators: [
                Validators.required,
                Validators.minLength(6)
            ]
        }],
        confirmPassword: ['', {
            validators: [
                Validators.required,
                Validators.minLength(6)
            ]
        }],
    });
  }
  
  checkPasswords(form: FormGroup) {
      if (form) {
          let pass = form.controls.password.value;
          let confirmPass = form.controls.confirmPassword.value;
          this.isPasswordMatch = (pass === confirmPass) ? true : false;
      }
  }

  submit(){
    if(this.registerForm.valid){
        this.registerValue = this.registerForm.value;
        this.data.push(this.registerValue);
    }
  }

}