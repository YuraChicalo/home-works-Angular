import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com'

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url + '/users')
  }
}
