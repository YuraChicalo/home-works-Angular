import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post:IPost
  constructor() { }

  ngOnInit(): void {
  }

}