/* =========================================
FILE: script.js
========================================= */

/* =========================================
   AOS INIT
========================================= */

AOS.init({

    duration:1200,
    once:true

});

/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

/* =========================================
   HERO GSAP
========================================= */

gsap.from(".hero-badge",{

    y:50,
    opacity:0,
    duration:1

});

gsap.from(".hero-title",{

    y:100,
    opacity:0,
    duration:1.2,
    delay:0.2

});

gsap.from(".hero-text",{

    y:50,
    opacity:0,
    duration:1,
    delay:0.5

});

gsap.from(".hero-buttons",{

    y:50,
    opacity:0,
    duration:1,
    delay:0.8

});

/* =========================================
   COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const speed = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + speed);

            setTimeout(updateCounter,30);

        }else{

            counter.innerText = target + "+";
        }
    };

    updateCounter();

});

/* =========================================
   SWIPER
========================================= */

var swiper = new Swiper(".mySwiper",{

    slidesPerView:1,

    spaceBetween:30,

    loop:true,

    autoplay:{

        delay:3000,
        disableOnInteraction:false

    },

    breakpoints:{

        768:{
            slidesPerView:2
        }

    }

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",
    function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* =========================================
   CONTACT FORM
========================================= */

const form =
document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Transmission Sent Successfully 🚀"
    );

    form.reset();

});

/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener("scroll",()=>{

    const scrollY = window.scrollY;

    document.querySelector(".hero")
    .style.backgroundPositionY =
    scrollY * 0.5 + "px";

});