import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyStoreService } from './my-store.service';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'posts',
      component: PostsComponent
    }])
  ],
  providers: [
    MyStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
