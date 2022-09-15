import Button from "@/components/UI/atoms/button/button"
import Icon from "@/icon/icon"

const IconButton = ({ type, name, width, onClickEvent }) => {
    return (
        <Button
            type={type}
            bType="button"
            width={width}
            onClickEvent={onClickEvent}
        >
            <Icon name={name} />
        </Button>
    )
}

export default IconButton
