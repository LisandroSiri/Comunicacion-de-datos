// Script para funcionalidades de la página

document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
    
    
    
    // Mostrar contenido de unidades
    window.mostrarContenido = function(unidad) {
        const contenidoDiv = document.getElementById('contenido-unidades');
        let contenidoHTML = '';
        
        const contenidos = {
            unidad1: `
                <h3>Unidad 1: Introducción a la Comunicación de Datos y Organismos Internacionales</h3>
                <p><strong>Contenido:</strong></p>
                <ul>
                    <li>Conceptos básicos de comunicación de datos</li>
                    <li>Elementos de un sistema de comunicacion:
                    emisor, receptor, medio, protocolo</li>
                    <li>Organismos internacionales de normalizacion: ITU-T, ISO, IEEE, ANSI, EIA</li>
                    <li>Normas estándares en comunicaciones</li>
                    <li>Introducción a la transmisión de datos: señales, ancho de banda, velocidad</li>
                </ul>
                <p><strong>Recursos:</strong></p>
                <a href="#" class="btn-recurso">Descargar Apunte</a>
                
            `,
            unidad2: `
                <h3>Unidad 2: Transmisión de Datos en Paralelo y Serie</h3>
                <p><strong>Contenido:</strong></p>
                <ul>
                    <li>Transmisión en paralelo:
                    <ul>
                    <li>Definición, características, ventajas y desventajas</li>
                    <li>Aplicaciones típicas (ej.: buses internos de computadora)</li>
                    </ul>
                    </li>
                    <li>Transmisión en Serie:
                    <ul>
                    <li>Definición, comparación con la transmisión paralela</li>
                    <li>Tipos: síncrona y asíncrona</li>
                    <li>Normas y aplicaciones (ej.: RS-232, USB)</li>
                    </ul>
                    </li>
                    <li>Enlaces serie sincronos: características y funcionamiento</li>
                </ul>
                <p><strong>Recursos:</strong></p>
                <a href="#" class="btn-recurso">Descargar Apunte</a>
                
            `,
            unidad3: `
                <h3>Unidad 3:Interfaces y Módems</h3>
                <p><strong>Contenido:</strong></p>
                <ul>
                    <li>Interfaces de comunicación: 
                    <ul>
                    <li> Funciones y tipo </li> 
                    <li>Estándares físicos y eléctricos (ej.: RS-232, V.24)</li>
                    </ul>
                    </li>
                    <li>Módems:
                    <ul>
                    <li>Principio de funcionamientos</li>
                    <li>modulaciones analógicas: ASK, FSK, PSK, QAM, </li>
                    <li>aplicaciones en transmisión telefónica y banda ancha</li>
                    </ul>
                    </li>
                </ul>
                <p><strong>Recursos:</strong></p>
                <a href="#" class="btn-recurso">Descargar Apunte</a>
            
            `,
            unidad4: `
                <h3>Unidad 4: Detección y Control de Errores</h3>
                <p><strong>Contenido:</strong></p>
                <ul>
                    <li>Detección de errores:
                    <ul>
                    <li>Paridad (longitudinal y vertical - VRC/LRC)</li>
                    <li>CRC (Cyclic Redundancy Check): concepto y cálculo</li>
                    <li>FCS (Frame Check Sequence)</li>
                    </ul>
                    </li>
                    <li>Técnicas de control de errores:
                    <ul>
                    <li>Retransmisión (ARQ)</li>
                    <li>Corrección de errores hacia adelante (FEC) - introducción</li>
                    </ul>
                    </li>
                    <li>Enlaces síncronos: integración de métodos de detección</li>
                    
                </ul>
                <p><strong>Recursos:</strong></p>
                <a href="#" class="btn-recurso">Descargar Apunte</a>
            
            `
        };
        
        contenidoHTML = contenidos[unidad] || '<p>Contenido no disponible.</p>';
        contenidoDiv.innerHTML = contenidoHTML;
        contenidoDiv.style.display = 'block';
        
        // Desplazar suavemente a la sección
        contenidoDiv.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Formularios para agregar contenido
    window.mostrarFormularioTP = function() {
        document.getElementById('formularioTP').style.display = 'flex';
    };
    
    window.cerrarFormularioTP = function() {
        document.getElementById('formularioTP').style.display = 'none';
        document.getElementById('nuevoTPForm').reset();
    };
    
    window.mostrarFormularioRecurso = function() {
        document.getElementById('formularioRecurso').style.display = 'flex';
    };
    
    window.cerrarFormularioRecurso = function() {
        document.getElementById('formularioRecurso').style.display = 'none';
        document.getElementById('nuevoRecursoForm').reset();
    };
    
    // Manejar envío de formularios
    document.getElementById('nuevoTPForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const titulo = document.getElementById('tp-titulo').value;
        const descripcion = document.getElementById('tp-descripcion').value;
        const fecha = document.getElementById('tp-fecha').value;
        const tipo = document.getElementById('tp-tipo').value;
        
        // Aquí normalmente enviarías los datos a un servidor
        // Por ahora solo mostramos una notificación
        mostrarNotificacion(`Trabajo Práctico "${titulo}" agregado correctamente`, 'success');
        
        cerrarFormularioTP();
    });
    
    document.getElementById('nuevoRecursoForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const titulo = document.getElementById('recurso-titulo').value;
        const descripcion = document.getElementById('recurso-descripcion').value;
        const tipo = document.getElementById('recurso-tipo').value;
        
        mostrarNotificacion(`Recurso "${titulo}" agregado correctamente`, 'success');
        
        cerrarFormularioRecurso();
    });
    
    // Función para mostrar notificaciones
    function mostrarNotificacion(mensaje, tipo) {
        // Crear elemento de notificación
        const notificacion = document.createElement('div');
        notificacion.className = `notificacion notificacion-${tipo}`;
        notificacion.innerHTML = `
            <span>${mensaje}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;
        
        // Estilos para la notificación
        notificacion.style.position = 'fixed';
        notificacion.style.top = '20px';
        notificacion.style.right = '20px';
        notificacion.style.padding = '15px 20px';
        notificacion.style.borderRadius = '5px';
        notificacion.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        notificacion.style.zIndex = '1000';
        notificacion.style.display = 'flex';
        notificacion.style.alignItems = 'center';
        notificacion.style.justifyContent = 'space-between';
        notificacion.style.minWidth = '300px';
        notificacion.style.maxWidth = '400px';
        
        if (tipo === 'success') {
            notificacion.style.background = '#38a169';
            notificacion.style.color = 'white';
        } else if (tipo === 'warning') {
            notificacion.style.background = '#f6ad55';
            notificacion.style.color = 'white';
        } else if (tipo === 'info') {
            notificacion.style.background = '#4a6de5';
            notificacion.style.color = 'white';
        } else {
            notificacion.style.background = '#e53e3e';
            notificacion.style.color = 'white';
        }
        
        // Botón de cerrar
        notificacion.querySelector('button').style.background = 'transparent';
        notificacion.querySelector('button').style.border = 'none';
        notificacion.querySelector('button').style.color = 'white';
        notificacion.querySelector('button').style.fontSize = '1.5rem';
        notificacion.querySelector('button').style.cursor = 'pointer';
        notificacion.querySelector('button').style.marginLeft = '15px';
        
        document.body.appendChild(notificacion);
        
        // Eliminar automáticamente después de 5 segundos
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.remove();
            }
        }, 5000);
    }
    
    // Suavizar desplazamiento a secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Inicializar valores de sensores
    actualizarSensores();
});