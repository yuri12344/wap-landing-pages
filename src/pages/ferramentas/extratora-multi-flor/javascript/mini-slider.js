const sliderData = [
    {
        title: 'Escova de limpeza com lâmina',
        image: '/src/assets/extratora-multiflor/slider-images/escova-de-limpeza-com-lamina.png'
    },
    {
        title: 'Escova rotativa',
        image: '/src/assets/extratora-multiflor/slider-images/escova-rotativa-peca.png'
    },
    {
        title: 'Escova de limpeza profunda',
        image: '/src/assets/extratora-multiflor/slider-images/escova-de-limpeza-profunda.png'
    },
    {
        title: 'Carregador',
        image: '/src/assets/extratora-multiflor/slider-images/carregador.png'
    },
    {
        title: 'Base carregadora',
        image: '/src/assets/extratora-multiflor/slider-images/base carregadora.png'
    },
    {
        title: 'Bateria',
        image: '/src/assets/extratora-multiflor/slider-images/bateria.png'
    },
]

let currentIndex = 0
const maxImages = sliderData.length

const NextSlider = () => {
    if (currentIndex === maxImages - 1) {
        currentIndex = 0
    } else {
        currentIndex = (currentIndex + 1) % maxImages
    }
}

const PreviousSlider = () => {
    if (currentIndex === 0) {
        currentIndex = maxImages - 1
    } else {
        currentIndex = (currentIndex - 1) % maxImages
    }
}

const ImageSlider = (action) => {
    const imageSlider = window.document.getElementById('image-slider-holder')
    const imageSliderTitle = window.document.getElementById('image-slider-title')
    if (action === 'previous') {
        PreviousSlider()
    }

    if (action === 'next') {
        NextSlider()
    }

    imageSlider.src = sliderData[currentIndex].image
    imageSliderTitle.textContent = sliderData[currentIndex].title
}


window.document.addEventListener('DOMContentLoaded', () => {
    const previousArrow = window.document.getElementById('left-arrow')
    const nextArrow = window.document.getElementById('right-arrow')

    previousArrow.addEventListener('click', () => ImageSlider('previous'))
    nextArrow.addEventListener('click', () => ImageSlider('next'))
})

