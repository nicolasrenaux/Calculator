const botaoClear = document.getElementById('clr');
const botaoSign = document.getElementById('sign');
const botaoPercentage = document.getElementById('porc');
const botaoMul = document.getElementById('mul');
const botaoDivision = document.getElementById('div');
const botaoMinus = document.getElementById('minus');
const botaoComma = document.getElementById('Comma');
const botaoEql = document.getElementById('eql');
let display = document.getElementById('display');
const botaoSum = document.getElementById('sum');
// const botao7 = document.getElementById('7');
// const botao8 = document.getElementById('8');
// const botao9 = document.getElementById('9');
// const botao4 = document.getElementById('4');
// const botao5 = document.getElementById('5');
// const botao6 = document.getElementById('6');
// const botao1 = document.getElementById('1');
// const botao2 = document.getElementById('2');
// const botao3 = document.getElementById('3');
// const botao0 = document.getElementById('0');
const botaoNumero = document.querySelectorAll('[id^="num"]');


let numeroDisplay = "0";
let primeiroNum = 0;
let segundoNum= 0;
let estado = "";

// botao1.addEventListener('click', () =>{numeroDisplay+="1", atualizar_Display()})
// botao2.addEventListener('click', ()=>{numeroDisplay +="2", atualizar_Display()})
// botao3.addEventListener('click', ()=>{numeroDisplay +="3", atualizar_Display()})
// botao4.addEventListener('click', ()=>{numeroDisplay +="4", atualizar_Display()})
// botao5.addEventListener('click', ()=>{numeroDisplay +="5", atualizar_Display()})
// botao6.addEventListener('click', ()=>{numeroDisplay +="6", atualizar_Display()})
// botao7.addEventListener('click', ()=>{numeroDisplay +="7", atualizar_Display()})
// botao8.addEventListener('click', ()=>{numeroDisplay +="8", atualizar_Display()})
// botao9.addEventListener('click', ()=>{numeroDisplay +="9", atualizar_Display()})
// botao0.addEventListener('click', ()=>{if(numeroDisplay != ""){numeroDisplay+="0"}
//     atualizar_Display();
// })

botaoNumero.forEach(botao => {
    botao.addEventListener('click', ()=>{

        if(numeroDisplay=="0" && botao.textContent!="0"){
            numeroDisplay = "";
            numeroDisplay += botao.textContent;
            atualizar_Display();
    } else {
        numeroDisplay+=botao.textContent;
        atualizar_Display();
    }
    })
});

botaoClear.addEventListener('click', ()=> {numeroDisplay = "0", atualizar_Display()})

function atualizar_Display(){
    display.textContent = numeroDisplay;
}

function soma(){
}
