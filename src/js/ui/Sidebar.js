class Sidebar {
    constructor () {
        // Находим элементы на странице
        this.menuToggle = document.querySelector('[data-toggle="menu"]') // Элемент, который переключает меню
        this.menuIcon = this.menuToggle.querySelector('[data-icon="menu"]') // Иконка меню (меню/закрыть)
        this.sidePanel = document.querySelector('[data-panel]') // Боковая панель (меню)

        // Привязываем обработчики событий для взаимодействия с меню
        this.addEventListeners()
    }

    addEventListeners () {
        // Открытие или закрытие панели по клику на иконку меню
        this.menuToggle.addEventListener('click', () => this.toggleSidePanel())

        // Закрытие панели при клике вне ее области
        document.addEventListener('click', event =>
            this.handleOutsideClick(event)
        )

        // Закрытие панели при изменении размера экрана (если экран больше 834px)
        window.addEventListener('resize', () => this.handleResize())
    }

    // Метод для переключения состояния боковой панели (открытие/закрытие)
    toggleSidePanel () {
        // Проверяем, открыта ли панель
        const isPanelOpen = this.sidePanel.getAttribute('data-panel') === 'open'

        // Если панель открыта, закрываем ее, если закрыта — открываем
        if (isPanelOpen) {
            this.closeSidePanel()
        } else {
            this.openSidePanel()
        }
    }

    // Метод для открытия боковой панели
    openSidePanel () {
        // Устанавливаем атрибут, чтобы указать, что панель открыта
        this.sidePanel.setAttribute('data-panel', 'open')

        // Для смены иконки
        this.menuIcon.setAttribute('data-icon', 'close')

        // Отключаем скролл
        document.body.classList.add('no-scroll')
    }

    // Метод для закрытия боковой панели
    closeSidePanel () {
        // Устанавливаем атрибут, чтобы указать, что панель закрыта
        this.sidePanel.setAttribute('data-panel', 'closed')

        // Для смены иконки
        this.menuIcon.setAttribute('data-icon', 'menu')

        // Включаем скролл
        document.body.classList.remove('no-scroll')
    }

    // Метод для обработки клика вне области боковой панели
    handleOutsideClick (event) {
        // Проверяем, открыта ли панель
        const isPanelOpen = this.sidePanel.getAttribute('data-panel') === 'open'
        if (isPanelOpen) {
            // Проверяем, был ли клик вне боковой панели и иконки меню
            const isClickInside =
                this.sidePanel.contains(event.target) || // Клик внутри панели
                this.menuToggle.contains(event.target) // Клик внутри иконки меню
            if (!isClickInside) {
                // Если клик был вне — закрываем панель
                this.closeSidePanel()
            }
        }
    }

    // Метод для закрытия боковой панели при изменении размера окна (если ширина больше 834px)
    handleResize () {
        // Если ширина окна больше 834px, то закрываем панель
        if (window.innerWidth > 834) {
            this.closeSidePanel()
        }
    }
}

export default Sidebar
