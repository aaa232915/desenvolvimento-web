// Exercicio 1
// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual número ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo: 
// Tabuada de 5: 
// 5 X 1 = 5 
// 5 X 2 = 10 

/*num = parseInt(prompt("digite um número para ver a tabuada: "))
console.log("Tabuada de " + num)

function tabuada(){
    for(var i = 1; i <= 10; i++){
        resultado = i * num
        console.log(num + "X" + i + "=" + resultado)  
    }
}

tabuada();*/


/*function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}

verificarCookie();*/

//Faça uma aplicação com login e senha onde o usuário pode se manter logado usando cookies.
//O usuário deve poder cadastrar novo usuário e senha e também alterar a senha do seu usuário.
//A aplicação deve também ter uma opção sair, que obriga o usuário a logar novamente na pró-
//xima vez que utilizar a aplicação.


/*function criarCookie(nome, senha, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + senha + "=" + valor + "; " + dtExpira;
}
function lerCookie(nome, senha){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var vsenha = senha + "=";
    //vsenha -> senhaUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    var usersenha=parseFloat(lerCookie("senhaUsuario"));
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
    if(usersenha != ""){
        alert("Bem vindo novamente " + usersenha);
    }else{
        usersenha =  parseFloat(prompt("Digite sua senha:"));
        if (usersenha != "" && usersenha != null){
            criarCookie("senhaUsuario", usersenha, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
    
}

criarCookie();
lerCookie();
verificarCookie();*/

/*function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");

  
    if(username != ""){
        alert("Bem vindo novamente " + username);

    }else{
        var x = 1;
        while(x == 1 ){
            var login = prompt("Digite seu nome:");
            var senha = prompt("Digite sua senha:");
         for(var i = 0; i < listalogin.length; i++){
                if(login == listalogin[i] && senha == listasenha[i]){
                    x = 2;
                    criarCookie("nomeUsuario", login, " Tue, 01 Jan 2115 12:00:00 UTC ");
                }
        }
        if(x == 1){
            alert("O login ou a senha está incorreto, tente novamente. ");
        }
        }
        
    }
}

var listalogin = ["Gabriela", "Thaila"];
var listasenha = ["345", "897"];
verificarCookie();

//criar uma função para novo cadastro
function novoUsuario(){
    var nome = prompt("Digite o nome do novo usuário: ")
}

function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}

verificarCookie();*/

//Faça uma aplicação com login e senha onde o usuário pode se manter logado usando cookies.
//O usuário deve poder cadastrar novo usuário e senha e também alterar a senha do seu usuário.
//A aplicação deve também ter uma opção sair, que obriga o usuário a logar novamente na pró-
//xima vez que utilizar a aplicação.

function criarCookie(tabuada,valor,expira){
    var dtExpira = "expires="+expira;
    document.cookie = tabuada + "=" + valor + "; " + dtExpira;
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function tabuada(){
    //var num = parseInt(prompt("Digite o número que deseja ver a taboada."))
    for(var i=0; i<10; i++){
        resultado = tab * i
        alert(tab + " x " + i + " = " +resultado);
    }
    return "";
}

function verificarCookie(){
    tab = lerCookie("Tabuada");
    if(tab != ""){
        alert("A tabuada anterior é:  " + tab);
        tabuada();
    }else{
        tab =  prompt("Digite um número:");
        if (tab != "" && tab != null){
            tabuada();
            criarCookie("Tabuada", tab, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
   /* if(tab != ""){
        alert("Bem vindo novamente, a ultima tabuada foi:  " + tab);
    }else{
       tab =  parseFloat(prompt("Digite :"));
        if (usersenha != "" && usersenha != null){
            criarCookie("senhaUsuario", usersenha, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }*/
}

//criarCookie();
//lerCookie();
var tab;
verificarCookie();

/*function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");

  
    if(username != ""){
        alert("Bem vindo novamente " + username);

    }else{
        var x = 1;
        while(x == 1 ){
            var login = prompt("Digite seu nome:");
            var senha = prompt("Digite sua senha:");
         for(var i = 0; i < listalogin.length; i++){
                if(login == listalogin[i] && senha == listasenha[i]){
                    x = 2;
                    criarCookie("nomeUsuario", login, " Tue, 01 Jan 2115 12:00:00 UTC ");
                }
        }
        if(x == 1){
            alert("O login ou a senha está incorreto, tente novamente. ");
        }
        }
        
    }
}

var listalogin = ["Gabriela", "Thaila"];
var listasenha = ["345", "897"];
verificarCookie();

//criar uma função para novo cadastro
function novoUsuario(){
    var nome = prompt("Digite o nome do novo usuário: ")*/