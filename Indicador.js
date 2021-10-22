//Williane Felix

/*Implemente um programa que, dadas três variáveis booleanas, é capaz de identificar quando há exatamente (apenas)
duas verdadeiras (obs.: é obrigatório o uso de ao menos um operador lógico nesta questão).
*/

var a = true
var b = false
var c = false

if (a == true && b == true && c == false) {
    alert("Há exatamente duas verdadeiras")
} else if (a == true && b == false && c == true )  {
    alert("Há exatamente duas verdadeiras")    
} else if (a == false && b == true && c == true ) {
    alert("Há exatamente duas verdadeiras")
} else  {
    alert("Inválido")
}
