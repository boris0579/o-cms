import SplideSlider from './SplideSlider'

export default function initSlider () {
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
}
