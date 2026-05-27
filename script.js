// 1. Nuestra "base de datos" de canciones
const canciones = [
    { titulo: "Tu Éxito #1", artista: "Artista A", img: "https://picsum.photos/200/200?random=1" },
    { titulo: "Tu Éxito #2", artista: "Artista B", img: "https://picsum.photos/200/200?random=2" },
    { titulo: "Tu Éxito #3", artista: "Artista C", img: "https://picsum.photos/200/200?random=3" },
    { titulo: "Tu Éxito #4", artista: "Artista D", img: "https://picsum.photos/200/200?random=4" }
];

// 2. Función para pintar las tarjetas
function cargarTarjetas() {
    const contenedor = document.getElementById('grid-container');
    
    canciones.forEach(cancion => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => reproducir(cancion.titulo);
        
        card.innerHTML = `
            <img src="${cancion.img}" alt="Album">
            <h3>${cancion.titulo}</h3>
            <p>${cancion.artista}</p>
        `;
        
        contenedor.appendChild(card);
    });
}

// 3. Función de reproducción
function reproducir(nombreCancion) {
    document.getElementById('nombre-cancion').innerText = "Reproduciendo: " + nombreCancion;
}

// Ejecutar al cargar la página
cargarTarjetas();