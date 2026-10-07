/* 
let valor1 = prompt("Por favor, digite o primeiro número para fazermos uma equação: ");
let valor2 =  prompt("Por favor, digite o segundo número para fazermos uma equação: ");
let equacao =  prompt("Por favor, digite o qual o tipo de equação (-, + , *, /) ");
console.log(fazerEquacoes(valor1,valor2,equacao)); 
 */
// const nome= "Nomezinho"; não pode ser reatribuída
// let contador= 0; - o valor pode ser alterado
// var antigo= "evite"; forma antiga

var variavelTexto = "valor de outra variavel";
var variavelNumero = "1980";

console.log(variavelNumero);
console.log(variavelTexto);

const texto = "Pense em um texto lindo aqui";
const num = 42;
const ativo = true;

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno = "Luiz Gustavo ";

const conceito1T = 3.1;
const conceito2T = 7.8;
const conceito3T = 9.1;

const media = (conceito1T + conceito2T + conceito3T) / 3;

const resultado = media >= 7 ? "Aprovado" : "Reprovado";

const textoAprovacao = `O ${aluno} obteve a média ${media.toFixed(2)} e foi ${resultado}`;
console.log(textoAprovacao);

const div = document.getElementById("saida");
div.textContent = textoAprovacao;
div.style.color = "white";

const teste = document.getElementById("teste");
teste.textContent = texto;
