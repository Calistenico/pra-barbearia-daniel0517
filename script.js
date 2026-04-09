// SCROLL REVEAL com IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  reveals.forEach(reveal => {
    reveal.addEventListener('intersect', () => {
      if (reveal.intersectionRatio > 0) {
        reveal.classList.add('visible');
      }
    });
    
    reveal.style.opacity = 0;
  });
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.classList.contains('reveal')) {
        entry.target.classList.add('visible');
        observer.disconnect();
      }
    });
  }, { threshold: 0.15 });
  
  reveals.forEach(reveal => observer.observe(reveal));
});

// NAVBAR DINÂMICA
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 50;
  
  navbar.classList.toggle('scrolled', scrolled);
  
  navbar.style.transition = 'all 0.3s ease';
});

// CONTADORES ANIMADOS
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    let count = parseInt(counter.getAttribute('data-count'));
    
    function animate() {
      counter.style.opacity = 1;
      counter.style.transform = 'scale(1)';
      
      if (count > 0) {
        count--;
        
        setTimeout(() => {
          counter.style.transition = 'all 2s easeOutCubic';
          counter.style.transform = `translateX(${-count * 10}px)`;
          animate();
        }, 100);
      } else {
        counter.style.transform = 'scale(1)';
      }
    }
    
    animate();
  });
  
  counters.forEach(counter => {
    const value = parseInt(counter.textContent.replace(/\D/g, ''));
    
    if (value > 0) {
      function format() {
        let formattedValue = Math.floor(value / 100);
        
        counter.textContent = `${formattedValue}K`;
        
        if (value % 100 >= 10 && value % 100 < 20) {
          counter.textContent += 'K';
        }
        
        setTimeout(() => {
          format();
        }, 2000);
      }
      
      format();
    }
  });
});

// FAQ ACCORDION
document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelector('.faq');
  
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    
    const accordions = faq.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
      if (accordion !== faq) {
        accordion.style.maxHeight = '0';
        
        setTimeout(() => {
          accordion.style.maxHeight = `${accordion.scrollHeight}px`;
        }, 100);
      }
    });
  });
});

// SMOOTH SCROLL para links internos (#section)
document.addEventListener('DOMContentLoaded', () => {
  const smoothScrollLinks = document.querySelectorAll('#section a');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const sectionId = link.getAttribute('href').replace('#', '');
      
      window.scrollTo({ top: document.querySelector(sectionId).offsetTop, behavior: 'smooth' });
    });
  });
});

// CURSOR GLOW
if (window.matchMedia('(display-mode: standalone)').matches) {
  const cursorGlow = document.createElement('div');
  
  cursorGlow.style.position = 'absolute';
  cursorGlow.style.width = '20px';
  cursorGlow.style.height = '20px';
  cursorGlow.style.borderRadius = '50%';
  cursorGlow.style.background = '#333';
  cursorGlow.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  cursorGlow.style.transform = 'translateX(-10px)';
  
  document.body.appendChild(cursorGlow);
  
  const mouseMove = (e) => {
    if (e.clientX < window.innerWidth / 2) {
      cursorGlow.style.left = `${e.clientX + 10}px`;
    } else {
      cursorGlow.style.left = `${window.innerWidth - e.clientX - 10}px`;
    }
    
    cursorGlow.style.background = `rgba(255, 255, 255, ${Math.abs(e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)})`;
  };
  
  document.addEventListener('mousemove', mouseMove);
}

// FLOATING WHATSAPP
document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.querySelector('.whatsapp-button');
  
  whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/55519999999?text=Olá%20tudo%20bem!', '_blank');
  });
});

// DEBUG
console.log('Script JS carregado com sucesso!');