// Page Load Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1000);
});

// Shopping Cart Functionality
let cart = [];

document.querySelectorAll('.add-to-cart-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        const product = {
            id: index,
            name: productName,
            price: productPrice
        };
        
        cart.push(product);
        
        // Visual feedback
        btn.textContent = 'Added ✓';
        btn.style.backgroundColor = '#2d6a4f';
        btn.style.color = 'white';
        
        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.backgroundColor = 'var(--yellow)';
            btn.style.color = 'var(--dark-green)';
        }, 2000);
        
        console.log('Cart:', cart);
    });
});

// YouTube API Integration
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '100%',
        videoId: 'TsqIsJrUwps',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'fs': 0,
            'cc_load_policy': 0,
            'iv_load_policy': 3,
            'autohide': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Custom Video Controls
document.getElementById('play-btn').addEventListener('click', () => {
    if (player) player.playVideo();
});

document.getElementById('pause-btn').addEventListener('click', () => {
    if (player) player.pauseVideo();
});

// Automatic Style Change based on Video Timing
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        const styleInterval = setInterval(() => {
            const currentTime = player.getCurrentTime();
            const body = document.body;
            
            // Change style based on timing
            if (currentTime > 10 && currentTime < 20) {
                body.style.backgroundColor = '#e8f5e9'; // Light green
            } else if (currentTime > 20 && currentTime < 30) {
                body.style.backgroundColor = '#fff9c4'; // Light yellow
            } else {
                body.style.backgroundColor = '#f8f9fa'; // Default cream
            }
        }, 1000);
    }
}

// Easter Egg Audio - Hidden Secret
const secretTrigger = document.getElementById('secret-trigger');
const audio = document.getElementById('easter-egg-audio');
let easterEggFound = false;

secretTrigger.addEventListener('click', () => {
    if (!easterEggFound) {
        easterEggFound = true;
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Add pulse animation
    secretTrigger.classList.add('activated');
    
    // Play audio
    audio.currentTime = 0;
    audio.play();
    
    // Show celebration message
    showCelebration();
    
    // Apply visual effects
    applyVisualEffects();
    
    // Create floating particles
    createFloatingParticles();
    
    // Reset animation after completion
    setTimeout(() => {
        secretTrigger.classList.remove('activated');
    }, 500);
}

function showCelebration() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #1b4332 0%, #ffc300 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: slideIn 0.5s ease-out;
    `;
    message.textContent = 'You found the hidden secret!';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function applyVisualEffects() {
    document.body.style.transition = 'all 0.5s ease';
    document.body.style.filter = 'hue-rotate(30deg) saturate(1.5)';
    
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 3000);
}

function createFloatingParticles() {
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ffc300 0%, #1b4332 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: float-up 3s ease-out forwards;
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 3000);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -40%);
        }
    }
    
    @keyframes float-up {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Animations for Buttons and Images
const interactiveElements = document.querySelectorAll('.btn, .product-card, .hero-image img');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});
