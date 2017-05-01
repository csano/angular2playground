"use strict";
var multiply_1 = require("./multiply");
describe('multiply method', function () {
    it('multiplies 2 numbers', function () {
        var math = new multiply_1.Math();
        expect(math.multiply(2, 5)).toBe(10);
    });
});
//# sourceMappingURL=multiply.spec.js.map