import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

import { CartSummaryComponent } from './cart-summary.component';

fdescribe('CartSummaryComponent', () => {
  let component: CartSummaryComponent;
  let fixture: ComponentFixture<CartSummaryComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryComponent);
    component = fixture.componentInstance;
    // we got reference of the service injected into the cart component
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(component.totalAmount).toEqual(0)

    cartService.addItem(new CartItem(1, "p1", 100, 1))
    expect(component.totalAmount).toEqual(100)
  });
});
