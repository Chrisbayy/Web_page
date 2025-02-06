let datos = {};  // Aquí se almacenarán los datos del archivo JSON

// Cargar los datos del archivo JSON al inicio
fetch("data.json")
    .then(response => response.json()) // Convertir la respuesta en formato JSON
    .then(data => {
        datos = data;  // Guardar los datos
        console.log("Datos cargados:", datos);  // Verificar en consola
    })
    .catch(error => {
        console.error("Error cargando los datos:", error);
        alert("Hubo un error al cargar los datos.");
    });

// Función para mostrar los smartphones recomendados
function recomendar() {
    const gama = document.getElementById("gama").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar antes de mostrar nuevos resultados

    if (!datos[gama]) {
        resultado.innerHTML = "<p>No hay recomendaciones para esta gama.</p>";
        return;
    }

    datos[gama].forEach(smartphone => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${smartphone.imagen}" alt="${smartphone.nombre}">
            <h3>${smartphone.nombre}</h3>
        `;

        resultado.appendChild(card);
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

