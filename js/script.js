jQuery(document).ready(function ($) {


  $(document).on('click', '.form-default .input-wrap-check input, .form-quiz .input-wrap-check input', function (e){
    if($(this).prop('checked')) {
      $(this).closest('label').addClass('is-active');
    } else{
      $(this).closest('label').removeClass('is-active');
    }
  });

  /*scroll to block*/
  $(document).on('click', '.scroll', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  /*popup quiz*/
  $(document).on('click', '.popup-quiz .select-block', function (e){
    let item = $(this).find('input:checked').index();
    if(item > -1){
      $('.quiz-next').removeClass('swiper-button-disabled');
      $('.swiper-slide-active').addClass('is-select');
      $('.swiper-slide-active .label-warning').hide();
    }else{
      $('.quiz-next').addClass('swiper-button-disabled');
      $('.swiper-slide-active').removeClass('is-select')
      $('.swiper-slide-active .label-warning').show();
    }

  });


  /*sliders*/
  var swiperQuiz = new Swiper(".quiz-slider", {
    allowTouchMove:false,
    autoHeight: true,
    navigation: {
      nextEl: ".quiz-next",
      prevEl: ".quiz-prev",
    },
    pagination: {
      el: ".quiz-pagination",
      type: "progressbar",
    },
  });

  var swiperEquipment = new Swiper(".equipment-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".equipment-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".equipment-next",
      prevEl: ".equipment-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var swiperAuto1 = new Swiper(".auto-slider-1", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".auto-pagination-1",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-next-1",
      prevEl: ".auto-prev-1",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  var swiperAuto2 = new Swiper(".auto-slider-2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".auto-pagination-2",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-next-2",
      prevEl: ".auto-prev-2",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  var swiperAuto3 = new Swiper(".auto-slider-3", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".auto-pagination-3",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-next-3",
      prevEl: ".auto-prev-3",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  var swiperAuto4 = new Swiper(".auto-slider-4", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".auto-pagination-4",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-next-4",
      prevEl: ".auto-prev-4",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  var swiperAutoWay = new Swiper(".auto-way-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".auto-way-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-way-next",
      prevEl: ".auto-way-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  var swiperAbout = new Swiper(".about-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".about-pagination ",
      clickable: true,
    },
    navigation: {
      nextEl: ".about-next",
      prevEl: ".about-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  var swiperTestimonials = new Swiper(".testimonials-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".testimonials-pagination ",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  var swiperMini1 = new Swiper(".min-slider-1", {
    slidesPerView: 1,

    loop:true,

    navigation: {
      nextEl: ".min-next-1",
      prevEl: ".min-prev-1",
    },
  });
  var swiperMini2 = new Swiper(".min-slider-2", {
    slidesPerView: 1,

    loop:true,

    navigation: {
      nextEl: ".min-next-2",
      prevEl: ".min-prev-2",
    },
  });
  var swiperMini3 = new Swiper(".min-slider-31", {
    slidesPerView: 1,

    loop:true,

    navigation: {
      nextEl: ".min-next-3",
      prevEl: ".min-prev-3",
    },
  });

  swiperQuiz.on('slideChange', function () {
    let itemActive = swiperQuiz.activeIndex + 1;
    $('.popup-quiz .current').html(itemActive);

    setTimeout(function() {
      if($('.swiper-slide-active').hasClass('is-select')){
        $('.quiz-next').removeClass('swiper-button-disabled');
      }else{
        $('.quiz-next').addClass('swiper-button-disabled');
      }
    }, 300);
    if(itemActive == $('.quiz-slider .swiper-slide').length){

      $('.popup-quiz').addClass('is-complete '); /*hide-submit*/
    }else{
      $('.popup-quiz').removeClass('is-complete ');/*hide-submit*/
    }
  });


 /* popup quiz*/
  $(document).on('keyup', '.input-wrap input, .input-wrap-fix input', function (e){
    let tmpval = $(this).val();
    if($('.slide-3').hasClass('swiper-slide-active')){
      if(tmpval.length>4){
        $('.quiz-next').removeClass('swiper-button-disabled');
      }else{
        $('.quiz-next').addClass('swiper-button-disabled');
      }
    }

    if($('.slide-4').hasClass('swiper-slide-active')){
      if(tmpval.length>2){
        $('.quiz-next').removeClass('swiper-button-disabled');
      }else{
        $('.quiz-next').addClass('swiper-button-disabled');
      }
    }

    /*if($('.slide-6').hasClass('swiper-slide-active')){

      let item1 = $('.tel').val().length,
          item2 = $('#name').val().length;
      console.log(item1)
      console.log(item2)
      if(item1 > 7 && item2 > 1){
        $('.popup-quiz').removeClass('hide-submit');
      }else{
        $('.popup-quiz').addClass('hide-submit');

      }
    }*/
  })





    /*tel code*/
  var input = document.querySelector("#tel");
    window.intlTelInput(input, {

    initialCountry: "kz",
    separateDialCode: true,

  });


  $(window).on('load', function (e){
    let totalItem = $('.quiz-slider .swiper-slide').length;

    $('.popup-quiz .total').html(totalItem)

    if($('body').hasClass('home')){
      $.fancybox.open( $('#popup-quiz'), {
        touch:false,
        autoFocus:false,
      });
    }

  });

  /*form*/
  $('.input-wrap input').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active');
    }


  });
  $('.input-wrap input').focus(function (e) {
    $(this).siblings('label').addClass('is-focus')
  });
  $('.input-wrap input').blur(function (e) {
    $(this).siblings('label').removeClass('is-focus')
  });

  /*mask*/
  $('#price').mask("000 000 000");
  $('.tel').mask("(000) 000-00-00");

  /*popup*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
    beforeShow : function(e){


    },
  });

  /*tab*/
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();

  /*play video*/
/*  $(".video-wrap .bg-img").click(function(e){
    e.preventDefault()
    $(this).hide();
    $(this).siblings('iframe')[0].src += "?autoplay=1";
  });*/

  var input3 = document.querySelector("#telCall");
  window.intlTelInput(input3, {

    initialCountry: "kz",
    separateDialCode: true,

  });

  var input1 = document.querySelector("#tel2");
  window.intlTelInput(input1, {

    initialCountry: "kz",
    separateDialCode: true,

  });
  var input2 = document.querySelector("#tel1");
  window.intlTelInput(input2, {

    initialCountry: "kz",
    separateDialCode: true,

  });


  /*mob menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();
    if($('.open-menu').hasClass('is-active')){


      $('.open-menu').removeClass('is-active');
      $.fancybox.close();
      $('header').removeClass('is-active');
    } else{
      $('.open-menu').addClass('is-active');
      $('header').addClass('is-active');
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out',
      });
    }
  });

  $(document).on('click', '.sub a', function (e){
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $(this).siblings('ul').slideDown()
    }else{
      $(this).siblings('ul').slideUp()
    }
  })

  $('.popup-tel form').validate({
    rules: {
      nameTel:{
        minlength: 2,
        required: true,
      },
      tel1: {
        minlength: 14,
        required: true,
      },
      check2: {
        required: true,
      },
    },
    messages: {
      nameTel:{
        minlength: "Ведите свое имя",
        required: "Заполните это поле",
      },
      tel1:{
        minlength: "Ведите свой телефон",
        required: "Заполните это поле",
      },
      check2: {
        required: "Поле не отмечено",
      },
    }
  });

  $(document).on('click', '.popup-tel  button', function (e){
    if($(".popup-tel form").valid()){
      /*УДАЛИТЬ ПРИ НАТЯЖКЕ */    e.preventDefault();
      $.fancybox.close();
      $.fancybox.open( $('#popup-ok-2'), {
        touch:false,
        autoFocus:false,
      });
    }
  })



  $('.call-back form').validate({
    rules: {
      nameCall:{
        minlength: 2,
        required: true,
      },
      telCall: {
        minlength: 14,
        required: true,
      },
    },
    messages: {
      nameCall:{
        minlength: "Ведите свое имя",
        required: "Заполните это поле",
      },
      telCall:{
        minlength: "Ведите свой телефон",
        required: "Заполните это поле",
      },

    }
  });

  $(document).on('click', '.call-back  button', function (e){
    if($(".call-back form").valid()){
      swal("Ваша заявка принята", "", "success");
      /*УДАЛИТЬ ПРИ НАТЯЖКЕ */     e.preventDefault()
    }
  });


  $('.popup-choice form').validate({
    rules: {
      auto:{
        minlength: 2,
        required: true,
      },
      name2:{
        minlength: 2,
        required: true,
      },
      tel2: {
        minlength: 14,
        required: true,
      },
    },
    messages: {
      auto:{
        minlength: "Ведите марку авто",
        required: "Заполните это поле",
      },
      name2:{
        minlength: "Ведите свое имя",
        required: "Заполните это поле",
      },
      tel2:{
        minlength: "Ведите свой телефон",
        required: "Заполните это поле",
      },

    }
  });


  $(document).on('click', '.popup-choice button', function (e){
    if($(".popup-tel form").valid()){
      /*УДАЛИТЬ ПРИ НАТЯЖКЕ */    e.preventDefault();
      $.fancybox.close();
      $.fancybox.open( $('#popup-ok'), {
        touch:false,
        autoFocus:false,
      });
    }
  })

  $(document).on('keydown', '.popup-choice input', function (e){
    if($(".popup-choice form").valid()){
      $('.popup-choice').addClass('is-val');
      console.log(1)
    }else{
      $('.popup-choice').removeClass('is-val');
      console.log(2)
    }
  })

  $('.form-quiz').validate({
    rules: {
      name:{
        minlength: 2,
        required: true,
      },
      tel: {
        minlength: 14,
        required: true,
      },
    },
    messages: {
      name:{
        minlength: "Ведите свое имя",
        required: "Заполните это поле",
      },
      tel:{
        minlength: "Ведите свой телефон",
        required: "Заполните это поле",
      },

    }
  });


  $(document).on('click', '.form-quiz button', function (e){
    if($(".form-quiz").valid()){
      /*УДАЛИТЬ ПРИ НАТЯЖКЕ */    e.preventDefault();
      $.fancybox.close();
      swal("Ваша заявка принята", "", "success");
    }
  })


  $(document).on('click', '.menu-responsive .scroll', function (e){
    $.fancybox.close();
    $('header').removeClass('is-active')
  });


  if(window.innerWidth < 576){
    $(document).on('click', 'footer .footer-menu .item h6', function (e){
      $(this).toggleClass('is-open');
      if($(this).hasClass('is-open')){
        $(this).siblings('ul').slideDown();
      }else{
        $(this).siblings('ul').slideUp();
      }
    })
  }

  $(document).on('click', '.admin-show-head .content .title a', function (e){
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $('.admin-show-head .content .wrap').slideDown();
    }else{
      $('.admin-show-head .content .wrap').slideUp();
    }
  });

});