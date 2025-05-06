document.addEventListener('DOMContentLoaded', () => {
    const animateBtn = document.getElementById('animateBtn');
    const message = document.getElementById('message');
    const themeToggle = document.getElementById('themeToggle');
    const bouncyImage = document.getElementById('bouncyImage');
    const clock = document.getElementById('clock');
  
    // Show message if previously visited
    if (localStorage.getItem('visited')) {
      message.classList.add('visible');
    }
    localStorage.setItem('visited', 'true');
  
    // Animate button
    animateBtn.addEventListener('click', () => {
      message.classList.add('visible');
    });
  
    // Theme toggle with localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    }
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  
    // Bouncy image animation on click
    bouncyImage.addEventListener('click', () => {
      bouncyImage.classList.add('bounce');
      setTimeout(() => bouncyImage.classList.remove('bounce'), 600);
    });
  
    // Real-time clock
    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      clock.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
  });
  