const form = document.querySelector('form');
const input = document.getElementById('tarea');
const fechaInput = document.getElementById('fecha');
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');

let totalTareas = 0;
let tareas = [];

const actualizarContador = () => {
    contador.textContent = totalTareas;
};

const calcularTiempoRestante = (fechaLimite) => {
    const ahora = new Date();
    const limite = new Date(fechaLimite);
    const diferencia = limite - ahora;

    if (diferencia <= 0) {
        return 'Tiempo agotado';
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
};

const actualizarTemporizadores = () => {
    document.querySelectorAll('.tarea-item').forEach((li, index) => {
        const tiempoSpan = li.querySelector('.tiempo-restante');
        if (tiempoSpan && tareas[index]) {
            tiempoSpan.textContent = calcularTiempoRestante(tareas[index].fecha);
        }
    });
};

const agregarTarea = (texto, fecha) => {
    const li = document.createElement('li');
    li.className = 'tarea-item';

    const tiempoRestante = fecha ? calcularTiempoRestante(fecha) : 'Sin temporizador';

    li.innerHTML = `
        <div>
            <span>${texto}</span>
            <span class="tiempo-restante">${tiempoRestante}</span>
        </div>
        <button class="btn-eliminar">Eliminar</button>
    `;
    lista.appendChild(li);
    tareas.push({ texto, fecha });
    totalTareas++;
    actualizarContador();
};

lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const tareaAEliminar = e.target.parentElement;
        const index = Array.from(lista.children).indexOf(tareaAEliminar);
        tareas.splice(index, 1);
        tareaAEliminar.remove();
        totalTareas--;
        actualizarContador();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    const fecha = fechaInput.value;
    if (texto !== "") {
        agregarTarea(texto, fecha);
        input.value = "";
        fechaInput.value = "";
        input.focus();
    } else {
        alert("¡La tarea no puede estar vacía!");
    }
});

// Actualizar temporizadores cada segundo
setInterval(actualizarTemporizadores, 1000);