document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === page) link.classList.add('active');
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.project-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('btn-brand'));
      filterButtons.forEach(b => b.classList.add('btn-outline-brand'));
      button.classList.remove('btn-outline-brand');
      button.classList.add('btn-brand');
      const filter = button.dataset.filter;
      items.forEach(item => item.classList.toggle('is-hidden', filter !== 'all' && item.dataset.category !== filter));
    });
  });
});
