$(function(){

  let intro = $('#intro');
  let header = $('#header');
  let introH = intro.innerHeight();
  let headerH = header.innerHeight();
  let scrollTop = $(window).scrollTop();


  /* Header class on scroll */
 headerScroll();

 $(window).on('scroll resize', function() {
    headerScroll();
 });

 function headerScroll(){
	  introH = intro.innerHeight();
	  headerH = header.innerHeight();
	  
	  let scrollTop	= $(this).scrollTop();
	  		
	  if(scrollTop >= (introH - headerH)) {
	  	header.addClass('header--dark');
	  } else {
	  	header.removeClass('header--dark');
	  }
  }

  /* Smooth scroll to sections */
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();

    let scrollEl = $(this).data('scroll');
    let scrollElPos = $(scrollEl).offset().top;

    $('html, body').animate({
      scrollTop: scrollElPos - headerH
    }, 500)
  });

  /* ScrollSpy */
  let windowH = $(window).height();
  scrollSpy(scrollTop);


  $(window).on("scroll", function() {
    scrollTop = $(this).scrollTop();
    
    scrollSpy(scrollTop);
 });

  function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function() {
      let $this = $(this);
      let sectionId = $this.data('scrollspy');
      let sectionOffset = $this.offset().top;
      sectionOffset = sectionOffset - (windowH * 0.2);

      if(scrollTop >= sectionOffset) {
        $('#header__menu [data-scroll]').removeClass('active');

        $('#header__menu [data-scroll="' + sectionId + '"]').addClass('active');
      }

      if(scrollTop == 0) {
        $('#header__menu [data-scroll]').removeClass('active');
      }
    });
  }

  /* Modals */
 $('[data-modal]').on('click', function(event){
   event.preventDefault();
   let modal = $(this).data('modal');

   $('body').addClass('no-scroll');
   $(modal).addClass('show');

   setTimeout(function(){
    $(modal).find('.modal__content').css({
      transform: 'scale(1)',
      opacity: '1',
    });
  });
 });

 $('[data-modal-close]').on('click', function(event){
   event.preventDefault();
   let modal = $(this).parents('.modal');

   modalClose(modal);

  });

 $('.modal').on('click', function(){
   let modal = $(this);

   modalClose(modal);

  });

 $('.modal__content').on('click', function(event){
   event.stopPropagation();
 });

function modalClose(modal){

  modal.find('.modal__content').css({
    transform: 'scale(.5)',
    opacity: '0',
  });

 setTimeout(function(){
  $('body').removeClass('no-scroll');
  modal.removeClass('show');
  }, 500);
 }

 /* Slider background images intro slider*/

 let introSlider = $('#introSlider');

 introSlider.slick({
   infinite: true,
   slidesToShow: 1,
   arrows: false,
   slidesToScroll: 1,
   fade: true,
   autoplay: false,
   autoplaySpeed: 5000,
   speed: 500,
  });

  $('#introSliderPrev').on('click', function() {
    introSlider.slick('slickPrev')
  });

  $('#introSliderNext').on('click', function() {
    introSlider.slick('slickNext')
  });


/* Clients slider */

let clientsSlider = $('#clientsSlider');
clientsSlider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 500,
 });
 $('#introSliderPrev').on('click', function() {
   introSlider.slick('slickPrev')
 });
 $('#introSliderNext').on('click', function() {
   introSlider.slick('slickNext')
 });
 
});