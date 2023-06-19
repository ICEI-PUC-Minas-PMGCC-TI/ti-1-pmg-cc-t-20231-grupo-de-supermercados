// Definir classe que contem detalhes do produto de um supermercado.
class merchandise {
	constructor(pID, pName, pPrice) {
		this.pID = pID;
		this.pName = pName;
		this.pPrice = pPrice;
	}
}

// Definir classe para conter detalhes de cada supermercado.
class MarketPos {
	constructor(mNam, smID, smImg, smAddress, smHours, smMerchandise) {
		this.mNam = mNam;
		this.smID = smID;
		this.smImg = smImg;
		this.smAddress = smAddress;
		this.smHours = smHours;
		this.smMerchandise = smMerchandise;
	}
}

// Simular produtos já em estoque por meio do JSON
function simProducts() {
	// Carregar lista de produtos template
	$.getJSON("produtos.json", function (produtosData) {
		//localStorage.setItem("produtos", JSON.stringify(produtosData));

		// Carregar lista de supermercados template
		$.getJSON("supermercados.json", function (supermercadosData) {

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
//##################### Carregar Pagina Dinamicamente ############################
//################################################################################

let market = getPos("superseu");

// Para fins de teste, você pode mudar o parâmetro do getPos acima para qualquer 'name' definido
// dentro do supermercados.json. "carrefila" e "superseu" são os supermercados padrões que coloquei.
// Se você modificar o supermercados.json, limpar o local storage e regarregar a pagina, deve conseguir
// colocar mais supermercados também. Basta seguir o formato do JSON.

document.addEventListener("DOMContentLoaded", function () {

	const marketname = document.querySelector('.supername');
	marketname.textContent = market[0].mNam;

	const marketadd = document.querySelector('.address');
	marketadd.textContent = market[0].smAddress;

	const marketh = document.querySelector('.hourly');
	marketh.textContent = market[0].smHours;

	$("#smmage").attr("src", `images/${market[0].smImg}.jpg`);

	// Get the parent section element
	const parentSection = document.querySelector('.productlist');

	// Loop X times to add the HTML code
	for (let i = 0; i < market[0].smMerchandise.length; i++) {
		// Create a new div with the productboxx class and set the id to i+1
		let newDiv = document.createElement('div');
		newDiv.classList.add('productbox');
		newDiv.setAttribute('id', i + 1);

		// Set the innerHTML of the new div to the original productbox HTML code
		newDiv.innerHTML = `
    <img class="pimage" src="images/${market[0].smMerchandise[i].pName}.jpg">

    <div class="proddesc">

        <p class="prodname pname"> ${market[0].smMerchandise[i].pName}
        </p>
        <div class="pricetext">
            <p>R$ </p>
            <p class="preco">${market[0].smMerchandise[i].pPrice}</p>
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
		window.onbeforeunload = function () {
			// Clear the Local Storage
			localStorage.clear();
		};
	}

	// Caso não de para carregar, carregamos um modelo de baixa fidelidade
	// E recarregamos a pagina.

	else {
		alert("Simulação de produtos Concluida. A pagina será recarregada automaticamente.");
		setTimeout(function () {
			location.reload();
		}, 500);
		objDados = {
			supermercados: [
				{
					displayname: "SuperSeu",
					name: "superseu",
					superID: 1,
					superIMG: "supernosso",
					superEndereço: "R. Carijos, 814, Jardim America, Belo Horizonte - MG 30421-340",
					superHoras: "Abre às 7:00, Fecha às 20:00.",
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
					displayname: "CarreFila",
					name: "carrefila",
					superID: 2,
					superIMG: "carrefour",
					superEndereço: "R. Carijos, 814, Jardim America, Belo Horizonte - MG 30421-340",
					superHoras: "Abre às 7:00, Fecha às 20:00.",
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

// Dados de um mercado em específico

function getPos(name) {
	// Ler os dados de Local Storage
	let smDados = leDados('supermercadosDB');
	let market = [];
	let estoque = [];
	name.toLowerCase();
	let MarketName = "test";

	// Quantidade de produtos total encontrado, em todos supermercados
	for (let index = 0; index < smDados.supermercados.length; index++) {
		// Dados sobre cada supermercado.
		MarketName = smDados.supermercados[index].name;
		if (MarketName == name) {
			// Carregar dados sobre os produtos.
			for (let index2 = 0; index2 < smDados.supermercados[index].mercadorias.length; index2++) {
				estoque.push(new merchandise(
					smDados.supermercados[index].mercadorias[index2].id,  	  //pId
					smDados.supermercados[index].mercadorias[index2].name,	  //pName
					smDados.supermercados[index].mercadorias[index2].price	  //pPrice
				));
			}
			// E depois adiciona-lo no mercado em específico.
			market.push(new MarketPos(
				smDados.supermercados[index].displayname,    // mNam
				smDados.supermercados[index].superID,        // smID
				smDados.supermercados[index].superIMG,       // smImg
				smDados.supermercados[index].superEndereço,  // smAddress
				smDados.supermercados[index].superHoras,     // smHours
				estoque                  		             // smMerchandise
			));
		}
	}
	return market;
}
