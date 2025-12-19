function toggleMenu() {
	const nav = document.querySelector('.navbar ul')
	const burger = document.querySelector('.burger')

	// Тoggling классов для показа меню и анимации бургера
	nav.classList.toggle('show')
	burger.classList.toggle('open')

	// Блокировка прокрутки при открытом меню (опционально)
	document.body.classList.toggle('menu-open')
}

// Закрываем меню при клике на любой пункт
document.querySelectorAll('.navbar ul li a').forEach(link => {
	link.addEventListener('click', () => {
		const nav = document.querySelector('.navbar ul')
		const burger = document.querySelector('.burger')
		nav.classList.remove('show')
		burger.classList.remove('open')
		document.body.classList.remove('menu-open')
	})
})

document.querySelectorAll('.accordion-header').forEach(button => {
	button.addEventListener('click', () => {
		const currentlyOpenItem = document.querySelector('.accordion li.open')
		const parentItem = button.parentElement

		// Закрыть открытый элемент, если он отличается от текущего
		if (currentlyOpenItem && currentlyOpenItem !== parentItem) {
			currentlyOpenItem.classList.remove('open')
		}

		// Открыть/закрыть текущий элемент
		parentItem.classList.toggle('open')
	})
})
const slider = document.getElementById('investmentSlider')
const investmentValue = document.querySelector('.investment-value')
const tooltip = document.getElementById('sliderTooltip')

// При загрузке страницы задаём начальные значения
updateSlider(slider.value)

// Слушаем движение ползунка
slider.addEventListener('input', () => {
	updateSlider(slider.value)
})

function updateSlider(val) {
	// Обновляем заливку шкалы слева-направо
	const percentage = ((val - slider.min) / (slider.max - slider.min)) * 100
	slider.style.background = `linear-gradient(to right, #ABE8AD ${percentage}%, #d8f4cb ${percentage}%)`

	// Считаем прибыль (30% сверху)
	const profit = Math.round(val * 1.9)

	// Обновляем текст в блоке с прибылью
	investmentValue.textContent = `€ ${profit.toLocaleString('ru-RU')}`

	// Показываем в тултипе текущее выбранное значение
	tooltip.textContent = `€ ${parseInt(val).toLocaleString('ru-RU')}`

	// Сдвигаем тултип над ползунком в зависимости от процентного положения
	const sliderWidth = slider.offsetWidth
	const tooltipWidth = tooltip.offsetWidth
	// Получаем координаты "левой части" ползунка в пикселях
	const leftOffset = (percentage / 100) * (sliderWidth - 55) // 40 — ширина самого thumb
	// Вычитаем половину ширины тултипа, чтобы центрировать
	tooltip.style.left = leftOffset + tooltipWidth / 4 + 'px'
}
