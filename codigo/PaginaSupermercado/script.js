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

//################################################################################
//##################### Carregar Pagina Dinamicamente ############################
//################################################################################

// let market = getPos("superseu");

// Pegar a partir da URL
var url = new URL(window.location.href);
var idParam = url.searchParams.get('id');
var id = parseInt(idParam);
let market = getPos(id);

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

	$("#smmage").attr("src", `/../../assets/images/${market[0].smImg}.jpg`);

	// Get the parent section element
	const parentSection = document.querySelector('.productlist');

	// Loop X times to add the HTML code
	for (let i = 0; i < market[0].smMerchandise.length; i++) {
		// Create a new div with the productboxx class and set the id to i+1
		let newDiv = document.createElement('div');
		newDiv.classList.add('productbox');
		newDiv.setAttribute('id', i + 1);

		// Set the innerHTML of the new div to the original productbox HTML code
		newDiv.innerHTML = `<a href="../PaginaProduto/PaginaProduto.html?id=${market[0].smMerchandise[i].pID}">
    <img class="pimage" src="/../../assets/images/${market[0].smMerchandise[i].pName}.jpg">

    <div class="proddesc">

        <p class="prodname pname"> ${market[0].smMerchandise[i].pName}
        </p>
        <div class="pricetext">
            <p>R$ </p>
            <p class="preco">${market[0].smMerchandise[i].pPrice}</p>
        </div>
    </div></a>
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
	// Caso não de para carregar mostramos um alerta de erro.
	else {
		alert("DB Não encontrada.");
	}
	return objDados;
}

// Dados de um mercado em específico

function getPos(name) {
	// Ler os dados de Local Storage
	let smDados = leDados('supermercadosDB');
	let market = [];
	let estoque = [];
	let MarketName = 0;

	// Quantidade de produtos total encontrado, em todos supermercados
	for (let index = 0; index < smDados.supermercados.length; index++) {
		// Dados sobre cada supermercado.
		MarketName = smDados.supermercados[index].superID;
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
