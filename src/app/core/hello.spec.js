'use strict';
var hello_service_1 = require("./hello.service");
var hello_component_1 = require("./hello.component");
describe('HelloService', function () {
    it('should do something', function () {
        var service = new hello_service_1.HelloService();
        var component = new hello_component_1.HelloComponent(service);
        expect(component.getWelcomeMessage()).toBe('Hello!');
    });
});
describe('A spy', function () {
    var foo = null;
    var bar = null;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return 50;
            }
        };
        spyOn(foo, 'setBar');
        spyOn(foo, 'getBar').and.returnValue(100);
        foo.setBar(123);
        foo.setBar(456, 'another param');
    });
    it('returns set value', function () {
        expect(foo.getBar()).toEqual(100);
    });
    it('tracks that the spy was called', function () {
        expect(foo.setBar).toHaveBeenCalled();
    });
    it('tracks all the arguments of its calls', function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });
    it('stops all execution on a function', function () {
        expect(bar).toBeNull();
    });
});
//# sourceMappingURL=hello.spec.js.map