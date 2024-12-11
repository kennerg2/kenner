
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.boxSizing = 'border-box';
document.body.style.backgroundImage = 'url("img/fondo.jpg")'; 
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.color = '#fff'; 
document.body.style.lineHeight = '1.6';
document.body.style.textAlign = 'center';


var header = document.createElement('header');
header.style.color = 'white';
header.style.padding = '30px 20px';
header.style.textAlign = 'left';  
header.style.display = 'flex';
header.style.alignItems = 'center'; 
header.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)';
document.body.appendChild(header);

var main = document.createElement('main');
var pmain = document.createElement('p');
main.appendChild(pmain);
pmain.textContent = 'Futuro desarrollador de software. En este espacio comparto un poco sobre las cosas que me gustan hacer.';
document.body.appendChild(main); 
pmain.style.justifyContent= 'center'
pmain.style.border = '2px solid black'
pmain.style.backgroundColor = 'black';
pmain.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';


var imagenPerfil = document.createElement('img');
imagenPerfil.src = 'img/perfil.jpg'; 
imagenPerfil.alt = 'Foto de perfil';
imagenPerfil.style.width = '150px';
imagenPerfil.style.height = '150px';
imagenPerfil.style.borderRadius = '50%';
imagenPerfil.style.marginRight = '20px'; 
header.appendChild(imagenPerfil);


var h1 = document.createElement('h1');
h1.textContent = 'Kenner David'; 
h1.style.marginBottom = '10px'; 
h1.style.display = 'block'; 
header.appendChild(h1);



var section = document.createElement('section');
section.style.margin = '20px auto';
section.style.width = '80%';
section.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
section.style.padding = '20px';
section.style.borderRadius = '10px';
document.body.appendChild(section);

var h2 = document.createElement('h2');
h2.textContent = 'Mis gustos';
h2.style.fontSize = '2em';
h2.style.marginBottom = '20px';
h2.style.color = '#fff'; 
section.appendChild(h2);

var div1 = document.createElement('div');
div1.style.backgroundColor = 'white';
div1.style.padding = '20px';
div1.style.margin = '15px';
div1.style.borderRadius = '10px';
div1.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
div1.style.transition = 'transform 0.3s ease';

var img1 = document.createElement('img');
img1.src = 'img/programar.jpg'; 
img1.style.maxWidth = '100%';
img1.style.height = 'auto';
img1.style.borderRadius = '8px';
div1.appendChild(img1);

var h3_1 = document.createElement('h3');
h3_1.textContent = 'Programar';
h3_1.style.color = '#333';
h3_1.style.marginTop = '15px';
h3_1.style.fontSize = '1.5em';
div1.appendChild(h3_1);

var p1 = document.createElement('p');
p1.textContent = 'Aprender a programar es un reto, que estoy dispuesto a lograr todos los días.';
p1.style.fontSize = '1.1em';
p1.style.color = '#555';
div1.appendChild(p1);

section.appendChild(div1);


var div2 = document.createElement('div');
div2.style.backgroundColor = 'white';
div2.style.padding = '20px';
div2.style.margin = '15px';
div2.style.borderRadius = '10px';
div2.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
div2.style.transition = 'transform 0.3s ease';

var img2 = document.createElement('img');
img2.src = 'img/musica.jpg'; 
img2.alt = 'Escuchar Música';
img2.style.maxWidth = '100%';
img2.style.height = 'auto';
img2.style.borderRadius = '8px';
div2.appendChild(img2);

var h3_2 = document.createElement('h3');
h3_2.textContent = 'Escuchar Música';
h3_2.style.color = '#333';
h3_2.style.marginTop = '15px';
h3_2.style.fontSize = '1.5em';
div2.appendChild(h3_2);

var p2 = document.createElement('p');
p2.textContent = 'Siempre tengo música de fondo mientras trabajo. Es mi manera de concentrarme y disfrutar.';
p2.style.fontSize = '1.1em';
p2.style.color = '#555';
div2.appendChild(p2);

section.appendChild(div2);


var div3 = document.createElement('div');
div3.style.backgroundColor = 'white';
div3.style.padding = '20px';
div3.style.margin = '15px';
div3.style.borderRadius = '10px';
div3.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
div3.style.transition = 'transform 0.3s ease';

var img3 = document.createElement('img');
img3.src = 'img/viajar.jpg'; 
img3.alt = 'Viajar';
img3.style.maxWidth = '100%';
img3.style.height = 'auto';
img3.style.borderRadius = '8px';
div3.appendChild(img3);

var h3_3 = document.createElement('h3');
h3_3.textContent = 'Viajar';
h3_3.style.color = '#333';
h3_3.style.marginTop = '15px';
h3_3.style.fontSize = '1.5em';
div3.appendChild(h3_3);

var p3 = document.createElement('p');
p3.textContent = 'Visitar nuevos lugares y culturas. Viajar siempre me inspira a aprender más.';
p3.style.fontSize = '1.1em';
p3.style.color = '#555';
div3.appendChild(p3);

section.appendChild(div3);


var footer = document.createElement('footer');
footer.style.backgroundColor = '#333';
footer.style.color = 'white';
footer.style.padding = '15px 0';
footer.style.position = 'fixed';
footer.style.width = '100%';
footer.style.bottom = 0;
footer.style.textAlign = 'center';

var pFooter = document.createElement('p');
pFooter.textContent = '2024 Mi Portafolio desde_js - Mi primera versión, de muchas que están por venir y mejorar';
footer.appendChild(pFooter);

document.body.appendChild(footer);
