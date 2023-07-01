
window.onload = function () {
    fetch('/assets/db/produtos.json')
      .then(response => response.json())
      .then(data => {
  
        let jsonValue = localStorage.getItem('produtos');
        let objeto = JSON.parse(jsonValue);
  
        if (!localStorage.getItem("produtos")) {
          fetch('/assets/db/produtos.json')
            .then(response => response.json())
            .then(data => {
              var produtos = [];
  
              for (let i = 0; i < data.produtos.length; i++) {
                let item = data.produtos[i];
                let id = item.id;
                let favoritado = item.favoritado;
  
                var produto = {
                  id: id,
                  favoritado: favoritado
                };
  
                produtos.push(produto);
              }
  
              var produtosJSON = JSON.stringify(produtos);
              localStorage.setItem("produtos", produtosJSON);
            });
        }

      }); // end fetch
      Carregar();
  }; //end page load
  

function Carregar ()
{
  let str = '';
  let str2 = '';
  let id1 = 0;
  let id2 = 0;
  let id3 = 0;
  let produtosLocalStorage = JSON.parse(localStorage.getItem('produtosDB'));
  let supermercadosDB = JSON.parse(localStorage.getItem('supermercadosDB'));

  
  for (let i = 0; i < 3; i++)
  {
    let item = produtosLocalStorage.produtos[i]

    if (i === 0)
    {
      id1 = item.id
    }
    else if (i === 1)
    {
      id2 = item.id
    }
    else if (i === 2)
    {
      id3 = item.id
    }
  }

  for (let i = 0; i < 3; i++) {
    var lowestPrice1 = Number.MAX_VALUE;
    var lowestPrice2 = Number.MAX_VALUE;
    var lowestPrice3 = Number.MAX_VALUE;
    let lowestPriceSupermarket = null;
  
    for (let j = 0; j < supermercadosDB.supermercados.length; j++) {
      let supermarket = supermercadosDB.supermercados[j];
      let mercadorias = supermarket.mercadorias;
  
      for (let k = 0; k < mercadorias.length; k++) {
        let mercadoria = mercadorias[k];
  
        if (mercadoria.id === id1 && mercadoria.price < lowestPrice1) {
          lowestPrice1 = mercadoria.price;
          lowestPriceSupermarket = supermarket;
        }
  
        if (mercadoria.id === id2 && mercadoria.price < lowestPrice2) {
          lowestPrice2 = mercadoria.price;
          lowestPriceSupermarket = supermarket;
        }
  
        if (mercadoria.id === id3 && mercadoria.price < lowestPrice3) {
          lowestPrice3 = mercadoria.price;
          lowestPriceSupermarket = supermarket;
        }
      }
    }
  }


  for (let i = 0; i < 3; i++)
  {
    let item = produtosLocalStorage.produtos[i]


  if (i === 0)
  {
    str += `<div class="box-promocao">
    <a href="/codigo/PaginaProduto/PaginaProduto.html?id=${item.id}">
      <img src="assets/images/${item.imagem}" alt="">
    </a>
      <h1>${item.name}</h1>
      <h3>Melhor Preço:</h3>
      <h2 style="color: green;">${lowestPrice1}</h2>
  </div>`
  }
  else if (i === 1)
  {
    str += `<div class="box-promocao">
    <a href="/codigo/PaginaProduto/PaginaProduto.html?id=${item.id}">
      <img src="assets/images/${item.imagem}" alt="">
    </a>
      <h1>${item.name}</h1>
      <h3>Melhor Preço:</h3>
      <h2 style="color: green;">${lowestPrice2}</h2>
  </div>`
  }
  else if (i === 2)
  {
    str += `<div class="box-promocao">
    <a href="/codigo/PaginaProduto/PaginaProduto.html?id=${item.id}">
      <img src="assets/images/${item.imagem}" alt="">
    </a>
      <h1>${item.name}</h1>
      <h3>Melhor Preço:</h3>
      <h2 style="color: green;">${lowestPrice3}</h2>
  </div>`
  }
  }

  document.getElementById('promocoes').innerHTML = str;


}








//<h2 style="color: green;">R$ 7.99</h2>