document.querySelectorAll('.header__nav-c').forEach(item => {
  item.addEventListener('mouseover', () => {
    let navs = document.querySelectorAll('.header__nav-low');
    let gals = document.querySelectorAll('.gal');
    let btns = document.querySelectorAll('.header__nav-but');

    navs.forEach(nav => {
      nav.classList.remove('active'); // Убираем active со всех

    });
    btns.forEach(btn => {
      btn.classList.remove('active'); // Убираем active со всех

    });
    gals.forEach(gal => {
      gal.classList.remove('active'); // Убираем active со всех
    });

    const nextLow = item.querySelector('.header__nav-low'); // Получаем следующий элемент
    const galik = item.querySelector('.gal');
    const btnik = item.querySelector('.header__nav-but');
    if (nextLow && nextLow.classList.contains('header__nav-low')) {
      // nextLow.style.display = 'flex';


      nextLow.classList.add('active');
      galik.classList.add('active');
      btnik.classList.add('active');


    }
  });

  item.addEventListener('mouseout', () => {
    const nextLow = item.querySelector('.header__nav-low'); // Получаем следующий элемент
    const galik = item.querySelector('.gal');
    const btnik = item.querySelector('.header__nav-but');
    if (nextLow && nextLow.classList.contains('header__nav-low')) {

      nextLow.classList.remove('active'); // Убираем active
      galik.classList.remove('active');
      btnik.classList.remove('active');

      // nextLow.style.pointerEvents = 'none';

    }
  });
});




document.querySelectorAll('.tabs__btn').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelectorAll('.tabs__btn').forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');


    const tabId = button.getAttribute('data-tabbtn');


    document.querySelectorAll('.tabs__elem').forEach(tab => tab.classList.remove('active'));


    const targetTab = document.querySelector(`.tabs__elem[data-tab="${tabId}"]`);
    if (targetTab) {
      targetTab.classList.add('active');
    }
  });
});

document.querySelectorAll('.tarifs__btn-more').forEach(button => {
  button.addEventListener('click', () => {
    // Находим родительский элемент с классом tarifs__elem
    const parentElem = button.closest('.tarifs__elem');
    if (!parentElem) return;

    // Находим контейнер с классом tarifs__mid-list внутри родительского элемента
    const tarifsMidList = parentElem.querySelector('.tarifs__mid-list');
    const arrow = button.querySelector('.arrow');

    if (tarifsMidList) {
      // Переключаем класс active у контейнера tarifs__mid-list
      tarifsMidList.classList.toggle('active');

      // Переключаем текст кнопки и класс active у стрелки
      if (tarifsMidList.classList.contains('active')) {
        button.querySelector('span').textContent = 'Скрыть';
        arrow.classList.add('active');
      } else {
        button.querySelector('span').textContent = 'Подробнее';
        arrow.classList.remove('active');
      }
    }
  });
});

function addActive(butik) {
  // Проверяем, есть ли у элемента класс active
  const isActive = butik.classList.contains('active');

  // Убираем класс active у всех элементов
  document.querySelectorAll('.faq__elem').forEach(quest => {
    quest.classList.remove('active');
  });

  // Если элемент не был активным, добавляем ему класс active
  if (!isActive) {
    butik.classList.add('active');
  }
}

// Убедитесь, что GSAP и ScrollTrigger подключены
gsap.registerPlugin(ScrollTrigger);

// Устанавливаем начальное состояние для sup__block и sup__block-mess
const supBlock = document.querySelector('.sup__block');
if (supBlock) {
  const messages = supBlock.querySelectorAll('.sup__block-mes');

  // Устанавливаем начальное состояние
  gsap.set(supBlock, { opacity: 0 });
  gsap.set(messages, { scale: 0 });

  // Анимация появления sup__block и сообщений
  gsap.timeline({
    scrollTrigger: {
      trigger: supBlock, // Элемент, который отслеживаем
      start: 'top 60%', // Когда верхняя часть элемента достигает 60% высоты экрана
      end: 'bottom 40%', // Когда нижняя часть элемента достигает 40% высоты экрана
      toggleActions: 'play none none none', // Запускаем анимацию только один раз
    },
  })
    .to(supBlock, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    })
    .to(
      messages,
      {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.3, // Задержка между анимациями каждого сообщения
      },
      '-=0.3' // Начинаем анимацию сообщений чуть раньше окончания анимации sup__block
    );
}

