import Splide from '@splidejs/splide'

export default class SplideSlider {
    constructor (selector, options) {
        this.selector = selector
        this.options = options
    }

    init () {
        const element = document.querySelector(this.selector)
        if (!element) {
            console.error(`Element with selector "${this.selector}" not found.`)
            return
        }

        try {
            const splide = new Splide(this.selector, this.options)
            splide.mount()
        } catch (error) {
            console.error('Error initializing Splide slider:', error)
        }
    }
}
