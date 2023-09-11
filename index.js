//togle icon navbar
   
   


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let btn=document.querySelector("#submit");



menuIcon.onclick  = () => {
   menuIcon.classList.toggle('fa-bar');
   menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle ('active');
}


// scrollsections 
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a ');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            })
        }
         //sticky navbar
         let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    })

   
   // remove toggle icon and navbar when click navbar link scroll
   menuIcon.classList.remove('fa-xmark');
   menuIcon.classList.add('fa-bar');
    navbar.classList.remove('active');


}


  

 






