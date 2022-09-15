import DaumPostcode from "react-daum-postcode"
import styled from "styled-components"
import StyledGrid from "../../atoms/grid/style"
import Input from "../../atoms/input/input"
import Button from "../../atoms/button/button"
import Modal from "../modal/modal"
import React, { useState } from "react"

const Post = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [fullAddress, setFullAddress] = useState("")
    const [zonecode, setZoneCode] = useState("")

    return (
        <PostContainer>
            <Button onClickEvent={() => setIsOpen(true)}>test</Button>
            <Modal isOpen={isOpen} onClickEvent={() => setIsOpen(false)}>
                <Postcode
                    setFullAddress={setFullAddress}
                    setZoneCode={setZoneCode}
                ></Postcode>
            </Modal>
        </PostContainer>
    )
}

export default Post

const PostContainer = styled.div`
    margin: 0 auto;
`

const Postcode = (props) => {
    const setFullAddress = props.setFullAddress
    const setZoneCode = props.setZoneCode

    const handleComplete = (data) => {
        let fullAddress = data.address
        let zonecode = data.zonecode
        let extraAddress = ""

        setFullAddress(fullAddress)
        setZoneCode(zonecode)

        if (data.addressType === "R") {
            if (data.bname !== "") extraAddress += data.bname
            if (data.buildingName !== "")
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
        }
        console.log(fullAddress)
    }
    return (
        <div>
            <DaumPostcode onComplete={handleComplete} />
        </div>
    )
}
