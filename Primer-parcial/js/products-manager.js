/**
 * products-manager.js - Gestiona la carga y renderización de productos
 * Carga datos desde JSON y los renderiza usando Template HTML y Web Components
 */

// Variable global para almacenar productos
let productsData = [];

/**
 * Carga los productos desde el archivo JSON
 * @returns {Promise<Array>} - Array de productos cargados
 */
async function loadProducts() {
  try {
    const response = await fetch('./data/products.json');
    
    if (!response.ok) {
      throw new Error(`Error cargando productos: ${response.status}`);
    }
    
    productsData = await response.json();
    console.log(`${productsData.length} productos cargados exitosamente`);
    return productsData;
  } catch (error) {
    console.error('Error cargando productos:', error);
    return [];
  }
}

/**
 * Renderiza productos usando plantilla HTML
 * @param {Array} products - Array de productos a renderizar
 * @param {string} containerId - ID del contenedor donde renderizar
 */
function renderProductsWithTemplate(products, containerId) {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Contenedor con ID '${containerId}' no encontrado`);
    return;
  }
  
  const template = document.getElementById('product-template');
  
  if (!template) {
    console.error('Plantilla de producto no encontrada');
    return;
  }
  
  // Limpiar contenedor
  container.innerHTML = '';
  
  // Crear y agregar producto para cada item
  products.forEach(product => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.product-name').textContent = product.name;
    clone.querySelector('.product-price').textContent = product.price;
    clone.querySelector('.product-description').textContent = product.description;
    clone.querySelector('.product-image').textContent = product.image;
    
    container.appendChild(clone);
  });
  
  console.log(`${products.length} productos renderizados con Template`);
}

/**
 * Renderiza productos usando Web Components
 * @param {Array} products - Array de productos a renderizar
 * @param {string} containerId - ID del contenedor donde renderizar
 */
function renderProductsWithWebComponents(products, containerId) {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Contenedor con ID '${containerId}' no encontrado`);
    return;
  }
  
  // Limpiar contenedor
  container.innerHTML = '';
  
  // Crear web component para cada producto
  products.forEach(product => {
    const productCard = document.createElement('product-card');
    productCard.setAttribute('name', product.name);
    productCard.setAttribute('price', product.price);
    productCard.setAttribute('description', product.description);
    productCard.setAttribute('image', product.image);
    
    container.appendChild(productCard);
  });
  
  console.log(`${products.length} productos renderizados con Web Components`);
}

/**
 * Filtra productos por categoría
 * @param {string} category - Categoría para filtrar
 * @returns {Array} - Productos filtrados
 */
function filterProductsByCategory(category) {
  if (category === 'all' || !category) {
    return productsData;
  }
  
  return productsData.filter(product => product.category === category);
}
