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
    }
    else{
        var x = 0;
        while(x==0){
            var login = prompt("Entre com o seu login.");
            var senha = prompt("Entre com a sua senha.");
            for(var i = 0; i<listaLogin.length; i++ ){
                if(login == listaLogin[i] && senha == listaSenha[i]){
                    x = 1;
                    criarCookie("nomeUsuario", login, " Tue, 01 Jan 2115 12:00:00 UTC ");
                }
            }
            if(x==0){
                alert("Login ou senha incorretos.");
            }
        }
    } 
}



var listaLogin = ["Ana","Arthur"];
var listaSenha = ["123","456"];
verificarCookie();


//Função para cadastrar um novo usuário
function cadastrarUsuario() {
  const nomeUsu = prompt("Digite o nome do novo usuário:");
  const senhaUsu = prompt("Digite a senha:");
  login.push({nomeUsu,senhaUsu})
  console.log("Usuário "+{nome}+" cadastrado com sucesso!");
}


//Função para alterar a senha de um usuário existente
function alterarSenha() {
  const nome = prompt("Digite o nome do usuário para alterar a senha:");
  const usuario = nomeUsu.find(u => u.nome === nome);
  if (usuario) {
    const novaSenha = prompt("Digite a nova senha:");
    usuario.senha = novaSenha;
    criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
  } 
  else {
    console.log("Usuário não encontrado!");
  }
}

// Menu principal
function exibirMenu() {
  let opcao = "";
  
  while (opcao !== "3") {
    opcao = prompt("Menu:\n1. Cadastrar Novo Usuário\n2. Alterar Senha\n3. Sair\nEscolha uma opção:");
    switch (opcao){
      case "1":
        cadastrarUsuario();
        break;
      case "2":
        alterarSenha();
        break;
      case "3":
        console.log("Saindo do sistema.");
        break;
      default:
        console.log("Opção inválida, tente novamente!");
    }
  }
}
exibirMenu();
