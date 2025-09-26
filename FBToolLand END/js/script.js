document.addEventListener('DOMContentLoaded', () => {
  i18next
    .use(i18nextHttpBackend)
    .init({
      lng: 'ru', // Язык по умолчанию
      fallbackLng: 'ru',
      debug: true,
      backend: {
        loadPath: '/locales/{{lng}}.json' // Путь к JSON-файлам
      }
    }, (err, t) => {
      if (err) return console.error(err);
      updateContent();
      initializeApp(); // Обновляем контент при загрузке
    });

  const langSwitcher = document.querySelector('.lang-switcher');
  const langOptions = document.querySelectorAll('.lang-other');
  const langSwitcherSp = document.querySelector('.lang-switcher span');

  // Обработчик переключения языка
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const selectedLang = e.target.textContent.trim();
      const currentLang = langSwitcherSp.textContent.trim();

      // Меняем язык
      i18next.changeLanguage(selectedLang, () => {
        updateContent(); // Обновляем контент после смены языка
      });

      // Обновляем активный язык в переключателе
      langSwitcherSp.textContent = selectedLang;

      // Меняем доступность языков
      e.target.textContent = currentLang;
    });
  });

  // Функция для обновления контента
  function updateContent() {

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      elem.innerHTML = i18next.t(key);
    });
    
  }
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

function addBurger() {
  document.querySelector('.burger-bg').classList.toggle('active');

  document.querySelector('html').classList.toggle('over');
}







