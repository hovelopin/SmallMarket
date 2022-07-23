import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
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
                <DialogActions>
                    <Button onClick={onCloseButtonClickEventHandler(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default SMAlertPopup
