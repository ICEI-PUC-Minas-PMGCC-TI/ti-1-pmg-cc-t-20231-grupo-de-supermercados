
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


function testeMapa (idBruto)
{
    var id = idBruto.split('-')[1];

    console.log (id);
}



/*
-------------------------------- SUPERMERCADOS -----------------------
*/


fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    })



fetch('data.json')
    .then(res => res.json())
    .then(data => {
        let str = '';
        for (let i = 0; i < data.Supermercados.length; i++) {
            let item = data.Supermercados[i];

            str += `<div class="SuperM">
            <img src="${item.imagem}">
            <div class="detalhes">
                <h2>${item.nome}</h2>
                <h3>${item.Endereço}</h3>
                <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
            </div>
            <div class="CBotao">
                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
            </div>
        </div>`
        }

        document.getElementById('lista').innerHTML = str;
    })

const selectCategoria = document.getElementById('CARACTERISTICAS');
const selectFiltro = document.getElementById('FILTRO');
const selectEstac = document.getElementById('CARACTERISTICAS2');



function filtrar() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            let str = '';
            document.getElementById('lista').innerHTML = str; //limpar kkkk
            var Categoria = selectCategoria.options[selectCategoria.selectedIndex].value;
            var Filtro = selectFiltro.options[selectFiltro.selectedIndex].value;
            var Estacionar = selectEstac.options[selectEstac.selectedIndex].value;



            if (Filtro === "") {
                for (let i = 0; i < data.Supermercados.length; i++) {
                    let item = data.Supermercados[i];

                    if (Categoria === '') 
                    {
                        if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                    }
                    else if (Categoria === 'hortifruti') 
                    {
                        if (item.caracteristicas[0].hortifruti === 'sim') 
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }
                    else if (Categoria === 'açogue')
                    {
                        if (item.caracteristicas[0].açogue === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }
                    else if (Categoria === 'padaria')
                    {
                        if (item.caracteristicas[0].padaria === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }
                    else if (Categoria === 'adega')
                    {
                        if (item.caracteristicas[0].adega === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }

                }
            }
            else if (Filtro == 1) {
                data.Supermercados.sort((a, b) => a.nome.localeCompare(b.nome));

                for (let i = 0; i < data.Supermercados.length; i++) {
                    let item = data.Supermercados[i];

                    if (Categoria === '') {
                        if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                    }
                    else if (Categoria === 'hortifruti') 
                    {
                        if (item.caracteristicas[0].hortifruti === 'sim') 
                        {
                            if (Estacionar === '')
                            {
                                str += `<div class="SuperM">
                                 <img src="${item.imagem}">
                                 <div class="detalhes">
                                 <h2>${item.nome}</h2>
                                 <h3>${item.Endereço}</h3>
                                 <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                </div>
                                
                                <div class="CBotao">
                                    <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                                </div>
                                </div>`
                            }
                            else if (Estacionar === 'sem')
                            {
                                if (item.caracteristicas[0].estacionamento === 'nao')
                                {
                                    str += `<div class="SuperM">
                                 <img src="${item.imagem}">
                                 <div class="detalhes">
                                 <h2>${item.nome}</h2>
                                 <h3>${item.Endereço}</h3>
                                 <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                </div>
                                
                                <div class="CBotao">
                                    <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                                </div>
                                </div>`
                                }
                            }
                            else if (Estacionar === 'com')
                            {
                                if (item.caracteristicas[0].estacionamento === 'sim')
                                {
                                    str += `<div class="SuperM">
                                 <img src="${item.imagem}">
                                 <div class="detalhes">
                                 <h2>${item.nome}</h2>
                                 <h3>${item.Endereço}</h3>
                                 <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                </div>
                                
                                <div class="CBotao">
                                    <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                                </div>
                                </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'açogue')
                    {
                        if (item.caracteristicas[0].açogue === 'sim')
                        {
                            if (Estacionar === '')
                            {
                                str += `<div class="SuperM">
                                 <img src="${item.imagem}">
                                 <div class="detalhes">
                                 <h2>${item.nome}</h2>
                                 <h3>${item.Endereço}</h3>
                                 <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                </div>
                                
                                <div class="CBotao">
                                    <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                                </div>
                                </div>`
                            }
                            else if (Estacionar === 'sem')
                            {
                                if (item.caracteristicas[0].estacionamento === 'nao')
                                {
                                    str += `<div class="SuperM">
                                 <img src="${item.imagem}">
                                 <div class="detalhes">
                                 <h2>${item.nome}</h2>
                                 <h3>${item.Endereço}</h3>
                                 <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                </div>
                                
                                <div class="CBotao">
                                    <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                                </div>
                                </div>`
                                }
                            }
                            else if (Estacionar === 'com')
                            {
                                if (item.caracteristicas[0].estacionamento === 'sim')
                                {
                                    str += `<div class="SuperM">
                                 <img src="${item.imagem}">
                                 <div class="detalhes">
                                 <h2>${item.nome}</h2>
                                 <h3>${item.Endereço}</h3>
                                 <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                                </div>
                                
                                <div class="CBotao">
                                    <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                                </div>
                                </div>`
                                }
                            }
                        }
                    }
                    else if (Categoria === 'padaria')
                    {
                        if (item.caracteristicas[0].padaria === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }
                    else if (Categoria === 'adega')
                    {
                        if (item.caracteristicas[0].adega === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }

                }

            }
            else if (Filtro == 2) {
                data.Supermercados.sort((a, b) => b.pontuação - a.pontuação);
                for (let i = 0; i < data.Supermercados.length; i++) {
                    let item = data.Supermercados[i];

                    if (Categoria === '') {
                        if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                    }
                    else if (Categoria === 'hortifruti') 
                    {
                        if (item.caracteristicas[0].hortifruti === 'sim') 
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }
                    else if (Categoria === 'açogue')
                    {
                        if (item.caracteristicas[0].açogue === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        }
                    }
                    else if (Categoria === 'padaria')
                    {
                        if (item.caracteristicas[0].padaria === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                            }
                        }
                        }
                    }
                    else if (Categoria === 'adega')
                    {
                        if (item.caracteristicas[0].adega === 'sim')
                        {
                            if (Estacionar === '')
                        {
                            str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                        }
                        else if (Estacionar === 'sem')
                        {
                            if (item.caracteristicas[0].estacionamento === 'nao')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
                            </div>
                            </div>`
                            }
                        }
                        else if (Estacionar === 'com')
                        {
                            if (item.caracteristicas[0].estacionamento === 'sim')
                            {
                                str += `<div class="SuperM">
                             <img src="${item.imagem}">
                             <div class="detalhes">
                             <h2>${item.nome}</h2>
                             <h3>${item.Endereço}</h3>
                             <h4>Pontuação: ${item.pontuação} estrelas || Estacionamento: ${item.caracteristicas[0].estacionamento} || Açogue: ${item.caracteristicas[0].açogue} || Padaria ${item.caracteristicas[0].padaria} || Hortifruti: ${item.caracteristicas[0].hortifruti} || Adega: ${item.caracteristicas[0].adega}</h4>
                            </div>
                            
                            <div class="CBotao">
                                <button class="btn" id="btn-${item.id}" onclick="teste(this.id)">Mostrar mais</button>
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


function teste(botaoId) {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            var idMercado = botaoId.split('-')[1];
            let str = '';

            for (let i = 0; i < data.Supermercados.length; i++) {
                let item = data.Supermercados[i];

                if (item.id === parseInt(idMercado)) {
                    str += `<div class="popup-fundo">
                                <div class="popup">
                                    <div class="popup-close" onclick="teste2()">x</div>
                                    <div class="popup-conteudo">
                                        <h2>${item.nome}</h2>
                                        <img src="${item.imagem}">
                                        <h3>${item.Endereço}</h3>
                                        <p>${item.pontuação} Estrelas</p>
                                        <a href="#">Veja mais</a>
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
        popup.style.display = 'block';
    }
}


function teste2 ()
{
    let str = '';

    document.getElementById('popup-container').innerHTML = str;
}