// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); 
    let nombre = inputAmigo.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    

    amigos.push(nombre);
    inputAmigo.value = ""; 
    mostrarLista(); 
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        let item = document.createElement("li");
        item.textContent = nombre;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("delete-button"); 
        btnEliminar.onclick = () => eliminarAmigo(index);

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}


function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarLista();
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li class='sorteo-animado'>🎲 Sorteando... 🎲</li>";

    let iteraciones = 20; 
    let velocidad = 100;
    let contador = 0;

    let sonido = new Audio("assets/celebracion.mp3");
    sonido.play();

    let intervalo = setInterval(() => {
        let nombreAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li class='sorteo-animado'>🎲 ${nombreAleatorio} 🎲</li>`;
        contador++;

        if (contador >= iteraciones) {
            clearInterval(intervalo);
            let indiceGanador = Math.floor(Math.random() * amigos.length);
            let ganador = amigos[indiceGanador];

            setTimeout(() => {
                resultado.innerHTML = `<li class='resultado-final'>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;
                resultado.classList.add("resaltar");

                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 }
                });

            }, 500); 
        }
    }, velocidad);
}





