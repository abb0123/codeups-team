
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });





  // MV超えたらヘッダーの色を変更
  var mvh = $('メインビューのclass名').height();

  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (100 > top) {
      $('.p-header__inner').css('background-color', 'rgba(1,1,1,.5)');
      } else {
      $('.p-header__inner').css('background-color', '#111');
    }
  });


  //ドロワーメニュー
	$('.js-hamburger').on('click', function () {
		if($('.js-hamburger').hasClass('is-open')) {
			$(this).removeClass('is-open');
			$('.js-drawer-menu').removeClass('is-open');
		} else {
			$(this).addClass('is-open');
			$('.js-drawer-menu').addClass('is-open');
		}
	});

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



});


//制作実績Swiper
var slider = new Swiper ('.js-gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

//サムネイル
var thumbs = new Swiper ('.js-gallery-thumbs', {
  slidesPerView: 'auto',
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

//4系～
//メインとサムネイルを紐づける
slider.controller.control = thumbs;
thumbs.controller.control = slider;