
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
-------------------------------- SUPERMERCADOS -----------------------
*/


fetch('../../assets/db/supermercados.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    })



fetch('../../assets/db/supermercados.json')
    .then(res => res.json())
    .then(data => {
        let str = '';
        for (let i = 0; i < data.supermercados.length; i++) {
            let item = data.supermercados[i];

            str += `<div class="SuperM">
            <img src="../../assets/images/${item.superIMG}.jpg">
            <div class="detalhes">
                <h2>${item.displayname}</h2>
                <h3>${item.superEndereço}</h3>
                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
            </div>
            <div class="CBotao">
                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
            </div>
        </div>`
        }

        document.getElementById('lista').innerHTML = str;
    })

const selectCategoria = document.getElementById('CARACTERISTICAS');
const selectFiltro = document.getElementById('FILTRO');
const selectEstac = document.getElementById('CARACTERISTICAS2');



function filtrar() {
    fetch('../../assets/db/supermercados.json')
        .then(res => res.json())
        .then(data => {
            let str = '';
            document.getElementById('lista').innerHTML = str; //limpar kkkk
            var Categoria = selectCategoria.options[selectCategoria.selectedIndex].value;
            var Filtro = selectFiltro.options[selectFiltro.selectedIndex].value;
            var Estacionar = selectEstac.options[selectEstac.selectedIndex].value;



            if (Filtro === "") {
                for (let i = 0; i < data.supermercados.length; i++) {
                    let item = data.supermercados[i];

                    if (Categoria === '') {
                        if (Estacionar === '') {
                            str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem') {
                            if (item.caracteristicas[0].estacionamento === 'nao') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                        }
                        else if (Estacionar === 'com') {
                            if (item.caracteristicas[0].estacionamento === 'sim') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                        }
                    }
                    else if (Categoria === 'hortifruti') {
                        if (item.caracteristicas[0].hortifruti === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'açogue') {
                        if (item.caracteristicas[0].açogue === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'padaria') {
                        if (item.caracteristicas[0].padaria === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'adega') {
                        if (item.caracteristicas[0].adega === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }

                }
            }
            else if (Filtro == 1) {
                data.supermercados.sort((a, b) => a.displayname.localeCompare(b.displayname));

                for (let i = 0; i < data.supermercados.length; i++) {
                    let item = data.supermercados[i];

                    if (Categoria === '') {
                        if (Estacionar === '') {
                            str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem') {
                            if (item.caracteristicas[0].estacionamento === 'nao') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                        }
                        else if (Estacionar === 'com') {
                            if (item.caracteristicas[0].estacionamento === 'sim') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                        }
                    }
                    else if (Categoria === 'hortifruti') {
                        if (item.caracteristicas[0].hortifruti === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                    <img src="../../assets/images/${item.superIMG}.jpg">
                                    <div class="detalhes">
                                    <h2>${item.displayname}</h2>
                                    <h3>${item.superEndereço}</h3>
                                    <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                   </div>
                                   
                                   <div class="CBotao">
                                       <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                                   </div>
                                   </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                    <img src="../../assets/images/${item.superIMG}.jpg">
                                    <div class="detalhes">
                                    <h2>${item.displayname}</h2>
                                    <h3>${item.superEndereço}</h3>
                                    <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                   </div>
                                   
                                   <div class="CBotao">
                                       <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                                   </div>
                                   </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'açogue') {
                        if (item.caracteristicas[0].açogue === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                    <img src="../../assets/images/${item.superIMG}.jpg">
                                    <div class="detalhes">
                                    <h2>${item.displayname}</h2>
                                    <h3>${item.superEndereço}</h3>
                                    <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                   </div>
                                   
                                   <div class="CBotao">
                                       <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                                   </div>
                                   </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                    <img src="../../assets/images/${item.superIMG}.jpg">
                                    <div class="detalhes">
                                    <h2>${item.displayname}</h2>
                                    <h3>${item.superEndereço}</h3>
                                    <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                   </div>
                                   
                                   <div class="CBotao">
                                       <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                                   </div>
                                   </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'padaria') {
                        if (item.caracteristicas[0].padaria === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'adega') {
                        if (item.caracteristicas[0].adega === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }

                }

            }
            else if (Filtro == 2) {
                data.supermercados.sort((a, b) => b.pontuação - a.pontuação);
                for (let i = 0; i < data.supermercados.length; i++) {
                    let item = data.supermercados[i];

                    if (Categoria === '') {
                        if (Estacionar === '') {
                            str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem') {
                            if (item.caracteristicas[0].estacionamento === 'nao') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                        }
                        else if (Estacionar === 'com') {
                            if (item.caracteristicas[0].estacionamento === 'sim') {
                                str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                            }
                        }
                    }
                    else if (Categoria === 'hortifruti') {
                        if (item.caracteristicas[0].hortifruti === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'açogue') {
                        if (item.caracteristicas[0].açogue === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'padaria') {
                        if (item.caracteristicas[0].padaria === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    if (Estacionar === '') {
                                        str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                                    }
                                    else if (Estacionar === 'sem') {
                                        if (item.caracteristicas[0].estacionamento === 'nao') {
                                            str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                        }
                                    }
                                    else if (Estacionar === 'com') {
                                        if (item.caracteristicas[0].estacionamento === 'sim') {
                                            str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (Categoria === 'adega') {
                        if (item.caracteristicas[0].adega === 'sim') {
                            if (Estacionar === '') {
                                str += `<div class="SuperM">
                             <img src="../../assets/images/${item.superIMG}.jpg">
                             <div class="detalhes">
                             <h2>${item.displayname}</h2>
                             <h3>${item.superEndereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                            else if (Estacionar === 'sem') {
                                if (item.caracteristicas[0].estacionamento === 'nao') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                            else if (Estacionar === 'com') {
                                if (item.caracteristicas[0].estacionamento === 'sim') {
                                    str += `<div class="SuperM">
                                <img src="../../assets/images/${item.superIMG}.jpg">
                                <div class="detalhes">
                                <h2>${item.displayname}</h2>
                                <h3>${item.superEndereço}</h3>
                                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                               </div>
                               
                               <div class="CBotao">
                                   <button class="btn" id="btn-${item.superID}" onclick="teste(this.id)">Mostrar mais</button>
                               </div>
                               </div>`
                                }
                            }
                        }
                    }

                }
            }



            document.getElementById('lista').innerHTML = str;
        })
}


// Várias função

function teste(botaoId) {
    fetch('../../assets/db/supermercados.json')
        .then(res => res.json())
        .then(data => {
            var idMercado = botaoId.split('-')[1];
            let str = '';

            for (let i = 0; i < data.supermercados.length; i++) {
                let item = data.supermercados[i];

                if (item.superID === parseInt(idMercado)) {
                    str += `<div class="popup-fundo">
                                <div class="popup">
                                    <div class="popup-close" onclick="teste2()">x</div>
                                    <div class="popup-conteudo">
                                        <h2>${item.displayname}</h2>
                                        <img src="../../assets/images/${item.superIMG}.jpg">
                                        <h3>${item.superEndereço}</h3>
                                        <h4>${item.superHoras}</h3>
                                        <p>${item.pontuação} Estrelas</p>
                                        <a href="../PaginaSupermercado/PaginaSupermercado.html?id=${item.superID}">Veja mais</a>
                                        <a href="#" id="btn-${item.superID}"onclick="mapaTeste(this.id)">Veja no mapa</a>
                                    </div>
                                </div>
                            </div>`;
                }
            }

            document.getElementById('popup-container').innerHTML = str;
            teste3();
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}

function teste3() {
    let popup = document.querySelector('.popup-fundo');
    if (popup) {
        popup.style.display = 'flex';
    }
}


function teste2() {
    let str = '';

    document.getElementById('popup-container').innerHTML = str;
}

let marker; //ai ai

function mapaTeste( idBotao ) {
    let str = '';
    let popup = document.querySelector('.fog');
    document.getElementById('popup-container').innerHTML = str;
    if (popup) {
        popup.style.display = 'block';
    }

    fetch('../../assets/db/supermercados.json')
        .then(res => res.json())
        .then(data => {

            var idMercado1 = parseInt (idBotao.split('-')[1]);
            for (let i = 0; i < data.supermercados.length; i++) {
                let item = data.supermercados[i];

                if (item.superID === idMercado1)
                {
                    const productLAT = parseFloat(item.latitude);
                    const productLONG = parseFloat(item.longitude);
                    
                    atualizarCentroMapa(productLONG, productLAT);

                     marker = new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: [
                                new ol.Feature({
                                    geometry: new ol.geom.Point(
                                        ol.proj.fromLonLat([productLONG, productLAT])
                                    )
                                })
                            ],
                        }),
                        style: new ol.style.Style({
                            image: new ol.style.Icon({
                                src: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png',
                                size: [512, 512],
                                scale: 0.1
                            })
                        })
                    })  //marcador

                    map.addLayer(marker);

                } //end if
            }
        }) //end fetch

}

function desmarcar() {
    let popup = document.querySelector('.fog');
    if (popup) {
        popup.style.display = 'none';
    }
    map.removeLayer(marker);
    resetZoom();
}


function atualizarCentroMapa(longitude, latitude) {
    var novoCentro = ol.proj.fromLonLat([longitude, latitude]);
    map.getView().setCenter(novoCentro);
    map.getView().setZoom(20);
}

function resetZoom () {
    map.getView().setZoom(17);
}

const search = () => {
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const produto = document.querySelectorAll('.SuperM');
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