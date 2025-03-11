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
problema.

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
/*


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


/*1 - Crie um algoritmo que inicie uma conta de banco zerada,
armazenando o nome, número da conta e saldo do cliente. Em
seguida crie as funções depositar, sacar e verificar saldo. Como
regra, o cliente só pode sacar se tiver saldo suficiente na conta e
nenhum depósito pode ser maior que R$ 1000,00 por vez.

var saldoConta = 0;
var nomeConta =  prompt("Qual é o nome da conta?");
var numConta =  prompt("Qual é o número da conta?");



function depositar(){
    valor = prompt('Qual valor você deseja depositar?');
    
   
if(depositar>1000){
    document.write(" Nâo é possivel depositar valores acima de 1000,00 por depósito. ");
}
else{
    saldoConta = saldoConta + valor;
    document.write("Depósito feito com sucesso. O saldo atual é de: " + saldoConta );
}
}

function sacar(){
    valor = prompt('Qual valor você deseja sacar?');
    
if(valor>saldoConta){
    document.write(" O saldo é insuficiente para este valor. " );
}
else{
    document.write(" Saque realizado com sucesso.");
    saldoConta - valor;
}
    }

function verificarSaldo(){
    document.write(" O saldo da conta número " + numConta + ": " + saldoConta);
    
    }
depositar();
//sacar();
//verificarSaldo();*/
    


/*2 - Crie uma função que receba uma lista de valores e calcule a média aritmética sempre
que um novo valor for adicionado no fim da lista.
Use a estrutura abaixo para receber a lista de números inicial.
var input = prompt("Digite uma lista de números separados por
vírgula");
var lista = input.split(",");
Use para descobrir o tamanho atual da lista:*/



/*var nums = prompt("Digite uma lista de números separados por vírgula.");
var lista = nums.split(",");

function media(){
    var soma = 0; //inicializa a variavel como número
    
    for(var i = 0; i < lista.length; i++){
        
        var soma = soma + parseFloat(lista[i]); //converte para float o valor de lista na posição i
        
    }
    
    var mediaArit = soma / lista.length; 
    
alert(mediaArit);
}

media();*/



/*3 - Faça um programa que recebe três números do usuário, e
identifica o maior através de uma função e o menor número
através de outra função.*/

var numUsuario1 = prompt("Digite o primeiro número de usuário.")
var numUsuario2 = prompt("Digite o segundo número de usuário.")
var numUsuario3 = prompt("Digite o terceiro número de usuário.")
 

function maior(){
if (numUsuario1 > numUsuario2 && numUsuario1 > numUsuario3){
    document.write(" O maior número de usuário é o " + numUsuario1 + " ,que pertence ao  primeiro número de usuário.");

}
else if (numUsuario2 > numUsuario1 && numUsuario2 > numUsuario3){
    document.write("O maior número de usuário é o " + numUsuario2 + " ,que pertence ao segundo número de usuário 2.");
}
else{
    document.write(" O maior número de usuário é o " + numUsuario3 + " ,que pertence ao  terceiro número de usuário 3.");
}
}

function menor(){
    if (numUsuario1 < numUsuario2 && numUsuario1 < numUsuario3){
        document.write(" O menor número de usuário é o " + numUsuario1 + " ,que pertence ao  primeiro número de usuário.");
    
    }
    else if (numUsuario2 < numUsuario1 && numUsuario2 < numUsuario3){
        document.write("O menor número de usuário é o " + numUsuario2 + " ,que pertence ao segundo número de usuário 2.");
    }
    else{
        document.write(" O menor número de usuário é o " + numUsuario3 + " ,que pertence ao  terceiro número de usuário 3.");
    }
    }

maior(); 

menor();