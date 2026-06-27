// =====================================================
// SHRAVANI BIRTHDAY WEBSITE - COMPLETE JAVASCRIPT
// Cinematic, Interactive, & Animated Experience
// =====================================================

class BirthdayExperience {
    constructor() {
        this.currentScene = 1;
        this.totalScenes = 9;
        this.musicEnabled = true;
        this.canvasInstances = {};
        this.init();
    }

    init() {
        // Initialize loading screen
        this.initLoadingScreen();
        
        // Initialize event listeners
        this.initEventListeners();
        
        // Initialize canvas animations
        this.initCanvases();
        
        // Initialize music
        this.initMusic();
        
        // Initialize gallery
        this.initGallery();
    }

    // ==================== LOADING SCREEN ====================
    initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 3200);
    }

    // ==================== EVENT LISTENERS ====================
    initEventListeners() {
        // Scene navigation buttons
        document.getElementById('openHeartBtn').addEventListener('click', () => this.goToScene(2));
        document.getElementById('continueBtn').addEventListener('click', () => this.goToScene(3));
        document.getElementById('blowCandlesBtn').addEventListener('click', () => this.blowCandles());
        document.getElementById('readLetterBtn').addEventListener('click', () => this.goToScene(5));
        document.getElementById('viewPhotosBtn').addEventListener('click', () => this.goToScene(6));
        document.getElementById('viewQualitiesBtn').addEventListener('click', () => this.goToScene(7));
        document.getElementById('viewSkyBtn').addEventListener('click', () => this.goToScene(8));
        document.getElementById('finalSurpriseBtn').addEventListener('click', () => this.goToScene(9));
        document.getElementById('restartBtn').addEventListener('click', () => this.restart());

        // Music toggle
        document.getElementById('musicToggle').addEventListener('click', () => this.toggleMusic());

        // Gallery
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach((item, index) => {
            item.addEventListener('click', () => this.openLightbox(index));
        });

        document.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
        document.querySelector('.lightbox-prev').addEventListener('click', () => this.prevPhoto());
        document.querySelector('.lightbox-next').addEventListener('click', () => this.nextPhoto());
    }

    // ==================== SCENE MANAGEMENT ====================
    goToScene(sceneNumber) {
        // Hide current scene
        const currentSceneEl = document.getElementById(`scene${this.currentScene}`);
        currentSceneEl.classList.remove('active');

        // Show new scene
        this.currentScene = sceneNumber;
        const newSceneEl = document.getElementById(`scene${sceneNumber}`);
        newSceneEl.classList.add('active');

        // Trigger special animations for specific scenes
        if (sceneNumber === 3) {
            this.lightCandles();
        }
        if (sceneNumber === 4) {
            this.triggerBirthdayExplosion();
        }
        if (sceneNumber === 8) {
            this.drawGalaxy();
        }
        if (sceneNumber === 9) {
            this.triggerFinalSurprise();
        }

        // Update canvas animations
        this.updateCanvasForScene(sceneNumber);
    }

    // ==================== CANDLE ANIMATION ====================
    lightCandles() {
        const flames = document.querySelectorAll('.flame');
        let delay = 0;
        flames.forEach((flame) => {
            setTimeout(() => {
                flame.classList.add('lit');
                this.playFlameSound();
            }, delay);
            delay += 300;
        });
    }

    blowCandles() {
        const flames = document.querySelectorAll('.flame');
        const cakeLayer1 = document.querySelector('.cake-layer-1');
        
        // Trigger wind animation
        this.windAnimation();
        
        // Blow out flames
        flames.forEach((flame, index) => {
            setTimeout(() => {
                flame.classList.remove('lit');
            }, 100 + index * 50);
        });

        // Trigger smoke and sparks
        this.createSmokeEffect();
        
        // Transition to next scene after delay
        setTimeout(() => {
            this.goToScene(4);
        }, 1500);
    }

    windAnimation() {
        const candleSticks = document.querySelectorAll('.candle-stick');
        candleSticks.forEach((stick) => {
            stick.style.animation = 'windBlow 0.5s ease-out';
        });
    }

    createSmokeEffect() {
        const canvas = this.canvasInstances['candleFireCanvas'];
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * -3 - 2,
                life: 1,
                size: Math.random() * 10 + 5
            });
        }
        
        const animateSmoke = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                p.size *= 0.98;
                
                ctx.fillStyle = `rgba(200, 200, 200, ${p.life * 0.5})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            
            if (particles.some(p => p.life > 0)) {
                requestAnimationFrame(animateSmoke);
            }
        };
        
        animateSmoke();
    }

    // ==================== BIRTHDAY EXPLOSION ====================
    triggerBirthdayExplosion() {
        this.createFireworks();
        this.createConfetti();
        this.playExplosionSound();
    }

    createFireworks() {
        const canvas = document.getElementById('fireworksCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        const fireworks = [];
        
        // Create multiple firework bursts
        for (let burst = 0; burst < 8; burst++) {
            setTimeout(() => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height * 0.6;
                
                for (let i = 0; i < 50; i++) {
                    const angle = (Math.PI * 2 * i) / 50;
                    fireworks.push({
                        x: x,
                        y: y,
                        vx: Math.cos(angle) * (2 + Math.random() * 3),
                        vy: Math.sin(angle) * (2 + Math.random() * 3),
                        life: 1,
                        color: ['#ff1493', '#ffd700', '#ff69b4', '#ffed4e'][Math.floor(Math.random() * 4)]
                    });
                }
            }, burst * 200);
        }
        
        const animateFireworks = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            fireworks.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.1; // gravity
                particle.life -= 0.01;
                
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.life;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
                ctx.fill();
            });
            
            ctx.globalAlpha = 1;
            
            if (fireworks.some(p => p.life > 0)) {
                requestAnimationFrame(animateFireworks);
            }
        };
        
        animateFireworks();
    }

    createConfetti() {
        const canvas = document.getElementById('confettiCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        const confetti = [];
        
        for (let i = 0; i < 100; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 2 + 2,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.1,
                size: Math.random() * 5 + 3,
                color: ['#ff1493', '#ffd700', '#ff69b4', '#b19cd9', '#00ff88'][Math.floor(Math.random() * 5)]
            });
        }
        
        const animateConfetti = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            confetti.forEach((piece) => {
                piece.x += piece.vx;
                piece.y += piece.vy;
                piece.rotation += piece.rotationSpeed;
                piece.vy += 0.05; // gravity
                
                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate(piece.rotation);
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
                ctx.restore();
            });
            
            if (confetti.some(p => p.y < canvas.height)) {
                requestAnimationFrame(animateConfetti);
            }
        };
        
        animateConfetti();
    }

    // ==================== CANVAS ANIMATIONS ====================
    initCanvases() {
        // Stars Canvas (Scene 1)
        this.initStarsCanvas();
        
        // Butterflies Canvas (Scene 2)
        this.initButterfliesCanvas();
        
        // Galaxy Canvas (Scene 8)
        this.initGalaxyCanvas();
    }

    initStarsCanvas() {
        const canvas = document.getElementById('starsCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        const stars = [];
        
        // Create stars
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random() * 0.5 + 0.5,
                opacityDelta: (Math.random() - 0.5) * 0.01
            });
        }
        
        const animateStars = () => {
            ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach((star) => {
                star.opacity += star.opacityDelta;
                if (star.opacity >= 1) star.opacityDelta *= -1;
                if (star.opacity <= 0.3) star.opacityDelta *= -1;
                
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Add glow
                ctx.strokeStyle = `rgba(255, 215, 0, ${star.opacity * 0.5})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            });
            
            requestAnimationFrame(animateStars);
        };
        
        this.canvasInstances['starsCanvas'] = canvas;
        animateStars();
    }

    initButterfliesCanvas() {
        const canvas = document.getElementById('butterfliesCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        const butterflies = [];
        const hearts = [];
        
        // Create butterflies
        for (let i = 0; i < 15; i++) {
            butterflies.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                wingAngle: Math.random() * Math.PI * 2,
                wingSpeed: Math.random() * 0.05 + 0.02
            });
        }
        
        // Create hearts
        for (let i = 0; i < 30; i++) {
            hearts.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5 - 0.5,
                life: 1,
                size: Math.random() * 15 + 10
            });
        }
        
        const animateButterflies = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw butterflies
            butterflies.forEach((butterfly) => {
                butterfly.x += butterfly.vx;
                butterfly.y += butterfly.vy;
                butterfly.wingAngle += butterfly.wingSpeed;
                
                // Wrap around edges
                if (butterfly.x > canvas.width) butterfly.x = 0;
                if (butterfly.x < 0) butterfly.x = canvas.width;
                if (butterfly.y > canvas.height) butterfly.y = 0;
                if (butterfly.y < 0) butterfly.y = canvas.height;
                
                // Draw butterfly wings
                ctx.save();
                ctx.translate(butterfly.x, butterfly.y);
                ctx.rotate(Math.sin(butterfly.wingAngle) * 0.3);
                
                ctx.fillStyle = '#ff69b4';
                ctx.beginPath();
                ctx.ellipse(-3, 0, 5, 8, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(3, 0, 5, 8, 0, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = '#ffd700';
                ctx.beginPath();
                ctx.arc(0, 0, 2, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.restore();
            });
            
            // Draw hearts
            hearts.forEach((heart) => {
                heart.x += heart.vx;
                heart.y += heart.vy;
                heart.life -= 0.005;
                
                ctx.globalAlpha = heart.life * 0.7;
                ctx.fillStyle = '#ff1493';
                this.drawHeart(ctx, heart.x, heart.y, heart.size);
            });
            
            ctx.globalAlpha = 1;
            
            requestAnimationFrame(animateButterflies);
        };
        
        this.canvasInstances['butterfliesCanvas'] = canvas;
        animateButterflies();
    }

    drawHeart(ctx, x, y, size) {
        ctx.beginPath();
        ctx.moveTo(x, y + size * 0.4);
        ctx.bezierCurveTo(x - size * 0.3, y - size * 0.1, x - size * 0.5, y - size * 0.3, x - size * 0.3, y - size * 0.1);
        ctx.bezierCurveTo(x - size * 0.5, y - size * 0.4, x - size * 0.3, y - size * 0.2, x, y);
        ctx.bezierCurveTo(x + size * 0.3, y - size * 0.2, x + size * 0.5, y - size * 0.4, x + size * 0.3, y - size * 0.1);
        ctx.bezierCurveTo(x + size * 0.5, y - size * 0.3, x + size * 0.3, y - size * 0.1, x, y + size * 0.4);
        ctx.fill();
    }

    initGalaxyCanvas() {
        const canvas = document.getElementById('galaxyCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.canvasInstances['galaxyCanvas'] = canvas;
    }

    drawGalaxy() {
        const canvas = this.canvasInstances['galaxyCanvas'];
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const stars = [];
        
        // Create galaxy pattern
        for (let i = 0; i < 500; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.4;
            const x = canvas.width / 2 + Math.cos(angle) * distance;
            const y = canvas.height / 2 + Math.sin(angle) * distance;
            
            stars.push({
                x: x,
                y: y,
                radius: Math.random() * 2,
                opacity: Math.random() * 0.8 + 0.2,
                color: ['#ffffff', '#ffd700', '#ff69b4', '#00ff88'][Math.floor(Math.random() * 4)],
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
        
        let time = 0;
        
        const animateGalaxy = () => {
            ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach((star) => {
                star.opacity += star.twinkleSpeed * (Math.sin(time + star.x + star.y) > 0 ? 1 : -1);
                star.opacity = Math.max(0.2, Math.min(1, star.opacity));
                
                ctx.fillStyle = star.color;
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Add glow for brighter stars
                if (star.opacity > 0.7) {
                    ctx.strokeStyle = star.color;
                    ctx.lineWidth = 0.5;
                    ctx.globalAlpha = star.opacity * 0.5;
                    ctx.stroke();
                }
            });
            
            ctx.globalAlpha = 1;
            time += 0.01;
            
            requestAnimationFrame(animateGalaxy);
        };
        
        animateGalaxy();
    }

    updateCanvasForScene(sceneNumber) {
        // Resize all canvases to ensure proper dimensions
        Object.values(this.canvasInstances).forEach(canvas => {
            if (canvas && canvas.offsetParent !== null) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        });
    }

    // ==================== FINAL SURPRISE ====================
    triggerFinalSurprise() {
        this.createHeartRain();
        this.createFinalFireworks();
        this.playFinalSound();
    }

    createHeartRain() {
        const canvas = document.getElementById('finalHeartRainCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        const hearts = [];
        
        // Create hearts
        for (let i = 0; i < 100; i++) {
            hearts.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: Math.random() * 2 + 1,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.1,
                size: Math.random() * 20 + 15,
                life: 1
            });
        }
        
        const animateHearts = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            hearts.forEach((heart) => {
                heart.x += heart.vx;
                heart.y += heart.vy;
                heart.rotation += heart.rotationSpeed;
                
                if (heart.y > canvas.height + 50) {
                    heart.y = -50;
                    heart.x = Math.random() * canvas.width;
                }
                
                ctx.save();
                ctx.translate(heart.x, heart.y);
                ctx.rotate(heart.rotation);
                ctx.globalAlpha = heart.life;
                ctx.fillStyle = '#ff1493';
                this.drawHeart(ctx, 0, 0, heart.size);
                ctx.restore();
            });
            
            requestAnimationFrame(animateHearts);
        };
        
        animateHearts();
    }

    createFinalFireworks() {
        const canvas = document.getElementById('finalFireworksCanvas');
        if (!canvas) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        const fireworks = [];
        
        // Continuous fireworks
        const createBurst = () => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height * 0.6;
            
            for (let i = 0; i < 40; i++) {
                const angle = (Math.PI * 2 * i) / 40;
                fireworks.push({
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * (2 + Math.random() * 4),
                    vy: Math.sin(angle) * (2 + Math.random() * 4),
                    life: 1,
                    size: Math.random() * 3 + 2,
                    color: ['#ff1493', '#ffd700', '#ff69b4', '#00ff88', '#b19cd9'][Math.floor(Math.random() * 5)]
                });
            }
        };
        
        const burstInterval = setInterval(createBurst, 400);
        
        const animateFireworks = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            fireworks.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.08;
                particle.life -= 0.01;
                
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.life;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });
            
            ctx.globalAlpha = 1;
            
            // Remove dead particles
            for (let i = fireworks.length - 1; i >= 0; i--) {
                if (fireworks[i].life <= 0) {
                    fireworks.splice(i, 1);
                }
            }
            
            requestAnimationFrame(animateFireworks);
        };
        
        animateFireworks();
        
        // Store interval for cleanup
        this.finalFireworksInterval = burstInterval;
    }

    // ==================== MUSIC CONTROL ====================
    initMusic() {
        const audio = document.getElementById('backgroundMusic');
        // Note: The actual music file needs to be added to assets/music/romantic-piano.mp3
        // For now, this will handle the control
        audio.volume = 0.3;
        
        // Auto-play music on first interaction
        document.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().catch(e => console.log('Audio play failed:', e));
            }
        }, { once: true });
    }

    toggleMusic() {
        const audio = document.getElementById('backgroundMusic');
        const btn = document.getElementById('musicToggle');
        
        if (audio.paused) {
            audio.play().catch(e => console.log('Audio play failed:', e));
            btn.querySelector('.music-icon').textContent = '🔊';
            this.musicEnabled = true;
        } else {
            audio.pause();
            btn.querySelector('.music-icon').textContent = '🔇';
            this.musicEnabled = false;
        }
    }

    // ==================== GALLERY MANAGEMENT ====================
    initGallery() {
        this.currentPhotoIndex = 0;
        this.photoItems = document.querySelectorAll('.photo-item img');
    }

    openLightbox(index) {
        this.currentPhotoIndex = index;
        const modal = document.getElementById('lightboxModal');
        const img = document.getElementById('lightboxImage');
        img.src = this.photoItems[index].src;
        modal.classList.add('active');
    }

    closeLightbox() {
        const modal = document.getElementById('lightboxModal');
        modal.classList.remove('active');
    }

    nextPhoto() {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photoItems.length;
        const img = document.getElementById('lightboxImage');
        img.src = this.photoItems[this.currentPhotoIndex].src;
    }

    prevPhoto() {
        this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.photoItems.length) % this.photoItems.length;
        const img = document.getElementById('lightboxImage');
        img.src = this.photoItems[this.currentPhotoIndex].src;
    }

    // ==================== SOUND EFFECTS ====================
    playFlameSound() {
        // Placeholder for flame sound
        this.playBeep(400, 100);
    }

    playExplosionSound() {
        // Placeholder for explosion sound
        this.playBeep(800, 300);
        setTimeout(() => this.playBeep(600, 200), 200);
    }

    playFinalSound() {
        // Placeholder for final sound
        this.playBeep(700, 200);
        setTimeout(() => this.playBeep(900, 200), 200);
        setTimeout(() => this.playBeep(1100, 300), 400);
    }

    playBeep(frequency, duration) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration / 1000);
        } catch (e) {
            // Audio context not available, ignore
        }
    }

    // ==================== RESTART ====================
    restart() {
        // Clear final fireworks interval
        if (this.finalFireworksInterval) {
            clearInterval(this.finalFireworksInterval);
        }
        
        // Reset to scene 1
        this.currentScene = 1;
        document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
        document.getElementById('scene1').classList.add('active');
        
        // Restart music
        const audio = document.getElementById('backgroundMusic');
        audio.currentTime = 0;
        if (this.musicEnabled) {
            audio.play().catch(e => console.log('Audio play failed:', e));
        }
    }
}

// ==================== TYPEWRITER EFFECT ====================
class TypewriterEffect {
    constructor() {
        this.init();
    }

    init() {
        const typewriterElements = document.querySelectorAll('.typewriter-text');
        typewriterElements.forEach(el => this.typewrite(el));
    }

    typewrite(element) {
        const text = element.getAttribute('data-text');
        if (!text) return;
        
        let index = 0;
        element.textContent = '';
        
        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        };
        
        // Wait for scene to be active before typing
        setTimeout(type, 500);
    }
}

// ==================== INITIALIZATION ====================
let experience;
let typewriter;

window.addEventListener('load', () => {
    experience = new BirthdayExperience();
    typewriter = new TypewriterEffect();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (experience) {
        experience.updateCanvasForScene(experience.currentScene);
    }
});

// Prevent scrolling on body
document.body.style.overflow = 'hidden';

// Add CSS for wind blow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes windBlow {
        0% { transform: skewX(0deg); }
        50% { transform: skewX(-5deg); }
        100% { transform: skewX(0deg); }
    }
`;
document.head.appendChild(style);
