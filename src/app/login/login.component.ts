import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
    username: string = "";
    password: string = "";
    loginerror: string = "";
    loggedIn: boolean = false;
    loginButtonText = 'Login';

    constructor(private router:Router, private LoginService:LoginService, private route: ActivatedRoute) {}
  ngOnInit(): void {}
  
    login(): void {
      console.log(this.username);
      console.log(this.password);

    const User = {username: this.username, password: this.password};

    this.LoginService.login(User).subscribe(data => {
      console.log(data);
      if (data==null) 
        this.loginerror = "Error!";
      else {
        this.loginerror = "";
        this.LoginService.setToken(data.id);
        this.loggedIn = true;
        //this.router.navigate(['./src/index.html']);
        this.loginButtonText = 'Logout';
      }
    });
    }
  }

  /*function Login_logout() {
    const login = document.getElementById('log');
    if (log.style.display === 'none') {
      log.style.display = 'block';
    } else {
      log.style.display = 'none';
    }
  }  */
