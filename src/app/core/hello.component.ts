import { Component } from '@angular/core';
import { HelloService } from './hello.service';
import {Http, Response} from '@angular/http';
import { Foo } from './foo.service';

@Component({
  selector: 'hello',
  providers: [HelloService, Foo ],
  template: `<h1>{{getWelcomeMessage()}}</h1>`
})

export class HelloComponent {
  static $inject = ['Foo'];
  constructor(foo: Foo) {

  }
  public getWelcomeMessage(): String {
    return "foo";
    //return this.helloService.getWelcomeMessage();
  }
};

