import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"

export const SliderContainer = styled.div`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    margin: ${(props) => props.margin || "0 auto"};
    padding: ${(props) => props.padding || "0 auto"};
`

export const Image = styled.img`
    max-width: 30%;
    max-height: 100%;
    cursor: pointer;
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
