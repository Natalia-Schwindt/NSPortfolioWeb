import { Component, OnInit } from '@angular/core';
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
        this.router.navigate(['./app.component.html'])
      }
    });
    }
  }
