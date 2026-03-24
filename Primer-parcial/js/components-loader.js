/**
 * components-loader.js - Carga componentes reutilizables del DOM
 * Utiliza Fetch API para cargar fragmentos HTML de forma dinámica
 */

/**
 * Carga un componente HTML en un elemento del DOM
 * @param {string} componentPath - Ruta del archivo HTML del componente
 * @param {string} targetElementId - ID del elemento donde insertar el componente
 * @returns {Promise} - Promesa que se resuelve cuando carga el componente
 */
async function loadComponent(componentPath, targetElementId) {
  try {
    const response = await fetch(componentPath);
    
    if (!response.ok) {
      throw new Error(`Error al cargar ${componentPath}: ${response.status}`);
    }
    
    const html = await response.text();
    const targetElement = document.getElementById(targetElementId);
    
    if (!targetElement) {
      console.error(`Elemento con ID '${targetElementId}' no encontrado`);
      return;
    }
    
    targetElement.innerHTML = html;
  } catch (error) {
    console.error(`Error cargando componente: ${error.message}`);
  }
}

/**
 * Carga múltiples componentes en paralelo
 * @param {Array<{path: string, targetId: string}>} components - Array de componentes a cargar
 * @returns {Promise} - Promesa que se resuelve cuando cargan todos los componentes
 */
async function loadComponents(components) {
  const promises = components.map(component =>
    loadComponent(component.path, component.targetId)
  );
  
  try {
    await Promise.all(promises);
  } catch (error) {
    console.error('Error cargando componentes:', error);
  }
}
