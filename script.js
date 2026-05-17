/* =========================
   AOS
========================= */

AOS.init({
  duration:1000,
  once:true
});

/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* =========================
   COUNTER
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

  counter.innerText = "0";

  const updateCounter = ()=>{

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

      if(target === 500){
        counter.innerText = target + "K+";
      }

      else if(target === 15){
        counter.innerText = target + "M+";
      }

      else{
        counter.innerText = target + "+";
      }

    }

  };

  updateCounter();

});

/* =========================
   SWIPER
========================= */

var swiper = new Swiper(".mySwiper", {

  slidesPerView:1,
  spaceBetween:25,
  loop:true,

  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },

  breakpoints:{

    768:{
      slidesPerView:2,
    },

    1200:{
      slidesPerView:4,
    }

  }

});

/* =========================
   SCROLL REVEAL
========================= */

ScrollReveal().reveal('.service-card,.film-card,.video-card',{

  distance:'50px',
  duration:1000,
  interval:150,
  origin:'bottom'

});