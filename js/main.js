var navMain = document.querySelector('.main-nav__menu');
var navToggle = document.querySelector('.menu');

var burger = document.querySelector('.burger_icon');
var burger_menu = document.querySelector('.burger');

var languageList = document.querySelector('.language__list');
var language = document.querySelector('.language');

var arrow = document.querySelector('.arrow__link');

var avatarElem = document.querySelector('.page-header__wrapper');
var main = document.querySelector('.page-main');

var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

language.addEventListener('click', function(){
	if(languageList.classList.contains('language--closed')){
		languageList.classList.remove('language--closed');
		languageList.classList.add('language--open');
		arrow.classList.add('arrow__link--rotate');

		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
		burger.classList.remove('burger_open');
		burger.classList.add('burger_close');

		burger_menu.classList.remove('burger_close');
		burger_menu.classList.add('burger_open');
	}else{
		languageList.classList.remove('language--open');
		languageList.classList.add('language--closed');
		arrow.classList.remove('arrow__link--rotate');
	}
});

navToggle.addEventListener('click', function(){
	if(navMain.classList.contains('main-nav--closed')){
		burger.classList.remove('burger_close');
		burger.classList.add('burger_open');

		burger_menu.classList.remove('burger_open');
		burger_menu.classList.add('burger_close');

		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');

		languageList.classList.remove('language--open');
		languageList.classList.add('language--closed');
		arrow.classList.remove('arrow__link--rotate');
	}else{
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
		burger.classList.remove('burger_open');
		burger.classList.add('burger_close');

		burger_menu.classList.remove('burger_close');
		burger_menu.classList.add('burger_open');
	}
});

window.onscroll = function() {
	if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
		avatarElem.classList.remove('fixed');
		main.classList.remove('page-main__more');
	} else if (window.pageYOffset > avatarSourceBottom) {
		avatarElem.classList.add('fixed');
		main.classList.add('page-main__more');
	}
};