// Abrir cualquier aplicación y ocultar el Dock
function openApp(appId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(appId).classList.add('active');
  
  // Ocultar la barra de apps del escritorio
  document.getElementById('main-dock').style.display = 'none';
}

// Volver al Inicio de Android (Muestra el Dock y resetea pantallas)
function closeApp() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById('home-screen').classList.add('active');
  
  // Volver a mostrar la barra de apps en el inicio
  document.getElementById('main-dock').style.display = 'flex';
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

// LÓGICA DE INSTAGRAM (Cambio entre Feed y Búsqueda mediante la Lupa)
function showIgTab(tab) {
  document.querySelectorAll('.ig-view').forEach(view => view.classList.remove('active'));
  document.querySelectorAll('.ig-nav-btn').forEach(btn => btn.classList.remove('active'));

  if (tab === 'feed') {
    document.getElementById('ig-feed-view').classList.add('active');
    document.getElementById('ig-feed-btn').classList.add('active');
  } else if (tab === 'search') {
    document.getElementById('ig-search-view').classList.add('active');
    document.getElementById('ig-search-btn').classList.add('active');
  }
}

// Abrir perfil individual al tocar sobre un reciente
function openIgProfile(profileId) {
  document.querySelectorAll('.ig-view').forEach(view => view.classList.remove('active'));
  document.getElementById('ig-profile-view').classList.add('active');
  
  document.querySelectorAll('.profile-detail-card').forEach(prof => prof.style.display = 'none');
  document.getElementById(profileId).style.display = 'block';
}

// Modal para publicaciones de IG
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
