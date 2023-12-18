
let btn = document.querySelector("#btn");
let res = document.querySelector("#Resultado");

btn.addEventListener("click", () => {
    let massa = parseFloat(document.querySelector("#massa").value);
    let altura = parseFloat(document.querySelector("#altura").value);
    let IMC = massa / (altura * altura);

    if (isNaN(massa) || isNaN(altura)) {
        res.innerHTML = "Por favor, insira valores válidos.";
    } 
    else if(altura<=0 || massa<=0){
        res.innerHTML = "Por favor, insira valores válidos.";
    }
    else if(IMC<18.5){
        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e você está abaixo do peso ideal.`;
    }
     else if(IMC>=18.5 && IMC<25){
        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e você está no peso ideal!`;
    }
     else if(IMC>=25 && IMC<30){
        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e você está levemente acima do peso.`;
    }
     else if(IMC>=30 && IMC<35){
        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e você está em obesidade nível grau I.`;
    }
     else if(IMC>=35 && IMC<40){
        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e você está em obesidade nível grau II(severa).`;
    }
     else if(IMC>=40){
        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e você está em obesidade nível grau III(mórbida).`;
    }
});