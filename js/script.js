        // Particles System
        const canvas = document.getElementById('particles-canvas');
        // @ts-ignore
        const ctx = canvas.getContext('2d');
        
        // @ts-ignore
        canvas.width = window.innerWidth;
        // @ts-ignore
        canvas.height = document.documentElement.scrollHeight;

        // @ts-ignore
        const particles = [];
        // @ts-ignore
        const particleCount = 80;

        // @ts-ignore
        class Particle {
            constructor() {
                // @ts-ignore
                this.x = Math.random() * canvas.width;
                // @ts-ignore
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // @ts-ignore
                if (this.x > canvas.width) this.x = 0;
                // @ts-ignore
                if (this.x < 0) this.x = canvas.width;
                // @ts-ignore
                if (this.y > canvas.height) this.y = 0;
                // @ts-ignore
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            // @ts-ignore
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        // Resize canvas
        window.addEventListener('resize', () => {
            // @ts-ignore
            canvas.width = window.innerWidth;
            // @ts-ignore
            canvas.height = document.documentElement.scrollHeight;
        });

        // @ts-ignore
        let resizeTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // @ts-ignore
                canvas.height = document.documentElement.scrollHeight;
            }, 100);
        });

        // Smooth scroll
        // @ts-ignore
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            // @ts-ignore
            document.querySelector('.classes-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });

        // Parallax effect on cards
        document.querySelectorAll('.class-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                // @ts-ignore
                const x = e.clientX - rect.left;
                // @ts-ignore
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                // @ts-ignore
                card.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            });

            card.addEventListener('mouseleave', () => {
                // @ts-ignore
                card.style.transform = '';
            });
        });

        // Scroll reveal animation
        // @ts-ignore
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        // @ts-ignore
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // @ts-ignore
                    entry.target.style.opacity = '1';
                    // @ts-ignore
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.class-card').forEach(card => {
            // @ts-ignore
            card.style.opacity = '0';
            // @ts-ignore
            card.style.transform = 'translateY(50px)';
            // @ts-ignore
            card.style.transition = 'all 0.8s ease';
            observer.observe(card);
        });