/*=========================================
JAMUIYATUL TAWHEED ISLAMIC SECONDARY SCHOOL
SCRIPT.JS PART 1
==========================================*/

/*==============================
LOADING SCREEN
==============================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.style.display="none";

},700);

},2500);

});

/*==============================
MOBILE MENU
==============================*/

const menu=document.querySelector(".menu");

const nav=document.querySelector("nav ul");

menu.onclick=()=>{

nav.classList.toggle("showMenu");

};

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]')

.forEach(link=>{

link.onclick=function(e){

e.preventDefault();

document

.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

};

});

/*==============================
HEADER EFFECT
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("activeHeader");

}else{

header.classList.remove("activeHeader");

}

});

/*==============================
HERO SLIDER
==============================*/

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function heroSlider(){

slides.forEach(slide=>{

slide.style.display="none";

});

currentSlide++;

if(currentSlide>slides.length){

currentSlide=1;

}

slides[currentSlide-1].style.display="block";

}

heroSlider();

setInterval(heroSlider,4000);

/*==============================
GALLERY HOVER
==============================*/

document

.querySelectorAll(".gallery-item")

.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-10px)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0px)";

});

});

/*==============================
SCROLL ANIMATION
==============================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document

.querySelectorAll(

".card,.activity,.house-card,.gallery-item,.contact-card"

)

.forEach(el=>{

observer.observe(el);

});

/*==============================
CONTACT FORM
==============================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",e=>{

e.preventDefault();

alert(

"Thank you for contacting Jamuiyatul Tawheed Islamic Secondary School."

);

form.reset();

});

}
/*=========================================
SCRIPT.JS PART 2
==========================================*/

/*==============================
DARK MODE
==============================*/

const themeBtn=document.createElement("button");

themeBtn.id="themeBtn";

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

document.body.appendChild(themeBtn);

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

/*==============================
BACK TO TOP
==============================*/

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>400

?

"flex"

:

"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==============================
WHATSAPP BUTTON
==============================*/

const whatsapp=document.createElement("a");

whatsapp.id="whatsapp";

whatsapp.href="https://wa.me/256700000000";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

/*==============================
ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
COPYRIGHT YEAR
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
PORTRAIT / LANDSCAPE
==============================*/

function checkOrientation(){

if(window.innerHeight>window.innerWidth){

console.log("Portrait Mode");

}else{

console.log("Landscape Mode");

}

}

window.addEventListener("resize",checkOrientation);

checkOrientation();

/*==============================
WELCOME MESSAGE
==============================*/

setTimeout(()=>{

console.log(

"Welcome to Jamuiyatul Tawheed Islamic Secondary School"

);

},3500);

/*==============================
BUTTON ANIMATION
==============================*/

document

.querySelectorAll("button,.btn,.btn2,.apply-btn")

.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="";

},180);

});

});

/*==============================
FADE PAGE
==============================*/

document.body.style.opacity="0";

window.onload=()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

};

/*==============================
END
==============================*/