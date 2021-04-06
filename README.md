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