

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
window.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const container = document.querySelector('.scattered-container');
  
    planets.forEach(planet => {
      const x = Math.random() * (window.innerWidth - 100); // Random X position
      const y = Math.random() * (window.innerHeight - 100); // Random Y position
  
      planet.style.top = `${y}px`;
      planet.style.left = `${x}px`;
    });
  });
 

 