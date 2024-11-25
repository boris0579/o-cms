// import { fetchData } from '../../services/api.js';

class Tabs {
    constructor (selector) {
        this.tabsContainer = document.querySelector(`[${selector}]`)
        if (!this.tabsContainer) {
            console.error(`Элемент с атрибутом [${selector}] не найден.`)
            return
        }

        this.tabLinks = this.tabsContainer.querySelectorAll('[data-tab-link]')
        this.init()
    }

    async init () {
        this.tabLinks.forEach(link => {
            link.addEventListener('click', e => this.handleTabClick(e, link))
        })
    }

    async handleTabClick (event, link) {
        event.preventDefault()
        const filter = link.getAttribute('href').split('=')[1]
        console.log(filter)

        // Обновляем URL с новым параметром
        const newUrl = `${window.location.pathname}?filter=${filter}`
        window.history.pushState({ path: newUrl }, '', newUrl)

        // Выполняем запрос к серверу
        // const data = await fetchData(filter)
        // console.log(data) // Работаем с данными, полученными от сервера

        // Убираем класс активности у всех ссылок
        this.tabLinks.forEach(item =>
            item.classList.remove('tabs__link--active')
        )

        // Добавляем класс активности на выбранную ссылку
        link.classList.add('tabs__link--active')

        // Выводим или обновляем UI с полученными данными
        // this.updateUI(data);
    }

    updateUI (data) {
        // Обновляем UI, например, показываем полученные данные
        // В зависимости от формата данных, например:
        // const contentElement = document.querySelector('.content');
        // contentElement.innerHTML = data
    }
}
export default Tabs
