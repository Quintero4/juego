const display = document.getElementById('display');
const lastKey = document.getElementById('lastKey');
const sound = document.getElementById('sound');

const letras = {
    'a': 'A de Abuela 👵',
    'b': 'B de Bluey 🐶',
    'c': 'C de Chloe 👧',
    'd': 'D de Dedo 👆',
    'e': 'E de Estrella ⭐',
    'f': 'F de Frío ❄️',
    'g': 'G de Gracias 🙏',
    'h': 'H de Hola 👋',
    'i': 'I de Inteligente 🧠',
    'j': 'J de Juego ⚽',
    'k': 'K de Kilo ⚖️',
    'l': 'L de Lara 👶',
    'm': 'M de Mamá 👩',
    'n': 'N de Nariz 👃',
    'o': 'O de Oveja 🐑',
    'p': 'P de Papá 👨',
    'q': 'Q de Queso 🧀',
    'r': 'R de Ratita 🐭',
    's': 'S de Seño 👩‍🏫',
    't': 'T de TE QUIERO ❤️😍💋💖💝',
    'u': 'U de Uva 🍇',
    'v': 'V de Viento 💨',
    'w': 'W de WHAT! ❗',
    'x': 'X de Xilófono 🎵',
    'y': 'Y de YA 💩',
    'z': 'Z de Zorrito 🦊'
};

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    
    // Verificar si la tecla presionada está en nuestro objeto de letras
    if (letras[key]) {
        display.textContent = letras[key];
        lastKey.textContent = `Última tecla presionada: ${key}`;
        
        // Reproducir sonido
        sound.currentTime = 0;
        sound.play().catch(error => console.log('Error reproduciendo sonido:', error));
        
        // Si es la letra T, crear corazones
        if (key === 't') {
            crearCorazones();
        }
    }
});

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