'use strict';
var hello_service_1 = require("./hello.service");
var hello_component_1 = require("./hello.component");
describe('scope', function () {
    it('spec', function () {
        var service = new hello_service_1.HelloService();
        spyOn(service, 'getWelcomeMessage').and.returnValue('hwwo!');
        var component = new hello_component_1.HelloComponent(service);
        expect(component.getWelcomeMessage()).toBe('hwwo!');
    });
});
//# sourceMappingURL=hello.component.spec.js.map