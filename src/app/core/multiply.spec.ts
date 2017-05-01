import { Math } from './multiply';

describe('multiply method', () => {
  it('multiplies 2 numbers', () => {
    let math = new Math();
    expect(math.multiply(2, 5)).toBe(10);
  });
});