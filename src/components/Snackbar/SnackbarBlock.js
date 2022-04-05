import React, {memo} from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarBlock = memo(({open, handleChangeActiveButton}) => {
    const handleClose = () => handleChangeActiveButton(!open)
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                ГОТОВО
            </Alert>
        </Snackbar>
    )
})
export default SnackbarBlock;