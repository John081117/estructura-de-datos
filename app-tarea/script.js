const form = document.querySelector('form');
const input = document.getElementById('tarea');
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');

let totalTareas = 0;

const actualizarContador = () => {
    contador.textContent = totalTareas;
};

const agregarTarea = (texto) => {
    const li = document.createElement('li');
    li.className = 'tarea-item';

    li.innerHTML = `
        <span>${texto}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;
    lista.appendChild(li);
    totalTareas++;
    actualizarContador();
};

lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const tareaAEliminar = e.target.parentElement;
        tareaAEliminar.remove(); 
        totalTareas--;
        actualizarContador();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const texto = input.value.trim(); 
    if (texto !== "") {
        agregarTarea(texto);
        input.value = ""; 
        input.focus();    
    } else {
        alert("¡La tarea no puede estar vacía!");
    }
});