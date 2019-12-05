const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
const entries = document.getElementsByClassName('close');
let isMenuOpen = false;

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
	e.preventDefault();
	isMenuOpen = !isMenuOpen;
	
	// toggle a11y attributes and active class
	menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
	menu.hidden = !isMenuOpen;
	nav.classList.toggle('nav--open');
});

var i;
for(i=0; i<entries.length; i++) {
	entries[i].addEventListener('click', e => {
		isMenuOpen = !isMenuOpen;
		
		// toggle a11y attributes and active class
		menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
		menu.hidden = !isMenuOpen;
		nav.classList.toggle('nav--open');
	});
}