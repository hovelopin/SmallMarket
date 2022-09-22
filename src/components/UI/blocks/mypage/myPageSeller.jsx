import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import Form from "@components/UI/atoms/form/form"
import Button from "@components/UI/atoms/button/button"
import Input from "@components/UI/atoms/input/input"
import LabeledInput from "@components/UI/blocks/labeledInput/labeledInput"
import Select from "@components/UI/atoms/select/select"
import Theme from "@util/style/theme"

const MyPageSeller = ({
    imgPreview,
    productFormValue,
    onProductFormValueChangeEvent,
    onChangeCategoryEvent,
    onImgSrcChangeEvent,
    onProductSubmitEvent,
}) => {
    return (
        <MyPageSellerContainer>
            <MyPageSellerHeader>
                <Text type="large" context="Product information" />
            </MyPageSellerHeader>
            <MyPageSellerCard>
                <Form onSubmitEvent={onProductSubmitEvent}>
                    <MyPageSellerPreviewImageContainer src={imgPreview} />
                    <MyPageSellerImageInputContainer>
                        <Input
                            type="file"
                            name="img"
                            value={productFormValue.img}
                            onChangeEvent={onImgSrcChangeEvent}
                        />
                    </MyPageSellerImageInputContainer>
                    <MyPageSellerInputWrapper>
                        <LabeledInput
                            width="60%"
                            inputType="text"
                            labelText="Name"
                            name="name"
                            value={productFormValue.name}
                            onChangeEvent={onProductFormValueChangeEvent}
                        />
                    </MyPageSellerInputWrapper>
                    <MyPageSellerInputWrapper>
                        <LabeledInput
                            width="60%"
                            inputType="text"
                            labelText="Description"
                            name="description"
                            value={productFormValue.description}
                            onChangeEvent={onProductFormValueChangeEvent}
                        />
                    </MyPageSellerInputWrapper>
                    <MyPageSellerInputWrapper>
                        <LabeledInput
                            width="60%"
                            inputType="text"
                            labelText="Origin"
                            name="origin"
                            value={productFormValue.origin}
                            onChangeEvent={onProductFormValueChangeEvent}
                        />
                    </MyPageSellerInputWrapper>
                    <MyPageSellerInputWrapper>
                        <LabeledInput
                            width="60%"
                            inputType="text"
                            labelText="Price"
                            name="price"
                            value={productFormValue.price}
                            onChangeEvent={onProductFormValueChangeEvent}
                        />
                    </MyPageSellerInputWrapper>
                    <MyPageSellerInputWrapper>
                        <LabeledInput
                            width="60%"
                            inputType="text"
                            labelText="Quantity"
                            name="quantity"
                            value={productFormValue.quantity}
                            onChangeEvent={onProductFormValueChangeEvent}
                        />
                    </MyPageSellerInputWrapper>
                    <MyPageSellerInputWrapper>
                        <Select
                            width="60%"
                            options={["Drink", "Vegetable", "Meat", "Normal"]}
                            onChangeEvent={onChangeCategoryEvent}
                        />
                    </MyPageSellerInputWrapper>
                    <Button
                        type="default"
                        bType="submit"
                        value="REGISTRATION"
                    />
                </Form>
            </MyPageSellerCard>
        </MyPageSellerContainer>
    )
}

const MyPageSellerContainer = styled.div`
    width: 100%;
    height: 100%;
`

const MyPageSellerHeader = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    font-weight: ${Theme.fontWeight.bold};
    border-bottom: 3px solid ${Theme.colors.silverGray};
`

const MyPageSellerImageInputContainer = styled.div`
    width: 60%;
`

const MyPageSellerCard = styled.div`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    border-radius: ${Theme.card.borderRadius};
`

const MyPageSellerPreviewImageContainer = styled.img`
    width: 30%;
`

const MyPageSellerInputWrapper = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`

export default MyPageSeller
