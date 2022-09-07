import StyledForm from "./style"

const Form = ({ onSubmitEvent, children }) => {
    return <StyledForm onSubmit={onSubmitEvent}>{children}</StyledForm>
}

export default Form
