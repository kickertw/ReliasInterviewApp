import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService: LoginService;
  userName: string;
  usernameValid: boolean;

  constructor() {
    this.usernameValid = true;
   }

  ngOnInit() {
  }

  checkUsername() {
    // call login service to check this username exist in our DB
    this.loginService.checkUsername(this.userName);

    // Yes - return true
    // No - return false
    return true;
  }

  loginClicked() {

    this.usernameValid = this.checkUsername()

    if (this.usernameValid)
    {
      // if true redirect to home page
    }
      // if false give error message and do not redirect
  }

}
