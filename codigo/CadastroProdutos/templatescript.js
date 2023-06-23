// Obter o formulário do HTML
const form = document.querySelector('.formulario');

// Adicionar um evento ao botão de criar produto
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir o envio do formulário

    // Obter as informações dos inputs
    const nome = form.nome.value.trim();
    const marca = form.marca.value.trim();
    const preco = form.preço.value.trim();

    // Obter o arquivo de imagem
    const imagem = form.imagem.files[0];

    // Verificar se os campos estão preenchidos
    if (!nome || !marca || !preco || !imagem) {
        alert('Por favor, preencha todos os campos!');
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
        const produto = { nome, marca, preco, imagem: reader.result };

        // Obter a lista de produtos armazenada no LocalStorage ou criar uma nova lista vazia se ela ainda não existe
        let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

        // Adicionar o novo produto à lista de produtos
        produtos.push(produto);

        // Armazenar a lista atualizada de produtos no LocalStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));
        alert("Item criado.")

        // Limpar os valores dos campos do formulário
        form.reset();
    };
});