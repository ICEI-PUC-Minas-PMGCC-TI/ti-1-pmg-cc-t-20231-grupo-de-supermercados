//funcções de leitura de dados e gravação
function leDadoos() {
  let strDados = localStorage.getItem('usuários');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }

  return objDados;
}

//Limitações formulário Login

const form = document.getElementById('formularioLogin');
const spans = document.querySelectorAll('.span-requied');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailValidate() {
  if (!emailRegex.test(campoEmail.value)) {
    campoEmail.style.border = '2px solid #e63636';
    return false;
  }
  else {
    campoEmail.style.border = 'none';
    return true;
  }
}

function mainPasswordValidate() {
  if (campoSenha.value.length < 8) {
    campoSenha.style.border = '2px solid #e63636';
    return false;
  }
  else {
    campoSenha.style.border = 'none';
    return true;
  }
}












var nomeDoUsuario;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (login()) {
    spans[0].style.display = 'none';
    alert("Bem vindo(a) " + nomeDoUsuario + "!")
    //window.location.href = "sprint2/index.html";

  }
  else {
    spans[0].style.display = 'block';
  }
});




function login() {
  let pegaUsuario = document.getElementById('campoEmail').value;
  let pegaSenha = document.getElementById('campoSenha').value;
  var validado = false;

  // Obtém os dados dos usuários do localStorage
  let objDados = leDadoos();

  for (let cliente of objDados.clientes) {
    if (cliente.email === pegaUsuario && cliente.senha === pegaSenha) {
      validado = true;
      nomeDoUsuario = cliente.nome;
      break;
    }
  }

  return validado;
}