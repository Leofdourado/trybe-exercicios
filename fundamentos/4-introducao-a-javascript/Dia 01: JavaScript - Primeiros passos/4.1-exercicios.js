//primeiro

let a 
let b 

let adicao = a + b
let subtracao = a - b
let multiplicacao = a* b
let divisao = a / b
let modulo = a % b

// segundo

let primeiroValor = 31
let segundoValor = 22

if (primeiroValor > segundoValor) {
    console.log(primeiroValor);
} else {
    console.log(segundoValor);
}

//terceiro

const primeiroValorDois = 1
const segundoValorDois = 5
const terceiroValorDois = 3

if (primeiroValorDois > segundoValorDois && primeiroValorDois > terceiroValorDois) {
    console.log(primeiroValorDois);
} else if (segundoValorDois > primeiroValorDois && segundoValorDois > terceiroValorDois) {
    console.log(segundoValorDois);
} else if (terceiroValorDois > primeiroValorDois && terceiroValorDois > segundoValorDois) {
    console.log(terceiroValorDois);
}    

//quarto

const numeroNatural = 0

if (numeroNatural > 0){
    console.log("positive")
} else if (numeroNatural < 0){
    console.log("negative")
} else {
    console.log("zero")
}

//cinco

const anguloA = 60;
const anguloB = 60;
const anguloC = 60;
let somaAngulos = anguloA + anguloB + anguloC;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0){
    console.log("Valor de angulo invalido");
}    else if (somaAngulos == 180){
        console.log(true)
}   else {
    console.log(false)
}

//seis

let peça = "Rei";
let movimento = "?"

switch (peça.toLowerCase) {
    case "rei";
        movimento = "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.";
        break;
    case "rainha";
        movimento = "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
        break;
    
}
