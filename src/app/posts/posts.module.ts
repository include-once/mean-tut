import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'posts',
        component: PostsComponent
      },{
        path: 'posts/:id',
        component: PostComponent
      }
    ])
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }
