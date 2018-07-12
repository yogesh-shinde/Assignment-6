import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './my-dir.directive';
import { MyDir1Directive } from './my-dir1.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    MyDir1Directive,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
