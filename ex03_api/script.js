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

    const bodyJson = JSON.stringify({
        produto: nomeProduto.value,
        valor: valorProduto.value,
        descricao: descricaoProduto.value
    })

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: bodyJson
    })
        .then(resp => resp.json())
        .then(data => {
            console.log('data :',data)
            helpMsg.innerText = '';

            //A REQUISIÇÃO ESTA RESPONDENDO(Status:200) MAS O DATA. ESTÁ RETORNANDO COMO UNDEFINED. SÓ CONSIGO ACESSA-LA COM .JSON.
           produtosCadastrados.innerHTML = `
             <p><span>Produto:</span> ${data.json.produto}</p>
             <p><span>Valor:</span> R$${data.json.valor}</p> 
             <p><span>Descrição:</span>${data.json.descricao}</p>
             `

            nomeProduto.value = '';
            valorProduto.value = '';
            descricaoProduto.value = '';

             alert('Produto cadastrado com sucesso!');
        })
        .catch((err) => {
            console.log(err);
            feedbackUsuario.innerHTML = 'Produto não cadastrado! Tente novamente.'
        })
}

//evento do botão
btnEnviar.addEventListener('click', (event) => cadastrarProduto(event));