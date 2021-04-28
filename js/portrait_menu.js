const nav = document.querySelector('#menu_full');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav_toggle');
const entries = document.getElementsByClassName('close_menu');
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

for(var i=0; i<entries.length; i++) {
	entries[i].addEventListener('click', e => {
		isMenuOpen = !isMenuOpen;

		// toggle a11y attributes and active class
		menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
		menu.hidden = !isMenuOpen;
		nav.classList.toggle('nav--open');
	});
}