"use strict";

const body = document.querySelector("body");
const header = document.querySelector(".header");

let calcScrollValue = () => {
	let scrollProgress = document.getElementById('progressButton');
	let progressValue = document.getElementById('progressButton__value');
	let pos = document.documentElement.scrollTop;
	let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);

	if (pos > 100) {
		scrollProgress.style.display = 'grid';
	} else {
		scrollProgress.style.display = 'none';
	}

	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#ffa500 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onload = calcScrollValue;
window.addEventListener('scroll', calcScrollValue);

// Sticky-анимация

window.addEventListener('scroll', function () {
	this.scrollY > 20 ? header.classList.add('sticky') : header.classList.remove('sticky');
});


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 			menuLink.addEventListener("click", onMenuLinkClick);
// 		}
// 	};