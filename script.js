var valorEmDolar = prompt("Digite o valor em dólar:");
var cotacaoEmDolar = 5.32;

var valorEmBitcoin = prompt("Digite o valor em Bitcoin:");
var cotacaoEmBitcoin = 180233.88;

var valorCambioDolarReal = valorEmDolar * cotacaoEmDolar;
valorCambioDolarReal = valorCambioDolarReal.toFixed(2);

var valorCambioBitcoinReal = valorEmBitcoin * cotacaoEmBitcoin;
valorCambioBitcoinReal = valorCambioBitcoinReal.toFixed(2);

alert("R$ " + valorCambioDolarReal + "\n\nR$ " + valorCambioBitcoinReal);
