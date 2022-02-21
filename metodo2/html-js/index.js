function calcularSuma() {
    const InputNumero1 = document.getElementById("InputNumero1");
    const numero1 = InputNumero1.value;
    const InputNumero2 = document.getElementById("InputNumero2");
    const numero2 = InputNumero2.value;
    console.log({
        numero1,
        numero2
    })
    const resultsuma =  sumar(5,6);
    console.log(resultsuma);
    const resultado = document.getElementById("ResultadoSUma");
    resultado.innerText= 'La suma es : ' + resultsuma;
    console.log(resultado);
}

 function sumar(num1, num2)  {
      const suma = num1+num2;
      console.log('llego a la suma')
     return suma;

 }
