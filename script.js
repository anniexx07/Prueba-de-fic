// Abrir y cerrar aplicaciones principales
function openApp(appId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(appId).classList.add('active');
  document.getElementById('main-dock').style.display = 'none';
}

function closeApp() {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById('home-screen').classList.add('active');
  document.getElementById('main-dock').style.display = 'flex';
  dismissCall();
}

// Marcar número en el Teléfono
function pressDial(num) {
  const display = document.getElementById('dial-display');
  display.innerText += num;
}

// Navegación de chats en WhatsApp
function openWaChat(chatId) {
  document.getElementById('wa-list-view').style.display = 'none';
  document.getElementById(chatId).style.display = 'flex';
}

function closeWaChat(chatId) {
  document.getElementById(chatId).style.display = 'none';
  document.getElementById('wa-list-view').style.display = 'block';
}

// Navegación en Instagram
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

function openIgProfile(profId) {
  document.querySelectorAll('.ig-view').forEach(view => view.classList.remove('active'));
  document.getElementById('ig-profile-view').classList.add('active');
  document.querySelectorAll('.profile-detail-card').forEach(prof => prof.style.display = 'none');
  document.getElementById(profId).style.display = 'block';
}

function openIgPostModal(title, caption) {
  document.getElementById('ig-modal-title').innerText = title;
  document.getElementById('ig-modal-caption').innerText = caption;
  document.getElementById('ig-post-modal').style.display = 'flex';
}

function closeIgPostModal() {
  document.getElementById('ig-post-modal').style.display = 'none';
}

// Lectura de Notas
function openNoteDetail(noteId) {
  document.getElementById('notes-list').style.display = 'none';
  document.getElementById(noteId).style.display = 'block';
}

function closeNoteDetail(noteId) {
  document.getElementById(noteId).style.display = 'none';
  document.getElementById('notes-list').style.display = 'block';
}

// Notificaciones y Llamadas automatizadas
setTimeout(() => {
  document.getElementById('notif-banner').classList.add('show');
}, 3000);

setTimeout(() => {
  document.getElementById('incoming-call').style.display = 'flex';
}, 7000);

function openAppFromNotif(appId, chatId) {
  document.getElementById('notif-banner').classList.remove('show');
  openApp(appId);
  openWaChat(chatId);
}

function dismissCall() {
  document.getElementById('incoming-call').style.display = 'none';
}

function acceptCall() {
  dismissCall();
  openApp('whatsapp-screen');
  openWaChat('chat-individual');
}

// Galería de fotos
function viewPhoto(src, cap) {
  document.getElementById('viewer-img').src = src;
  document.getElementById('viewer-caption').innerText = cap;
  document.getElementById('photo-viewer').style.display = 'flex';
}

function closePhotoViewer() {
  document.getElementById('photo-viewer').style.display = 'none';
}
