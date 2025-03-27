import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';


type Props = ButtonProps&{
    btnLabel: string 
} 
export default function ToolBar(props : Props){
  return (
    <Stack spacing={2} direction="row" 
        sx = {{
            justifyContent: 'right',
            py: 2,
        }}
    >
        <Button variant="contained" color = 'primary' 
            sx = {{
                px: 4,
                boxShadow: 0,
                '&:hover':{
                backgroundColor: '#EF6C33',
                boxShadow: 0,
                }
            }}
        {...props}
        >{props.btnLabel}</Button>
    </Stack>
  );
}