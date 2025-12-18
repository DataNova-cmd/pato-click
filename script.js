// Lista completa de 100 logros
const ACHIEVEMENTS_LIST = [
    // Logros de clicks básicos (1-20)
    { id: 'click_1', icon: '🐣', name: 'Primer Click', desc: 'Haz 1 click', type: 'clicks', requirement: 1 },
    { id: 'click_5', icon: '🐤', name: 'Patito Curioso', desc: 'Haz 5 clicks', type: 'clicks', requirement: 5 },
    { id: 'click_10', icon: '🦆', name: 'Patito Activo', desc: 'Haz 10 clicks', type: 'clicks', requirement: 10 },
    { id: 'click_25', icon: '🌟', name: 'Estrella Naciente', desc: 'Haz 25 clicks', type: 'clicks', requirement: 25 },
    { id: 'click_50', icon: '⭐', name: 'Media Centena', desc: 'Haz 50 clicks', type: 'clicks', requirement: 50 },
    { id: 'click_100', icon: '💫', name: 'Pato Entusiasta', desc: 'Haz 100 clicks', type: 'clicks', requirement: 100 },
    { id: 'click_250', icon: '🎯', name: 'Tirador Experto', desc: 'Haz 250 clicks', type: 'clicks', requirement: 250 },
    { id: 'click_500', icon: '🏹', name: 'Arquero Maestro', desc: 'Haz 500 clicks', type: 'clicks', requirement: 500 },
    { id: 'click_750', icon: '🎪', name: 'Artista del Circo', desc: 'Haz 750 clicks', type: 'clicks', requirement: 750 },
    { id: 'click_1000', icon: '🏅', name: 'Maestro del Click', desc: 'Haz 1,000 clicks', type: 'clicks', requirement: 1000 },
    { id: 'click_2500', icon: '🥉', name: 'Bronce Clicker', desc: 'Haz 2,500 clicks', type: 'clicks', requirement: 2500 },
    { id: 'click_5000', icon: '🥈', name: 'Plata Clicker', desc: 'Haz 5,000 clicks', type: 'clicks', requirement: 5000 },
    { id: 'click_7500', icon: '🏆', name: 'Campeón Regional', desc: 'Haz 7,500 clicks', type: 'clicks', requirement: 7500 },
    { id: 'click_10000', icon: '🥇', name: 'Oro Clicker', desc: 'Haz 10,000 clicks', type: 'clicks', requirement: 10000 },
    { id: 'click_25000', icon: '💍', name: 'Anillo de Poder', desc: 'Haz 25,000 clicks', type: 'clicks', requirement: 25000 },
    { id: 'click_50000', icon: '👑', name: 'Rey del Click', desc: 'Haz 50,000 clicks', type: 'clicks', requirement: 50000 },
    { id: 'click_75000', icon: '🔱', name: 'Tridente Dorado', desc: 'Haz 75,000 clicks', type: 'clicks', requirement: 75000 },
    { id: 'click_100000', icon: '💎', name: 'Diamante Clicker', desc: 'Haz 100,000 clicks', type: 'clicks', requirement: 100000 },
    { id: 'click_500000', icon: '🌌', name: 'Guardián Galáctico', desc: 'Haz 500,000 clicks', type: 'clicks', requirement: 500000 },
    { id: 'click_1000000', icon: '🚀', name: 'Astronauta del Click', desc: 'Haz 1,000,000 clicks', type: 'clicks', requirement: 1000000 },

    // Logros de monedas (21-35)
    { id: 'coins_100', icon: '💰', name: 'Primer Tesoro', desc: 'Consigue 100 monedas', type: 'coins', requirement: 100 },
    { id: 'coins_500', icon: '💳', name: 'Tarjeta de Crédito', desc: 'Consigue 500 monedas', type: 'coins', requirement: 500 },
    { id: 'coins_1000', icon: '💵', name: 'Millonario Junior', desc: 'Consigue 1,000 monedas', type: 'coins', requirement: 1000 },
    { id: 'coins_5000', icon: '💸', name: 'Lluvia de Dinero', desc: 'Consigue 5,000 monedas', type: 'coins', requirement: 5000 },
    { id: 'coins_10000', icon: '🏦', name: 'Dueño del Banco', desc: 'Consigue 10,000 monedas', type: 'coins', requirement: 10000 },
    { id: 'coins_25000', icon: '💎', name: 'Comerciante de Gemas', desc: 'Consigue 25,000 monedas', type: 'coins', requirement: 25000 },
    { id: 'coins_50000', icon: '🏰', name: 'Señor Feudal', desc: 'Consigue 50,000 monedas', type: 'coins', requirement: 50000 },
    { id: 'coins_100000', icon: '👑', name: 'Emperador Rico', desc: 'Consigue 100,000 monedas', type: 'coins', requirement: 100000 },
    { id: 'coins_250000', icon: '🌟', name: 'Estrella Dorada', desc: 'Consigue 250,000 monedas', type: 'coins', requirement: 250000 },
    { id: 'coins_500000', icon: '🚀', name: 'Magnate Espacial', desc: 'Consigue 500,000 monedas', type: 'coins', requirement: 500000 },
    { id: 'coins_1000000', icon: '🌌', name: 'Billonario Cósmico', desc: 'Consigue 1,000,000 monedas', type: 'coins', requirement: 1000000 },
    { id: 'spend_1000', icon: '🛒', name: 'Primer Comprador', desc: 'Gasta 1,000 monedas', type: 'spent', requirement: 1000 },
    { id: 'spend_5000', icon: '🛍️', name: 'Comprador Compulsivo', desc: 'Gasta 5,000 monedas', type: 'spent', requirement: 5000 },
    { id: 'spend_25000', icon: '💳', name: 'Tarjeta Platino', desc: 'Gasta 25,000 monedas', type: 'spent', requirement: 25000 },
    { id: 'spend_100000', icon: '🏪', name: 'Dueño de Tienda', desc: 'Gasta 100,000 monedas', type: 'spent', requirement: 100000 },

    // Logros de velocidad y tiempo (36-50)
    { id: 'speed_10', icon: '⚡', name: 'Rayo Veloz', desc: 'Haz 10 clicks en 5 segundos', type: 'speed', requirement: 10 },
    { id: 'speed_25', icon: '🌪️', name: 'Tornado de Clicks', desc: 'Haz 25 clicks en 10 segundos', type: 'speed', requirement: 25 },
    { id: 'speed_50', icon: '💨', name: 'Viento Huracanado', desc: 'Haz 50 clicks en 15 segundos', type: 'speed', requirement: 50 },
    { id: 'marathon_100', icon: '🏃', name: 'Maratonista', desc: 'Haz 100 clicks seguidos', type: 'marathon', requirement: 100 },
    { id: 'marathon_500', icon: '🏃‍♀️', name: 'Ultra Maratonista', desc: 'Haz 500 clicks seguidos', type: 'marathon', requirement: 500 },
    { id: 'session_1000', icon: '⏰', name: 'Sesión Épica', desc: 'Haz 1000 clicks en una sesión', type: 'session', requirement: 1000 },
    { id: 'session_5000', icon: '⏳', name: 'Sesión Legendaria', desc: 'Haz 5000 clicks en una sesión', type: 'session', requirement: 5000 },
    { id: 'daily_100', icon: '📅', name: 'Rutina Diaria', desc: 'Haz 100 clicks por día durante 3 días', type: 'daily', requirement: 3 },
    { id: 'comeback', icon: '🔄', name: 'El Regreso', desc: 'Vuelve después de 24 horas', type: 'comeback', requirement: 1 },
    { id: 'persistent', icon: '💪', name: 'Persistente', desc: 'Juega 7 días diferentes', type: 'persistent', requirement: 7 },
    { id: 'night_owl', icon: '🦉', name: 'Búho Nocturno', desc: 'Haz clicks después de medianoche', type: 'time', requirement: 0 },
    { id: 'early_bird', icon: '🐦', name: 'Madrugador', desc: 'Haz clicks antes de las 6 AM', type: 'time', requirement: 6 },
    { id: 'lunch_break', icon: '🍽️', name: 'Descanso del Almuerzo', desc: 'Haz clicks entre 12-2 PM', type: 'time', requirement: 12 },
    { id: 'weekend_warrior', icon: '🎉', name: 'Guerrero de Fin de Semana', desc: 'Haz 1000 clicks en fin de semana', type: 'weekend', requirement: 1000 },
    { id: 'workday_hero', icon: '💼', name: 'Héroe de Día Laboral', desc: 'Haz 500 clicks en día de semana', type: 'workday', requirement: 500 },

    // Logros especiales del pato (51-65)
    { id: 'beak_kiss', icon: '💋', name: 'Beso al Pato', desc: 'Tócale la boca al pato', type: 'special', requirement: 'beak' },
    { id: 'dressed_up', icon: '👔', name: 'Pato Elegante', desc: 'Viste al pato completamente', type: 'special', requirement: 'dressed' },
    { id: 'hat_collector', icon: '🎩', name: 'Coleccionista de Sombreros', desc: 'Compra todos los sombreros', type: 'collection', requirement: 'hats' },
    { id: 'shirt_collector', icon: '👕', name: 'Coleccionista de Camisetas', desc: 'Compra todas las camisetas', type: 'collection', requirement: 'shirts' },
    { id: 'multiplier_master', icon: '🔢', name: 'Maestro Multiplicador', desc: 'Compra todos los multiplicadores', type: 'collection', requirement: 'multipliers' },
    { id: 'fashionista', icon: '💅', name: 'Fashionista', desc: 'Cambia de outfit 10 veces', type: 'fashion', requirement: 10 },
    { id: 'style_icon', icon: '✨', name: 'Ícono de Estilo', desc: 'Cambia de outfit 50 veces', type: 'fashion', requirement: 50 },
    { id: 'duck_whisperer', icon: '🗣️', name: 'Susurrador de Patos', desc: 'Haz click en el pico 100 veces', type: 'beak_clicks', requirement: 100 },
    { id: 'eye_poker', icon: '👁️', name: 'Molestador de Ojos', desc: 'Haz click en los ojos del pato', type: 'special', requirement: 'eyes' },
    { id: 'wing_toucher', icon: '🪶', name: 'Tocador de Alas', desc: 'Haz click en las alas del pato', type: 'special', requirement: 'wing' },
    { id: 'body_hugger', icon: '🤗', name: 'Abrazador de Patos', desc: 'Haz click en el cuerpo 1000 veces', type: 'body_clicks', requirement: 1000 },
    { id: 'gentle_touch', icon: '🤲', name: 'Toque Gentil', desc: 'Haz clicks suaves (sin spam)', type: 'gentle', requirement: 100 },
    { id: 'rapid_fire', icon: '🔥', name: 'Fuego Rápido', desc: 'Haz 100 clicks en 30 segundos', type: 'rapid', requirement: 100 },
    { id: 'precision_clicker', icon: '🎯', name: 'Clicker de Precisión', desc: 'Haz 50 clicks exactos en el centro', type: 'precision', requirement: 50 },
    { id: 'duck_lover', icon: '❤️', name: 'Amante de Patos', desc: 'Demuestra tu amor por los patos', type: 'special', requirement: 'love' },

    // Logros de progreso global (66-80)
    { id: 'global_contributor', icon: '🌍', name: 'Contribuidor Global', desc: 'Contribuye a 1000 clicks globales', type: 'global', requirement: 1000 },
    { id: 'global_supporter', icon: '🤝', name: 'Partidario Global', desc: 'Contribuye a 10000 clicks globales', type: 'global', requirement: 10000 },
    { id: 'global_champion', icon: '🏆', name: 'Campeón Global', desc: 'Contribuye a 100000 clicks globales', type: 'global', requirement: 100000 },
    { id: 'milestone_witness', icon: '👀', name: 'Testigo de Hito', desc: 'Presencia cuando se alcanza 1M global', type: 'witness', requirement: 1000000 },
    { id: 'history_maker', icon: '📚', name: 'Hacedor de Historia', desc: 'Presencia cuando se alcanza 10M global', type: 'witness', requirement: 10000000 },
    { id: 'legend_witness', icon: '🌟', name: 'Testigo de Leyenda', desc: 'Presencia cuando se alcanza 100M global', type: 'witness', requirement: 100000000 },
    { id: 'top_contributor', icon: '👑', name: 'Máximo Contribuidor', desc: 'Sé el 1% de contribuidores', type: 'percentage', requirement: 1 },
    { id: 'elite_member', icon: '💎', name: 'Miembro Elite', desc: 'Sé el 0.1% de contribuidores', type: 'percentage', requirement: 0.1 },
    { id: 'community_leader', icon: '🎖️', name: 'Líder Comunitario', desc: 'Ayuda a alcanzar una meta global', type: 'community', requirement: 1 },
    { id: 'world_changer', icon: '🌎', name: 'Cambiador del Mundo', desc: 'Ayuda a alcanzar 3 metas globales', type: 'community', requirement: 3 },
    { id: 'universe_shaper', icon: '🌌', name: 'Moldeador del Universo', desc: 'Ayuda a alcanzar todas las metas', type: 'community', requirement: 5 },
    { id: 'first_million', icon: '🥇', name: 'Primer Millón', desc: 'Haz el click que alcanza 1M global', type: 'milestone_maker', requirement: 1000000 },
    { id: 'ten_million_hero', icon: '🦸', name: 'Héroe de 10 Millones', desc: 'Haz el click que alcanza 10M global', type: 'milestone_maker', requirement: 10000000 },
    { id: 'hundred_million_legend', icon: '🏛️', name: 'Leyenda de 100 Millones', desc: 'Haz el click que alcanza 100M global', type: 'milestone_maker', requirement: 100000000 },
    { id: 'billion_god', icon: '⚡', name: 'Dios del Billón', desc: 'Haz el click que alcanza 1000M global', type: 'milestone_maker', requirement: 1000000000 },

    // Logros creativos y divertidos (81-100)
    { id: 'lucky_seven', icon: '🍀', name: 'Siete de la Suerte', desc: 'Haz exactamente 777 clicks', type: 'exact', requirement: 777 },
    { id: 'perfect_thousand', icon: '💯', name: 'Mil Perfecto', desc: 'Llega exactamente a 1000 clicks', type: 'exact', requirement: 1000 },
    { id: 'double_trouble', icon: '👯', name: 'Doble Problema', desc: 'Haz 2222 clicks', type: 'exact', requirement: 2222 },
    { id: 'triple_threat', icon: '🎭', name: 'Triple Amenaza', desc: 'Haz 3333 clicks', type: 'exact', requirement: 3333 },
    { id: 'fantastic_four', icon: '4️⃣', name: 'Cuatro Fantástico', desc: 'Haz 4444 clicks', type: 'exact', requirement: 4444 },
    { id: 'high_five', icon: '🙏', name: 'Choca Esos Cinco', desc: 'Haz 5555 clicks', type: 'exact', requirement: 5555 },
    { id: 'lucky_six', icon: '🎲', name: 'Seis de la Suerte', desc: 'Haz 6666 clicks', type: 'exact', requirement: 6666 },
    { id: 'magnificent_seven', icon: '🌟', name: 'Siete Magnífico', desc: 'Haz 7777 clicks', type: 'exact', requirement: 7777 },
    { id: 'crazy_eight', icon: '🎱', name: 'Ocho Loco', desc: 'Haz 8888 clicks', type: 'exact', requirement: 8888 },
    { id: 'divine_nine', icon: '✨', name: 'Nueve Divino', desc: 'Haz 9999 clicks', type: 'exact', requirement: 9999 },
    { id: 'binary_master', icon: '💻', name: 'Maestro Binario', desc: 'Haz 1024 clicks (2^10)', type: 'exact', requirement: 1024 },
    { id: 'fibonacci_fan', icon: '🌀', name: 'Fan de Fibonacci', desc: 'Haz 1597 clicks (Fibonacci)', type: 'exact', requirement: 1597 },
    { id: 'pi_lover', icon: '🥧', name: 'Amante de Pi', desc: 'Haz 3141 clicks (Pi)', type: 'exact', requirement: 3141 },
    { id: 'golden_ratio', icon: '📐', name: 'Proporción Áurea', desc: 'Haz 1618 clicks (Phi)', type: 'exact', requirement: 1618 },
    { id: 'prime_hunter', icon: '🔍', name: 'Cazador de Primos', desc: 'Alcanza números primos: 2, 3, 5, 7, 11', type: 'primes', requirement: 5 },
    { id: 'palindrome_master', icon: '🪞', name: 'Maestro Palíndromo', desc: 'Haz 12321 clicks', type: 'exact', requirement: 12321 },
    { id: 'square_root', icon: '√', name: 'Raíz Cuadrada', desc: 'Haz 10000 clicks (100²)', type: 'exact', requirement: 10000 },
    { id: 'cube_master', icon: '🧊', name: 'Maestro del Cubo', desc: 'Haz 8000 clicks (20³)', type: 'exact', requirement: 8000 },
    { id: 'easter_egg', icon: '🥚', name: 'Huevo de Pascua', desc: 'Encuentra el secreto oculto', type: 'secret', requirement: 'konami' },
    { id: 'ultimate_clicker', icon: '🌟', name: 'Clicker Definitivo', desc: 'Desbloquea todos los demás logros', type: 'meta', requirement: 99 }
];

