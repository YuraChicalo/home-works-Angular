import {Component, OnInit} from '@angular/core';
import {PostOfUserService} from "../../services/postOfUser.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../modules/IPost";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts:IPost[]

  constructor(private PostOfUserService: PostOfUserService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.PostOfUserService.getPostOfUser(value.id).subscribe(value => {
        this.posts = value;
      })
    })
  }

  ngOnInit(): void {

  }

}
