// ESSA SEÇÃO DO CODIGO SERVE PARA CARREGAR DO JSON PARA O LOCAL STORAGE!

testeCarregar("supermercadosDB")
testeCarregar("produtosDB")


/*
A função chama-se 'Sim Products', mas ela não simula nada.
A função carrega o que está escrito no JSON para o LocalStorage.
*/

function simProducts() {
	// Carregar lista de produtos template
	$.getJSON("/assets/db/produtos.json", function (produtosData) {
		//localStorage.setItem("produtos", JSON.stringify(produtosData));

		// Carregar lista de supermercados template
		$.getJSON("/assets/db/supermercados.json", function (supermercadosData) {

			// Passar o nome correto de cada prodto para cada supermercado que contenha o ID desse produto
			let currentID = 0;
			for (let index = 0; index < supermercadosData.supermercados.length; index++) {
				for (let index2 = 0; index2 < supermercadosData.supermercados[index].mercadorias.length; index2++) {
					currentID = supermercadosData.supermercados[index].mercadorias[index2].id;
					supermercadosData.supermercados[index].mercadorias[index2].name = produtosData.produtos[currentID].name;
				}
			}
			// Supermercados.json >>> supermercadosDB
			localStorage.setItem("supermercadosDB", JSON.stringify(supermercadosData));
		});
		// Produtos.json >>> produtosDB
		localStorage.setItem("produtosDB", JSON.stringify(produtosData));
	});
};

/*
Testar se é preciso recarregar a página
*/

function testeCarregar(name) {
	let strDados = localStorage.getItem(name);

	if (!strDados) {
		simProducts();
	}
}

// EOF CARREGAR DO LOCAL STORAGE