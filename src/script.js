const botaoClear = document.getElementById('clr');
botaoClear.addEventListener('click', ()=> {
    Display = "0";
    numeroDigitado = "";
    primeiroNum = 0;
    segundoNum = 0; 
    estado = "";
    botaoClear.classList.replace('bg-gray-light', 'bg-gray-clickOp')
    setTimeout(()=>{
        botaoClear.classList.replace('bg-gray-clickOp','bg-gray-light')
    }, 200);

    botaoFunction.forEach(botao => {
        botao.classList.replace('bg-white', 'bg-orange')
        botao.classList.replace('text-orange', 'text-white')
    })
    atualizar_Display()})

const corOriginalNum = 'bg-gray-dark';
const corAlteradaNum = 'bg-gray-clickNum';
const corOriginalOp = 'bg-gray-light';
const corAlteradaOp = 'bg-gray-clickOp';

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
            botao.classList.replace('bg-gray-light', 'bg-gray-clickOp');
            primeiroNum = parseFloat(numeroDigitado) * (-1);
            numeroDigitado = primeiroNum.toLocaleString("pt-BR");
            Display = numeroDigitado;
            atualizar_Display();
            setTimeout(() => {
                botao.classList.replace('bg-gray-clickOp', 'bg-gray-light');
            }, 200);
        }

        if(botao.id == "funcPerc"){
            // estado == "" && primeiroNum === 0 ? primeiroNum = parseFloat(numeroDigitado)/ 100 : estado != "" ? primeiroNum /= 100: segundoNum = primeiroNum*(parseFloat(numeroDigitado)/100);
            botao.classList.replace('bg-gray-light', 'bg-gray-clickOp');
            if(Display!="0"){
            if(estado == "" && primeiroNum === 0){
                primeiroNum = parseFloat(numeroDigitado)/ 100;
                Display = primeiroNum.toString();
                atualizar_Display();
            } else if (estado==""){
                primeiroNum /= 100;
            } else {
                segundoNum = primeiroNum*(parseFloat(numeroDigitado)/100);
                numeroDigitado = segundoNum.toLocaleString("pt-BR");
                Display = numeroDigitado;
                atualizar_Display();
                }
            }
            setTimeout(() => {
                botao.classList.replace('bg-gray-clickOp', 'bg-gray-light');
            }, 200);
        }

        botao.classList.replace('bg-orange', 'bg-white')
        botao.classList.replace('text-white', 'text-orange')

        if(botao.id == "funcSum"){
            equal();
            estado = "soma";
            numeroDigitado = "";
            }

        if(botao.id == "funcEql"){
            equal();
            estado = "";
            numeroDigitado = "";
            botao.classList.replace('bg-orange', 'bg-white');
            botao.classList.replace('text-white', 'text-orange');
            setTimeout(() => {
                botao.classList.replace('bg-white', 'bg-orange');
                botao.classList.replace('text-orange', 'text-white');
            }, 200);
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
        botao.classList.replace('bg-gray-dark', 'bg-gray-clickNum');
        botaoFunction.forEach(botao => {
            botao.classList.replace('bg-white', 'bg-orange')
            botao.classList.replace('text-orange', 'text-white')
        })
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
        setTimeout(() => {
            botao.classList.replace('bg-gray-clickNum', 'bg-gray-dark');
        }, 200);
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
            break;
        case "soma":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum += segundoNum;
            break;
        case "min":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum -= segundoNum;
            break;
        case "mul":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            primeiroNum *= segundoNum;
            break;
        case "div":
            numeroDigitado != "" ? segundoNum = parseFloat(numeroDigitado) : segundoNum;
            if (segundoNum === 0) {
                Display = "Erro";
                primeiroNum = 0;
                numeroDigitado = 0;
                segundoNum = 0;
                return atualizar_Display();
            } else {
                primeiroNum /= segundoNum;
            }
            break;
    }
    // Atualiza o display com o resultado
    Display = primeiroNum.toLocaleString("pt-BR");
    atualizar_Display();
}
