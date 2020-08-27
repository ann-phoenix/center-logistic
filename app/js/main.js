$(function(){




  let intro = $('#intro');
  let header = $('#header');
  let introH = intro.innerHeight();
  let headerH = header.innerHeight();
  let scrollTop = $(window).scrollTop();
  let headerMenuToggle = $('#headerMenuToggle');
  let headerMenu = $('#header__menu');

  /*Burger*/
  headerMenuToggle.on('click', function(event){
   event.preventDefault();
  $('body').toggleClass('show-header__menu');
  $(this).toggleClass('active');
   headerMenu.toggleClass('show');
  });

  $(window).on('resize', function() {
    $('body').removeClass('show-header__menu');
    headerMenuToggle.removeClass('active');
    headerMenu.removeClass('show');
 });


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


    $('body').removeClass('show-header__menu');
    headerMenuToggle.removeClass('active');
    headerMenu.removeClass('show');

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
  }, 200);
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
  }, 200);
 }

 /* Slider background images intro slider*/

 let introSlider = $('#introSlider');

 introSlider.slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
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

 /* Aos.js animation */
 AOS.init();

  AOS.init({
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
   
  
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 80, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 800, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
 
});