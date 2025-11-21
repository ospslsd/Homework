document.addEventListener('DOMContentLoaded', () => {
	const phoneInput = document.querySelector('#phone')

	// Инициализация intl-tel-input
	const iti = window.intlTelInput(phoneInput, {
		initialCountry: 'auto',
		geoIpLookup: callback => {
			fetch('https://ipinfo.io?token=YOUR_TOKEN', { method: 'GET' })
				.then(response => response.json())
				.then(data => callback(data.country))
				.catch(() => callback('es'))
		},
		utilsScript:
			'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
	})

	// Автоматическое добавление телефонного кода при выборе страны
	phoneInput.addEventListener('countrychange', () => {
		const countryData = iti.getSelectedCountryData()
		phoneInput.value = `+${countryData.dialCode}`
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.bot__mid-btn')
	const inputTel = document.querySelector('.inp-tel')
	const inputMail = document.querySelector('.inp-mail')
	const itiContainer = document.querySelector('.iti') // Контейнер intl-tel-input

	buttons.forEach((button, index) => {
		button.addEventListener('click', event => {
			event.preventDefault()

			// Удаляем класс active у всех кнопок
			buttons.forEach(btn => btn.classList.remove('active'))

			// Добавляем класс active к нажатой кнопке
			button.classList.add('active')

			// Переключаем классы active для инпутов
			if (index === 0) {
				inputTel.classList.add('active')
				inputMail.classList.remove('active')
				if (itiContainer) itiContainer.style.display = 'block' // Показываем блок флага
			} else {
				inputMail.classList.add('active')
				inputTel.classList.remove('active')
				if (itiContainer) itiContainer.style.display = 'none' // Скрываем блок флага
			}
		})
	})
})
