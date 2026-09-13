// Abrir y cerrar aplicaciones principales
function openApp(appId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(appId).classList.add('active');
}

function closeApp() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById('home-screen').classList.add('active');
}

// Marcar número en Teléfono
function pressDial(num) {
  const display = document.getElementById('dial-display');
  display.innerText += num;
}

// WhatsApp
function openWaChat(chatId) {
  document.getElementById('wa-list-view').style.display = 'none';
  document.getElementById(chatId).style.display = 'block';
}

function closeWaChat(chatId) {
  document.getElementById(chatId).style.display = 'none';
  document.getElementById('wa-list-view').style.display = 'block';
}

// LÓGICA DE INSTAGRAM (Navegación entre Feed, Búsqueda y Perfiles)
function showIgTab(tab) {
  // Cambiar vistas
  document.querySelectorAll('.ig-view').forEach(view => view.classList.remove('active'));
  document.querySelectorAll('.ig-nav-btn').forEach(btn => btn.classList.remove('active'));

  if (tab === 'feed') {
    document.getElementById('ig-feed-view').classList.add('active');
    document.querySelectorAll('.ig-nav-btn')[0].classList.add('active');
  } else if (tab === 'search') {
    document.getElementById('ig-search-view').classList.add('active');
    document.querySelectorAll('.ig-nav-btn')[1].classList.add('active');
  }
}

// Abrir perfil individual de Instagram
function openIgProfile(profileId) {
  document.querySelectorAll('.ig-view').forEach(view => view.classList.remove('active'));
  document.getElementById('ig-profile-view').classList.add('active');
  
  // Ocultar todos los perfiles y mostrar el seleccionado
  document.querySelectorAll('.profile-detail-card').forEach(prof => prof.style.display = 'none');
  document.getElementById(profileId).style.display = 'block';
}

// Visor modal para posts de Instagram
function openIgPostModal(title, caption) {
  document.getElementById('ig-modal-title').innerText = title;
  document.getElementById('ig-modal-caption').innerText = caption;
  document.getElementById('ig-post-modal').style.display = 'flex';
}

function closeIgPostModal() {
  document.getElementById('ig-post-modal').style.display = 'none';
}

// Galería de fotos
function viewPhoto(imgSrc, caption) {
  document.getElementById('viewer-img').src = imgSrc;
  document.getElementById('viewer-caption').innerText = caption;
  document.getElementById('photo-viewer').style.display = 'flex';
}

function closePhotoViewer() {
  document.getElementById('photo-viewer').style.display = 'none';
}
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
