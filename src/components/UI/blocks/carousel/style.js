import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Carousel from "react-slick"
import styled from "styled-components"
import Container from "../../atoms/container/container"

export const CarouselContainer = styled.div`
    width: 100%;
`
// export const CarouselContainer = styled(Container)`
//     overflow: hidden;
//     width: 100%;
// `
export const Image = styled.img`
    max-width: 60%;
    max-height: 100%;
`

export const StyledCarousel = styled(Carousel)`
    .slick-slide div {
        outline: none;
        text-align: center;
    }
`
export const setting = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}
