import { CartItem } from './cart-item';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem(1, "p1", 100, 1)).toBeTruthy();
  });
});
