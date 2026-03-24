/**
 * web-components.js - Define Web Components personalizados
 * Utiliza Shadow DOM para encapsular estilos y estructura
 */

/**
 * ProductCard - Web Component para tarjetas de producto
 * Encapsula estilos y HTML usando Shadow DOM
 */
class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  /**
   * Renderiza el contenido del componente
   */
  render() {
    const name = this.getAttribute('name') || 'Producto';
    const price = this.getAttribute('price') || '$0.00';
    const description = this.getAttribute('description') || 'Sin descripción';
    const image = this.getAttribute('image') || '📦';

    const template = `
      <style>
        :host {
          display: block;
        }

        .product-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(139, 92, 246, 0.2);
          border-color: #8B5CF6;
        }

        .product-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f0e6ff 0%, #e9d5ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .product-price {
          color: #8B5CF6;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-description {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .product-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #8B5CF6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s;
        }

        .product-button:hover {
          background-color: #7c3aed;
        }

        .product-button:active {
          transform: scale(0.98);
        }
      </style>

      <div class="product-card">
        <div class="product-image">${image}</div>
        <div class="product-info">
          <div class="product-name">${name}</div>
          <div class="product-price">${price}</div>
          <div class="product-description">${description}</div>
          <button class="product-button">Agregar al carrito</button>
        </div>
      </div>
    `;

    this.shadowRoot.innerHTML = template;

    // Agregar evento al botón
    const button = this.shadowRoot.querySelector('.product-button');
    button.addEventListener('click', () => this.handleAddToCart());
  }

  /**
   * Maneja el evento de agregar al carrito
   */
  handleAddToCart() {
    const productName = this.getAttribute('name');
    alert(`✅ "${productName}" agregado al carrito`);
    console.log(`Producto agregado: ${productName}`);
  }
}

// Registrar el Web Component
customElements.define('product-card', ProductCard);
