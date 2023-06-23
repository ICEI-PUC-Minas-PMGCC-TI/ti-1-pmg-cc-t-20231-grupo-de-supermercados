// Obter o formulário do HTML
const form = document.querySelector('.formulario-post');
const postsContainer = document.getElementById('postsContainer');
const noPostsMessage = document.getElementById('noPostsMessage');

// Adicionar um evento ao botão de criar post
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir o envio do formulário

  // Obter as informações dos inputs
  const titulo = form.tituloPost.value.trim();
  const assunto = form.assuntoPost.value.trim();

  // Verificar se os campos estão preenchidos
  if (!titulo || !assunto) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Criar um objeto com as informações do post (JSON)
  const post = {
    titulo,
    assunto,
    hora: getFormattedTime(),
  };

  // Obter a lista de posts armazenada no LocalStorage ou criar uma nova lista vazia se ela ainda não existe
  let posts = JSON.parse(localStorage.getItem('posts') || '[]');

  // Adicionar o novo post à lista de posts
  posts.push(post);

  // Armazenar a lista atualizada de posts no LocalStorage
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Post feito.');

  // Limpar os valores dos campos do formulário
  form.reset();

  // Atualizar a exibição dos posts na tela
  displayPosts();
});

// Função para obter a hora formatada (HH:mm)
function getFormattedTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `às ${hours.toString().padStart(2, '0')}.${minutes.toString().padStart(2, '0')}`;
}

// Função para exibir os posts na tela
function displayPosts() {
  // Obter a lista de posts do LocalStorage
  let posts = JSON.parse(localStorage.getItem('posts') || '[]');

  // Limpar o conteúdo do container de posts
  postsContainer.innerHTML = '';

  // Verificar se há algum post para exibir
  if (posts.length === 0) {
    noPostsMessage.style.display = 'block';
    return;
  } else {
    noPostsMessage.style.display = 'none';
  }

  // Percorrer a lista de posts e criar elementos HTML para cada um
 posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const tituloElement = document.createElement('h2');
    tituloElement.textContent = post.titulo;
    tituloElement.classList.add('post-titulo');

    const assuntoElement = document.createElement('p');
    assuntoElement.textContent = post.assunto;
    assuntoElement.classList.add('post-assunto');

    const horaElement = document.createElement('p');
    horaElement.textContent = post.hora;
    horaElement.classList.add('hora-post'); // Adiciona a classe para estilizar a cor cinza

    postElement.appendChild(tituloElement);
    postElement.appendChild(assuntoElement);
    postElement.appendChild(horaElement);

    postsContainer.appendChild(postElement);
  });
}

// Chamar a função para exibir os posts assim que a página é carregada
displayPosts();
