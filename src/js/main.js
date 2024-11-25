import '../scss/main.scss'

import initSlider from './plugins/splidejs/initSlider'

import CustomSelect from './ui/CustomSelect'
import Sidebar from './ui/Sidebar'
import NavbarScrollEffect from './ui/NavbarScrollEffect'
import Tabs from './ui/Tabs'

// Инициализация кастомных селектов после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Sidebar
    new Sidebar()

    const selectElements = document.querySelectorAll('[data-select]')

    // Проверяем, есть ли такие элементы на странице
    if (selectElements.length > 0) {
        selectElements.forEach(selectElement => new CustomSelect(selectElement))
    }

    // Инициализация слайдера
    initSlider()

    // Фильтр по датам
    new Tabs('data-tabs')

    //
    new NavbarScrollEffect('.navbar')
})
