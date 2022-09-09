import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"

export const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
`

export const Image = styled.img`
    max-width: 30%;
    max-height: 100%;
`

export const StyledSlider = styled(Slider)`
    .slick-slide div {
        outline: none;
        text-align: center;
    }
`
export const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
}
