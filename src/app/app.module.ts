import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyStoreService } from './my-store.service';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    PostsComponent,
    AuthorsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
        path: '',
        component: HomeComponent
    },{
        path: 'posts',
        component: PostsComponent
    }, {
      path: 'authors',
      component: AuthorsComponent
    },{
      path: '**',
      component: PageNotFoundComponent
    }
    ])
  ],
  providers: [
    MyStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
