import * as MyModal from "./style"

const Modal = ({ isOpen, children }) => {
    return (
        <MyModal.StyledModalBackdrop isOpen={isOpen}>
            <MyModal.StyledModalContainer isOpen={isOpen}>
                {children}
            </MyModal.StyledModalContainer>
        </MyModal.StyledModalBackdrop>
    )
}

export default Modal
