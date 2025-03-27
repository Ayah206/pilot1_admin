import { Box, Button, FormHelperText, TextField } from '@mui/material'
import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface Props {
    label: string
    accept?: string
    setValue?: (x: string)=>void
}
export default function FileField({label, accept, setValue}: Props) {
    const [open, setOpen] = React.useState(false);
    const [imgSrc, setImgSrc] = useState('')

    const handleClickOpen = (value:string) => {
        setOpen(true);
        setImgSrc(value)
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx = {{display: "flex",flexDirection: "column", gap: 1}}>
            <FormHelperText sx={{
                fontWeight: 'bold', 
                color: 'black',
                textTransform: 'capitalize' 
            }}>{label}</FormHelperText>
            <input
                accept = {accept}
                id="contained-button-file"
                type="file"
                // onChange={(e) => handleClickOpen(e.target.value)}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <img alt = '' src = {imgSrc}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
