//Hoisting -> içamento = o código percebe que há variáveis no decorrer do código, evitando erros, a variável será definida como undefined

      // As variáveis devem ser declaras logo de inicio

console.log(sobrenome);


var nome = null;
var sobrenome; //undefined = sem valor

console.log(nome);
console.log(sobrenome);

nome = "Madu";

console.log(nome);