// Функция для инициализации слайдеров
function initializeSliders() {
  if (window.innerWidth < 767) {
    // Инициализация слайдера hero__bot-mob
    if (!$('.hero__bot-mob').hasClass('slick-initialized')) {
      $('.hero__bot-mob').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,

      });
    }

    // Инициализация слайдера functions__tabs-btns
    if (!$('.functions__tabs-btns').hasClass('slick-initialized')) {
      $('.functions__tabs-btns').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: true,

      });
    }

    // Инициализация слайдера tarifs__elems
    if (!$('.tarifs__elems').hasClass('slick-initialized')) {
      $('.tarifs__elems').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: true,

      });
    }
  } else {
    // Уничтожаем слайдеры, если ширина экрана больше или равна 767px
    if ($('.hero__bot-mob').hasClass('slick-initialized')) {
      $('.hero__bot-mob').slick('unslick');
    }
    if ($('.functions__tabs-btns').hasClass('slick-initialized')) {
      $('.functions__tabs-btns').slick('unslick');
    }
    if ($('.tarifs__elems').hasClass('slick-initialized')) {
      $('.tarifs__elems').slick('unslick');
    }
  }


}

// Инициализация слайдеров при загрузке страницы
initializeSliders();

// Перепроверяем при изменении размера окна
window.addEventListener('resize', initializeSliders);



function addBurger() {
  document.querySelector('.burger-bg').classList.toggle('active');

  document.querySelector('html').classList.toggle('over');
}

if (window.innerWidth > 767) {
  document.addEventListener('DOMContentLoaded', () => {
    const el9 = document.querySelector('.el9');
    const heroBotFir = document.querySelector('.hero__bot.fir');
    const firstGroup = ['.el1', '.el2', '.el3', '.el4', '.el5'];
    const secondGroup = ['.el6', '.el7', '.el8', '.el9', '.el10'];

    // Функция для перезапуска анимации
    const restartAnimations = (elements) => {
      elements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
          element.style.animation = 'none'; // Отключаем анимацию
          void element.offsetWidth; // Триггерим перерисовку
          element.style.animation = ''; // Включаем анимацию обратно
        }
      });
    };

    // Событие завершения анимации для el9
    el9.addEventListener('animationend', () => {
      setTimeout(() => {
        // Устанавливаем z-index: 2
        heroBotFir.style.zIndex = '2';

        // Перезапускаем анимации для первой группы

        restartAnimations(firstGroup);
      }, 2000);
      // Отслеживаем завершение всех анимаций первой группы
      const firstGroupElements = firstGroup.map(selector => document.querySelector(selector));
      let completedAnimations = 0;

      firstGroupElements.forEach(element => {
        element.addEventListener('animationend', () => {
          completedAnimations++;
          if (completedAnimations === firstGroupElements.length) {
            // Возвращаем z-index обратно в 0 с задержкой
            setTimeout(() => {
              heroBotFir.style.zIndex = '0';

              // Запускаем анимации для второй группы
              restartAnimations(secondGroup);
            }, 2500); // Задержка 2.5 секунды
          }
        }, { once: true }); // Слушатель срабатывает только один раз
      });
    });
  });
}



