document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('nav ul li a[href="about.html"]'); // Находим кнопку "О нас"
    
    if(aboutLink){
        aboutLink.addEventListener('mouseenter', function() {
            this.style.transition = "transform 0.3s ease";
           this.style.transform = "scale(1.1)";
        });
       aboutLink.addEventListener('mouseleave', function() {
           this.style.transition = "transform 0.3s ease";
           this.style.transform = "scale(1)";
      });
    }});