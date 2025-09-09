document.addEventListener("DOMContentLoaded", function () {
  const timers = document.querySelectorAll(".timer_counts");

  let countdownTime = 5 * 60 * 60; // 5 часов в секундах

  function updateTimer() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    timers.forEach(timer => {
      const timerHours = timer.querySelector(".timer-hours");
      const timerMins = timer.querySelector(".timer-mins");
      const timerSec = timer.querySelector(".timer-sec");

      if (timerHours && timerMins && timerSec) {
        timerHours.textContent = String(hours).padStart(2, "0");
        timerMins.textContent = String(minutes).padStart(2, "0");
        timerSec.textContent = String(seconds).padStart(2, "0");
      }
    });

    if (countdownTime > 0) {
      countdownTime--;
    } else {
      clearInterval(timerInterval);
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer(); // Инициализация таймера при загрузке
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    slidesPerView: 8,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 0.5,
      disableOnInteraction: false,
    },
    freeMode: true,
    speed: 6000,
    freeModeMomentum: false,

    breakpoints: {
      // when window width is >= 320px

      // when window width is >= 480px
      280: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 0
      }

    }
  });


});

$('.slick-pomaga').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,

});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container2', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 8,
    grabCursor: true,
    autoplay: {
      delay: 0.5,
      disableOnInteraction: false,
      reverseDirection: true, // Автопрокрутка в обратную сторону
    },
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
      280: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 0
      }
    }
  });
});
