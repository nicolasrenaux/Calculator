const botaoClear = document.getElementById('clr');
botaoClear.addEventListener('click', ()=> {Display = "0", numeroDigitado = "",primeiroNum = 0, segundoNum = 0, estado = "", atualizar_Display()})

let display = document.getElementById('display');

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

        if(botao.id == "funcPerc"){
            // estado == "" && primeiroNum === 0 ? primeiroNum = parseFloat(numeroDigitado)/ 100 : estado != "" ? primeiroNum /= 100: segundoNum = primeiroNum*(parseFloat(numeroDigitado)/100);
            if(estado == "" && primeiroNum === 0){
                primeiroNum = parseFloat(numeroDigitado)/ 100;
                Display = primeiroNum.toString();
                console.log("Eu te odeio")
                atualizar_Display();
            } else if (estado==""){
                primeiroNum /= 100;
            } else {
                segundoNum = primeiroNum*(parseFloat(numeroDigitado)/100);
                numeroDigitado = segundoNum.toLocaleString("pt-BR");
                Display = formatarNumero(numeroDigitado);
                atualizar_Display();
            }
            
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

        if(botao.id == "funcMinus"){
            equal();
            estado = "min";
            numeroDigitado = "";
        }

        if(botao.id == "funcMul"){
            equal();
            estado= "mul"
            numeroDigitado = "";
        }

        if(botao.id == "funcDiv"){
            equal();
            estado = "div";
            numeroDigitado = "";
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
            numeroDigitado != "" ? primeiroNum = parseFloat(numeroDigitado) : primeiroNum;
            console.log("Entrou no switch estado vazio e atribuiu o primeiroNum para ", primeiroNum)
            break;
        case "soma":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum += segundoNum;
            console.log("Entrou no switch soma, segundoNum: ", segundoNum, " primeiroNum: ", primeiroNum)
            break;
        case "min":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum -= segundoNum;
            console.log("Entrou no switch soma, segundoNum: ", segundoNum, " primeiroNum: ", primeiroNum)
            break;
        case "mul":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum *= segundoNum;
            console.log("Entrou no switch mul, segundoNum: ", segundoNum, " primeiroNum: ", primeiroNum)
            break;
        case "div":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum /= segundoNum;
            console.log("Entrou no switch div, segundoNum: ", segundoNum, " primeiroNum: ", primeiroNum)
            break;
    }
    // Atualiza o display com o resultado
    Display = formatarNumero(primeiroNum.toLocaleString("pt-BR"));
    atualizar_Display();
}
