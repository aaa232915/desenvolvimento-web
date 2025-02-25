    /*2) A sequência de Fibonacci é formada pelos números 0,1,1,2,3,5,8,13,21,34… onde o
próximo número é a soma dos dois números anteriores. Desenvolva um algoritmo
onde a entrada é a n-ésima posição e a saída é valor nesta posição.
Entrada: valor inteiro correspondente a posição na sequência de Fibonacci.
Saída: valor da sequência de Fibonacci na n-ésima posição.
*/
    
var num_sequencia = 1;
 
var num1 = 0;
var num2 = 1;
var resultado;

resultado = num1 + num2;
var i = 3;

while (i < num_sequencia ){
num1 = num2;
num2 = resultado;
resultado = num1+ num2;
i ++;
}

document.write(resultado);

