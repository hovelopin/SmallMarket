import React from "react"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Grid from "@components/UI/atoms/grid/grid"
import Card from "@components/UI/blocks/card/card"
import Theme from "@util/style/theme"

const MyPageCoupon = ({ couponItems }) => {
    return (
        <MyPageCouponMain>
            <MyPageCouponHeader>
                <Text type="large" context="Coupon" />
            </MyPageCouponHeader>
            <MyPageCouponBody>
                <Grid repeat={3} axis="colum" gap="3rem">
                    {couponItems.map((c, i) => (
                        <Card
                            key={i}
                            img={c.img}
                            name={c.name}
                            description={c.description}
                            price={c.price}
                        />
                    ))}
                </Grid>
            </MyPageCouponBody>
        </MyPageCouponMain>
    )
}

const MyPageCouponMain = styled.div`
    width: 100%;
`

const MyPageCouponHeader = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    font-weight: ${Theme.fontWeight.bold};
    border-bottom: 3px solid ${Theme.colors.silverGray};
`

const MyPageCouponBody = styled.div`
    width: 100%;
`

export default MyPageCoupon