document.addEventListener('DOMContentLoaded', () => {
  // Убедитесь, что GSAP и ScrollTrigger подключены
  gsap.registerPlugin(ScrollTrigger);

  // Устанавливаем начальные состояния
  gsap.set('.api-block span', { scale: 1 }); // Изначальный размер
  gsap.set('.api-block-bg', { opacity: 0 }); // Изначальная прозрачность
  gsap.set(['.api-left-top', '.api-left-bot', '.api-right-top', '.api-right-bot', '.api-left-top-line', '.api-left-bot-line', '.api-right-top-line', '.api-right-bot-line'], { scale: 0 }); // Изначальный масштаб

  // Анимация для advantag__api
  const advantagApi = document.querySelector('.advantag__api');
  if (advantagApi) {
    gsap.timeline({
      scrollTrigger: {
        trigger: advantagApi, // Элемент, который отслеживаем
        start: 'top 60%', // Когда верхняя часть элемента достигает 80% высоты экрана
        end: 'bottom 20%', // Когда нижняя часть элемента достигает 20% высоты экрана
        toggleActions: 'play none none none', // Запускаем анимацию только один раз
      },
    })
      .to('.api-block span', {
        scale: 1.58, // Увеличиваем span
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(
        '.api-block-bg',
        {
          opacity: 1, // Делаем фон видимым
          duration: 0.5,
          ease: 'power2.out',
        },
        '+=0.5' // Задержка в 0.5 секунды после предыдущей анимации
      )
      .to(
        ['.api-left-top', '.api-left-bot', '.api-right-top', '.api-right-bot', '.api-left-top-line', '.api-left-bot-line', '.api-right-top-line', '.api-right-bot-line'],
        {
          scale: 1, // Устанавливаем transform: scale(1)
          duration: 1,
          ease: 'power2.out',
          stagger: 0.5, // Задержка между анимациями каждого элемента
        }
      );
  }
});



document.addEventListener('DOMContentLoaded', () => {
  // Убедитесь, что GSAP и ScrollTrigger подключены
  gsap.registerPlugin(ScrollTrigger);

  const advantagDann = document.querySelector('.advantag__dann');
  const input = document.querySelector('.dann-inp');
  const button = document.querySelector('.dann-inp-btn');
  const bin = document.querySelector('.dann-bin');
  const keit = document.querySelector('.dann-keit');
  const line = document.querySelector('.dann-line');
  const textSequence = ['FacebookAcc1 , IGAri2 ,FBgastro']; // Последовательность текста
  gsap.set(['.dann-line', '.dann-keit', '.dann-bin', ], { scale: 0 }); // Изначальный масштаб



  if (advantagDann) {
    gsap.timeline({
      scrollTrigger: {
        trigger: advantagDann, // Элемент, который отслеживаем
        start: 'top 60%', // Когда верхняя часть элемента достигает 60% высоты экрана
        end: 'bottom 40%', // Когда нижняя часть элемента достигает 40% высоты экрана
        toggleActions: 'play none none none', // Запускаем анимацию только один раз
      },
    })
      // 1. Побуквенный ввод текста
      .add(() => {
        let currentIndex = 0;
        const typeText = (text, callback) => {
          let charIndex = 0;
          const interval = setInterval(() => {
            input.value = text.slice(0, charIndex + 1); // Вписываем текст побуквенно
            charIndex++;
            if (charIndex === text.length) {
              clearInterval(interval);
              callback(); // Переход к следующему тексту
            }
          }, 100); // Скорость ввода (100 мс на символ)
        };

        const typeNextText = () => {
          if (currentIndex < textSequence.length) {
            typeText(textSequence[currentIndex], () => {
              currentIndex++;
              setTimeout(typeNextText, 500); // Задержка перед следующим текстом
            });
          }
        };

        typeNextText(); // Запускаем ввод текста
      })
      // 2. Меняем фон кнопки
      .to(
        button,
        {
          background: 'rgba(97, 79, 169, 1)',
          duration: 0.5,
          ease: 'power2.out',
        },
        '+=0.5' // Задержка после ввода текста
      )
      // 3. Меняем текст и фон кнопки
      .add(() => {
        button.textContent = 'Отправка';
        button.style.background = 'rgba(47, 31, 112, 1)';
      }, '+=2.5')
      // 4. Присваиваем transform: scale(1) для dann-bin и dann-keit
      .to(
        [bin, keit],
        {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.2, // Задержка между элементами
        },
        '+=0.5'
      )
      // 5. Присваиваем transform: scale(1) для dann-line
      .to(
        line,
        {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        '+=0.5'
      )
      // 6. Меняем текст и фон кнопки
      .add(() => {
        button.textContent = 'Лог отправлен';
        button.style.background = 'rgba(97, 79, 169, 1)';
      }, '+=0.5');
  }
});