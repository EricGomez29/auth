import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email:string;
  public password:string;
  public name:string;
  public lastname:string;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitRegister() {
    this.auth.register(this.email, this.password, this.name, this.lastname)
      .then(auth => {
        this.router.navigate(['/home'])
      })
      .catch(err => console.log(err))
  }

}
