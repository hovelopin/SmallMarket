import * as StyledCarousel from "./style"

const Carousel = () => {
    const imgUrl = `${process.env.PUBLIC_URL}/img/reg_smallmarket.png`
    const sampleItems = [
        { id: 1, url: imgUrl },
        { id: 2, url: imgUrl },
        { id: 3, url: imgUrl },
        { id: 4, url: imgUrl },
        { id: 5, url: imgUrl },
        { id: 6, url: imgUrl },
        { id: 7, url: imgUrl },
        { id: 8, url: imgUrl },
        { id: 9, url: imgUrl },
        { id: 10, url: imgUrl },
    ]

    return (
        <StyledCarousel.SliderContainer>
            <StyledCarousel.StyledSlider {...StyledCarousel.setting}>
                {sampleItems.map((image) => (
                    <StyledCarousel.Image key={image.id} src={image.url} />
                ))}
            </StyledCarousel.StyledSlider>
        </StyledCarousel.SliderContainer>
    )
}

export default Carousel
