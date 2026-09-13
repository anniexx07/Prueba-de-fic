// Abrir cualquier aplicación
function openApp(appId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(appId).classList.add('active');
}

// Volver a la pantalla de Inicio (Home)
function closeApp() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById('home-screen').classList.add('active');
}

// Marcar número en el Teléfono
function pressDial(num) {
  const display = document.getElementById('dial-display');
  display.innerText += num;
}

// Navegación dentro de los chats de WhatsApp
function openWaChat(chatId) {
  document.getElementById('wa-list-view').style.display = 'none';
  document.getElementById(chatId).style.display = 'block';
}

function closeWaChat(chatId) {
  document.getElementById(chatId).style.display = 'none';
  document.getElementById('wa-list-view').style.display = 'block';
}

// Pestañas de Instagram
function switchIgTab(tabId) {
  document.querySelectorAll('.ig-tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}

// Modal de publicaciones de Instagram
function openPostModal() {
  document.getElementById('post-modal').style.display = 'block';
}

function closePostModal() {
  document.getElementById('post-modal').style.display = 'none';
}

// Abrir y cerrar fotos en la Galería
function viewPhoto(imgSrc, caption) {
  document.getElementById('viewer-img').src = imgSrc;
  document.getElementById('viewer-caption').innerText = caption;
  document.getElementById('photo-viewer').style.display = 'flex';
}

function closePhotoViewer() {
  document.getElementById('photo-viewer').style.display = 'none';
}
