'use strict';

import { HelloService }  from './hello.service';
import { HelloComponent }  from './hello.component';

describe('scope', () => {
  it('spec', () => {
    const service = new HelloService();
    spyOn(service, 'getWelcomeMessage').and.returnValue('hwwo!');
    const component = new HelloComponent(service);

    expect(component.getWelcomeMessage()).toBe('hwwo!');
  });
});