// Variables globales del juego
let gameData = {
    globalClicks: 0,
    userClicks: 0,
    userCoins: 0,
    coinMultiplier: 1,
    totalSpent: 0,
    achievements: {},
    inventory: {
        hats: [],
        shirts: [],
        multipliers: []
    },
    equipped: {
        hat: null,
        shirt: null
    },
    stats: {
        sessionClicks: 0,
        fastestClicks: 0,
        beakClicks: 0,
        bodyClicks: 0,
        outfitChanges: 0,
        daysPlayed: [],
        lastPlayed: null,
        clickSequence: [],
        milestonesMade: []
    }
};

// Elementos del DOM
const duck = document.getElementById('duck');
const duckBeak = document.getElementById('duckBeak');
const globalClicksElement = document.getElementById('globalClicks');
const userCoinsElement = document.getElementById('userCoins');
const clickEffect = document.getElementById('clickEffect');

// Modales
const achievementsModal = document.getElementById('achievementsModal');
const shopModal = document.getElementById('shopModal');
const achievementsBtn = document.getElementById('achievementsBtn');
const shopBtn = document.getElementById('shopBtn');
const closeAchievements = document.getElementById('closeAchievements');
const closeShop = document.getElementById('closeShop');

// Inicialización del juego
document.addEventListener('DOMContentLoaded', function() {
    loadGameData();
    initializeAchievements();
    updateDisplay();
    setupEventListeners();
    updateProgressBars();
    updateAchievements();
    updateShop();
    applyEquippedItems();
    trackDailyPlay();
});

