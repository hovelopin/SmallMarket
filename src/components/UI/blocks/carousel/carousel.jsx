import * as StyledCarousel from "./style"

/**
 *
 * @param {Object in Array} items [{id: 1, url: imageUrl}]
 */
const Carousel = ({ items }) => {
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
        <StyledCarousel.CarouselContainer>
            <StyledCarousel.StyledCarousel {...StyledCarousel.setting}>
                {sampleItems.map((e) => {
                    return (
                        <div key={e.id}>
                            <StyledCarousel.Image src={e.url} />
                        </div>
                    )
                })}
            </StyledCarousel.StyledCarousel>
        </StyledCarousel.CarouselContainer>
    )
}

export default Carousel
