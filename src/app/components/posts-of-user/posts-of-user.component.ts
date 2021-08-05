import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { IPost } from 'src/app/models/post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.scss']
})
export class PostsOfUserComponent implements OnInit {
  post:IPost[]

  constructor(private postService:PostService, private activatedroute:ActivatedRoute) {
    this.activatedroute.params.subscribe(value=> {
      this.postService.getUserPosts(value.id).subscribe(value=>{
        this.post = value;
        console.log(this.post)
      })
    })
  }

  ngOnInit(): void {
  }

}
