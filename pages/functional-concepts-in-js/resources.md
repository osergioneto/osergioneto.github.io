# Conceitos de programação funcional em Javascript

As linguaguens atualmente tendem a misturar os paradigmas, pegando recursos que podem ser interessantes e adicionando à linguagem base. Em Javascript não poderia ser diferente, alguns recursos adicionados a linguagem foram retirados de linguagens funcionais. 

Não é de se estranhar já que o criador do Javascript, Brendan Eich queria fazer uma linguagem baseada em Scheme. 

## Índice

- [Funções puras](#funções-puras)
- [Funções de ordem superior](#funções-de-ordem-superior)
- [Lazy Evaluation](#lazy-evaluation)
- [Closures](#closures)
- [Currying](#currying)

## Funções Puras

De maneira direta, Funções Puras são funções que não dependem de outras funções e não alteram o estado da aplicação, fora do seu escopo. Elas não causam efeitos colaterais.

As funções puras sempre retornam o mesmo valor quando dados as mesmas entradas. A sua execução não depende do estado do sistema.


### Exemplo de Função Impura
```javascript
function impureAddToCart(cart, item, quantity) {
  cart.push({
    item,
    quantity
  });
  return cart;
};

const originalCart = [];
const cart = impureAddToCart(
  originalCart,
  {
     name: "Digital SLR Camera",
     price: '1495'
  },
  1
);

console.log("cart: ", cart); 
console.log("originalCart: ", originalCart);

/*
  "cart: ", [{
    item: {
      name: "Digital SLR Camera",
      price: "1495"
    },
    quantity: 1
  }]

  "originalCart: ", [{
    item: {
      name: "Digital SLR Camera",
      price: "1495"
    },
    quantity: 1
  }]
*/
```

### Exemplo de Função Pura
```javascript
function pureAddToCart(cart, item, quantity) {
	const newCart = [...cart];
  
  newCart.push({
    item,
    quantity
  });
  return newCart;
};

const originalCart = [];
const cart = pureAddToCart(
  originalCart,
  {
     name: "Digital SLR Camera",
     price: '1495'
  },
  1
);

console.log("cart: ", cart);
console.log("originalCart: ", originalCart);

/*
  "cart: ", [{
    item: {
      name: "Digital SLR Camera",
      price: "1495"
    },
    quantity: 1
  }]

  "originalCart: ", []
*/
```

## Funções de ordem superior
## Lazy Evaluation
## Closures
## Currying

