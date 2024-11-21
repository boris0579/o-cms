import '../scss/main.scss'

import SplideSlider from './plugins/splidejs'

import CustomSelect from './ui/CustomSelect'
import Sidebar from './ui/Sidebar'

// Инициализация кастомных селектов после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Sidebar
    new Sidebar()

    const selectElements = document.querySelectorAll('[data-select]')

    // Проверяем, есть ли такие элементы на странице
    if (selectElements.length > 0) {
        selectElements.forEach(selectElement => new CustomSelect(selectElement))
    }

    // Слайдер на главной странице
    const mainSliderOptions = {
        type: 'loop',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        arrows: false,
        pagination: true,
        live: false
        // classes: {
        //     pagination: 'custom-pagination', // Заменяем стандартный класс пагинации
        //     page: 'custom-pagination__item', // Класс для точек пагинации
        // },
    }

    const mainSlider = new SplideSlider('.main-splide', mainSliderOptions)
    mainSlider.init()
})
