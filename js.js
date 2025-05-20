const btn = document.querySelector('.btn-fechar');
const nav = document.querySelector('.navegacao');

btn.addEventListener('click', () => {
  nav.classList.toggle('recolhido');
});
