import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';

const router:Routes = [
  {path: 'users', component: UsersComponent,
    children:[
      {path: ':id', component: UserDetailsComponent},
      {path: ':id/posts', component: PostsOfUserComponent}
    ]},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    UserDetailsComponent,
    PostsOfUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
