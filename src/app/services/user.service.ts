import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  private apiUrl = "http://localhost:9000/api/Users";

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  //No s'utilitza però es pot fer servir per obtenir un usuari en concret a partir de la seva id
  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.apiUrl+"/"+id);
  }

  createUser2(credentials: { name: string; age: number; email: string }): Observable<any>
  {
    console.log("userData a enviar:", JSON.stringify(credentials, null, 2));
    return this.http.post(this.apiUrl, credentials);
  }
}
