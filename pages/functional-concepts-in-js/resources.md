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

Uma **função de ordem superior** (high order function) é uma função que recebe uma função como argumento ou que retorna uma função. Em Javascript é bem comum utilizarmos dessa funcionalidade, seja utilizando Callbacks ou em funções como map, filter e reduce. 

O exemplo abaixo é do `map()`. O map é uma função disponivel em Arrays, que percorre todos os elementos do vetor aplicando a função que foi passada. Por fim ela retorna uma novo Array do resultado.

```javascript
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => {
  return num * 2;
});

// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```
 
## Lazy Evaluation

Em teoria de Linguagens de Programação, Lazy Evalutation é uma estratégia de processamento que atrasa a interpreção de uma expressão até que o valor seja necessário. Essa estratégia também ajuda a evitar repetidos processamentos. 

Alguns benefícios do lazy evaluations são:
- Definir estruturas de controle de fluxo como abstração no lugar das primitivas;
- Definir estruturas de dados possivelmente infinitas.
- Ganho de performance ao evitar processamentos desnecessários. 

Exemplo de Lazy Evaluation:

```javascript
function createLazy(array) {
  const obj = {};
  let fns = [];
  let takeCount = Infinity;

  obj.filter = function(predicate) {
    fns = fns.concat({filter: predicate});
    return obj;
  };

  obj.map = function(iterator) {
    fns = fns.concat({map: iterator});
    return obj;
  };

  obj.take = function(x) {
    if (x < takeCount) {
      takeCount = x;
    }
    return obj;
  };

  obj.value = function() {
    let results = [];

    const hash = {
      filter: function(predicate, value) {
        return predicate(value);
      },
      map: function(iterator, value) {
        return iterator(value);
      }
    };

    let el, op, cb, result;
    for (let i = 0; i < array.length && results.length < takeCount; i += 1) {
      el = array[i];
      for (let j = 0; j < fns.length; j += 1) {
        op = Object.keys(fns[j])[0];
        cb = fns[j][op];
        if (op === 'filter') {
          result = hash[op](cb, el);
          if (result) {
            continue;
          }
          break;
        }
        else if (op === 'map') {
          result = hash[op](cb, el);
          results = results.concat(result);
        }
      }
    }
 
    return results;
  };
 
  return obj;
}

// ============================================ //

const array = [
 1, 2, 3, 4, 5,
 6, 7, 8, 9, 10,
 11,12,13,14,15,
 16,17,18,19,20
];

const results = createLazy(array)
 .filter(x => x % 2 === 0)
 .map(x => x * x)
 .take(5);

results.value();
// => [4, 16, 36, 64, 100]
```

## Closures

Uma closure é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada. 

```javascript
function saveOutput(func, magicWord) {
	let data = {};
  
  function innerFunction(num) {
		if(num === magicWord) return data;
    return data[num] = func(num);
  }
  
  return innerFunction;
}

const multiplyBy2 = (num) => { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

console.log(multBy2AndLog(2)); // => imprime 4
console.log(multBy2AndLog(9)); // => imprime 18
console.log(multBy2AndLog('boo')); // => imprime { 2: 4, 9: 18 }
```

## Currying

