// script.js — gera lista de posts, busca e menu mobile
const posts = [
  { title: "Introdução ao Marketing Digital", image: "assets/marketing-digital-banner.jpg", link: "posts/post1.html" },
  { title: "Como Criar Conteúdo Viral", image: "assets/conteudo-viral.jpg", link: "posts/post2.html" },
  { title: "Ferramentas Essenciais de Marketing Digital", image: "assets/ferramentas-mkt-digital.jpg", link: "posts/post3.html" }
];

document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts');
  const search = document.getElementById('search');
  const nav = document.getElementById('nav');

  // render posts
  if (postsContainer) {
    posts.forEach(p => {
      const el = document.createElement('article');
      el.className = 'post-card';
      el.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h2>${p.title}</h2>
      `;
      el.addEventListener('click', () => window.location.href = p.link);
      postsContainer.appendChild(el);
    });
  }

  // search
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      document.querySelectorAll('.post-card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // burger menu
  document.querySelectorAll('.burger').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!nav) return;
      nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    });
  });

  // set year
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
});
