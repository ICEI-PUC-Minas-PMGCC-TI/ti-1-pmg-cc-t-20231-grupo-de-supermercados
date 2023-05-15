//funcções de leitura de dados e gravação
function leDadoos() {
  let strDados = localStorage.getItem('usuários');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('usuários', JSON.stringify(dados));
}

function incluirContato() {
  //ler os dados do localstorage
  let objDados = leDadoos();

  // incluir um novo contato
  let strId = generateRandomId();
  let strNome = document.getElementById('campoNome').value;
  let strEmail = document.getElementById('campoEmail').value;
  let strTelefone = document.getElementById('campoTelefone').value;
  let strSenha = document.getElementById("campoSenha").value;

  let novoUsuario = {
    id: strId,
    nome: strNome,
    email: strEmail,
    telefone: strTelefone,
    senha: strSenha
  };
  objDados.clientes.push(novoUsuario);

  //salvar no local storage
  salvaDados(objDados);


}



// limitações do formulário Registro

const form = document.getElementById('formularioRegistro');
const campos = document.querySelectorAll('.requied');
const spans = document.querySelectorAll('.span-requied');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameValidate() && emailValidate() && mainPasswordValidate() && rePasswordValidate()) {
    incluirContato();
    alert ('Nova conta criada com sucesso! Faça login para entrar'); 
    window.location.href = "Login.html";

  }
});


function nameValidate() {
  if (campoNome.value.length < 3) {
    spans[0].style.display = 'block';
    campoNome.style.border = '2px solid #e63636';
    return false;
  }
  else {
    spans[0].style.display = 'none';
    campoNome.style.border = 'none';
    return true;
  }
}

function emailValidate() {
  if (!emailRegex.test(campoEmail.value)) {
    spans[1].style.display = 'block';
    campoEmail.style.border = '2px solid #e63636';
    return false;
  }
  else {
    spans[1].style.display = 'none';
    campoEmail.style.border = 'none';
    return true;
  }
}

function mainPasswordValidate() {
  if (campoSenha.value.length < 8) {
    spans[2].style.display = 'block';
    campoSenha.style.border = '2px solid #e63636';
    return false;
  }
  else {
    spans[2].style.display = 'none';
    campoSenha.style.border = 'none';
    return true;
  }
}

function rePasswordValidate() {
  if (campoReSenha.value != campoSenha.value) {
    spans[3].style.display = 'block';
    campoReSenha.style.border = '2px solid #e63636';
    return false;
  }
  else {
    spans[3].style.display = 'none';
    campoReSenha.style.border = 'none';
    return true;
  }
}


// derivados 

function generateRandomId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 10;
  let randomId = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}


document.addEventListener("DOMContentLoaded", function () {
  let strDados = localStorage.getItem('usuários');
  // Dados a serem salvos no localStorage
  var dados = {
    clientes: [
      {
        id: "112h5F88K9",
        nome: "Eurico Hernandes",
        email: "Eurico@gmail.com",
        telefone: "(31)9 8181-9090",
        senha: "Portolucha"
      },
      {
        id: "112h5Fajsk",
        nome: "Leonora Silva",
        email: "LeoSi@gmail.com",
        telefone: "(31)9 4567-8888",
        senha: "sorocaba"
      },
      {
        id: "112ouhm&85",
        nome: "Jorge Ferrilha",
        email: "JorginFerroBala@gmail.com",
        telefone: "(31)9 9876-5432",
        senha: "123pontes"
      }
    ]
  };

  if (strDados) {
    //nada
  }
  else {
    // Salvar os dados no localStorage
    localStorage.setItem("usuários", JSON.stringify(dados));
  }

});


