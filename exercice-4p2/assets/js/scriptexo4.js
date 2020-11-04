const blocAdd = document.querySelector('.blocTotal');
const prez = document.getElementById('presentation');
let height = prez.clientHeight;

window.addEventListener('scroll', () => {
 if(window.scrollY > height) {
    blocAdd.classList.add('scroll');
 } else {
    blocAdd.classList.remove('scroll');
 }
});