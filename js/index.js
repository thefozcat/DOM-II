// Your code goes here

// Document Events

const mainDoc = document.querySelector('html');
const logo = document.querySelector('.logo-heading');

window.addEventListener('load', function() {
    alert('Hello there');
});

window.addEventListener('resize', function() {
    mainDoc.style.background = 'lightblue';
    mainDoc.style.transition = 'all 200ms ease';
})

window.addEventListener('scroll', function() {
    logo.style.color = 'red';
})

mainDoc.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {
        logo.style.transform = 'scale(2)';
    } else if (event.keyCode === 39) {
        logo.style.display = 'block';
    } else if (event.keyCode === 37) {
        logo.style.display = 'none';
    } else if (event.keyCode === 40) {
        logo.style.transform = 'scale(1)';
    }
})

// Container Events

const containerHome = document.querySelector('.home');

containerHome.addEventListener('wheel', function() {

    containerHome.style.opacity = '0.5';
})

// Navigation Bar Events

const navItem = document.querySelectorAll('nav a');

navItem.forEach((link) => {
    link.addEventListener('mouseover', function() {
    link.style.color = 'red';
    })
    link.addEventListener('mouseout', function() {
        link.style.color = 'black';
    })
    link.style.transition = 'all 200ms ease';
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
});

// Image Events

const images = document.querySelectorAll('img');
const busImg = document.querySelector('.intro img');

images.forEach(img => {
    img.addEventListener('wheel', function(event) {
        img.style.transform = 'scale(1.1)';
        event.stopPropagation();
    })
});

let dragged;

document.addEventListener('drag', function(event) {
}, false);

document.addEventListener('dragstart', function(event) {
    dragged = event.busImg;
}, false);

document.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('dragenter', function(event) {
    if (event.target.className == 'hidden-dropzone') {
        event.target.style.background = 'yellow';
    }
}, false);

document.addEventListener('dragleave', function(event) {
    if (event.target.className == 'hidden-dropzone') {
        event.target.style.background = '';
    }
}, false);

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.className === 'hidden-dropzone') {
        event.target.style.background = '';
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false) //Finish drag

// Main Content Events

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.addEventListener('select', function(event) {
        p.style.color = 'red';
    })
});