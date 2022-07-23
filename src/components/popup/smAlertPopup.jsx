import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogAction,
    Button,
} from "@mui/material"

const SMAlertPopup = ({ isOpen, onCloseButtonClickEvent, msg }) => {
    const onCloseButtonClickEventHandler = (checked) => () => {
        onCloseButtonClickEvent(checked)
    }

    return (
        <Box>
            <Dialog open={isOpen}>
                <DialogTitle>WARNING!!!</DialogTitle>
                <DialogContent>
                    <DialogContentText>{msg}</DialogContentText>
                </DialogContent>
                <DialogAction>
                    <Button onClick={onCloseButtonClickEventHandler(false)}>
                        Cancel
                    </Button>
                </DialogAction>
            </Dialog>
        </Box>
    )
}

export default SMAlertPopup
