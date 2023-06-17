import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit{

  //public usuario: Usuario;

  constructor( private authService: AuthService,
              private router:Router) {
    //this.usuario = usuarioService.usuario || JSON.parse(localStorage.getItem('usuario'));
  }
  ngOnInit(): void {
    //this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  

  logout() {
      this.authService.logout();
      this.router.navigateByUrl("/auth/login")
  }


}
