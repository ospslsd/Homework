// Убедитесь, что GSAP подключен в вашем проекте

// Анимация при загрузке страницы
window.addEventListener('load', () => {
  // Устанавливаем начальные позиции элементов
  gsap.set('.logo', { y: '-100%', opacity: 0 });
  gsap.set('.fade-right', { x: '100%', opacity: 0 });
  gsap.set('.green-txt', { x: '-100%', opacity: 0 });
  gsap.set('.video', { y: '100%', opacity: 0 });

  // Анимация элементов
  gsap.to('.logo', { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });
  gsap.to('.fade-right', { x: '0%', opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 });
  gsap.to('.green-txt', { x: '0%', opacity: 1, duration: 1, ease: 'power2.out', delay: 1 });
  gsap.to('.video', { y: '0%', opacity: 1, duration: 1, ease: 'power2.out', delay: 1.5 });
});


$('.slider-elems').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0px',
  centerMode: true,
  arrows: false,
  dots: true,
  variableWidth: true,
});



// Анимация при появлении блока s-txt
gsap.set('.white-txt', { x: '100%', opacity: 0 });
gsap.set('.green-txt2', { x: '-100%', opacity: 0 });

gsap.to('.white-txt', {
  scrollTrigger: {
    trigger: '.s-txt', // Триггер — блок s-txt
    start: 'top 80%', // Анимация начнется, когда верх блока s-txt достигнет 80% высоты окна
  },
  x: '0%',
  opacity: 1,
  duration: 1,
  ease: 'power2.out',
});

gsap.to('.green-txt2', {
  scrollTrigger: {
    trigger: '.s-txt', // Триггер — блок s-txt
    start: 'top 80%', // Анимация начнется, когда верх блока s-txt достигнет 80% высоты окна
  },
  x: '0%',
  opacity: 1,
  duration: 1,
  ease: 'power2.out',
});


// Анимация появления слайдера
gsap.set('.slider', { scale: 0 }); // Изначально слайдер уменьшен до 0

gsap.to('.slider', {
  scrollTrigger: {
    trigger: '.slider', // Триггер — блок слайдера
    start: 'top 80%', // Анимация начнется, когда верх блока слайдера достигнет 80% высоты окна
  },
  scale: 1, // Масштаб до нормального размера
  duration: 2.5, // Длительность анимации
  ease: 'elastic.out(0.85, 0.4)', // Эффект "баунса"
});
gsap.set('.btn-cont', { y: '150%', opacity:0 });



gsap.to('.btn-cont', {
  scrollTrigger: {
    trigger: '.slider',
    start: 'top 50%',
  },
  y: '0%',
  opacity: 1,
  ease: 'power2.out',

}

)