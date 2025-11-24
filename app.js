// Lista de amigos
let amigos = [];

// Función para agregar amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === "") {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya está en la lista.');
        return;
    }

    amigos.push(nombreAmigo);
    input.value = ""; // limpiar campo
}

// Sortear un amigo al azar (sin repetición)
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Ya no quedan amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado en <ul id="resultado">
    const resultado = document.getElementById('resultado');
    const li = document.createElement('li');
    li.innerHTML = `🎉 Tu amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(li);

    // Eliminar el amigo sorteado para que no salga de nuevo
    amigos.splice(indiceAleatorio, 1);

  // Borrar el resultado en pantalla después de 5 segundos
    setTimeout(() => {
        li.remove();
    }, 5000); // 5000 ms = 5 segundos
}

// Apretar Enter para agregar amigo
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});