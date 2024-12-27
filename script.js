document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
  
    if (aboutLink) {
      aboutLink.addEventListener('mouseenter', function() {
        const link = this.querySelector('a');
        if (link) {
            link.style.transform = 'scale(1.1)';
        }
      });
  
      aboutLink.addEventListener('mouseleave', function() {
        const link = this.querySelector('a');
        if (link) {
           link.style.transform = 'scale(1)';
        }
      });
    }
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
   if (window.scrollY > 300) {
       backToTopButton.style.display = 'block';
   } else {
       backToTopButton.style.display = 'none';
   }
});

backToTopButton.addEventListener('click', () => {
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   });
});

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const images = document.querySelectorAll('.carousel img');
const size = images[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevBtn.addEventListener('click', () => {
   if (counter <= 0) return;
   counter--;
   carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextBtn.addEventListener('click', () => {
   if (counter >= images.length - 1) return;
   counter++;
   carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
function carouselGoNext(){
   if (counter >= images.length - 1) {
       carousel.style.transition = 'none';
       counter = 0;
       carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }

   counter++;
   carousel.style.transition = 'transform 0.4s ease-in-out';
   carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

setInterval(carouselGoNext, 3000);

function modifyArray(arr) {
   if (!Array.isArray(arr)) {
       console.error("Ошибка: В функцию передан не массив.");
       return;
   }

   const result = [];
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] < 0) {
           result.push(0);
       } else if (arr[i] % 2 === 0) {
           result.push(2);
       } else {
           result.push(arr[i]);
       }
   }
   return result;
}
});

const aboutLink = document.querySelector('nav ul li a[href="about.html"]');
if (aboutLink) {
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
       window.open(this.href, '_blank'); // Открываем ссылку в новой вкладке
 });
}