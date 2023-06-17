import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/users.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario!:String;

  public baseUrl = environment.baseUrl;

  constructor(
    private http:HttpClient,
    private router:Router
  ) {
    this.usuario = localStorage.getItem('usuario') || "";
  }

  login(user:any){

    localStorage.setItem('usuario',user);
      
  }

  logout(){
    localStorage.removeItem('usuario');
  }

  isAutenticated(){
    if(localStorage.getItem('usuario') == null){
      return false;
    }

    return true;
  }


}
