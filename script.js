// Objeto con detalles de los vehículos
const vehicleDetails = {
    '911': {
        title: 'Porsche 911 Carrera',
        description: 'El Porsche 911 Carrera es el icono absoluto de la marca. Con su motor bóxer de 6 cilindros y 385 CV, ofrece una experiencia de conducción incomparable. Equipado con la última tecnología, incluye sistema Porsche Communication Management, tracción integral y suspensión adaptativa. Acelera de 0 a 100 km/h en 4.2 segundos con una velocidad máxima de 295 km/h. El diseño clásico combinado con elementos modernos lo hace atemporal. Precio: $95,000'
    },
    'cayenne': {
        title: 'Porsche Cayenne Turbo',
        description: 'El Cayenne Turbo combina el rendimiento deportivo con la versatilidad de un SUV. Su motor V8 biturbo de 550 CV proporciona una aceleración brutal: 0-100 km/h en 3.8 segundos. Incluye interior de lujo con cuero premium, pantalla táctil de 12.3 pulgadas, sistema de sonido Bose y tracción integral inteligente. Ideal para quienes buscan potencia y comodidad. Velocidad máxima: 290 km/h. Precio: $115,000'
    },
    'panamera': {
        title: 'Porsche Panamera Turbo',
        description: 'El sedán deportivo Panamera Turbo es la elección perfecta para ejecutivos que buscan rendimiento. Motor V8 biturbo de 550 CV, 0-100 km/h en 3.8 segundos y velocidad máxima de 305 km/h. Interior espacioso de 4 plazas con asientos de cuero napa, pantalla táctil de gran tamaño, sistema de sonido premium y tecnología de seguridad avanzada. Combina lujo, confort y deportividad en un único vehículo. Precio: $105,000'
    },
    'boxster': {
        title: 'Porsche 718 Boxster',
        description: 'El 718 Boxster es el roadster perfecto para los amantes de la conducción. Motor bóxer de 4 cilindros turbo con 360 CV y capota retráctil de aluminio. Aceleración de 0-100 km/h en 4.5 segundos con velocidad máxima de 285 km/h. Dirección precisa, manejo ágil y diseño cautivador hacen que cada trayecto sea memorable. Equipado con sistema Porsche Stability Management y frenos de cerámica. Perfecto para disfrutar la carretera. Precio: $65,000'
    },
    'taycan': {
        title: 'Porsche Taycan Turbo',
        description: 'El Taycan Turbo es el futuro de Porsche: un sedán eléctrico revolucionario con 680 CV. Aceleración de 0-100 km/h en increíbles 2.8 segundos. Batería de 93.4 kWh proporciona hasta 460 km de autonomía. Carga rápida DC: 10-80% en 22.5 minutos. Interior futurista con pantalla táctil de 4.9 pulgadas y tecnología de conducción autónoma. Silencioso, potente y ecológico. Velocidad máxima: 260 km/h. Precio: $125,000'
    },
    'macan': {
        title: 'Porsche Macan Turbo',
        description: 'El Macan Turbo es el SUV compacto de lujo de Porsche. Motor V6 biturbo con 440 CV aceleración de 0-100 km/h en 4.1 segundos. Velocidad máxima 273 km/h. Interior premium con tecnología de última generación, pantalla táctil de 10.9 pulgadas y sistema de sonido Bose. Tracción integral Porsche Traction Management y suspensión neumática adaptativa. Versátil para la ciudad y capaz fuera de carretera. Precio: $85,000'
    },
    'turbo-s': {
        title: 'Porsche 911 Turbo S',
        description: 'El Porsche 911 Turbo S es el máximo exponente de la serie 911. Con su motor 3.8L biturbo de 640 CV y tracción total, ofrece una aceleración de 0 a 100 km/h en solo 2.7 segundos. Equipado con Porsche Active Aerodynamics, frenos cerámicos y un interior deportivo de lujo. Ideal para quienes buscan rendimiento extremo sin sacrificar confort. Velocidad máxima: 330 km/h. Precio: $185,000'
    },
    '918': {
        title: 'Porsche 918 Spyder',
        description: 'El Porsche 918 Spyder es una leyenda híbrida de alto rendimiento. Combina un motor V8 con propulsión eléctrica para entregar 887 CV, acelerando de 0 a 100 km/h en 2.6 segundos. Ofrece una experiencia de pista con un diseño exclusivo y tecnología de última generación. Autonomía híbrida, suspensión adaptativa y frenos de alta performance completan este superdeportivo. Velocidad máxima: 345 km/h. Precio: $845,000'
    }
};

// Mostrar detalles del vehículo en modal
function showVehicleDetails(vehicleId) {
    const vehicle = vehicleDetails[vehicleId];
    if (vehicle) {
        document.getElementById('modalTitle').textContent = vehicle.title;
        document.getElementById('modalDescription').textContent = vehicle.description;
        document.getElementById('vehicleModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Cerrar modal
function closeModal() {
    document.getElementById('vehicleModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('vehicleModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Mostrar formulario de contacto desde el modal
function showContactForm() {
    closeModal();
    scrollToSection('contacto');
}

// Desplazarse a una sección específica
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Manejar el envío del formulario
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const form = event.target;
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    const mensaje = form.querySelector('textarea').value;
    
    // Crear un mensaje de confirmación
    const mailtoLink = `mailto:info@fglautomobiles.com?subject=Consulta de ${nombre}&body=Nombre: ${nombre}%0DEmail: ${email}%0DTeléfono: ${telefono}%0D%0DMensaje:%0D${mensaje}`;
    
    // Mostrar alerta de confirmación
    alert(`¡Gracias por tu mensaje, ${nombre}!\n\nNos pondremos en contacto contigo pronto a través del email o teléfono que proporcionaste.\n\nData:\nEmail: ${email}\nTeléfono: ${telefono}`);
    
    // Limpiar el formulario
    form.reset();
    
    // Aquí normalmente se enviaría a un servidor
    // window.location.href = mailtoLink;
}

// Agregar efectos de scroll
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de aparición suave para elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos de la tarjeta de vehículo
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Observar elementos de información
    document.querySelectorAll('.info-box').forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(box);
    });
});

// Validación del formulario en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                input.style.borderColor = '#ff4444';
            });
            
            input.addEventListener('input', function() {
                input.style.borderColor = '#ddd';
            });
        });
    }
});
