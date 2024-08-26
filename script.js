// script.js

// Función para crear burbujas
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 60 + 20; // Tamaño aleatorio
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.bottom = '0';
    
    document.body.appendChild(bubble);
    
    // Animación de burbuja
    setTimeout(() => {
      bubble.style.transform = `translateY(-${Math.random() * 200 + 100}px)`;
      bubble.style.opacity = '0';
    }, 50);
    
    // Eliminar burbuja después de la animación
    setTimeout(() => {
      bubble.remove();
    }, 2000);
  }
  
  // Función para crear aves
  function createBird() {
    const bird = document.createElement('div');
    bird.classList.add('bird');
    
    // Posición aleatoria
    bird.style.top = `${Math.random() * 50 + 10}vh`;
    
    document.body.appendChild(bird);
    
    // Eliminar ave después de la animación
    setTimeout(() => {
      bird.remove();
    }, 5000);
  }
  
  // Función para crear fuegos artificiales
  function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.bottom = '0';
    
    document.body.appendChild(firework);
    
    // Animación de fuegos artificiales
    setTimeout(() => {
      firework.style.transform = 'translateY(-300px)';
      firework.style.opacity = '0';
    }, 50);
    
    // Eliminar fuego artificial después de la animación
    setTimeout(() => {
      firework.remove();
    }, 2000);
  }
  
  // Generar burbujas, aves y fuegos artificiales cada segundo
  setInterval(createBubble, 300);
  setInterval(createBird, 300);
  setInterval(createFirework, 300);