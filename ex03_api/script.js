//selecionar itens
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario');
const produtosCadastrados = document.getElementById('produtos-cadastrados');
const helpMsg = document.getElementsByClassName('help-msg');

//função
function cadastrarProduto(event) {
    event.preventDefault();
    feedbackUsuario.innerText = '';

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            produto: nomeProduto.value,
            valor: valorProduto.value,
            descricao: descricaoProduto.value
        })
    })
        .then((resp) => console.log(resp))
        .then((data) => {
            console.log(data)
        helpMsg.innerText = '';

        //A REQUISIÇÃO ESTA RESPONDENDO(Status:200) MAS OS DADOS ESTÃO VINDO UNDEFINED COMO SE A ROTA NÃO ACEITASSE OS VALORES
        //    produtosCadastrados.innerHTML = `
        //     <p><span>Produto:</span> ${data.produto}</p>
        //     <p><span>Valor:</span> R$${data.valor}</p> 
        //     <p><span>Descrição:</span> ${data.descricao}</p>
        //     `

            produtosCadastrados.innerHTML = `
            <p><span>Produto:</span> ${nomeProduto.value}</p>
            <p><span>Valor:</span> R$${valorProduto.value}</p> 
            <p><span>Descrição:</span> ${descricaoProduto.value}</p>
            `
            alert('Produto cadastrado com sucesso!');

            nomeProduto.value = '';
            valorProduto.value = '';
            descricaoProduto.value = '';
        })
        .catch((err) => {
            console.log(err);
            feedbackUsuario.innerHTML = 'Produto não cadastrado! Tente novamente.'
        })
}

//evento do botão
btnEnviar.addEventListener('click', (event) => cadastrarProduto(event));