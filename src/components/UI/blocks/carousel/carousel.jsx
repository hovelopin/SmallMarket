import * as StyledCarousel from "./style"

const Carousel = ({ width, height, margin, padding, items }) => {
    return (
        <StyledCarousel.SliderContainer
            width={width}
            height={height}
            margin={margin}
            padding={padding}
        >
            <StyledCarousel.StyledSlider {...StyledCarousel.setting}>
                {items.map((item) => (
                    <StyledCarousel.Image key={item.uuid} src={item.img} />
                ))}
            </StyledCarousel.StyledSlider>
        </StyledCarousel.SliderContainer>
    )
}

export default Carousel
