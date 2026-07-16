const lista = document.getElementById("lista");

function mostrar(datos){

lista.innerHTML="";

datos.forEach(persona=>{

lista.innerHTML+=`

<div class="item">

<div class="nombre">

${persona.nombre}

</div>

<button onclick="abrirVideo('${persona.youtube}')">

Ver video

</button>

</div>

`;

});

}

mostrar(personas);

document.getElementById("buscador")
.addEventListener("input",e=>{

const texto=e.target.value.toLowerCase();

const filtrados=personas.filter(p=>

p.nombre.toLowerCase().includes(texto)

);

mostrar(filtrados);

});

const modal=document.getElementById("modal");

const player=document.getElementById("youtubePlayer");

function abrirVideo(id){

player.src=`https://www.youtube.com/embed/${id}`;

modal.style.display="flex";

}

document.getElementById("cerrar").onclick=()=>{

modal.style.display="none";

player.src="";

};

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

player.src="";

}

};
