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
const busImg = document.querySelector('.img-container');
const dropZone = document.querySelector('.hidden-dropzone');

images.forEach(img => {
    img.addEventListener('wheel', function(event) {
        img.style.transform = 'scale(1.1)';
        event.stopPropagation();
    })
});

busImg.addEventListener('dragover', function(event) {
    event.preventDefault();
});

busImg.addEventListener('drop', function(event) {
    event.target.appendChild(document.querySelector('.img-container img'));
})

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
    event.target.appendChild(document.querySelector('.img-container img'));
})

// Main Content Events

const input = document.querySelector('.go-form input');
const goBtn = document.querySelector('.go-form button');

input.addEventListener('select', function() {
    input.style.color = 'red';
    alert('You have selected some text');
})

goBtn.addEventListener('click', function(event) {
    event.preventDefault();
});

goBtn.addEventListener('dblclick', function() {
    alert('One click per customer, please');
});