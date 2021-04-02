function clicou(){
document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://github.com/juutadei");
    //window.location.href = "https://github.com/juutadei";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado";
    //document.getElementById("mousemove").innerHTML = "Obrigado";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
var d = new Date();
alert(d.getMonth()+1);
*/

/*var count;
for (count = 0; count <= 5; count++){
    alert(count);
};*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/


/*
var nome = "Julia Tadei";
var idade = 21;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
*/