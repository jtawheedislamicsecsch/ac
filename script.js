/*=========================================
JAMUIYATUL TAWHEED ISLAMIC SECONDARY SCHOOL
SCRIPT.JS - PART 1 (CLEAN VERSION)
=========================================*/

// ==========================
// LOADER
// ==========================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.style.transition = "opacity .6s ease";
            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 600);

        }, 1800);
    }
});

// ==========================
// MOBILE MENU
// ==========================
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

if (menu && nav) {

    menu.addEventListener("click", function () {
        nav.classList.toggle("showMenu");
    });

}

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// HEADER EFFECT
// ==========================
const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(255,255,255,.18)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// HERO SLIDER
// ==========================
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[index].style.display = "block";

    }

    showSlide(current);

    setInterval(function () {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        showSlide(current);

    }, 
            // ==========================
// GALLERY HOVER
// ==========================
document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-10px)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0)";
    });

});

// ==========================
// SCROLL ANIMATION
// ==========================
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".card,.activity,.house-card,.gallery-item,.contact-card"
).forEach(el => {

    observer.observe(el);

});

// ==========================
// CONTACT FORM
// ==========================
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you for contacting Jamuiyatul Tawheed Islamic Secondary School.");

        form.reset();

    });

}

// ==========================
// DARK MODE
// ==========================
const themeBtn = document.createElement("button");

themeBtn.id = "themeBtn";

themeBtn.innerHTML = "🌙";

document.body.appendChild(themeBtn);

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML = "☀️";

}

themeBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = "🌙";

    }

};

// ==========================
// BACK TO TOP
// ==========================
const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    topBtn.style.display =
    window.scrollY > 400 ? "flex" : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
  // ==========================
// WHATSAPP BUTTON
// ==========================
const whatsapp = document.createElement("a");

whatsapp.id = "whatsapp";
whatsapp.href = "https://wa.me/256701048224";
whatsapp.target = "_blank";
whatsapp.innerHTML = "💬";

document.body.appendChild(whatsapp);

// ==========================
// ACTIVE NAVIGATION
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (!section.id) return;

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// COPYRIGHT YEAR
// ==========================
const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ==========================
// ORIENTATION
// ==========================
window.addEventListener("resize", () => {

    console.log(
        window.innerWidth > window.innerHeight
        ? "Landscape"
        : "Portrait"
    );

});

// ==========================
// BUTTON CLICK EFFECT
// ==========================
document.querySelectorAll(
"button,.btn,.btn2,.apply-btn"
).forEach(btn => {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 180);

    });

});

// ==========================
// WEBSITE READY
// ==========================
console.log("JTISS Website Loaded Successfully ✅");