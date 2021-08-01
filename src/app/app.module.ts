import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

let router: Routes = [
  {path: 'users' , component: UsersComponent,children:[
      {path: ':id/posts', component: UserPostsComponent}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserPostsComponent
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
