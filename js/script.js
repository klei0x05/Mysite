const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.menu a');

// Mostra la sezione indicata nell'indirizzo (#home, #about, ...)
function show() {
  let id = location.hash.slice(1);
  if (!document.getElementById(id)) id = 'home';
  sections.forEach(s => s.classList.toggle('visible', s.id === id));

  // La pagina "register" non è nel menu: in quel caso evidenzia Accedi
  const activeId = id === 'register' ? 'login' : id;
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + activeId));
}

window.addEventListener('hashchange', show);
show();

// Impedisce date di nascita nel futuro
document.getElementById('birth').max = new Date().toISOString().split('T')[0];

// Accesso e registrazione solo grafici: non inviano nulla a nessun server
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginMsg = document.getElementById('loginMsg');
const registerMsg = document.getElementById('registerMsg');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  loginMsg.textContent = 'L\'accesso non è ancora attivo: per ora è solo la grafica.';
  loginForm.reset();
});

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  registerMsg.textContent = 'La registrazione non è ancora attiva: per ora è solo la grafica.';
  registerForm.reset();
});