import { Favorite } from './favorite';

describe('Favorite', () => {
  it('should create an instance', () => {
    expect(new Favorite(1, "p1")).toBeTruthy();
  });
});
