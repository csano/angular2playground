import { NgModule }      from '@angular/core';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HelloComponent }  from './core/hello.component';
import { Foo }  from './core/foo.service';

@NgModule({
  imports:      [ BrowserModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
