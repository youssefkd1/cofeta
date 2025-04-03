const menu_open_button = document.querySelector("#menu-open-button")
const menu_close_button = document.querySelector("#menu-close-button")
const nav_links = document.querySelectorAll(".nav-menu .nav-link")
const about_image = document.querySelector(".about-image")

menu_open_button.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu")
})
menu_close_button.addEventListener('click', () => 
    menu_open_button.click()
)

if(document.body.clientWidth <= 900){
    about_image.src = "images/about-image (1).webp"
}

nav_links.forEach(link => {
    link.addEventListener('click', () => menu_close_button.click())
})

const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    spaceBetween: 25,
    grabCursor: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

  });