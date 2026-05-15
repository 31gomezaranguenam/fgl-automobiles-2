# 🚗 FGL Automobiles - Distribuidor Porsche

¡Bienvenido a FGL Automobiles! Página web profesional para la venta de vehículos Porsche de lujo.

## 📋 Información de la Empresa

- **Nombre:** FGL Automobiles
- **Propietario:** Francisco Gómez Loarte
- **Especialidad:** Distribuidor exclusivo de vehículos Porsche
- **Año de fundación:** 2009

## 🎯 Características de la Página Web

### ✨ Secciones Principales

1. **Navbar/Encabezado**
   - Logo de la empresa con nombre del propietario
   - Navegación rápida a secciones principales
   - Diseño pegajoso (sticky) para acceso fácil

2. **Hero (Sección Principal)**
   - Imagen destacada de vehículo Porsche
   - Mensaje de bienvenida y CTA (Llamada a la Acción)
   - Botón para ir al catálogo

3. **Sobre Nosotros**
   - Información sobre la empresa
   - 3 ventajas destacadas: Experiencia, Garantía, Profesionalismo

4. **Catálogo de Vehículos**
   - 6 modelos Porsche disponibles:
     - Porsche 911 Carrera ($95,000)
     - Porsche Cayenne Turbo ($115,000)
     - Porsche Panamera Turbo ($105,000)
     - Porsche 718 Boxster ($65,000)
     - Porsche Taycan Turbo ($125,000) - Eléctrico
     - Porsche Macan Turbo ($85,000)
   
   - Cada tarjeta incluye:
     - Imagen del vehículo
     - Nombre y año del modelo
     - Descripción detallada
     - Especificaciones (0-100 km/h, velocidad máxima)
     - Precio
     - Botón para más información

5. **Modal de Detalles**
   - Información ampliada de cada vehículo
   - Botón para contactar
   - Diseño responsive

6. **Sección de Contacto**
   - Información de contacto de la empresa
   - Dirección, teléfono, email, horario
   - Formulario de contacto interactivo
   - Validación de campos

7. **Footer**
   - Copyright y información de derechos
   - Nombre del propietario

## 🎨 Diseño y Características

- **Colores Corporativos:** Rojo Porsche (#ca0020) y Negro (#111)
- **Responsive:** Adaptable a dispositivos móviles, tablets y computadoras
- **Interactivo:** 
  - Transiciones suaves y animaciones
  - Modales interactivos
  - Scroll suave entre secciones
  - Efectos hover en elementos

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica y moderna
- **CSS3:** Estilos avanzados, Flexbox y Grid
- **JavaScript:** Interactividad y validación de formularios
- **Imágenes:** Integración con Unsplash para fotos de Porsche

## 📂 Estructura de Archivos

```
fgl-automobiles-2/
├── index.html          # Página principal (estructura HTML)
├── styles.css          # Estilos de la página
├── script.js           # Funcionalidad interactiva
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

1. **Descargar/Clonar el proyecto:**
   ```bash
   git clone <repository-url>
   cd fgl-automobiles-2
   ```

2. **Abrir la página web:**
   - Opción 1: Hacer doble clic en `index.html`
   - Opción 2: Usar un servidor local
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Python 2
     python -m SimpleHTTPServer 8000
     
     # Con Node.js (http-server)
     npx http-server
     ```

3. **Acceder a través del navegador:**
   - http://localhost:8000 (o el puerto usado)

## 📞 Información de Contacto

- **Teléfono:** +34 900 123 456
- **Email:** info@fglautomobiles.com
- **Horario:** Lunes a Viernes 10:00 - 19:00

*Nota: Los datos de contacto son ejemplo. Actualizar con información real de la empresa.*

## 🎯 Funcionalidades JavaScript

### Funciones Principales

- `showVehicleDetails(vehicleId)` - Muestra modal con detalles del vehículo
- `closeModal()` - Cierra el modal
- `showContactForm()` - Navega al formulario de contacto
- `scrollToSection(sectionId)` - Desplazamiento suave a secciones
- `handleFormSubmit(event)` - Maneja el envío del formulario

### Características Interactivas

- ✅ Validación de formulario
- ✅ Modales emergentes con detalles
- ✅ Animaciones de aparición en scroll
- ✅ Efectos hover en tarjetas
- ✅ Navegación suave entre secciones
- ✅ Diseño responsivo automático

## 🔧 Personalización

Para personalizar la página, editar:

1. **Logo y nombre:** En la sección navbar del `index.html`
2. **Modelos de autos:** En el objeto `vehicleDetails` de `script.js`
3. **Precios y especificaciones:** En las tarjetas de vehículos en `index.html`
4. **Colores:** Variables CSS en `:root` de `styles.css`
5. **Información de contacto:** En la sección de contacto del `index.html`

## 💡 Mejoras Futuras

- Integración con base de datos
- Sistema de reservas online
- Galería de imágenes amplias
- Mapa de ubicación
- Chat en vivo
- Panel de administración
- Integración con redes sociales
- Certificado SSL (HTTPS)

## 📄 Licencia

Este proyecto es propiedad de FGL Automobiles - Francisco Gómez Loarte.

---

**Última actualización:** Mayo 2026

**Desarrollado con ❤️ para FGL Automobiles**
