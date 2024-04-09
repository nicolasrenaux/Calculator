const botaoClear = document.getElementById('clr');
const botaoSign = document.getElementById('sign');
const botaoPercentage = document.getElementById('porc');
const botaoDivision = document.getElementById('div');
const botao7 = document.getElementById('7');
const botao8 = document.getElementById('8');
const botao9 = document.getElementById('9');
const botaoMul = document.getElementById('mul');
const botao4 = document.getElementById('4');
const botao5 = document.getElementById('5');
const botao6 = document.getElementById('6');
const botaoMinus = document.getElementById('minus');
const botao1 = document.getElementById('1');
const botao2 = document.getElementById('2');
const botao3 = document.getElementById('3');
const botaoSum = document.getElementById('sum');
const botao0 = document.getElementById('0');
const botaoComma = document.getElementById('Comma');
const botaoEql = document.getElementById('eql');
let display = document.getElementById('display');

let numeroDisplay = "";
let primeiroNum = 0;
let segundoNum= 0;
let estado = "";

botao1.addEventListener('click', () =>{numeroDisplay+="1", atualizar_Display()})
botao2.addEventListener('click', ()=>{numeroDisplay +="2", atualizar_Display()})
botao3.addEventListener('click', ()=>{numeroDisplay +="3", atualizar_Display()})
botao4.addEventListener('click', ()=>{numeroDisplay +="4", atualizar_Display()})
botao5.addEventListener('click', ()=>{numeroDisplay +="5", atualizar_Display()})
botao6.addEventListener('click', ()=>{numeroDisplay +="6", atualizar_Display()})
botao7.addEventListener('click', ()=>{numeroDisplay +="7", atualizar_Display()})
botao8.addEventListener('click', ()=>{numeroDisplay +="8", atualizar_Display()})
botao9.addEventListener('click', ()=>{numeroDisplay +="9", atualizar_Display()})
botao0.addEventListener('click', ()=>{if(numeroDisplay != ""){numeroDisplay+="0"}
    atualizar_Display();
})

botaoClear.addEventListener('click', ()=> {numeroDisplay = "", atualizar_Display()})

function atualizar_Display(){
    display.textContent = numeroDisplay;
}

function soma(){
}
