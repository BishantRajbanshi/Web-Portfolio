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
