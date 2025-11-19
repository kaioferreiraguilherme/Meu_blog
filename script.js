// script.js — menu toggle, search filter, dynamic year
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const search = document.getElementById('search');
  const postsContainer = document.getElementById('posts');

  // Toggle menu (works for all burger buttons present)
  document.querySelectorAll('.burger').forEach(btn => {
    btn.addEventListener('click', () => {
      // find the nav (desktop nav) and toggle class
      nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    });
  });

  // Search filter (filtra títulos e parágrafos)
  if(search && postsContainer){
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      const cards = postsContainer.querySelectorAll('.card');
      cards.forEach(c => {
        const text = c.innerText.toLowerCase();
        c.style.display = text.indexOf(q) > -1 ? '' : 'none';
      });
    });
  }

  // años en footer
  const yearEls = document.querySelectorAll('#year, #year2, #year3, #year4');
  const y = new Date().getFullYear();
  yearEls.forEach(el => { if(el) el.textContent = y; });
});
