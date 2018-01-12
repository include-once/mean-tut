import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyStoreService } from './my-store.service';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsModule } from './posts/posts.module';


const ROUTES = [{
  path: '',
  component: HomeComponent
},{
  path: 'authors',
  component: AuthorsComponent
},{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    AuthorsComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    PostsModule
  ],
  providers: [
    MyStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
