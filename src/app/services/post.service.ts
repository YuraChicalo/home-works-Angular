import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com'

  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/posts')
  }

  getUserPosts(id: number):Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/users/'+id+'/posts')
  }

}
