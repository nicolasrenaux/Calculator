const botaoClear = document.getElementById('clr');
const botaoSign = document.getElementById('sign');
const botaoPercentage = document.getElementById('porc');
const botaoSum = document.getElementById('sum');
const botaoMinus = document.getElementById('minus');
const botaoMul = document.getElementById('mul');
const botaoDivision = document.getElementById('div');
const botaoEql = document.getElementById('eql');
let display = document.getElementById('display');
const botaoComma = document.getElementById('Comma');

const botaoFunction = document.querySelectorAll('[id^="func"]');
const botaoNumero = document.querySelectorAll('[id^="num"]');

let Display = "0";
let numeroDigitado = "";
let primeiroNum = 0;
let segundoNum= 0;
let estado = "";

botaoFunction.forEach(botao => {

    botao.addEventListener('click', ()=>{
        if(botao.id == "funcSign"){
            primeiroNum = parseFloat(numeroDigitado) * (-1);
            numeroDigitado = primeiroNum.toLocaleString("pt-BR");
            Display = numeroDigitado;
            atualizar_Display();
        }

        if(botao.id == "funcSum"){
            equal();
            estado = "soma";
            numeroDigitado = "";
            }

        if(botao.id == "funcEql"){
            equal();
            estado = "";
            numeroDigitado = "";
            console.log("Clicou no botao igual. Estado: ", estado, "primeiroNum: ", primeiroNum, "SegundoNum: ", segundoNum)
        }
    })
})

botaoNumero.forEach(botao => {
    botao.addEventListener('click', () => {
        // Verifica se o botão pressionado é uma vírgula
        if (botao.textContent === ',') {
            if (!numeroDigitado.includes('.')) {
                numeroDigitado += '.';  // Adiciona vírgula apenas se não existir
                Display = formatarNumero(numeroDigitado);
            }
        } else {
            // Adiciona dígitos normalmente, mas limita dígitos após a vírgula
            if (numeroDigitado.includes('.')) {
                const partes = numeroDigitado.split('.');
                if (partes[1].length < 4) {
                    numeroDigitado += botao.textContent;
                }
            } else {
                numeroDigitado += botao.textContent;
            }
            Display = formatarNumero(numeroDigitado);
        }
        console.log(numeroDigitado);
        atualizar_Display();
    });
});

botaoClear.addEventListener('click', ()=> {Display = "0", numeroDigitado = "",primeiroNum = 0, segundoNum = 0, estado = "", atualizar_Display()})

function formatarNumero(numero) {
    if (numero.includes('.')) {
        const partes = numero.split('.');
        let parteInteira = partes[0].replace(/\./g, '');
        let parteDecimal = partes[1] || '';
        let formatado = parseInt(parteInteira).toLocaleString('pt-BR');
        return parteDecimal.length > 0 ? formatado + ',' + parteDecimal : formatado + ',';
    } else {
        return parseInt(numero.replace(/\./g, '')).toLocaleString('pt-BR');
    }
}

function atualizar_Display(){
    display.textContent = Display;
}

function equal() {
    switch (estado) {
        case "":
            // primeiroNum += parseFloat(numeroDigitado);
            numeroDigitado != "" ? primeiroNum = parseFloat(numeroDigitado) : primeiroNum;
            console.log("Entrou no switch estado vazio e atribuiu o primeiroNum para ", primeiroNum)
            break;
        case "soma":
            // segundoNum = parseFloat(numeroDigitado);
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum += segundoNum;
            console.log("Entrou no switch soma, segundoNum: ", segundoNum, " primeiroNum: ", primeiroNum)
            break;
        // Adicione outros casos para subtração, multiplicação, etc., conforme necessário
    }
    // Atualiza o display com o resultado
    Display = formatarNumero(primeiroNum.toLocaleString("pt-BR"));
    atualizar_Display();
}
