import { IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate} from 'react-router-dom';


interface Props{
    title: string
    goBack?: boolean
}
export default function Header({title, goBack}: Props) {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate(-1)
    }
    return (
        <Toolbar disableGutters >
            {goBack && (
                <IconButton sx = {{mr: 2}} onClick = {handleClick}>
                    <WestIcon fontSize = "medium" sx = {{color: 'black',}} />
                </IconButton>
            )}
            <Typography variant='h5'>
                {title}  
            </Typography>
        </Toolbar>
    )
}
