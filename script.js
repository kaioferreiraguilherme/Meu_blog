// script.js — menu toggle, set year
document.addEventListener('DOMContentLoaded', function(){
  const burgerButtons = document.querySelectorAll('.burger');
  const nav = document.getElementById('nav');

  burgerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!nav) return;
      nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    });
  });

  // set year
  document.querySelectorAll('#year, #year-posts, #year-sobre, #year-contato').forEach(el=>{
    if(el) el.textContent = new Date().getFullYear();
  });
});
