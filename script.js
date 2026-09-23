'use strict';

document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navegacion');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(max-width: 680px)').addEventListener('change', closeMenu);

const form = document.getElementById('quote-form');
const result = document.getElementById('quote-result');
const preview = document.getElementById('quote-preview');
const whatsappLink = document.getElementById('quote-whatsapp');
const serviceSelect = document.getElementById('servicio');

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    serviceSelect.value = link.dataset.service;
    form.hidden = false;
    result.hidden = true;
  });
});

// Build a draft locally. Opening WhatsApp and sending are separate user actions.
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.nombre;
  const detail = form.elements.detalle;
  for (const field of [name, detail]) {
    field.value = field.value.trim();
    if (!field.value) {
      field.setCustomValidity('Completa este campo para preparar tu consulta.');
      field.reportValidity();
      return;
    }
  }
  if (!form.reportValidity()) return;
  const company = form.elements.empresa.value.trim();
  const message = [
    'Hola REPEL, quisiera solicitar una cotización.',
    '',
    'Nombre: ' + name.value,
    ...(company ? ['Empresa: ' + company] : []),
    'Servicio: ' + serviceSelect.value,
    '',
    'Detalle de mi consulta:',
    detail.value
  ].join('\n');
  preview.textContent = message;
  whatsappLink.href = 'https://wa.me/51949829212?text=' + encodeURIComponent(message);
  form.hidden = true;
  result.hidden = false;
  result.focus({ preventScroll: true });
  result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
});
form.addEventListener('input', event => {
  if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
});
document.getElementById('edit-quote').addEventListener('click', () => {
  result.hidden = true;
  form.hidden = false;
  form.elements.nombre.focus({ preventScroll: true });
});
