let obj = {
  "lista de produtos": [
    {
      "código": 1,
      "nome": "Gatorade de Tangerina",
      "marca": "Gatorade",
      "preço": "R$" + "6.50",
      "imagem": "gatorade.jpg",
      "favorito": false
    },
    {
      "código": 2,
      "nome": "Nesfit de Limao",
      "marca": "Nestle",
      "preço": "R$" + "5.00",
      "imagem": "nesfit.png",
      "favorito": false
    },
    {
      "código": 3,
      "nome": "Detergente Clear",
      "marca": "Ype",
      "preço": "R$" + "3.50",
      "imagem": "detergente.png",
      "favorito": false
    }
  ]
};

// preencher html com produtos do json
window.onload = () => {
  const productContainer = document.getElementById("lista");

  obj["lista de produtos"].forEach((product) => {
    const productName = product.nome;
    const productPrice = product.preço;
    const productImage = product.imagem;

    const divElement = document.createElement("div");
    divElement.classList.add("produto");

    const imgElement = document.createElement("img");
    imgElement.src = productImage;

    const favoritoElement = document.createElement("span");
    favoritoElement.classList.add("favorito");
    favoritoElement.innerHTML = "&#9734;";

    const detalhesElement = document.createElement("div");
    detalhesElement.classList.add("detalhes");

    const h2Element = document.createElement("h2");
    h2Element.textContent = productName;

    const h3Element = document.createElement("h3");
    h3Element.textContent = "Preço: " + productPrice;

    detalhesElement.appendChild(h2Element);
    detalhesElement.appendChild(h3Element);

    divElement.appendChild(imgElement);
    divElement.appendChild(favoritoElement);
    divElement.appendChild(detalhesElement);

    productContainer.appendChild(divElement);

    favoritoElement.addEventListener("click", () => {
      product.favorito = !product.favorito;

      if (product.favorito) {
        favoritoElement.innerHTML = "&#9733;";
        divElement.classList.add("favoritado");
      } else {
        favoritoElement.innerHTML = "&#9734;";
        divElement.classList.remove("favoritado");
      }
    });
  });
};

// pesquisa
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const showFavoritos = document.getElementById("show-favoritos").checked;
  const produto = document.querySelectorAll(".produto");
  const pname = document.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = pname[i];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      const isFavorito = produto[i].classList.contains("favoritado");

      if ((textvalue.toUpperCase().indexOf(searchbox) > -1) && (!showFavoritos || isFavorito)) {
        produto[i].style.display = "";
      } else {
        produto[i].style.display = "none";
      }
    }
  }
};