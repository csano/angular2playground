'use strict';

import { HelloService }  from './hello.service';
import { HelloComponent }  from './hello.component';

describe('HelloService', () => {
  it('should do something', () => {
    const service = new HelloService();
    const component = new HelloComponent(service);

    expect(component.getWelcomeMessage()).toBe("Hello!");
  });
});