// Inicializar sistema de logros
function initializeAchievements() {
    // Inicializar logros si no existen
    ACHIEVEMENTS_LIST.forEach(achievement => {
        if (gameData.achievements[achievement.id] === undefined) {
            gameData.achievements[achievement.id] = false;
        }
    });
    
    // Generar HTML de logros
    generateAchievementsHTML();
}

// Generar HTML dinámico para logros
function generateAchievementsHTML() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = '';
    
    ACHIEVEMENTS_LIST.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.className = 'achievement';
        achievementDiv.setAttribute('data-type', achievement.type);
        achievementDiv.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-text">
                <h4>${achievement.name}</h4>
                <p>${achievement.desc}</p>
            </div>
            <div class="achievement-status" id="ach-${achievement.id}">❌</div>
        `;
        achievementsGrid.appendChild(achievementDiv);
    });
}

// Rastrear día de juego
function trackDailyPlay() {
    const today = new Date().toDateString();
    if (!gameData.stats.daysPlayed.includes(today)) {
        gameData.stats.daysPlayed.push(today);
        saveGameData();
    }
    gameData.stats.lastPlayed = Date.now();
}

// Cargar datos del juego desde localStorage
function loadGameData() {
    const savedData = localStorage.getItem('duckClickerData');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        gameData = { ...gameData, ...parsed };
    }
    
    // Cargar clicks globales desde una simulación de servidor
    const globalData = localStorage.getItem('duckClickerGlobal');
    if (globalData) {
        gameData.globalClicks = JSON.parse(globalData).globalClicks || 0;
    }
}

// Guardar datos del juego
function saveGameData() {
    localStorage.setItem('duckClickerData', JSON.stringify(gameData));
    
    // Simular guardado global (en un juego real esto sería una API)
    const globalData = { globalClicks: gameData.globalClicks };
    localStorage.setItem('duckClickerGlobal', JSON.stringify(globalData));
}

// Configurar event listeners
function setupEventListeners() {
    // Click en el pato
    duck.addEventListener('click', function(e) {
        if (e.target === duckBeak) {
            // Click en el pico del pato
            handleBeakClick();
        } else {
            // Click normal en el pato
            handleDuckClick(e);
        }
    });
    
    // Botones principales
    achievementsBtn.addEventListener('click', () => {
        achievementsModal.classList.remove('hidden');
        updateAchievements();
    });
    
    shopBtn.addEventListener('click', () => {
        shopModal.classList.remove('hidden');
        updateShop();
    });
    
    // Cerrar modales
    closeAchievements.addEventListener('click', () => {
        achievementsModal.classList.add('hidden');
    });
    
    closeShop.addEventListener('click', () => {
        shopModal.classList.add('hidden');
    });
    
    // Cerrar modales al hacer click fuera
    achievementsModal.addEventListener('click', (e) => {
        if (e.target === achievementsModal) {
            achievementsModal.classList.add('hidden');
        }
    });
    
    shopModal.addEventListener('click', (e) => {
        if (e.target === shopModal) {
            shopModal.classList.add('hidden');
        }
    });
    
    // Tabs de la tienda
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchShopTab(tabName);
        });
    });
    
    // Botones de compra
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-btn')) {
            const shopItem = e.target.closest('.shop-item');
            const itemId = shopItem.dataset.item;
            const price = parseInt(shopItem.dataset.price);
            buyItem(itemId, price);
        }
    });
}

// Manejar click normal en el pato
function handleDuckClick(e) {
    // Incrementar contadores
    gameData.globalClicks++;
    gameData.userClicks++;
    gameData.userCoins += gameData.coinMultiplier;
    gameData.stats.sessionClicks++;
    
    // Rastrear estadísticas de clicks
    trackClickStats(e);
    
    // Mostrar efecto visual
    showClickEffect(e);
    
    // Actualizar display
    updateDisplay();
    updateProgressBars();
    checkAllAchievements();
    
    // Guardar datos
    saveGameData();
}

// Rastrear estadísticas de clicks
function trackClickStats(e) {
    const now = Date.now();
    gameData.stats.clickSequence.push(now);
    
    // Mantener solo los últimos 100 clicks para análisis de velocidad
    if (gameData.stats.clickSequence.length > 100) {
        gameData.stats.clickSequence.shift();
    }
    
    // Determinar qué parte del pato se clickeó
    const rect = duck.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Incrementar contador de clicks en el cuerpo
    gameData.stats.bodyClicks++;
    
    // Detectar clicks en diferentes partes (aproximado)
    if (x > 80 && x < 120 && y > 60 && y < 100) {
        // Área de los ojos
        if (!gameData.achievements.eye_poker) {
            gameData.achievements.eye_poker = true;
            showNotification('¡Logro desbloqueado: Molestador de Ojos! 👁️');
        }
    }
    
    if (x > 150 && y > 80 && y < 140) {
        // Área del ala
        if (!gameData.achievements.wing_toucher) {
            gameData.achievements.wing_toucher = true;
            showNotification('¡Logro desbloqueado: Tocador de Alas! 🪶');
        }
    }
}

// Manejar click en el pico del pato
function handleBeakClick() {
    gameData.stats.beakClicks++;
    
    if (!gameData.achievements.beak_kiss) {
        gameData.achievements.beak_kiss = true;
        showNotification('¡Logro desbloqueado: Beso al Pato! 💋');
    }
    
    updateAchievements();
    saveGameData();
}

// Mostrar efecto visual del click
function showClickEffect(e) {
    const rect = duck.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    clickEffect.textContent = `+${gameData.coinMultiplier}`;
    clickEffect.style.left = x + 'px';
    clickEffect.style.top = y + 'px';
    clickEffect.classList.remove('animate');
    
    // Forzar reflow
    clickEffect.offsetHeight;
    
    clickEffect.classList.add('animate');
    
    // Animación del pato
    duck.style.transform = 'scale(0.95)';
    setTimeout(() => {
        duck.style.transform = 'scale(1)';
    }, 100);
}

// Actualizar display
function updateDisplay() {
    globalClicksElement.textContent = formatNumber(gameData.globalClicks);
    userCoinsElement.textContent = formatNumber(gameData.userCoins);
}

// Formatear números grandes
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Actualizar barras de progreso
function updateProgressBars() {
    const goals = [1000000, 10000000, 100000000, 1000000000, 10000000000];
    const progressIds = ['progress-1m', 'progress-10m', 'progress-100m', 'progress-1000m', 'progress-10000m'];
    
    goals.forEach((goal, index) => {
        const progress = Math.min((gameData.globalClicks / goal) * 100, 100);
        const progressBar = document.getElementById(progressIds[index]);
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        // Marcar como completado si se alcanzó la meta
        const goalElement = document.querySelector(`[data-target="${goal}"]`);
        if (goalElement && progress >= 100) {
            goalElement.style.background = '#d5f4e6';
            goalElement.style.borderLeft = '4px solid #2ecc71';
        }
    });
}

// Verificar todos los logros
function checkAllAchievements() {
    ACHIEVEMENTS_LIST.forEach(achievement => {
        if (!gameData.achievements[achievement.id]) {
            if (checkAchievementCondition(achievement)) {
                gameData.achievements[achievement.id] = true;
                showNotification(`¡Logro desbloqueado: ${achievement.name}! ${achievement.icon}`);
            }
        }
    });
    
    // Verificar logro meta (todos los demás logros)
    const completedAchievements = Object.values(gameData.achievements).filter(Boolean).length;
    if (completedAchievements >= 99 && !gameData.achievements.ultimate_clicker) {
        gameData.achievements.ultimate_clicker = true;
        showNotification('¡LOGRO ÉPICO: Clicker Definitivo! 🌟 ¡Has desbloqueado todos los logros!');
    }
}

// Verificar condición específica de logro
function checkAchievementCondition(achievement) {
    switch (achievement.type) {
        case 'clicks':
            return gameData.userClicks >= achievement.requirement;
            
        case 'coins':
            return gameData.userCoins >= achievement.requirement;
            
        case 'spent':
            return gameData.totalSpent >= achievement.requirement;
            
        case 'speed':
            return checkSpeedAchievement(achievement.requirement);
            
        case 'session':
            return gameData.stats.sessionClicks >= achievement.requirement;
            
        case 'beak_clicks':
            return gameData.stats.beakClicks >= achievement.requirement;
            
        case 'body_clicks':
            return gameData.stats.bodyClicks >= achievement.requirement;
            
        case 'fashion':
            return gameData.stats.outfitChanges >= achievement.requirement;
            
        case 'global':
            return gameData.userClicks >= achievement.requirement;
            
        case 'exact':
            return gameData.userClicks === achievement.requirement;
            
        case 'time':
            return checkTimeAchievement(achievement.requirement);
            
        case 'daily':
            return gameData.stats.daysPlayed.length >= achievement.requirement;
            
        case 'persistent':
            return gameData.stats.daysPlayed.length >= achievement.requirement;
            
        case 'comeback':
            return checkComebackAchievement();
            
        case 'weekend':
            return checkWeekendAchievement(achievement.requirement);
            
        case 'workday':
            return checkWorkdayAchievement(achievement.requirement);
            
        case 'collection':
            return checkCollectionAchievement(achievement.requirement);
            
        case 'primes':
            return checkPrimeAchievement();
            
        case 'marathon':
            return checkMarathonAchievement(achievement.requirement);
            
        case 'rapid':
            return checkRapidFireAchievement(achievement.requirement);
            
        case 'precision':
            return checkPrecisionAchievement(achievement.requirement);
            
        case 'gentle':
            return checkGentleAchievement(achievement.requirement);
            
        default:
            return false;
    }
}

// Funciones auxiliares para verificar logros específicos
function checkSpeedAchievement(requiredClicks) {
    if (gameData.stats.clickSequence.length < requiredClicks) return false;
    
    const recentClicks = gameData.stats.clickSequence.slice(-requiredClicks);
    const timeSpan = recentClicks[recentClicks.length - 1] - recentClicks[0];
    
    // Verificar diferentes umbrales de velocidad
    if (requiredClicks === 10) return timeSpan <= 5000; // 5 segundos
    if (requiredClicks === 25) return timeSpan <= 10000; // 10 segundos
    if (requiredClicks === 50) return timeSpan <= 15000; // 15 segundos
    
    return false;
}

function checkTimeAchievement(hour) {
    const currentHour = new Date().getHours();
    if (hour === 0) return currentHour >= 0 && currentHour < 6; // Medianoche a 6 AM
    if (hour === 6) return currentHour >= 5 && currentHour < 7; // Madrugada
    if (hour === 12) return currentHour >= 12 && currentHour < 14; // Almuerzo
    return false;
}

function checkComebackAchievement() {
    if (!gameData.stats.lastPlayed) return false;
    const hoursSinceLastPlay = (Date.now() - gameData.stats.lastPlayed) / (1000 * 60 * 60);
    return hoursSinceLastPlay >= 24;
}

function checkWeekendAchievement(requiredClicks) {
    const today = new Date().getDay();
    const isWeekend = today === 0 || today === 6; // Domingo o Sábado
    return isWeekend && gameData.stats.sessionClicks >= requiredClicks;
}

function checkWorkdayAchievement(requiredClicks) {
    const today = new Date().getDay();
    const isWorkday = today >= 1 && today <= 5; // Lunes a Viernes
    return isWorkday && gameData.stats.sessionClicks >= requiredClicks;
}

function checkCollectionAchievement(category) {
    switch (category) {
        case 'hats':
            return gameData.inventory.hats.length >= 3;
        case 'shirts':
            return gameData.inventory.shirts.length >= 3;
        case 'multipliers':
            return gameData.inventory.multipliers.length >= 3;
        case 'dressed':
            return gameData.equipped.hat && gameData.equipped.shirt;
        default:
            return false;
    }
}

function checkPrimeAchievement() {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    let primeCount = 0;
    
    primes.forEach(prime => {
        if (gameData.userClicks >= prime) primeCount++;
    });
    
    return primeCount >= 5;
}

function checkMarathonAchievement(requiredClicks) {
    // Verificar clicks consecutivos sin pausa larga (más de 5 segundos)
    if (gameData.stats.clickSequence.length < requiredClicks) return false;
    
    const recentClicks = gameData.stats.clickSequence.slice(-requiredClicks);
    for (let i = 1; i < recentClicks.length; i++) {
        if (recentClicks[i] - recentClicks[i-1] > 5000) return false;
    }
    
    return true;
}

function checkRapidFireAchievement(requiredClicks) {
    if (gameData.stats.clickSequence.length < requiredClicks) return false;
    
    const recentClicks = gameData.stats.clickSequence.slice(-requiredClicks);
    const timeSpan = recentClicks[recentClicks.length - 1] - recentClicks[0];
    
    return timeSpan <= 30000; // 30 segundos
}

function checkPrecisionAchievement(requiredClicks) {
    // Simulado - en una implementación real verificaríamos clicks en el centro exacto
    return gameData.userClicks >= requiredClicks * 10;
}

function checkGentleAchievement(requiredClicks) {
    // Verificar clicks espaciados (no spam)
    if (gameData.stats.clickSequence.length < requiredClicks) return false;
    
    const recentClicks = gameData.stats.clickSequence.slice(-requiredClicks);
    let gentleClicks = 0;
    
    for (let i = 1; i < recentClicks.length; i++) {
        if (recentClicks[i] - recentClicks[i-1] >= 1000) { // Al menos 1 segundo entre clicks
            gentleClicks++;
        }
    }
    
    return gentleClicks >= requiredClicks * 0.8; // 80% de los clicks deben ser gentiles
}

// Actualizar display de logros
function updateAchievements() {
    ACHIEVEMENTS_LIST.forEach(achievement => {
        const achievementElement = document.getElementById(`ach-${achievement.id}`);
        if (achievementElement) {
            const isCompleted = gameData.achievements[achievement.id];
            achievementElement.textContent = isCompleted ? '✅' : '❌';
            const achievementContainer = achievementElement.closest('.achievement');
            if (isCompleted) {
                achievementContainer.classList.add('completed');
            }
        }
    });
    
    // Mostrar progreso de logros
    const completedCount = Object.values(gameData.achievements).filter(Boolean).length;
    const totalCount = ACHIEVEMENTS_LIST.length;
    
    // Actualizar título del modal con progreso
    const modalTitle = document.querySelector('#achievementsModal h2');
    if (modalTitle) {
        modalTitle.textContent = `🏆 Logros Personales (${completedCount}/${totalCount})`;
    }
}

// Cambiar tab de la tienda
function switchShopTab(tabName) {
    // Actualizar botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Actualizar contenido
    document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Comprar item
function buyItem(itemId, price) {
    if (gameData.userCoins < price) {
        showNotification('¡No tienes suficientes monedas! 💰');
        return;
    }
    
    // Verificar si ya tiene el item
    const category = getItemCategory(itemId);
    if (gameData.inventory[category].includes(itemId)) {
        // Si es un item equipable, equiparlo
        if (category === 'hats' || category === 'shirts') {
            equipItem(itemId, category);
        }
        return;
    }
    
    // Comprar item
    gameData.userCoins -= price;
    gameData.totalSpent += price;
    
    if (category === 'multipliers') {
        // Aplicar multiplicador
        const multiplier = getMultiplierValue(itemId);
        gameData.coinMultiplier *= multiplier;
        gameData.inventory[category].push(itemId);
        showNotification(`¡Multiplicador aplicado! Ahora ganas x${gameData.coinMultiplier} monedas por click! 🚀`);
    } else {
        // Añadir a inventario
        gameData.inventory[category].push(itemId);
        showNotification(`¡${getItemName(itemId)} comprado! 🛍️`);
        
        // Auto-equipar si no tiene nada equipado
        if (category === 'hats' && !gameData.equipped.hat) {
            equipItem(itemId, 'hats');
        } else if (category === 'shirts' && !gameData.equipped.shirt) {
            equipItem(itemId, 'shirts');
        }
    }
    
    updateDisplay();
    updateShop();
    checkAllAchievements();
    saveGameData();
}

// Obtener categoría del item
function getItemCategory(itemId) {
    if (itemId.startsWith('hat')) return 'hats';
    if (itemId.startsWith('shirt')) return 'shirts';
    if (itemId.startsWith('mult')) return 'multipliers';
    return 'unknown';
}

// Obtener valor del multiplicador
function getMultiplierValue(itemId) {
    const multipliers = {
        'mult2x': 2,
        'mult5x': 5,
        'mult10x': 10
    };
    return multipliers[itemId] || 1;
}

// Obtener nombre del item
function getItemName(itemId) {
    const names = {
        'hat1': 'Sombrero Elegante',
        'hat2': 'Corona Real',
        'hat3': 'Gorro Graduado',
        'shirt1': 'Camiseta Básica',
        'shirt2': 'Camisa Formal',
        'shirt3': 'Chaleco Especial',
        'mult2x': 'Multiplicador x2',
        'mult5x': 'Multiplicador x5',
        'mult10x': 'Multiplicador x10'
    };
    return names[itemId] || 'Item Desconocido';
}

// Equipar item
function equipItem(itemId, category) {
    if (category === 'hats') {
        gameData.equipped.hat = itemId;
    } else if (category === 'shirts') {
        gameData.equipped.shirt = itemId;
    }
    
    gameData.stats.outfitChanges++;
    
    applyEquippedItems();
    showNotification(`¡${getItemName(itemId)} equipado! ✨`);
    checkAllAchievements();
    saveGameData();
}

// Aplicar items equipados visualmente
function applyEquippedItems() {
    const hatElement = document.getElementById('duckHat');
    const shirtElement = document.getElementById('duckShirt');
    
    // Limpiar clases anteriores
    hatElement.className = 'duck-hat';
    shirtElement.className = 'duck-shirt';
    
    // Aplicar sombrero
    if (gameData.equipped.hat) {
        hatElement.classList.remove('hidden');
        hatElement.classList.add(gameData.equipped.hat);
    } else {
        hatElement.classList.add('hidden');
    }
    
    // Aplicar camiseta
    if (gameData.equipped.shirt) {
        shirtElement.classList.remove('hidden');
        shirtElement.classList.add(gameData.equipped.shirt);
    } else {
        shirtElement.classList.add('hidden');
    }
}

// Actualizar tienda
function updateShop() {
    document.querySelectorAll('.shop-item').forEach(item => {
        const itemId = item.dataset.item;
        const price = parseInt(item.dataset.price);
        const buyBtn = item.querySelector('.buy-btn');
        const category = getItemCategory(itemId);
        
        // Verificar si ya tiene el item
        const hasItem = gameData.inventory[category].includes(itemId) || 
                       (category === 'multipliers' && gameData.coinMultiplier > 1);
        
        if (hasItem) {
            item.classList.add('owned');
            if (category === 'multipliers') {
                buyBtn.textContent = 'Comprado';
                buyBtn.disabled = true;
            } else {
                buyBtn.textContent = 'Equipar';
                buyBtn.disabled = false;
            }
        } else {
            item.classList.remove('owned');
            buyBtn.textContent = 'Comprar';
            buyBtn.disabled = gameData.userCoins < price;
        }
    });
}

// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Añadir estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Guardar automáticamente cada 30 segundos
setInterval(saveGameData, 30000);