 /* 1) Receber como entrada um número inteiro e julgar se esse número é par ou ímpar e 
se esse mesmo número é primo ou não. 
Entrada: número inteiro. 
Saída: “É par” ou “É ímpar” e “É primo” ou “Não é primo”. 
Dica: usamos o operador ‘%’ para descobrir o resto da divisão.*/

/*var x = prompt("Digite um valor");

    if (x % 2 == 0){
            document.write("É par. ")
    }
    else{
        document.write("É ímpar. ")
    }

    var divisores = 0;
for (var i = 0; i <= x; i++){
    if (x % i == 0){
        divisores++;
    }
}
   

    if(divisores == 2){
    document.write("É primo. ");    
    }
    
    else{
        document.write("Não é primo. ")
    }


   /*2) A sequência de Fibonacci é formada pelos números 0,1,1,2,3,5,8,13,21,34… onde o
próximo número é a soma dos dois números anteriores. Desenvolva um algoritmo
onde a entrada é a n-ésima posição e a saída é valor nesta posição.
Entrada: valor inteiro correspondente a posição na sequência de Fibonacci.
Saída: valor da sequência de Fibonacci na n-ésima posição.

    
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


var num_sequencia = prompt("Qual é a possição que você deseja ver?");
 
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

3) Coloque um conjunto de números inteiros em ordem crescente. 
Entrada: vetor de números e tamanho da lista. 
Saída: vetor ordenado de maneira crescente.*/

//var num_conjunto = prompt("Coloque um conjunto de números:");
 



/*4) Fazer uma calculadora que receba dois números inteiros e calcule a soma, 
subtração, multiplicação, divisão e potenciação, conforme a escolha da entrada do 
problema.*/

var opcao = prompt("Qual opção você deseja efetuar? (1,2,3,4 ou 5).")

var num1 =  prompt("Coloque o primeiro número:");
var num2 =  prompt("Coloque o segundo número:");
var i = 0;
var potenciacao = num1;

soma = num1 + num2;
subtração = num1 - num2;
multiplicacao = num1 * num2;
divisao = num1 / num2;


while (i < num2){
potenciacao = potenciacao * num1;
if (num2 = 0){
    document.write("A potenciação é igual a 1.");

}
if (num2 = 1){
    document.write( num1);
}
else{
    document.write(potenciacao);
}
num1 ++;
}


if (opcao == 1){
    document.write(soma);

}

if (opcao == 2){
    document.write(subtracao);

}

if (opcao == 3){
    document.write(multiplicacao);

}

if (opcao == 4){
    document.write(divisao);

}

if (opcao == 5){
    document.write(potenciacao);

}



//var potenciacao = 

//var nums = [1,2,3,4,5,6];

/*5) Faça um algoritmo que receba diferentes dados de uma pessoa e valide os mesmos. 
Entrada: nome: string maior que  
idade: inteiro 
salario: inteiro 
sexo: string ‘f’ ou ‘m’. 
estadoCivil: string ‘s’,‘c’,’d’ ou ‘v’. 
Validações: 
● nome > 3 caracteres. 
● 0 >= idade >= 150. 
● salario >= 0. 
● sexo ‘f’ ou ‘m’. 
● estadoCivil ‘s’,‘c’,’d’ ou ‘v’. 
Saída: mensagem dizendo que os dados estão validados corretamente ou 
mensagem de erro, indicando quais dados estão errados.*/




