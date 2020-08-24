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


});