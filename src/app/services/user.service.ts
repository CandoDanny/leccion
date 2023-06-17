import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public remoteUrl = environment.remoteUrl;
  public baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get<any>(`${this.remoteUrl}`);
  }

  getUsersBase(){
    return this.http.get<any>(`${this.baseUrl}/user/all`);
  }

  registerUsers(users:User[]){
    return this.http.post(`${this.baseUrl}/user/create`, users);
  }

  updateUser(user:User){
    return this.http.post(`${this.baseUrl}/user/update`, user);
  }

  deleteUser(user:User){
    return this.http.post(`${this.baseUrl}/user/delete`, user);
  }

}
