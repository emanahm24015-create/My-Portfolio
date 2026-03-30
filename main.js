let btn = document.getElementById('mobile-btn');
let menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden'); 
  });



const toggleBtn = document.getElementById('darkToggleBtn');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  htmlEl.classList.remove('dark');
  toggleBtn.textContent = 'Dark Mode';
} else {
  htmlEl.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
}

toggleBtn.addEventListener('click', () => {
  htmlEl.classList.toggle('dark');

  if (htmlEl.classList.contains('dark')) {
    toggleBtn.textContent = 'Light Mode';
    localStorage.setItem('theme','dark');
  } else {
    toggleBtn.textContent = 'Dark Mode';
    localStorage.setItem('theme','light');
  }
});