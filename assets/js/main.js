/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When clicking on each nav__link, remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
      modal(i)  
    })
})

modalCloses.forEach((modalClose)  => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
var swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
var swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination-testimonial',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2, 
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
*/

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')

    // When scroll is greater than 80 view height, add scroll header class to header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    // when scroll is higher than 560 viewport height, add the show-scroll class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Dropdown functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('.nav__link');
    
    dropdownLink.addEventListener('click', function(e) {
      // Only activate for mobile view
      if(window.innerWidth <= 767) {
        e.preventDefault();
        dropdown.classList.toggle('show-dropdown');
        
        // Close other dropdowns
        dropdowns.forEach(other => {
          if(other !== dropdown && other.classList.contains('show-dropdown')) {
            other.classList.remove('show-dropdown');
          }
        });
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if(!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show-dropdown');
      });
    }
  });
});

// Prevent dropdown scroll from affecting parent elements
document.addEventListener('DOMContentLoaded', function() {
  const dropdownMenus = document.querySelectorAll('.dropdown__menu');
  
  dropdownMenus.forEach(menu => {
    menu.addEventListener('touchmove', function(e) {
      // Check if menu is scrollable (content height > visible height)
      if(this.scrollHeight > this.clientHeight) {
        e.stopPropagation();
      }
    }, { passive: true });
  });
});

// Page transition effect
document.addEventListener('DOMContentLoaded', function() {
  const pageTransition = document.querySelector('.page-transition');
  
  // Show transition when page loads
  if (pageTransition) {
    pageTransition.classList.add('active');
    
    // Hide transition after content loads
    window.addEventListener('load', function() {
      setTimeout(() => {
        pageTransition.classList.remove('active');
      }, 300);
    });
  }
});

// Parallax background effect
document.addEventListener('DOMContentLoaded', function() {
  const parallaxBg = document.querySelector('.parallax-bg');
  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  
  // Dynamically adjust height based on page content
  if (parallaxBg && pageHeight > window.innerHeight * 2) {
    parallaxBg.style.height = (pageHeight * 1.5) + 'px';
  }
  
  if (parallaxBg) {
    window.addEventListener('scroll', function() {
      // Calculate how far down the page we've scrolled
      const scrolled = window.scrollY;
      
      // Use a slower scroll rate for longer pages to prevent running out of background
      const scrollRate = 0.3; // Reduced from 0.5 to 0.3
      const translateY = scrolled * scrollRate;
      
      // Apply the transform
      parallaxBg.style.transform = `scale(1.1) translateY(-${translateY}px)`;
    });
  }
});

