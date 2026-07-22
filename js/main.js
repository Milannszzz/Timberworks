/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

setTimeout(() => {

preloader.style.opacity = "0";
preloader.style.visibility = "hidden";

}, 700);

});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.pageYOffset / totalHeight) * 100;

progressBar.style.width = progress + "%";

});

/*=========================================
HAMBURGER MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

if(navMenu.classList.contains("active")){

menuIcon.classList.remove("ri-menu-3-line");

menuIcon.classList.add("ri-close-line");

document.body.style.overflow = "hidden";

}else{

menuIcon.classList.remove("ri-close-line");

menuIcon.classList.add("ri-menu-3-line");

document.body.style.overflow = "auto";

}

});

/*=========================================
CLOSE MENU WHEN LINK IS CLICKED
=========================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

menuIcon.classList.remove("ri-close-line");

menuIcon.classList.add("ri-menu-3-line");

document.body.style.overflow="auto";

});

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;
const target = +counter.dataset.target;

let current = 0;
const increment = Math.max(1, Math.ceil(target / 80));

const updateCounter = ()=>{

current += increment;

if(current >= target){

counter.textContent = target + "+";
return;

}

counter.textContent = current;

requestAnimationFrame(updateCounter);

};

updateCounter();

counterObserver.unobserve(counter);

});

},{
threshold:0.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
BACK TO TOP BUTTON
=========================================*/

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".section-heading,.service-card,.project-card,.process-card,.value-card,.why-card,.client-card,.stat-box,.intro-image,.intro-content,.info-card,.contact-form"

);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
