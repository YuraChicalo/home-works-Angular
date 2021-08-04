import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.scss']
})
export class PostsOfUserComponent implements OnInit {

  constructor(private router:Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state)
  }

  ngOnInit(): void {
  }

}
