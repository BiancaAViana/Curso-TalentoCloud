const body = document.querySelector('body');

const titulo = document.createElement('h1');
const produto = document.createElement('ul');

titulo.id = 'titulo';
titulo.innerText = `Loja.com`;

produto.innerHTML= `
<li> Caderno Universitário Estampado Preto </li>
<li> Com uma matéria e 80 folhas, possui a capa em estampa encantadora. Perfeito para acompanhar vários momentos do dia, pois foi confeccionado com material de ótima qualidade e o acabamento resistente.</li>
<li> Preço: R$12,99 </li>`

body.appendChild(titulo);
body.appendChild(produto);


