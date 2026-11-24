/* /* const temp = Number(prompt("Temperatura agora em (ºC) : "));
if (temp > 28) {
  console.log("Muito quente para mim");
} else console.log("Temperatura Boa");

//exercício 01
alert("ME FORNEÇA OS SEUS 3 CONCEITOS (A, B, C ou D)");

const conceito1 = prompt("Me de o primeiro conceito:").toLocaleUpperCase();
const conceito2 = prompt("Me de o segundo conceito:").toLocaleUpperCase();
const conceito3 = prompt("Me de o terceiro conceito:").toLocaleUpperCase();

alert("ME FORNEÇA AS SUAS 3 FREQUENCIAS (0-100)");

const frequencia1 = Number(prompt("Me de a primeira frequencia:"));
const frequencia2 = Number(prompt("Me de a segunda frequencia:"));
const frequencia3 = Number(prompt("Me de a terceira frequencia:"));

const mediaFrequencia = (frequencia1 + frequencia2 + frequencia3) / 3;

if (conceito1 == "A" && conceito2 == "A" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "B" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "A" && conceito2 == "B" && conceito3 == "D" && mediaFrequencia >= 75) {
  console.log("Reprovado");
} else if (conceito1 == "D" && conceito2 == "A" && conceito3 == "C" && mediaFrequencia >= 75) {
  console.log("Reprovado");
} else if (conceito1 == "A" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "A" && conceito2 == "D" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "C" && conceito2 == "C" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "C" && conceito2 == "C" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "C" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "A" && conceito2 == "C" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "A" && conceito2 == "C" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "D" && conceito2 == "A" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "D" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "D" && conceito2 == "A" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "A" && conceito2 == "B" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "B" && conceito2 == "A" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
} else if (conceito1 == "A" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "C" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "C" && conceito2 == "A" && conceito3 == "C" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "A" && conceito2 == "B" && conceito3 == "C" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "D" && conceito2 == "B" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "D" && conceito2 == "B" && conceito3 == "C" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "D" && conceito2 == "B" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "D" && conceito2 == "C" && conceito3 == "A" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "C" && conceito2 == "B" && conceito3 == "C" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "A" && conceito2 == "B" && conceito3 == "C" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "D" && conceito2 == "B" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
else if (conceito1 == "A" && conceito2 == "A" && conceito3 == "B" && mediaFrequencia >= 75) {
  console.log("Aprovado");
}
 else {
  console.log("Reprovado");
}
 */

//Operador ternario

/* let tipo;
if (idade >= 18) {
  tipo = "adulto";
} else {
  tipo = "criança"; 
} 
const idade = Number(prompt("QUAL A SUA IDADE"));
const tipo = idade >= 18 ? 'adulto' :'criança'
  console.log("Você é", tipo)
*/

//Switch

const opcao = prompt(
  "Cardápio da cantina com as Opções : \n 67-Pastel \n 2-Coxinha \n 3-Suco",
);
switch (opcao) {
  case "67":
    console.log("Pastel : R$10.00");
    break;
  case "2":
    console.log("Coxinha : R$8.00");
    break;
  case "3":
    console.log("Suco : R$4.00");
    break;
  default:
    console.log('Opção inválida!')}
