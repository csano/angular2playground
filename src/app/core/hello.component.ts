import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  providers: [HelloService],
  template: `<h1>{{getWelcomeMessage()}}</h1>`
})

export class HelloComponent {
  static $inject = ['HelloService'];
  constructor(private helloService: HelloService) {

  }
  public getWelcomeMessage(): String {
    return this.helloService.getWelcomeMessage();
  }
};
