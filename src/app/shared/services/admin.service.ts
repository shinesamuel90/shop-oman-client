import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:57361/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords : this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, {validator: this.comparePasswords})

  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // PasswordMismatch
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      // tslint:disable-next-line: triple-equals
      if (fb.get('Password').value != confirmPswrdCtrl.value) {
      confirmPswrdCtrl.setErrors({passwordMismatch: true});
      } else {
      confirmPswrdCtrl.setErrors(null);
      }
    }
  }


  roleMatch(allowedRoles: any[]): boolean {
    let isMatch = false;
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    const userRole = payLoad.role;
    allowedRoles.forEach((element: any) => {
      // tslint:disable-next-line: triple-equals
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  register() {
    const body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
      }

      login(formData) {
        return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
      }

      getUserProfile() {
        // var tokenHeader =  new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')});
       return this.http.get(this.BaseURI + '/UserProfile');

      }
}
