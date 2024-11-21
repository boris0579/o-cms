class NavbarScrollEffect {
    constructor (navbarSelector) {
        this.navbar = document.querySelector(navbarSelector)
        this.navbarHeight = this.navbar.offsetHeight // Высота навбара

        this.init() // Инициализация
    }

    // Проверка текущей прокрутки
    checkScroll () {
        if (window.scrollY > this.navbarHeight) {
            this.navbar.classList.add('scrolled')
        } else {
            this.navbar.classList.remove('scrolled')
        }
    }

    // Добавление событий и выполнение проверки на загрузке
    init () {
        // Проверка при загрузке страницы
        this.checkScroll()

        // Добавление события прокрутки
        window.addEventListener('scroll', () => this.checkScroll())
    }
}

export default NavbarScrollEffect
