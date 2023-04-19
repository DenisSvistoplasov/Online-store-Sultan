import { fixNumber } from "../src/utils/fixNumber";

describe('fixNumber', () => {
  it('Dot is replaced with comma', () => {
    expect(fixNumber(1.1)).toBe('1,1');
    expect(fixNumber(.2)).toBe('0,2');
  });
  it('Not greater than 2 digits after comma', () => {
    expect(fixNumber(1.1111)).toBe('1,11');
    expect(fixNumber(1.1)).toBe('1,1');
  });
})