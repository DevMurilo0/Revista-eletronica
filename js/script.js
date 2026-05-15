let index = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
  index++;

  if (index >= totalSlides) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 4000);



window.addEventListener('load', function() {
  const limitarScroll = () => {
    const organizadores = document.querySelector('.organizadores');
    const acessoFolha = document.querySelector('.acesso-folha');
    
    if (organizadores && acessoFolha) {
      const maxScroll = acessoFolha.offsetTop + acessoFolha.offsetHeight - window.innerHeight;
      
      if (window.scrollY > maxScroll) {
        window.scrollTo(0, maxScroll);
      }
    }
  };
  
  window.addEventListener('scroll', limitarScroll);
});