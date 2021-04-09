# clone the code

```
git clone https://github.com/nodesense/ibm-angular-apr-2021

cd ibm-angular-apr-2021



npm install

ng serve

or 

npm start


```

# Product app

```
ng new product-app

cd product-app

ng serve

```

## add new components using angular cli

In VS Code, click on View Menu, then click Terminal menu item

```
ng generate component components/home

ng g c components/about

ng g c components/contact

ng g c components/header

ng g c components/footer


ng g c components/not-found

ng g c components/forbidden

```

## how to add a custom module
    How to use the componnets in the custom module

Go to View -> Terminal 

```
    ng g module  shared

    ng g c shared/components/address
    ng g c shared/components/page-like

    ng g interface shared/models/address
```

```
eagarly downloaded
    app module - application itself
    shared module - reusable component

lazily downloaded
    cart module - shopping cart
    product module - searhcing, listing editing products

auth module - authentication
```

```

ng g module cart

ng g c cart/components/cart

ng g c cart/components/cart-summary

ng g c cart/components/cart-list

ng g c cart/components/checkout

ng g class cart/models/cart-item

ng g service cart/services/cart
```


```
ng g module product


ng g c product/components/product-home
ng g c product/components/product-list
ng g c product/components/product-edit
ng g c product/components/product-search

ng g interface product/models/brand
ng g class product/models/product

ng g service product/services/product


ng g guard product/guards/save-alert
ng g guard product/guards/can-edit



```



```

ng g directive shared/directives/highlight

ng g pipe shared/pipes/sort
ng g pipe shared/pipes/filter

```





Cart is a page [add item, empty cart]

    cart-list component to list items in cart
    cart-summary - how many items, how much money

Checkout is another page with forms


## ngrx

npm install @ngrx/store


```
ng g module favorite

ng g c favorite/components/favorite

ng g class favorite/models/favorite

```


## ngrx

add two numbers 

we need two numbers  - input/parameters a, b, action with parameters

what is the action - add {a, b}

what is implementation = a + b [reducers, pure function]


ngrx - Functional Programming

// pure function
// given the same input, the function should return always same output
function add(state, value) {
    // immutable, input arg state is not changed
    return state + value; 
}

add(10, 2) // 12
add(10, 2) // 12
add(10, 2) // 12
add(20, 4) // 24

vs Traditional OOP

class Calc {
    int sum = 0;
    // impure function, given same input, it doesn't return same output
    int add(int value) {
        // mutable sum
        sum += value;
        return sum;
    }
}

calc = new Calc()

calc.add(10) // 10
calc.add(10) // 20
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)calc.add(10)
calc.add(10)calc.add(10)
calc.add(10)

```javascript
class Square {
    
    constructor() {
        this._side = 0
    }

    get side() {
        console.log('get size called')
        return this._side;
    }

    set side(value) {
        console.log('set size called', value)
        this._side = value
    }
}

let s = new Square()

console.log(s.side) / /calls get side()
s.side = 2; // calls setter
```




