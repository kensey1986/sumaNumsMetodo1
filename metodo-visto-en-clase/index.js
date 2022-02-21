
function onGetDatodosSuma () {
    const input1 =  document.getElementById("Input1").value;
    const input2 =  document.getElementById("Input2").value;
    const resuladorSuma = sumaDosNumeros(input1,input2)

    const resultadoUsuario = document.getElementById("resultado");

    resultadoUsuario.innerText="El resultado de la Suma es: " + resuladorSuma ;

    
}




function sumaDosNumeros (a, b){

    const numero1 = parseInt(a);
    const numero2 = parseInt(b);

    const suma = numero1 + numero2;

   return suma;

}