import * as MyModal from "@components/UI/blocks/modal/style"
import Button from "@components/UI/atoms/button/button"

const Modal = ({ isOpen, onClickEvent, children }) => {
    return (
        <MyModal.StyledModalBackdrop isOpen={isOpen}>
            <MyModal.StyledModalContainer isOpen={isOpen}>
                {children}
                <MyModal.StyledModalButtonContainer>
                    <Button
                        width="400px"
                        value="Cancel"
                        onClickEvent={onClickEvent}
                    />
                </MyModal.StyledModalButtonContainer>
            </MyModal.StyledModalContainer>
        </MyModal.StyledModalBackdrop>
    )
}

export default Modal
