# SneakerHub - Proyecto de Desarrollo Web

Tienda online de zapatillas desarrollada con **HTML, CSS y JavaScript vanilla**, utilizando conceptos avanzados de modularización y web components.

## 📋 Descripción del Proyecto

Este proyecto es una aplicación educativa que demuestra las mejores prácticas en desarrollo web moderno:

- ✅ Estructura modular y escalable
- ✅ Componentes reutilizables
- ✅ Web Components con Shadow DOM
- ✅ Sistema de autenticación
- ✅ Carga dinámica de datos con Fetch API
- ✅ Plantillas HTML reutilizables
- ✅ Diseño responsivo
- ✅ Código limpio y bien documentado

## 🏗️ Estructura del Proyecto

```
Primer-parcial/
├── index.html              # Página principal
├── login.html              # Página de login
├── README.md              # Este archivo
├── MODULARIZACION.md      # Documentación sobre modularización
│
├── css/
│   └── styles.css         # Estilos globales (púrpura y blanco)
│
├── js/
│   ├── auth.js            # Módulo de autenticación
│   ├── components-loader.js  # Cargador de componentes dinámicos
│   ├── products-manager.js   # Gestor de productos
│   └── web-components.js     # Definición de Web Components
│
├── components/
│   ├── header/
│   │   └── header.html    # Encabezado reutilizable
│   ├── footer/
│   │   └── footer.html    # Pie de página reutilizable
│   └── sidebar/
│       └── sidebar.html   # Barra lateral reutilizable
│
└── data/
    └── products.json      # Base de datos de productos
```

## 🚀 Cómo Usar

### 1. **Abrir el Proyecto**

Abre `login.html` en tu navegador como punto de entrada.

### 2. **Credenciales de Prueba**

```
Usuario: admin
Contraseña: 12345
```

> ⚠️ **NOTA IMPORTANTE**: Las credenciales están "quemadas" en el código (`js/auth.js`) solo con fines educativos. En una aplicación real, la autenticación debe hacerse en un servidor backend con contraseñas encriptadas.

### 3. **Funcionalidades**

- **Login**: Valida usuario y contraseña, luego redirige a `index.html`
- **Página Principal**: Muestra productos cargados desde `data/products.json`
- **Componentes Dinámicos**: Header, footer y sidebar se cargan con Fetch API
- **Productos**: Se renderizan de dos formas:
  - Primeros 3: Usando plantilla HTML `<template>`
  - Últimos 3: Usando Web Component personalizado `<product-card>`

## 🎯 Conceptos Implementados

### 1. **Modularización**
Código dividido en módulos independientes:
- `auth.js` → Lógica de autenticación
- `components-loader.js` → Carga de fragmentos HTML
- `products-manager.js` → Gestión de productos
- `web-components.js` → Web Components personalizados

### 2. **Componentes Reutilizables**
- Header, footer y sidebar se cargan desde archivos separados
- Se pueden reutilizar en múltiples páginas

### 3. **Fetch API**
- Carga componentes HTML dinámicamente
- El archivo `data/products.json` se carga en tiempo de ejecución

### 4. **Plantillas HTML**
```html
<template id="product-template">
  <!-- Estructura del producto -->
</template>
```
La plantilla se clona para cada producto cargado.

### 5. **Web Components**
Clase `ProductCard` que extiende `HTMLElement`:
- Encapsula estilos con Shadow DOM
- Aislamiento de CSS
- Componente reutilizable y independiente

### 6. **Diseño Responsive**
- Grid de productos adaptable
- Media queries para dispositivos móviles
- Interfaz optimizada en pantallas pequeñas

## 🎨 Paleta de Colores

- **Púrpura Principal**: `#8B5CF6`
- **Púrpura Claro**: `#a78bfa`
- **Blanco**: `#FFFFFF`
- **Gris Oscuro**: `#333333`
- **Gris Claro**: `#f8f9fa`

## 🔌 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con Grid y Flexbox
- **JavaScript ES6+** - JavaScript moderno
- **Web Components** - Componentes personalizados
- **Shadow DOM** - Encapsulación de estilos
- **Fetch API** - Solicitudes HTTP

## 📝 Buenas Prácticas Implementadas

✅ **Convenciones de Nombres**
- `camelCase` para variables y funciones en JS
- `kebab-case` para clases CSS
- Nombres descriptivos y claros

✅ **Organización de Código**
- Un archivo por concepto/responsabilidad
- Comentarios y documentación
- Indentación consistente

✅ **Separación de Responsabilidades**
- HTML: Estructura
- CSS: Presentación
- JS: Lógica

✅ **Documentación**
- Comentarios en funciones importantes
- JSDoc para parámetros y retornos
- README detallado

✅ **Manejo de Errores**
- Try-catch en operaciones asincrónicas
- Validación de elementos del DOM
- Logs en consola para debugging

## 🔄 Flujo de la Aplicación

```
login.html (iniciador)
    ↓
[Login con credenciales]
    ↓
index.html (página principal)
    ↓
[Cargar componentes dinámicamente]
├── Header (components/header/header.html)
├── Sidebar (components/sidebar/sidebar.html)
└── Footer (components/footer/footer.html)
    ↓
[Cargar productos desde JSON]
    ↓
[Renderizar productos]
├── Template HTML (primeros 3)
└── Web Components (últimos 3)
    ↓
✅ Aplicación lista
```

## 🐛 Debugging

Para ver los logs en consola (F12):
- Carga de componentes
- Carga de productos
- Eventos de usuario
- Errores y excepciones

## 📚 Recursos Educativos

### Documentación Oficial
- [MDN Web Docs - Web Components](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [MDN - Shadow DOM](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

### Archivos de Documentación
- [MODULARIZACION.md](./MODULARIZACION.md) - Concepto de modularización
- JSDoc en archivos JS

## ⚠️ Notas Importantes

### Seguridad
- Las credenciales están en el código **SOLO para fines educativos**
- En producción, usar un servidor backend con autenticación segura
- Nunca almacenar contraseñas en el cliente

### Limitaciones
- No hay persistencia de datos (sin base de datos)
- Los cambios se pierden al recargar la página
- Los productos son estáticos

## 🎓 Plan de Mejoras Futuras

- [ ] Carrito de compras funcional con LocalStorage
- [ ] Base de datos real (backend)
- [ ] Sistema de usuarios
- [ ] Búsqueda y filtrado avanzado
- [ ] Integración con API de pagos
- [ ] Analytics y estadísticas
- [ ] PWA (Progressive Web App)

## 👥 Autor

Proyecto desarrollado como parte del primer parcial de Desarrollo Web.

---

**Versión**: 1.0  
**Fecha**: 2026  
**Estado**: ✅ Completado
