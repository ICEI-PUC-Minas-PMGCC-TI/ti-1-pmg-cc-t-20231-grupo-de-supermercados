
/*
------------------------------------- MAPA -----------------------
*/

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileJSON({
        url: 'https://api.maptiler.com/maps/streets-v2/tiles.json?key=GkkzzJ7EVJ4uHe9tRzN8',
        tileSize: 512,
      })
    })
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([-43.98018418773657, -19.932745465534623]),
    zoom: 15
  })
});

/*
const SuperM = new ol.layer.Vector({
    source: new ol.source.Vector({
        url:'https://api.maptiler.com/data/c6a96f40-8e22-461d-8cbc-33132cbb1aa3/features.json?key=GkkzzJ7EVJ4uHe9tRzN8',
        format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
            src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
            size: [512,512],
            scale: 0.1


        })
    })
})

map.addLayer(SuperM)
*/

/*
-------------------------------- SUPERMERCADOS -----------------------
*/

window.onload = () => {
  const productContainer = document.getElementById("lista");
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data["Supermercados"].forEach((product) => {
        const productName = product.nome;
        const productLocal = product.Endereço;
        const productPoint = product.pontuação;
        const productImage = product.imagem;
        const productStop = product.caracteristicas[0].estacionamento;
        const productCarne = product.caracteristicas[0].açogue;
        const productPao = product.caracteristicas[0].padaria;
        const productFolha = product.caracteristicas[0].hortifruti;
        const productVinho = product.caracteristicas[0].adega;
        const productLAT = product.latitude;
        const productLONG = product.longitude;

        const divElement = document.createElement("div");
        divElement.classList.add("SuperM");

        const imgElement = document.createElement("img");
        imgElement.src = productImage;

        const detalhesElement = document.createElement("div");
        detalhesElement.classList.add("detalhes");

        const h2Element = document.createElement("h2");
        h2Element.textContent = productName;

        const h3Element = document.createElement("h3");
        h3Element.textContent = "Endereço: " + productLocal;

        const h4Element = document.createElement("h4");
        h4Element.textContent =
          "Pontuação: " +
          productPoint +
          " estrelas" +
          "  ||  " +
          "Estacionamento: " +
          productStop +
          "  ||  " +
          "Açogue: " +
          productCarne +
          "  ||  " +
          "Padaria: " +
          productPao +
          "  ||  " +
          "Hortifruti: " +
          productFolha +
          "  ||  " +
          "Adega: " +
          productVinho;

        detalhesElement.appendChild(h2Element);
        detalhesElement.appendChild(h3Element);
        detalhesElement.appendChild(h4Element);

        const cBotaoElement = document.createElement("div");
        cBotaoElement.classList.add("CBotao");

        const btnElement = document.createElement("button");
        btnElement.classList.add("btn");
        btnElement.id = "btn";
        btnElement.textContent = "Marcar";

        const marker = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
              new ol.Feature({
                geometry: new ol.geom.Point(
                  ol.proj.fromLonLat([productLAT, productLONG])
                ),
              }),
            ],
          }),
          style: new ol.style.Style({
            image: new ol.style.Icon({
              src:
                "https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png",
              size: [512, 512],
              scale: 0.1,
            }),
          }),
        });

        let teste = 1;

        // Event listener para o clique no botão
        btnElement.addEventListener("click", () => {
          if (teste === 1) {
            map.addLayer(marker);
            teste = 0;
          } else {
            map.removeLayer(marker);
            teste = 1;
          }
        });

        cBotaoElement.appendChild(btnElement);

        divElement.appendChild(imgElement);
        divElement.appendChild(detalhesElement);
        divElement.appendChild(cBotaoElement);

        productContainer.appendChild(divElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
};
    
  


/*
-------------------------------- FILTRO -----------------------
*/

// Limpar elementos anteriores
function limparContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

var select = document.getElementById('caracteristicasP');

