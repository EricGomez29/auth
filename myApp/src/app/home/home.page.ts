import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authService:AuthService, private router:Router) {}
  
  onLogout() {
    this.authService.logout();
  }

  onRedirect() {
    window.open('https://github.com/EricGomez29', '_blank')
  }
}
