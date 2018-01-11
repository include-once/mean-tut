import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyStoreService } from './my-store.service';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