select.addEventListener('change', function () {
  var value = select.options[select.selectedIndex].value;

  if (value == 2.0) 
  {
    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;



          const divElement = document.createElement("div");
          divElement.classList.add("SuperM");

          const imgElement = document.createElement("img");
          imgElement.src = productImage;

          const detalhesElement = document.createElement("div");
          detalhesElement.classList.add("detalhes");

          const h2Element = document.createElement("h2");
          h2Element.textContent = productName;

          const h3Element = document.createElement("h3");
          h3Element.textContent = "Endereço: " + productLocal;

          const h4Element = document.createElement("h4");
          h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

          detalhesElement.appendChild(h2Element);
          detalhesElement.appendChild(h3Element);
          detalhesElement.appendChild(h4Element);

          const cBotaoElement = document.createElement("div");
          cBotaoElement.classList.add("CBotao");

          const btnElement = document.createElement("button");
          btnElement.classList.add("btn");
          btnElement.id = "btn";
          btnElement.textContent = "Marcar";


          const marker = new ol.layer.Vector({
            source: new ol.source.Vector({
              features: [
                new ol.Feature({
                  geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([productLAT,productLONG])
                  )
                })
              ],
            }),
            style: new ol.style.Style({
              image: new ol.style.Icon ({
                src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                size: [512,512],
                scale: 0.1
              })
            })
          })
  
          let teste = 1;

          // Event listener para o clique no botão
          btnElement.addEventListener("click", () => {
            if (teste == 1)
            {
              map.addLayer(marker);
              teste = 0;
            }
            else
            {
              map.removeLayer(marker);
              teste = 1;
            }
          });



          cBotaoElement.appendChild(btnElement);

          divElement.appendChild(imgElement);
          divElement.appendChild(detalhesElement);
          divElement.appendChild(cBotaoElement);

          productContainer.appendChild(divElement);

        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }

  if (value == 2.1) {

    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;


          if (productFolha === "sim") {

            const divElement = document.createElement("div");
            divElement.classList.add("SuperM");

            const imgElement = document.createElement("img");
            imgElement.src = productImage;

            const detalhesElement = document.createElement("div");
            detalhesElement.classList.add("detalhes");

            const h2Element = document.createElement("h2");
            h2Element.textContent = productName;

            const h3Element = document.createElement("h3");
            h3Element.textContent = "Endereço: " + productLocal;

            const h4Element = document.createElement("h4");
            h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

            detalhesElement.appendChild(h2Element);
            detalhesElement.appendChild(h3Element);
            detalhesElement.appendChild(h4Element);

            const cBotaoElement = document.createElement("div");
            cBotaoElement.classList.add("CBotao");

            const btnElement = document.createElement("button");
            btnElement.classList.add("btn");
            btnElement.id = "btn";
            btnElement.textContent = "Marcar";

            const marker = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [
                  new ol.Feature({
                    geometry: new ol.geom.Point(
                      ol.proj.fromLonLat([productLAT,productLONG])
                    )
                  })
                ],
              }),
              style: new ol.style.Style({
                image: new ol.style.Icon ({
                  src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                  size: [512,512],
                  scale: 0.1
                })
              })
            })
    
            let teste = 1;

            // Event listener para o clique no botão
            btnElement.addEventListener("click", () => {
              if (teste == 1)
              {
                map.addLayer(marker);
                teste = 0;
              }
              else
              {
                map.removeLayer(marker);
                teste = 1;
              }
            });
    

            cBotaoElement.appendChild(btnElement);

            divElement.appendChild(imgElement);
            divElement.appendChild(detalhesElement);
            divElement.appendChild(cBotaoElement);

            productContainer.appendChild(divElement);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }

  if (value == 2.2) {

    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;


          if (productCarne === "sim") {

            const divElement = document.createElement("div");
            divElement.classList.add("SuperM");

            const imgElement = document.createElement("img");
            imgElement.src = productImage;

            const detalhesElement = document.createElement("div");
            detalhesElement.classList.add("detalhes");

            const h2Element = document.createElement("h2");
            h2Element.textContent = productName;

            const h3Element = document.createElement("h3");
            h3Element.textContent = "Endereço: " + productLocal;

            const h4Element = document.createElement("h4");
            h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

            detalhesElement.appendChild(h2Element);
            detalhesElement.appendChild(h3Element);
            detalhesElement.appendChild(h4Element);

            const cBotaoElement = document.createElement("div");
            cBotaoElement.classList.add("CBotao");

            const btnElement = document.createElement("button");
            btnElement.classList.add("btn");
            btnElement.id = "btn";
            btnElement.textContent = "Marcar";


            const marker = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [
                  new ol.Feature({
                    geometry: new ol.geom.Point(
                      ol.proj.fromLonLat([productLAT,productLONG])
                    )
                  })
                ],
              }),
              style: new ol.style.Style({
                image: new ol.style.Icon ({
                  src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                  size: [512,512],
                  scale: 0.1
                })
              })
            })

            let teste = 1;

            // Event listener para o clique no botão
            btnElement.addEventListener("click", () => {
              if (teste == 1)
              {
                map.addLayer(marker);
                teste = 0;
              }
              else
              {
                map.removeLayer(marker);
                teste = 1;
              }
            });

            cBotaoElement.appendChild(btnElement);

            divElement.appendChild(imgElement);
            divElement.appendChild(detalhesElement);
            divElement.appendChild(cBotaoElement);

            productContainer.appendChild(divElement);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }

  if (value == 2.3) {

    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;


          if (productPao === "sim") {

            const divElement = document.createElement("div");
            divElement.classList.add("SuperM");

            const imgElement = document.createElement("img");
            imgElement.src = productImage;

            const detalhesElement = document.createElement("div");
            detalhesElement.classList.add("detalhes");

            const h2Element = document.createElement("h2");
            h2Element.textContent = productName;

            const h3Element = document.createElement("h3");
            h3Element.textContent = "Endereço: " + productLocal;

            const h4Element = document.createElement("h4");
            h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

            detalhesElement.appendChild(h2Element);
            detalhesElement.appendChild(h3Element);
            detalhesElement.appendChild(h4Element);

            const cBotaoElement = document.createElement("div");
            cBotaoElement.classList.add("CBotao");

            const btnElement = document.createElement("button");
            btnElement.classList.add("btn");
            btnElement.id = "btn";
            btnElement.textContent = "Marcar";

            const marker = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [
                  new ol.Feature({
                    geometry: new ol.geom.Point(
                      ol.proj.fromLonLat([productLAT,productLONG])
                    )
                  })
                ],
              }),
              style: new ol.style.Style({
                image: new ol.style.Icon ({
                  src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                  size: [512,512],
                  scale: 0.1
                })
              })
            })
    
        let teste = 1;

        // Event listener para o clique no botão
        btnElement.addEventListener("click", () => {
          if (teste == 1)
          {
            map.addLayer(marker);
            teste = 0;
          }
          else
          {
            map.removeLayer(marker);
            teste = 1;
          }
        });

            cBotaoElement.appendChild(btnElement);

            divElement.appendChild(imgElement);
            divElement.appendChild(detalhesElement);
            divElement.appendChild(cBotaoElement);

            productContainer.appendChild(divElement);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }

  if (value == 2.4) {

    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;


          if (productVinho === "sim") {

            const divElement = document.createElement("div");
            divElement.classList.add("SuperM");

            const imgElement = document.createElement("img");
            imgElement.src = productImage;

            const detalhesElement = document.createElement("div");
            detalhesElement.classList.add("detalhes");

            const h2Element = document.createElement("h2");
            h2Element.textContent = productName;

            const h3Element = document.createElement("h3");
            h3Element.textContent = "Endereço: " + productLocal;

            const h4Element = document.createElement("h4");
            h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

            detalhesElement.appendChild(h2Element);
            detalhesElement.appendChild(h3Element);
            detalhesElement.appendChild(h4Element);


            const cBotaoElement = document.createElement("div");
            cBotaoElement.classList.add("CBotao");

            const btnElement = document.createElement("button");
            btnElement.classList.add("btn");
            btnElement.id = "btn";
            btnElement.textContent = "Marcar";


            const marker = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [
                  new ol.Feature({
                    geometry: new ol.geom.Point(
                      ol.proj.fromLonLat([productLAT,productLONG])
                    )
                  })
                ],
              }),
              style: new ol.style.Style({
                image: new ol.style.Icon ({
                  src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                  size: [512,512],
                  scale: 0.1
                })
              })
            })
    

        let teste = 1;

        // Event listener para o clique no botão
        btnElement.addEventListener("click", () => {
          if (teste == 1)
          {
            map.addLayer(marker);
            teste = 0;
          }
          else
          {
            map.removeLayer(marker);
            teste = 1;
          }
        });



            cBotaoElement.appendChild(btnElement);

            divElement.appendChild(imgElement);
            divElement.appendChild(detalhesElement);
            divElement.appendChild(cBotaoElement);

            productContainer.appendChild(divElement);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }

  if (value == 1.1) {

    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;


          if (productStop === "sim") {

            const divElement = document.createElement("div");
            divElement.classList.add("SuperM");

            const imgElement = document.createElement("img");
            imgElement.src = productImage;

            const detalhesElement = document.createElement("div");
            detalhesElement.classList.add("detalhes");

            const h2Element = document.createElement("h2");
            h2Element.textContent = productName;

            const h3Element = document.createElement("h3");
            h3Element.textContent = "Endereço: " + productLocal;

            const h4Element = document.createElement("h4");
            h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

            detalhesElement.appendChild(h2Element);
            detalhesElement.appendChild(h3Element);
            detalhesElement.appendChild(h4Element);


            const cBotaoElement = document.createElement("div");
            cBotaoElement.classList.add("CBotao");

            const btnElement = document.createElement("button");
            btnElement.classList.add("btn");
            btnElement.id = "btn";
            btnElement.textContent = "Marcar";


            const marker = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [
                  new ol.Feature({
                    geometry: new ol.geom.Point(
                      ol.proj.fromLonLat([productLAT,productLONG])
                    )
                  })
                ],
              }),
              style: new ol.style.Style({
                image: new ol.style.Icon ({
                  src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                  size: [512,512],
                  scale: 0.1
                })
              })
            })

            let teste = 1;

            // Event listener para o clique no botão
            btnElement.addEventListener("click", () => {
              if (teste == 1)
              {
                map.addLayer(marker);
                teste = 0;
              }
              else
              {
                map.removeLayer(marker);
                teste = 1;
              }
            });


            cBotaoElement.appendChild(btnElement);

            divElement.appendChild(imgElement);
            divElement.appendChild(detalhesElement);
            divElement.appendChild(cBotaoElement);

            productContainer.appendChild(divElement);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }

  if (value == 1.2) {

    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        data["Supermercados"].forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;


          if (productStop === "nao") {

            const divElement = document.createElement("div");
            divElement.classList.add("SuperM");

            const imgElement = document.createElement("img");
            imgElement.src = productImage;

            const detalhesElement = document.createElement("div");
            detalhesElement.classList.add("detalhes");

            const h2Element = document.createElement("h2");
            h2Element.textContent = productName;

            const h3Element = document.createElement("h3");
            h3Element.textContent = "Endereço: " + productLocal;

            const h4Element = document.createElement("h4");
            h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

            detalhesElement.appendChild(h2Element);
            detalhesElement.appendChild(h3Element);
            detalhesElement.appendChild(h4Element);


            const cBotaoElement = document.createElement("div");
            cBotaoElement.classList.add("CBotao");

            const btnElement = document.createElement("button");
            btnElement.classList.add("btn");
            btnElement.id = "btn";
            btnElement.textContent = "Marcar";

            const marker = new ol.layer.Vector({
              source: new ol.source.Vector({
                features: [
                  new ol.Feature({
                    geometry: new ol.geom.Point(
                      ol.proj.fromLonLat([productLAT,productLONG])
                    )
                  })
                ],
              }),
              style: new ol.style.Style({
                image: new ol.style.Icon ({
                  src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                  size: [512,512],
                  scale: 0.1
                })
              })
            })
    
        let teste = 1;

        // Event listener para o clique no botão
        btnElement.addEventListener("click", () => {
          if (teste == 1)
          {
            map.addLayer(marker);
            teste = 0;
          }
          else
          {
            map.removeLayer(marker);
            teste = 1;
          }
        });


            cBotaoElement.appendChild(btnElement);

            divElement.appendChild(imgElement);
            divElement.appendChild(detalhesElement);
            divElement.appendChild(cBotaoElement);

            productContainer.appendChild(divElement);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });

  }


  if (value == 3.1) {
    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        const products = data["Supermercados"];
        const sortedProducts = products.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordenar produtos por nome

        sortedProducts.forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;

          const divElement = document.createElement("div");
          divElement.classList.add("SuperM");

          const imgElement = document.createElement("img");
          imgElement.src = productImage;

          const detalhesElement = document.createElement("div");
          detalhesElement.classList.add("detalhes");

          const h2Element = document.createElement("h2");
          h2Element.textContent = productName;

          const h3Element = document.createElement("h3");
          h3Element.textContent = "Endereço: " + productLocal;

          const h4Element = document.createElement("h4");
          h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

          detalhesElement.appendChild(h2Element);
          detalhesElement.appendChild(h3Element);
          detalhesElement.appendChild(h4Element);


          const cBotaoElement = document.createElement("div");
          cBotaoElement.classList.add("CBotao");

          const btnElement = document.createElement("button");
          btnElement.classList.add("btn");
          btnElement.id = "btn";
          btnElement.textContent = "Marcar";


          const marker = new ol.layer.Vector({
            source: new ol.source.Vector({
              features: [
                new ol.Feature({
                  geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([productLAT,productLONG])
                  )
                })
              ],
            }),
            style: new ol.style.Style({
              image: new ol.style.Icon ({
                src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                size: [512,512],
                scale: 0.1
              })
            })
          })
  
          let teste = 1;

          // Event listener para o clique no botão
          btnElement.addEventListener("click", () => {
            if (teste == 1)
            {
              map.addLayer(marker);
              teste = 0;
            }
            else
            {
              map.removeLayer(marker);
              teste = 1;
            }
          });


          cBotaoElement.appendChild(btnElement);

          divElement.appendChild(imgElement);
          divElement.appendChild(detalhesElement);
          divElement.appendChild(cBotaoElement);

          productContainer.appendChild(divElement);
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  }


  if (value == 3.2) {
    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        const products = data["Supermercados"];
        const sortedProducts = products.sort((a, b) => b.nome.localeCompare(a.nome)); // Ordenar produtos por nome

        sortedProducts.forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;

          const divElement = document.createElement("div");
          divElement.classList.add("SuperM");

          const imgElement = document.createElement("img");
          imgElement.src = productImage;

          const detalhesElement = document.createElement("div");
          detalhesElement.classList.add("detalhes");

          const h2Element = document.createElement("h2");
          h2Element.textContent = productName;

          const h3Element = document.createElement("h3");
          h3Element.textContent = "Endereço: " + productLocal;

          const h4Element = document.createElement("h4");
          h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

          detalhesElement.appendChild(h2Element);
          detalhesElement.appendChild(h3Element);
          detalhesElement.appendChild(h4Element);


          const cBotaoElement = document.createElement("div");
          cBotaoElement.classList.add("CBotao");

          const btnElement = document.createElement("button");
          btnElement.classList.add("btn");
          btnElement.id = "btn";
          btnElement.textContent = "Marcar";


          const marker = new ol.layer.Vector({
            source: new ol.source.Vector({
              features: [
                new ol.Feature({
                  geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([productLAT,productLONG])
                  )
                })
              ],
            }),
            style: new ol.style.Style({
              image: new ol.style.Icon ({
                src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                size: [512,512],
                scale: 0.1
              })
            })
          })
  
          let teste = 1;

          // Event listener para o clique no botão
          btnElement.addEventListener("click", () => {
            if (teste == 1)
            {
              map.addLayer(marker);
              teste = 0;
            }
            else
            {
              map.removeLayer(marker);
              teste = 1;
            }
          });

          cBotaoElement.appendChild(btnElement);

          divElement.appendChild(imgElement);
          divElement.appendChild(detalhesElement);
          divElement.appendChild(cBotaoElement);

          productContainer.appendChild(divElement);
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  }


  if (value == 3.3) {
    const productContainer = document.getElementById("lista");
    // Limpar elementos anteriores antes de construir novamente
    limparContainer(productContainer);
    // Fetch the JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Use the fetched data
        const products = data["Supermercados"];
        const sortedProducts = products.sort((a, b) => b.pontuação - a.pontuação); // Ordenar produtos por pontuação em ordem decrescente

        sortedProducts.forEach((product) => {
          const productName = product.nome;
          const productLocal = product.Endereço;
          const productPoint = product.pontuação;
          const productImage = product.imagem;
          const productStop = product.caracteristicas[0].estacionamento;
          const productCarne = product.caracteristicas[0].açogue;
          const productPao = product.caracteristicas[0].padaria;
          const productFolha = product.caracteristicas[0].hortifruti;
          const productVinho = product.caracteristicas[0].adega;
          const productLAT = product.latitude;
          const productLONG = product.longitude;

          const divElement = document.createElement("div");
          divElement.classList.add("SuperM");

          const imgElement = document.createElement("img");
          imgElement.src = productImage;

          const detalhesElement = document.createElement("div");
          detalhesElement.classList.add("detalhes");

          const h2Element = document.createElement("h2");
          h2Element.textContent = productName;

          const h3Element = document.createElement("h3");
          h3Element.textContent = "Endereço: " + productLocal;

          const h4Element = document.createElement("h4");
          h4Element.textContent = "Pontuação: " + productPoint + " estrelas" + "  ||  " + "Estacionamento: " + productStop + "  ||  " + "Açogue: " + productCarne + "  ||  " + "Padaria: " + productPao + "  ||  " + "Hortifruti: " + productFolha + "  ||  " + "Adega: " + productVinho;

          detalhesElement.appendChild(h2Element);
          detalhesElement.appendChild(h3Element);
          detalhesElement.appendChild(h4Element);


          const cBotaoElement = document.createElement("div");
          cBotaoElement.classList.add("CBotao");

          const btnElement = document.createElement("button");
          btnElement.classList.add("btn");
          btnElement.id = "btn";
          btnElement.textContent = "Marcar";


          const marker = new ol.layer.Vector({
            source: new ol.source.Vector({
              features: [
                new ol.Feature({
                  geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([productLAT,productLONG])
                  )
                })
              ],
            }),
            style: new ol.style.Style({
              image: new ol.style.Icon ({
                src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                size: [512,512],
                scale: 0.1
              })
            })
          })
  
          let teste = 1;

          // Event listener para o clique no botão
          btnElement.addEventListener("click", () => {
            if (teste == 1)
            {
              map.addLayer(marker);
              teste = 0;
            }
            else
            {
              map.removeLayer(marker);
              teste = 1;
            }
          });


          cBotaoElement.appendChild(btnElement);

          divElement.appendChild(imgElement);
          divElement.appendChild(detalhesElement);
          divElement.appendChild(cBotaoElement);


          productContainer.appendChild(divElement);
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  }



});





/*
-------------------------------- TESTE -----------------------
*/