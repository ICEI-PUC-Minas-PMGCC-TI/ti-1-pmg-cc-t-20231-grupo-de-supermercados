// Definir classe para achar detalhes de produtos.
class prodPos {
	constructor(smID, pIndex, tprice, tmerca, tnam) {
		this.smID = smID;
		this.pIndex = pIndex;
		this.tprice = tprice;
		this.tmerca = tmerca;
		this.tnam = tnam;
	}
}

// Simular produtos já em estoque
function simProducts() {
	// Carregar lista de produtos template
	$.getJSON("/../../assets/db/produtos.json", function (produtosData) {
		//localStorage.setItem("produtos", JSON.stringify(produtosData));

		// Carregar lista de supermercados template
		$.getJSON("/../../assets/db/supermercados.json", function (supermercadosData) {

			// Passar o nome correto de cada prodto para cada supermercado que contenha o ID desse produto
			let currentID = 0;
			for (let index = 0; index < supermercadosData.supermercados.length; index++) {
				for (let index2 = 0; index2 < supermercadosData.supermercados[index].mercadorias.length; index2++) {
					currentID = supermercadosData.supermercados[index].mercadorias[index2].id;
					supermercadosData.supermercados[index].mercadorias[index2].name = produtosData.produtos[currentID].name;
				}
			}

			localStorage.setItem("supermercadosDB", JSON.stringify(supermercadosData));
		});
		localStorage.setItem("produtosDB", JSON.stringify(produtosData));
	});

};

// Fim da simulação. Precos estão carregados.

//################################################################################
//########################### Motor da Comparação ################################
//################################################################################

// Get the items we are comparing. For this example, we'll compare Gatorade.

/* 

Você pode mudar o 'Gatorade' embaixo para qualquer outro produto no Json.
Experimente:

 - Maca
 - Gatorade
 - Biscoitos-Polvilho
-------------------------------\\
-------------------------vvvvvvvvvvvvvv---------------
*/
let positions = getPos("Gatorade");
positions.sort(function (a, b) {
	return parseFloat(a.tprice) - parseFloat(b.tprice);
});

// Get the average price
let average = 0.0;
let divisor = 0.0;
for (let index3 = 0.0; index3 < positions.length; index3++) {
	average += positions[index3].tprice
	divisor++;
}
if (divisor == 0){
	divisor++;}
average = average / divisor

//################################################################################
//##################### Carregar Pagina Dinamicamente ############################
//################################################################################

document.addEventListener("DOMContentLoaded", function () {

	const avgprice = document.querySelector('.ppreco');
	avgprice.textContent = average.toString();

	$("#pimage").attr("src", `/../../assets/images/${positions[0].tnam}.jpg`);

	const prodname = document.querySelector('.pname');
	prodname.textContent = `${positions[0].tnam}`;
	// Get the parent section element
	const parentSection = document.querySelector('.productlist');

	// Loop 10 times to add the HTML code
	for (let i = 0; i < positions.length; i++) {
		// Create a new div with the productboxx class and set the id to i+1
		let newDiv = document.createElement('div');
		newDiv.classList.add('productbox');
		newDiv.setAttribute('id', i + 1);

		// Set the innerHTML of the new div to the original productbox HTML code
		newDiv.innerHTML = `
    <img class="pimage" src="/../../assets/images/${positions[0].tnam}.jpg">

    <div class="proddesc">

        <p class="superm"> ${positions[i].tmerca}
        </p>

        <p class="prodname pname"> ${positions[i].tnam}
        </p>
        <div class="pricetext">
            <p>R$ </p>
            <p class="preco">${positions[i].tprice}</p>
        </div>
        <div class="distancetext">
            <p class="distance">0.2</p>
            <p>KM</p>
        </div>
    </div>
  `;

		// Append the new div to the parent section
		parentSection.appendChild(newDiv);
	}
});

//################################################################################
//################################# EOF MAIN #####################################
//################################################################################


//################################################################################
//###################### OUTRAS FUNCOES USADAS NO WEBAPP #########################
//################################################################################

// Ler produtos do Local Storage
function leDados(name) {
	let strDados = localStorage.getItem(name);
	let objDados = {};

	if (strDados) {
		objDados = JSON.parse(strDados);
	}
	else {
		objDados = {
			supermercados: [
				{
					name: "SuperSeu",
					superID: 1,
					mercadorias: [
						{
							name: "Gatorade",
							id: 1,
							price: 10.99
						},
						{
							name: "Biscoitos-Polvilho",
							id: 2,
							price: 2.99
						}
					]
				},
				{
					name: "CarreFila",
					superID: 2,
					mercadorias: [
						{
							name: "Gatorade",
							id: 1,
							price: 2.99
						},
						{
							name: "Maca",
							id: 0,
							price: 3.49
						}
					]
				}
			]
		};
		simProducts();
	}
	return objDados;
}

// Posicao e Preco de certos produtos

function getPos(name) {
	// Ler os dados de Local Storage
	let smDados = leDados('supermercadosDB');
	let positions = [];
	name.toLowerCase();
	let prodName = "test";

	// Quantidade de produtos total encontrado, em todos supermercados
	for (let index = 0; index < smDados.supermercados.length; index++) {
		for (let index2 = 0; index2 < smDados.supermercados[index].mercadorias.length; index2++) {
			prodName = smDados.supermercados[index].mercadorias[index2].name;
			if (name == prodName) {
				positions.push(new prodPos(
					index,
					index2,
					smDados.supermercados[index].mercadorias[index2].price,
					smDados.supermercados[index].name,
					smDados.supermercados[index].mercadorias[index2].name,
				));
			}
		}
	}
	return positions;
}