const titulo = document.getElementById('titulo');
const link = document.getElementsByTagName('a');
const listaDesordenada = document.getElementsByTagName('ul');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = `Este título foi inserido via dom.`;
link[0].innerText = `Link para Proz Educação.`;

listaDesordenada[0].innerHTML = `
<li>lista desordenada 1</li>
<li>lista desordenada 2</li>
<li>lista desordenada 3</li>`

listaOrdenada.innerHTML = `
<li><a href='https://www.w3schools.com/' target='_blank'>lista ordenada 1 - w3schools</a></li>
<li><a href='https://www.freecodecamp.org/' target='_blank'>lista ordenada 2 - free code camp</a></li>
<li><a href='https://roadmap.sh/javascript' target='_blank'>lista ordenada 3 - javascript roadmap</a></li>`