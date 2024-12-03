https://quintero4.github.io/juego/const display = document.getElementById('display');
const lastKey = document.getElementById('lastKey');
const sound = document.getElementById('sound');
const background = document.getElementById('background');

const letras = {
    'a': {
        texto: 'A de Abuela 👵',
        imagen: './images/abuela.jpg'
    },
    'b': {
        texto: 'B de Beso 🐶',
        imagen: './images/beso.jpg'
    },
    'c': {
        texto: 'C de Chloe 👧',
        imagen: './images/chloe.jpg'
    },
    'd': {
        texto: 'D de Ducha 🛁',
        imagen: './images/ducha.jpg'
    },
    'e': {
        texto: 'E de Elefante ⭐',
        imagen: './images/elefante.jpg'
    },
    'f': {
        texto: 'F de Frío ❄️',
        imagen: './images/frio.jpg'
    },
    'g': {
        texto: 'G de Globo y Gracias 🎈🙏',
        imagen: './images/globo.jpg'
    },
    'h': {
        texto: 'H de Helado 👋',
        imagen: './images/helado.jpg'
    },
    'i': {
        texto: 'I de Inteligente 🧠',
        imagen: './images/inteligente.jpg'
    },
    'j': {
        texto: 'J de Juego ⚽',
        imagen: './images/juego.jpg'
    },
    'k': {
        texto: 'K de Kilo ⚖️',
        imagen: './images/kilo.jpg'
    },
    'l': {
        texto: 'L de Lara 👶',
        imagen: './images/lara.jpg'
    },
    'm': {
        texto: 'M de Mamá 👩',
        imagen: './images/mama.jpg'
    },
    'n': {
        texto: 'N de Nariz 👃',
        imagen: './images/nariz.jpg'
    },
    'o': {
        texto: 'O de Otoño 🐑',
        imagen: './images/otono.jpg'
    },
    'p': {
        texto: 'P de Papá 👨',
        imagen: './images/papa.jpg'
    },
    'q': {
        texto: 'Q de Queso 🧀',
        imagen: './images/queso.jpg'
    },
    'r': {
        texto: 'R de Rosa 🩰',
        imagen: './images/rosa.jpg'
    },
    's': {
        texto: 'S de Sueño 💤',
        imagen: './images/sueno.jpg'
    },
    't': {
        texto: 'T de TE QUIERO ❤️😍💋💖💝',
        imagen: './images/tequiero.jpg'
    },
    'u': {
        texto: 'U de Unicornio 🦄',
        imagen: './images/unicornio.jpg'
    },
    'v': {
        texto: 'V de Verano 🌞🏖️🍦',
        imagen: './images/verano.jpg'
    },
    'w': {
        texto: 'W de WHAT! ❗',
        imagen: './images/what.jpg'
    },
    'x': {
        texto: 'X de Xilófono 🎵',
        imagen: './images/xilofono.jpg'
    },
    'y': {
        texto: 'Y de Yogur 🍓🥛',
        imagen: './images/yogur.jpg'
    },
    'z': {
        texto: 'Z de Zorrito 🦊',
        imagen: './images/zorrito.jpg'
    }
};

// Evento de teclado
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (letras[key]) {
        actualizarPantalla(key);
    }
});

// Evento de clic en cualquier parte de la pantalla
document.addEventListener('click', () => {
    const keys = Object.keys(letras); // Obtener todas las letras
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; // Seleccionar una letra al azar
    actualizarPantalla(randomKey);
});

// Función para actualizar pantalla y fondo
function actualizarPantalla(key) {
    display.innerHTML = letras[key].texto; // Cambiado de textContent a innerHTML
    background.style.backgroundImage = `url('${letras[key].imagen}')`;

    lastKey.textContent = `Última letra seleccionada: ${key}`;

    // Reproducir sonido
    sound.currentTime = 0;
    sound.play().catch(error => console.log('Error reproduciendo sonido:', error));

    // Si es la letra T, crear corazones
    if (key === 't') {
        crearCorazones();
    }
}

function crearCorazones() {
    const corazones = ['❤️', '😍', '💋', '💖', '💝'];
    for (let i = 0; i < 10; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon';
        corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        corazon.style.left = Math.random() * window.innerWidth + 'px';
        corazon.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(corazon);

        setTimeout(() => corazon.remove(), 2000);
    }
}
