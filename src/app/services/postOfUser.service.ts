import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../modules/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostOfUserService {
  private url = 'https://jsonplaceholder.typicode.com'

  constructor(private httpclient:HttpClient) { }

  getPostOfUser(id: number):Observable<IPost[]>{
    return this.httpclient.get<IPost[]>(this.url + '/users/' + id + '/posts')
  }
}
