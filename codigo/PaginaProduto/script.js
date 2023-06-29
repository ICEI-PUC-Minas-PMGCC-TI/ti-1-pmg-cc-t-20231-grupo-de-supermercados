// Definir classe para achar detalhes de produtos.
class prodPos {
	constructor(smID, pIndex, tprice, tmerca, tnam, tID) {
		this.smID = smID;
		this.pIndex = pIndex;
		this.tprice = tprice;
		this.tmerca = tmerca;
		this.tnam = tnam;
		this.tID = tID;
	}
}

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
// let positions = getPos(1); // - FUNCAO TESTE

// Pegar a partir da URL
var url = new URL(window.location.href);
var idParam = url.searchParams.get('id');
var id = parseInt(idParam);

let positions = getPos(id);

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
if (divisor == 0) {
	divisor++;
}
average = average / divisor
average = average.toFixed(2) // Mostra até duas casas decimais.


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

	<a href="../PaginaSupermercado/PaginaSupermercado.html?id=${positions[i].tID}"<p class="superm"> ${positions[i].tmerca}
        </p></a>

        <p class="prodname pname"> ${positions[i].tnam}
        </p>
        <div class="pricetext">
            <p>R$ </p>
            <p class="preco">${positions[i].tprice}</p>
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
	// Caso não de para carregar mostramos um alerta de erro.
	else {
		alert("DB Não encontrada.");
	}
	return objDados;
}

// Posicao e Preco de certos produtos

function getPos(name) {
	// Ler os dados de Local Storage
	let smDados = leDados('supermercadosDB');
	let positions = [];
	let prodName = 0;

	// Quantidade de produtos total encontrado, em todos supermercados
	for (let index = 0; index < smDados.supermercados.length; index++) {
		for (let index2 = 0; index2 < smDados.supermercados[index].mercadorias.length; index2++) {
			prodName = smDados.supermercados[index].mercadorias[index2].id;
			if (name == prodName) {
				positions.push(new prodPos(
					index,
					index2,
					smDados.supermercados[index].mercadorias[index2].price,
					smDados.supermercados[index].name,
					smDados.supermercados[index].mercadorias[index2].name,
					smDados.supermercados[index].superID
				));
			}
		}
	}
	return positions;
}