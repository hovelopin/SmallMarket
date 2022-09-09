import * as StyledCarousel from "./style"
import Container from "../../atoms/container/container"
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
        <Container width="100%">
            <StyledCarousel.StyledCarousel {...StyledCarousel.setting}>
                {sampleItems.map((e) => {
                    return <StyledCarousel.Image key={e.id} src={e.url} />
                })}
            </StyledCarousel.StyledCarousel>
        </Container>
    )
}

export default Carousel
