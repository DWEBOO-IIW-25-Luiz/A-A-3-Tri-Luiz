const div = document.getElementById("saida");

const nome = "Luiz Gustavo Castro Neves";
const data_nascimento = 2010;
const anoAtual= 2026;
const cidade = "Assis Chateaubriand";

const idade = anoAtual - data_nascimento;

const texto = `O ${nome}, mora em ${cidade} e tem ${idade} anos`;

console.log(texto);
div.textContent = texto;
