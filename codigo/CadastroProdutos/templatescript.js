// Obter o formulário do HTML
const form = document.querySelector('.formulario');

// Adicionar um evento ao botão de criar produto
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir o envio do formulário

    // Obter as informações dos inputs
    const name = form.nome.value.trim();
    const marca = form.marca.value.trim();
    const preco = form.preço.value.trim();

    //pegar o id atual
    let produtosTeste = JSON.parse(localStorage.getItem('produtos') || '[]');

    let maiorId = 0;
    for (let i = 0; i < produtosTeste.length; i++)
    {
        let item = produtosTeste [i];
        if (item.id > maiorId)
        {
            maiorId = item.id;
        }
    }
    maiorId += 1; //define o novo id

    const favoritado = false;
    const id = maiorId;

    
    // Obter o arquivo de imagem
    const imagem = form.imagem.files[0];

    const tags = [];
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked'); // Obter todas as checkboxes selecionadas
    checkboxes.forEach((checkbox) => {
        const checkboxId = checkbox.id;
        const checkboxLabel = form.querySelector(`label[for="${checkboxId}"]`).textContent; // Obter o texto da label correspondente à checkbox selecionada
        tags.push(checkboxLabel); // Adicionar a label ao array tags
    });


    // Verificar se os campos estão preenchidos
    if (!name || !marca || !preco || !imagem || tags.length === 0) {
        alert('Por favor, preencha todos os campos e selecione pelo menos uma checkbox!');
        return;
    }

    // Verificar se o campo de preço contém apenas números
    if (!/^\d+(\.\d+)?$/.test(preco)) {
        alert('O campo preço só aceita números!');
        return;
    }

    // Ler o conteúdo do arquivo de imagem usando FileReader
    const reader = new FileReader();
    reader.readAsDataURL(imagem);
    reader.onload = () => {
        // Criar um objeto com as informações do produto (JSON)
        // const produto = { nome, marca, preco, imagem: reader.result };
        const produto = {id, favoritado}
        const produtosDB = {favoritado, id, imagem, name, tags}

        // Obter a lista de produtos armazenada no LocalStorage ou criar uma nova lista vazia se ela ainda não existe
        let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
        let produtosDBJSON = JSON.parse(localStorage.getItem('produtosDB') || '[]');

        // Adicionar o novo produto à lista de produtos
        produtos.push(produto);
        produtosDBJSON.produtos.push(produtosDB);

        // Armazenar a lista atualizada de produtos no LocalStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));
        localStorage.setItem('produtosDB', JSON.stringify(produtosDBJSON));
        alert("Item criado.")

        // Limpar os valores dos campos do formulário
        form.reset();
    };
});