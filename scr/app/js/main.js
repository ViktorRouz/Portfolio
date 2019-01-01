$( document ).ready(function() {
	$('.bt-menu').click(function(){
		$('body').addClass('nav-sidebar-open')
		$('.header-main').addClass('bt-menu-active')
	})
	$('.icon-close').click(function(){
		$('body').removeClass('nav-sidebar-open')
		$('.header-main').removeClass('bt-menu-active')
	})
});