/**
 * auth.js - Módulo de autenticación
 * Contiene las credenciales fijas (solo con fines educativos)
 * y la lógica de validación de login
 */

// Credenciales fijas - SOLO CON FINES EDUCATIVOS
const VALID_CREDENTIALS = {
  username: 'admin',
  password: '12345'
};

/**
 * Valida las credenciales ingresadas
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @returns {boolean} - True si las credenciales son válidas
 */
function validateLogin(username, password) {
  return (
    username === VALID_CREDENTIALS.username &&
    password === VALID_CREDENTIALS.password
  );
}

/**
 * Muestra un mensaje de error en el login
 * @param {HTMLElement} errorElement - Elemento del DOM donde mostrar el error
 * @param {string} message - Mensaje de error
 */
function showErrorMessage(errorElement, message) {
  errorElement.textContent = message;
  errorElement.classList.add('show');
  
  // Limpiar el mensaje después de 5 segundos
  setTimeout(() => {
    errorElement.classList.remove('show');
  }, 5000);
}

/**
 * Redirige al usuario a la página principal
 * @param {number} delay - Tiempo de espera antes de redirigir (en ms)
 */
function redirectToHome(delay = 1000) {
  setTimeout(() => {
    window.location.href = 'index.html';
  }, delay);
}
