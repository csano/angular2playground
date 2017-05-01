'use strict';
var hello_service_1 = require("./hello.service");
var hello_component_1 = require("./hello.component");
describe('HelloService', function () {
    it('should do something', function () {
        var service = new hello_service_1.HelloService();
        var component = new hello_component_1.HelloComponent(service);
        expect(component.getWelcomeMessage()).toBe("Hello!");
    });
});
//# sourceMappingURL=hello.spec.js.map