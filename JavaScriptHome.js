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
  }; //end page load
  

