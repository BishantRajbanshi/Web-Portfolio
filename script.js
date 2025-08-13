function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Chat Widget Functionality
function toggleChat() {
  const modal = document.getElementById('chat-modal');
  modal.classList.toggle('active');
}

// Add click event listener to chat widget button
document.getElementById('chat-widget-button').addEventListener('click', toggleChat);

// Close chat modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('chat-modal');
  const chatButton = document.getElementById('chat-widget-button');
  
  if (!modal.contains(event.target) && !chatButton.contains(event.target) && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});

// Theme switching functionality
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update moon icon
  const moonIcon = document.getElementById('dark-mode');
  if (theme === 'dark') {
    moonIcon.src = './Images/sun.png';
  } else {
    moonIcon.src = './Images/moon.png';
  }
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
}

// Toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Add click event listener to moon icon
document.getElementById('dark-mode').addEventListener('click', toggleTheme);

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initializeTheme);

function openWeatherApp() {
  window.open('./project/WeatherApp/BishantRajbanshiID-2418795.html', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
}
