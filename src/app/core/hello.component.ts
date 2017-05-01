import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  providers: [HelloService]
})

export class HelloComponent {
  static $inject = [HelloService];
  constructor(private helloService : HelloService) {

  }
  public getWelcomeMessage() : String {
    return this.helloService.getWelcomeMessage();
  }
};
