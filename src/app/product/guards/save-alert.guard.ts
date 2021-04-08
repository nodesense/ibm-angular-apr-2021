// save-alert.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const isDirty = component.productForm.dirty;

      if (isDirty) {
        const result = window.confirm("Data changed, want to leave the page?");
        return result;
      }

      return true; 
  }
  
}