function initializeApp(){


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
        button.querySelector('span').textContent = i18next.t('hide_text');
        arrow.classList.add('active');
        button.style.marginTop = '0px';
      } else {
        button.querySelector('span').textContent = i18next.t('tariffs_btn_more');
        arrow.classList.remove('active');
        button.style.marginTop = '-35px';

      }
    }
  });
});



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
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        '.api-block-bg',
        {
          opacity: 1, // Делаем фон видимым
          duration: 0.3,
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
          stagger: 0.3, // Задержка между анимациями каждого элемента
        }
      );
  }





  // Убедитесь, что GSAP и ScrollTrigger подключены
  gsap.registerPlugin(ScrollTrigger);

  const advantagDann = document.querySelector('.advantag__dann');
  const input = document.querySelector('.dann-inp');
  const button = document.querySelector('.dann-inp-btn');
  const bin = document.querySelector('.dann-bin');
  const keit = document.querySelector('.dann-keit');
  const line = document.querySelector('.dann-line');
  const textSequence = ['FacebookAcc1 , IGAri2 ,FBgastro']; // Последовательность текста
  gsap.set(['.dann-line', '.dann-keit', '.dann-bin',], { scale: 0 }); // Изначальный масштаб



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
          }, 50); // Скорость ввода (100 мс на символ)
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
        button.textContent = i18next.t('sending_text');
        button.style.background = 'rgba(47, 31, 112, 1)';
      }, '+=1.5')
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
        button.textContent = i18next.t('log_sent_text');
        button.style.background = 'rgba(97, 79, 169, 1)';
      }, '+=0.5');
  }



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


  const tabsButtons = document.querySelectorAll('.tabs__btn');
  const tabsElems = document.querySelectorAll('.tabs__elem');
  let autoSwitchInterval;

  // Функция для переключения на следующий таб
  const switchToNextTab = () => {
    const activeTab = document.querySelector('.tabs__elem.active');
    if (!activeTab) return;

    const currentIndex = Array.from(tabsElems).indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabsElems.length;

    // Удаляем класс active у текущего таба и кнопки
    tabsElems[currentIndex].classList.remove('active');
    tabsButtons[currentIndex].classList.remove('active');

    // Добавляем класс active следующему табу и кнопке
    tabsElems[nextIndex].classList.add('active');
    tabsButtons[nextIndex].classList.add('active');
  };

  // Устанавливаем авто переключение
  const startAutoSwitch = () => {
    stopAutoSwitch(); // Останавливаем, если уже запущено
    autoSwitchInterval = setInterval(switchToNextTab, 5000); // Интервал 5 секунд
  };

  // Останавливаем авто переключение
  const stopAutoSwitch = () => {
    clearInterval(autoSwitchInterval);
  };

  // Добавляем обработчик клика на кнопки
  tabsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Удаляем класс active у всех табов и кнопок
      tabsButtons.forEach(btn => btn.classList.remove('active'));
      tabsElems.forEach(tab => tab.classList.remove('active'));

      // Добавляем класс active выбранному табу и кнопке
      button.classList.add('active');
      tabsElems[index].classList.add('active');

      // Перезапускаем авто переключение
      startAutoSwitch();
    });
  });

  // Запускаем авто переключение при загрузке страницы
  startAutoSwitch();




  // Убедитесь, что GSAP и ScrollTrigger подключены
  gsap.registerPlugin(ScrollTrigger);

  const advantagComm = document.querySelector('.advantag__comm');
  const commMess = document.querySelector('.comm-mess');
  const commTrash = document.querySelector('.comm-trash');

  // Устанавливаем начальное состояние для кнопки
  gsap.set(commTrash, { scale: 0 });

  if (advantagComm) {
    gsap.timeline({
      scrollTrigger: {
        trigger: advantagComm, // Элемент, который отслеживаем
        start: 'top 60%', // Когда верхняя часть элемента достигает 60% высоты экрана
        end: 'bottom 40%', // Когда нижняя часть элемента достигает 40% высоты экрана
        toggleActions: 'play none none none', // Запускаем анимацию только один раз
      },
    })
      // 1. Побуквенно вписываем текст в comm-mess
      .add(() => {
        const text = i18next.t('hate_comment');
        let charIndex = 0;

        const interval = setInterval(() => {
          commMess.textContent = text.slice(0, charIndex + 1); // Вписываем текст побуквенно
          charIndex++;
          if (charIndex === text.length) {
            clearInterval(interval); // Останавливаем, когда текст полностью вписан
          }
        }, 50); // Скорость ввода (50 мс на символ)
      })
      // 2. Меняем фон и цвет текста в comm-mess
      .to(commMess, {
        backgroundColor: 'rgba(43, 140, 141, 1)', // Новый фон
        color: 'white', // Новый цвет текста
        duration: 0.5,
        ease: 'power2.out',
      }, '+=3.7') // Задержка 0.5 секунды после завершения текста
      // 3. Показываем кнопку comm-trash
      .to(commTrash, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '+=0.3'); // Задержка 0.5 секунды после изменения фона и цвета текста
  }



  const commAnimBot = document.querySelector('.comm__anim-bot');
  const commMessGood = document.querySelector('.comm-mess-good');

  if (commTrash && commAnimBot && commMessGood) {
    commTrash.addEventListener('click', () => {
      // Уменьшаем кнопку comm-trash в половину
      document.querySelector('.comm-mess').style.transition = 'all .4s';
      document.querySelector('.trash-full path').style.fill = 'rgba(97, 79, 169, 1)';
      document.querySelector('.trash-stroke1').style.stroke = 'rgba(97, 79, 169, 1)';
      document.querySelector('.trash-stroke2').style.stroke = 'rgba(97, 79, 169, 1)';
      document.querySelector('.trash-bg').style.fill = 'rgba(97, 79, 169, 0.15)';
      document.querySelector('.comm-mess').style.background = 'rgba(150, 217, 210, 0.15)';
      document.querySelector('.comm-mess').style.color = 'rgba(43, 140, 141, 1)';
      commTrash.style.pointerEvents = "none";
      gsap.to(commTrash, {
        scale: 0.7,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          // После уменьшения кнопки, показываем comm__anim-bot
          gsap.to(commAnimBot, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              // После появления comm__anim-bot, побуквенно пишем текст в comm-mess-good
              const text = i18next.t('positive_comment');
              let charIndex = 0;

              const interval = setInterval(() => {
                commMessGood.textContent = text.slice(0, charIndex + 1); // Вписываем текст побуквенно
                charIndex++;
                if (charIndex === text.length) {
                  clearInterval(interval); // Останавливаем, когда текст полностью вписан
                }
              }, 50); // Скорость ввода (50 мс на символ)
            },
          });
        },
      });
    });
  }




  // Убедитесь, что GSAP и ScrollTrigger подключены
  gsap.registerPlugin(ScrollTrigger);

  const uvedTg = document.querySelector('.uved__tg');
  const uvedLine = document.querySelector('.uved__line');
  const uvedPhone = document.querySelector('.uved__phone');

  // Устанавливаем начальные состояния
  gsap.set(uvedTg, { scale: 0 });
  gsap.set(uvedLine, { maxHeight: 0 });
  gsap.set(uvedPhone, { scale: 0 });

  const advantagUved = document.querySelector('.advantag__uved');

  if (advantagUved) {
    gsap.timeline({
      scrollTrigger: {
        trigger: advantagUved, // Элемент, который отслеживаем
        start: 'top 60%', // Когда верхняя часть элемента достигает 60% высоты экрана
        end: 'bottom 40%', // Когда нижняя часть элемента достигает 40% высоты экрана
        toggleActions: 'play none none none', // Запускаем анимацию только один раз
      },
    })
      // 1. Присваиваем scale: 1 к uved__tg
      .to(uvedTg, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
      // 2. Увеличиваем max-height у uved__line до 75px
      .to(uvedLine, {
        maxHeight: 75,
        duration: 0.5,
        ease: 'power2.out',
      }, '+=0.5') // Задержка 0.5 секунды
      // 3. Присваиваем scale: 1 к uved__phone
      .to(uvedPhone, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '+=0.5') // Задержка 0.5 секунды
      // 4. Увеличиваем max-height у uved__line до 160px
      .to(uvedLine, {
        maxHeight: 160,
        duration: 0.5,
        ease: 'power2.out',
      }, '+=0.5'); // Задержка 0.5 секунды
  }



  gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
  MorphSVGPlugin.convertToPath(".rect1-v1");
  MorphSVGPlugin.convertToPath(".rect1-v2");
  MorphSVGPlugin.convertToPath(".rect2-v1");
  MorphSVGPlugin.convertToPath(".rect2-v2");
  MorphSVGPlugin.convertToPath(".rect3-v1");
  MorphSVGPlugin.convertToPath(".rect3-v2");
  MorphSVGPlugin.convertToPath(".rect4-v1");
  MorphSVGPlugin.convertToPath(".rect4-v2");
  MorphSVGPlugin.convertToPath(".rect5-v1");
  MorphSVGPlugin.convertToPath(".rect5-v2");
  MorphSVGPlugin.convertToPath(".rect6-v1");
  MorphSVGPlugin.convertToPath(".rect6-v2");
  MorphSVGPlugin.convertToPath(".rect7-v1");
  MorphSVGPlugin.convertToPath(".rect7-v2");
  MorphSVGPlugin.convertToPath(".rect8-v1");
  MorphSVGPlugin.convertToPath(".rect8-v2");
  MorphSVGPlugin.convertToPath(".rect9-v1");
  MorphSVGPlugin.convertToPath(".rect9-v2");
  MorphSVGPlugin.convertToPath(".rect10-v1");
  MorphSVGPlugin.convertToPath(".rect10-v2");


  MorphSVGPlugin.convertToPath(".rect1-v3");
  MorphSVGPlugin.convertToPath(".rect2-v3");
  MorphSVGPlugin.convertToPath(".rect3-v3");
  MorphSVGPlugin.convertToPath(".rect4-v3");
  MorphSVGPlugin.convertToPath(".rect5-v3");
  MorphSVGPlugin.convertToPath(".rect6-v3");
  MorphSVGPlugin.convertToPath(".rect7-v3");
  MorphSVGPlugin.convertToPath(".rect8-v3");
  MorphSVGPlugin.convertToPath(".rect9-v3");
  MorphSVGPlugin.convertToPath(".rect10-v3");








  const advantagGraph = document.querySelector('.advantag__graph');
  const graphLine1 = document.querySelector('#graph-line1');
  const graphLine2 = document.querySelector('#graph-line2');
  const graphLine3 = document.querySelector('#graph-line3');


  const rect1V1 = document.querySelector('.rect1-v1');
  const rect1V2 = document.querySelector('.rect1-v2');

  const rect2V1 = document.querySelector('.rect2-v1');
  const rect2V2 = document.querySelector('.rect2-v2');
  const rect3V1 = document.querySelector('.rect3-v1');
  const rect3V2 = document.querySelector('.rect3-v2');
  const rect4V1 = document.querySelector('.rect4-v1');
  const rect4V2 = document.querySelector('.rect4-v2');
  const rect5V1 = document.querySelector('.rect5-v1');
  const rect5V2 = document.querySelector('.rect5-v2');
  const rect6V1 = document.querySelector('.rect6-v1');
  const rect6V2 = document.querySelector('.rect6-v2');
  const rect7V1 = document.querySelector('.rect7-v1');
  const rect7V2 = document.querySelector('.rect7-v2');
  const rect8V1 = document.querySelector('.rect8-v1');
  const rect8V2 = document.querySelector('.rect8-v2');
  const rect9V1 = document.querySelector('.rect9-v1');
  const rect9V2 = document.querySelector('.rect9-v2');
  const rect10V1 = document.querySelector('.rect10-v1');
  const rect10V2 = document.querySelector('.rect10-v2');


  const rect1V3 = document.querySelector('.rect1-v3');
  const rect2V3 = document.querySelector('.rect2-v3');
  const rect3V3 = document.querySelector('.rect3-v3');
  const rect4V3 = document.querySelector('.rect4-v3');
  const rect5V3 = document.querySelector('.rect5-v3');
  const rect6V3 = document.querySelector('.rect6-v3');
  const rect7V3 = document.querySelector('.rect7-v3');
  const rect8V3 = document.querySelector('.rect8-v3');
  const rect9V3 = document.querySelector('.rect9-v3');
  const rect10V3 = document.querySelector('.rect10-v3');
  


  // Элементы для последовательной анимации
  const geoWhiteC = document.querySelector('.geo-white-c');
  const geoSp = document.querySelector('.geo-sp');
  const geoGreenC = document.querySelector('.geo-green-c');
  const geoPurpC = document.querySelector('.geo-purp-c');
  const geoUs = document.querySelector('.geo-us');
  const geoHk = document.querySelector('.geo-hk');
  const o1 = document.querySelector('.graph-o1');
  const graph9 = document.querySelector('.graph-9');
  const dash1 = document.querySelector('.graph-dash1');
  const o2 = document.querySelector('.graph-o2');
  const graph23 = document.querySelector('.graph-23');
  const o3 = document.querySelector('.graph-o3');
  const dash2 = document.querySelector('.graph-dash2');
  const graph12 = document.querySelector('.graph-12');
  const o4 = document.querySelector('.graph-o4');
  const graph8 = document.querySelector('.graph-8');
  const dash3 = document.querySelector('.graph-dash3');
  const o5 = document.querySelector('.graph-o5');
  const graph25 = document.querySelector('.graph-25');
  const dash4 = document.querySelector('.graph-dash4');
  const incBotL = document.querySelector('.inc-bot-l');
  const incBotR = document.querySelector('.inc-bot-r');
  const cliksBot = document.querySelector('.cliks-bot');

  // Устанавливаем начальное состояние (scale: 0)
  gsap.set([geoWhiteC, geoSp, geoGreenC, geoPurpC, geoUs, geoHk, o1, graph9, dash1, o2, graph23, o3, dash2, graph12, o4, graph8, o5, graph25, dash4, dash3, incBotL, incBotR, cliksBot], { scale: 0 });

  if (advantagGraph && graphLine1 && graphLine2 && graphLine3) {
    gsap.timeline({
      scrollTrigger: {
        trigger: advantagGraph,
        start: 'top 60%',
        end: 'bottom 40%',
        toggleActions: 'play none none none',
      },
    })

      .add('start')

      // 1. Морф graph-line1 в graph-line2 с transform
      .to(graphLine1, {
        duration: 1,
        morphSVG: {
          shape: graphLine2,
          shapeIndex: 0,
        },
        transform: 'translate(39px, 100px)',
        ease: 'power2.out',
      }, 'start')


      .to(rect1V1, {
        duration: 1,
        morphSVG: {
          shape: rect1V2,
          shapeIndex: 0,
        },
        
        ease: 'power2.out',
      }, 'start')


      .to(rect2V1, {
        duration: 1,
        morphSVG: {
          shape: rect2V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')

      .to(rect3V1, {
        duration: 1,
        morphSVG: {
          shape: rect3V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')

      .to(rect4V1, {
        duration: 1,
        morphSVG: {
          shape: rect4V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')

      .to(rect5V1, {
        duration: 1,
        morphSVG: {
          shape: rect5V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')


      .to(rect6V1, {
        duration: 1,
        morphSVG: {
          shape: rect6V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')


      .to(rect7V1, {
        duration: 1,
        morphSVG: {
          shape: rect7V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')

      .to(rect8V1, {
        duration: 1,
        morphSVG: {
          shape: rect8V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')
      .to(rect9V1, {
        duration: 1,
        morphSVG: {
          shape: rect9V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')

      .to(rect10V1, {
        duration: 1,
        morphSVG: {
          shape: rect10V2,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start')



      .to([geoWhiteC, geoSp], {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2, // Задержка между элементами
      }, 'start') // Задержка 0.5 секунды


      .to(rect1V1, {
        duration: 1,
        morphSVG: {
          shape: rect1V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')


      .to(rect2V1, {
        duration: 1,
        morphSVG: {
          shape: rect2V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')

      .to(rect3V1, {
        duration: 1,
        morphSVG: {
          shape: rect3V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')

      .to(rect4V1, {
        duration: 1,
        morphSVG: {
          shape: rect4V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')

      .to(rect5V1, {
        duration: 1,
        morphSVG: {
          shape: rect5V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')


      .to(rect6V1, {
        duration: 1,
        morphSVG: {
          shape: rect6V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')


      .to(rect7V1, {
        duration: 1,
        morphSVG: {
          shape: rect7V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')

      .to(rect8V1, {
        duration: 1,
        morphSVG: {
          shape: rect8V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')
      .to(rect9V1, {
        duration: 1,
        morphSVG: {
          shape: rect9V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')

      .to(rect10V1, {
        duration: 1,
        morphSVG: {
          shape: rect10V3,
          shapeIndex: 0,
        },

        ease: 'power2.out',
      }, 'start+=1')







      // 2. Через полсекунды морф graph-line2 в graph-line3
      .to(graphLine1, {
        duration: 1,
        morphSVG: {
          shape: graphLine3,
          shapeIndex: 0,
        },
        transform: 'translate(50px, 10px)',
        ease: 'power2.out',
      }, 'start+=1') // Задержка 0.5 секунды

      // 4. Анимация scale для geo-green-c и geo-purp-c
      .to([geoGreenC, geoPurpC], {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2,
      }, 'start+=1') // Задержка 0.5 секунды
      // 5. Анимация scale для geo-us и geo-hk
      .to([geoUs, geoHk], {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2,
      }, 'start+=2') // Задержка 0.5 секунды
      .to([incBotL, incBotR, cliksBot], {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      
      }, 'start+=2') // Задержка 0.5 секунды

      .to([o1, graph9, dash1, o2, graph23, o3, dash2, graph12, o4, graph8, o5, graph25, dash4, dash3], {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      }, 'start+=2'
      );
  }




  const langSwitcher = document.querySelector('.lang-switcher');
  const langContainer = document.querySelector('.lang-switcher-c');

  langSwitcher.addEventListener('click', () => {
    langContainer.classList.toggle('active');
  });

  // Закрытие при клике вне элемента
  document.addEventListener('click', (e) => {
    if (!langContainer.contains(e.target)) {
      langContainer.classList.remove('active');
    }
  });






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
      }, 3500);
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
            }, 3500); // Задержка 2.5 секунды
          }
        }, { once: true }); // Слушатель срабатывает только один раз
      });
    });
  });
}