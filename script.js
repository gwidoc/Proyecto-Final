//DOM

let video =document.querySelector("video")

const reproducir=()=>{
    video.play()
}

const pause=()=>{   
    video.pause()
}

const muted=()=>{
    video.muted=true
}


//
document.getElementById("logo").addEventListener("click", function() {
    // redirije a la pag principal al hacer click
    window.location.href = "index.html";
});

// animacion
var poligono = document.getElementById("poligono");
var rectangulo = document.getElementById("rectangulo");

poligono.addEventListener("mouseover", function() {
    this.setAttribute("fill", "#E05E5E"); // cambia el color del poligono al pasar el mouse
    rectangulo.setAttribute("fill", "#E05E5E"); // cambia el color del rect al pasar el mouse sobre el poligono
});

poligono.addEventListener("mouseout", function() {
    this.setAttribute("fill", "#495579"); // Restaurar el color original del polígono al dejar de pasar el mouse sobre él
    rectangulo.setAttribute("fill", "#F0E9D2"); // Restaurar el color original del rectángulo al pasar con el mouse
});





 // Agregar evento dragstart a las imágenes
 document.querySelectorAll('#cajaimagenes img').forEach(img => {
    img.addEventListener('dragstart', dragStart);
});

// Agregar evento dragover y drop a las cajas
document.querySelectorAll('.caja').forEach(caja => {
    caja.addEventListener('dragover', dragOver);
    caja.addEventListener('drop', drop);
});

// Función para el evento dragstart
function dragStart(e) {
    e.dataTransfer.setData('id', e.target.id);
}

// Función para el evento dragover
function dragOver(e) {
    e.preventDefault();
}

// Función para el evento drop
function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const imagen = document.getElementById(id);
    e.target.innerHTML = '';
    e.target.appendChild(imagen);
}

// Función para reiniciar el juego
function reiniciar() {
    document.querySelectorAll('.caja').forEach(caja => {
        caja.innerHTML = 'Arrastre y suelte la imagen aquí';
    });
    document.querySelectorAll('#cajaimagenes img').forEach(img => {
        img.style.order = '';
    });
}