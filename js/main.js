const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

// 스크롤
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  //console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    });

    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    });

  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    });

    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
//_.throttle(함수, 시간);

// top btn
toTopEl.addEventListener('click', function (){
  gsap.to(window, .7, {
    scrollTo: 0,
  })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,  //0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});

// swiper
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

// awards
new Swiper('.awards .swiper', {
  autoplay:true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

//프로모션 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;   //반대로 만들기
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatiogObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true, //한번 재생된 애니메이션을 뒤로 돌리기
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatiogObject('.floating1', 1, 15);
floatiogObject('.floating2', .5, 15);
floatiogObject('.floating3', 1.5, 20);


// scrollmagic
const spyEls = document.querySelectorAll('div.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,    //모니터(0 ~ 1)의 0.8부분에서 trigger 된다 

    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 올해 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();