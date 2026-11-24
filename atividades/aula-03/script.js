/* let num = 0;
num += 5;
console.log(`Esse é o valor do número agora : ${num}`);
num -= 1;
console.log(`Esse é o valor do número agora : ${num}`);
num *= 2;
console.log(`Esse é o valor do número agora : ${num}`);
num /= 2;
console.log(`Esse é o valor do número agora : ${num}`);
num += 1;
console.log(`Esse é o valor do número agora : ${num}`);
num -= 1;
console.log(`Esse é o valor do número agora : ${num}`);

let msg="lista de compras : ";
msg+=' \n\n Alface';
msg+='\n alcool';
msg+='\n fósforo';
msg+='\n abraçadeira';
msg+='\n fita silver tape';
msg+='\n ronaldo';

console.log(msg);

//Operadores comparação < > =< >= 


const nota=67;

const aprovado = nota>= 60;

console.log(aprovado);


console.log(5==='5');
console.log(5=='5');
console.log(0=='');
console.log(0==false);
 
Operadores lógicos
&&
||
! 


let media = 8.0;
let frequencia = 80;
let aprovadoPorNota = media >= 6;
let aprovadoPorFrequencia = frequencia >= 6;
const aprovado = aprovadoPorFrequencia && aprovadoPorNota;

console.log(`Aprovado ? Veremos : ${aprovado}`);

let media = 5.0;
let frequencia = 80;
if (media >= 6 && frequencia >= 75) {console.log("Aprovado!");}else  { console.log("Desaprovado!");}

//verificando intervalos
const num - 87;
console.log(num>= 0 && num <= 100)


// Fucntions matematicas - Objeto MAth
round(x) - arrrendoda par ao inteiro mais próximo
floor(x) - arredonda para baixo
ceil(x) - arredonda para cima
trunc(x) - descartar a parte decimal
abs(x) - valor absoluto (sem sinal)
sqrt(x) - raiz quadrada 
max(x) - maior valor
min(x) - menor valor
randon(x) - número aleatório entre 0 (incluído) e 1 (excluído)
PI - número pi
 */

const dado= Math.floor(Math.random() * 6) +1;
console.log(dado)