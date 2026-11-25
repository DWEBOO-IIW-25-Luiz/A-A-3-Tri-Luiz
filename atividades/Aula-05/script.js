/* /* //exemplo1
let contador = 0;
while (contador <= 22) {
 contador++;
  console.log(`O número vale : ${contador}`);
   
}
console.log("\nChegou ao fim.");
 
//ex 2
let senha=prompt("Senha :");
while (senha !== 'ifpr') {
    console.error("Senha Incorreta !");
    senha=prompt("Senha :");
}
console.log("Acesso liberado !")
 */
//ex5
/* let contador = 0;
while (contador <= 22) {
  contador++;
  console.log(`O número vale : ${contador}`);
}
  ex 777
console.log("\nChegou ao fim.");
const frutas = [
  "Abacate",
  "Abacaxi",
  "Abiu",
  "Abricó",
  "Abrunho",
  "Açaí",
  "Acerola",
  "Ackee",
  "Ameixa",
  "Amêndoa",
  "Amora",
  "Ananás",
  "Araçá",
  "Arando",
  "Araticum",
  "Ata",
  "Atemoia",
  "Avelã",
  "Babaçu",
  "Bacaba",
  "Bacuri",
  "Banana",
  "Baru",
  "Bergamota",
  "Biribá",
  "Buriti",
  "Butiá",
  "Cabeludinha",
  "Cacau",
  "Cagaita",
  "Cajá",
  "Cajá-manga",
  "Caju",
  "Calabura",
  "Camapu",
  "Cambuci",
  "Cambucá",
  "Camu-camu",
  "Caqui",
  "Carambola",
  "Castanha",
  "Cereja",
  "Champedaque",
  "Cherimoia",
  "Ciriguela",
  "Coco",
  "Cranberry",
  "Cupuaçu",
  "Damasco",
  "Dovyalis",
  "Durião",
  "Embaúba",
  "Escropari",
  "Esfregadinha",
  "Feijoa",
  "Figo",
  "Framboesa",
  "Fruta-do-conde",
  "Fruta-pão",
  "Goiaba",
  "Granadilla",
  "Graviola",
  "Groselha",
  "Grumixama",
  "Guabiju",
  "Guabiroba",
  "Guaraná",
  "Heisteria",
  "Himbeere",
  "Ilama",
  "Ingá",
  "Jabuticaba",
  "Jaca",
  "Jambo",
  "Jambolão",
  "Jaracatiá",
  "Jatobá",
  "Jenipapo",
  "Jerivá",
  "Jujuba",
  "Kino",
  "Kiwi",
  "Kumquat",
  "Laranja",
  "Lichia",
  "Lima",
  "Limão",
  "Longan",
  "Louro",
  "Lucuma",
  "Mabolo",
  "Maçã",
  "Macadâmia",
  "Macaúba",
  "Mamão",
  "Mamey",
  "Maná-cubiu",
  "Manga",
  "Mangaba",
  "Mangostão",
  "Maracujá",
  "Marang",
  "Marmelo",
  "Marolo",
  "Massaranduba",
  "Maxixe",
  "Melancia",
  "Melão",
  "Mexerica",
  "Mirtilo",
  "Morango",
  "Murici",
  "Naranjilla",
  "Nectarina",
  "Nêspera",
  "Noni",
  "Noz",
  "Noz-pecã",
  "Oiti",
  "Oliva",
  "Pequi",
  "Pera",
  "Pêssego",
  "Physalis",
  "Pinha",
  "Pinhão",
  "Pistache",
  "Pitanga",
  "Pitaya",
  "Pitomba",
  "Pulasan",
  "Pupunha",
  "Quina",
  "Rambutão",
  "Romã",
  "Salak",
  "Santol",
  "Sapoti",
  "Sapucaia",
  "Seriguela",
  "Tamarindo",
  "Tangerina",
  "Taperebá",
  "Tarumã",
  "Tomate",
  "Toranja",
  "Tucumã",
  "Umbu",
  "Uva",
  "Uvaia",
  "Veludo",
  "Xixá",
  "Yuzu",
  "Zimbro",
];

for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  console.log(fruta);
}


for (let i = 110; i >=0; i-=2) {
    console.log('Numero vale :', i)
    
}

//ex9
let nota;
do {
  nota = Number(prompt("DIGITE UM NÚMERO DE 1 a 10 : "));
} while (Number.isNaN(nota) || nota < 0 || nota > 10);
console.log(`${nota}- número válido`);

//ex10
for (let i = 0; i <=1000; i++) {
 if (i%7===0 && i%2 === 0) {
   console.log(`${i} é múltiplo de sete, e  par!`)
 }
} 
let i=0
while (i<=1000) {
   if (i%7===0 && i%2 === 0) {
   console.log(`${i} é múltiplo de sete, e  par!`)
 }
  i++
}
  //EX11
let total=0;
while (true) {
  const entrada=prompt('Valor do item (ou "fim" para encerrar : )');
  if (entrada === 'fim' || entrada === null) {
    break;
  }
  total+=Number(entrada);
}
console.log('Total da compra', total.toFixed(2));

//EX 12
for(let tabuada=1;tabuada<=10;tabuada++){
  console.log(`------------------Tabuada do número ${tabuada} : -------------------------`);
  for(let x=1; x<=10; x++ ){
    console.log(`${tabuada} X ${x}=${tabuada*x}`)
  }

}

// exemplo 19
for (let linha = 0; linha < 10; linha++) {
  let desenho = "\n";
  for (let col = 0; col < linha; col++) {
    desenho += "*";
  }
  console.log(desenho);
}

//exercio 937
const qtdAluno = Number(prompt("Quanto alunos em sala de aula?"));
let soma = 0;
let maior = -Infinity;
let menor = Infinity;
let aprovados = 0;
for (let j = 1; j < qtdAluno; j++) {
  const nota = Number(prompt(`Qual foi a nota do aluno ${j}?`));

  soma += nota;
  if (nota > maior) maior = nota;
  if (nota < menor) menor = nota;
  if (nota >= 60) aprovados++;
}
console.log(`Média Geral : ${(soma / qtdAluno).toFixed(1)}`);
console.log(`Maior nota : ${maior} || Menor nota :${menor}`);
console.log(`Número de aprovados : ${aprovados}`);
   */
//exercicio
alert("Jogo do Adivinho dos números 1 a 10");
 let tentativas=Number(prompt("Quantas tentivas você quer ?  "));
 let i=1;
 let valorUsuario=Number(prompt("Insira o número de 1 a 10 : "));


let num=Math.floor(Math.random() *10) +1;
while(valorUsuario !== num && tentativas > i ) {

  valorUsuario=Number(prompt("Tente novamente, 1 a 10 : "));
    i++;
}
if (valorUsuario=== num) {
  alert(`Parabéns vc acerto o numero : ${num}. Em ${i} tentativas!`);
}else{
  alert(`Perdeu! era o número : ${num}`);
}