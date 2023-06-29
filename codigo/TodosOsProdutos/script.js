fetch('../../assets/db/produtos.json')
  .then(response => response.json())
  .then(data => {
    let str = '';
    let produtosLocalStorage = JSON.parse(localStorage.getItem('produtos'));
    let produtosDB = JSON.parse(localStorage.getItem('produtosDB'));

    for (let i = 0; i < produtosDB.produtos.length; i++) {
      let item = produtosDB.produtos[i];
      let favoritoClass = '';
      let favoritoSymbol = '';

      // Verifica se o produto está marcado como favorito no Local Storage
      let produtoLocalStorage = produtosLocalStorage.find(produto => produto.id === item.id);
      if (produtoLocalStorage && produtoLocalStorage.favoritado) {
        favoritoClass = 'favoritado';
        favoritoSymbol = '&#9733;';
      }

      str += `
        <div class="produto ${favoritoClass}">
          <img src="../../assets/images/${item.imagem}">
          <div class="detalhes">
            <h2 id="${item.id}" onclick="redirecionar(this.id)" >${item.name}</h2>
            
            <span id="btn-${item.id}" class="favorito" onclick="marcarFavorito(${item.id})">
              ${favoritoSymbol || (item.favoritado ? '&#9733;' : '&#9734;')}
            </span>
          </div>
        </div>              
      `
    }

    document.getElementById('lista').innerHTML = str;
  });



function marcarFavorito(idProduto) {
  let jsonValue = localStorage.getItem('produtos');
  let produtos = JSON.parse(jsonValue);
  

  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];

    if (produto.id === idProduto) {
      if (produto.favoritado === false) {
        produto.favoritado = true;
        document.getElementById(`btn-${idProduto}`).innerHTML = '&#9733;';
      }
      else if (produto.favoritado === true) {
        produto.favoritado = false;
        document.getElementById(`btn-${idProduto}`).innerHTML = '&#9734;';
      }

      localStorage.setItem('produtos', JSON.stringify(produtos));

      break;
    }
  }
}

function filtro() {
  fetch('../../assets/db/produtos.json')
    .then(res => res.json())
    .then(data => {
      var checkBox = document.getElementById("show-favoritos");
      let produtosDB = JSON.parse(localStorage.getItem('produtosDB'));


      if (checkBox.checked) {
        let jsonValue = localStorage.getItem('produtos');
        let produtos = JSON.parse(jsonValue);

        let str = '';
        document.getElementById('lista').innerHTML = str; // Limpa a exibição atual

        for (let i = 0; i < produtos.length; i++) {
          let produto = produtos[i];
          let item = produtosDB.produtos.find(item => item.id === produto.id);

          if (produto.favoritado) {
            let favoritoClass = 'favoritado';
            let favoritoSymbol = '&#9733;';

            str += `
              <div class="produto ${favoritoClass}">
                <img src="../../assets/images/${item.imagem}">
                <div class="detalhes">
                  <h2 id="${item.id}" onclick="redirecionar(this.id)">${item.name}</h2>
                  
                  <span id="btn-${item.id}" class="favorito" onclick="marcarFavorito(${item.id})">
                    ${favoritoSymbol}
                  </span>
                </div>
              </div>
            `;
          }
        }

        document.getElementById('lista').innerHTML = str; // Atualiza a exibição com os produtos favoritados
      } else {
        let str = '';
        document.getElementById('lista').innerHTML = str; // Limpa a exibição atual
        let produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) || [];

        for (let i = 0; i < produtosDB.produtos.length; i++) {
          let item = produtosDB.produtos[i];
          let favoritoClass = '';
          let favoritoSymbol = '';

          let produtoLocalStorage = produtosLocalStorage.find(produto => produto.id === item.id);
          if (produtoLocalStorage && produtoLocalStorage.favoritado) {
            favoritoClass = 'favoritado';
            favoritoSymbol = '&#9733;';
          }

          str += `
            <div class="produto ${favoritoClass}">
              <img src="../../assets/images/${item.imagem}">
              <div class="detalhes">
                <h2 id="${item.id}" onclick="redirecionar(this.id)">${item.name}</h2>
                
                <span id="btn-${item.id}" class="favorito" onclick="marcarFavorito(${item.id})">
                  ${favoritoSymbol || (item.favoritado ? '&#9733;' : '&#9734;')}
                </span>
              </div>
            </div>
          `;
        }

        document.getElementById('lista').innerHTML = str; // Atualiza a exibição com todos os produtos
      }
    });
}


// Pesquisa
const search = () => {
  const searchbox = document.getElementById('search-item').value.toUpperCase();
  const produto = document.querySelectorAll('.produto');
  const pname = document.getElementsByTagName('h2');

  for (var i = 0; i < pname.length; i++) {
    let match = pname[i];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if ((textvalue.toUpperCase().indexOf(searchbox) > -1)) {
        produto[i].style.display = '';
      } else {
        produto[i].style.display = 'none';
      }
    }
  }
};


function redirecionar (idredirect) {

  window.location.href = '../PaginaProduto/PaginaProduto.html?id=' + idredirect;

}