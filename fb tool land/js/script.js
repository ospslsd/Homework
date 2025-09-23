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
  butik.classList.toggle('active');
}