const nav = document.querySelector('header nav')
const togglen = document.querySelectorAll('nav .toggle')
  
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', fuction () 
  {
    nav:classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  window.addEventListener('scroll'), function () {
    if (window.srolly >= navHeight) {
      // scroll é maior que altura do header
      header.classList.add('scroll')
    } else {
      // menor que altura do header
    }}
}

  /*Testimonials carousel slider swiper*/

 const swiper = new Swiper('.swiper-container') {
   slidesPerView: 1,
   pagination: {
     el: '.swiper-pagination'
   }
   mousewheel: true,
   keyboard: true
 }

 /* ScrollReveal: Mostrar elementos quando der scroll na página */
 
 const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true
 })

 scrollReveal.reveal('#home .image, #home .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links', footer .brand, footer .social
 { interval: 100}
 )

 /* Botão voltar para o topo*/
 
 function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')



  if(window.scrolly >= 560) {
    backToTopButton.classList.add('show') 
  } else {
    backToTopButton.classList.remove('show')
  }
 }
 
/*When Scrool */

 window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})