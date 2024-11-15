import '../scss/main.scss'

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
})
