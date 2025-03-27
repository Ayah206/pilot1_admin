import { Box, FormHelperText, TextField, TextFieldProps } from '@mui/material'
import React from 'react'

// interface Props {
//     label: String
//     value?: String
//     setValue?: (x: string)=>void
// }
type Props = TextFieldProps & {
    title: string;  
};
export default function InputField(props: Props) {
    return (
        <Box sx = {{display: "flex",flexDirection: "column", gap: 1, flex: 1}}>
            <FormHelperText sx={{
                fontWeight: 'bold', 
                color: 'black',
                textTransform: 'capitalize' 
            }}>{props.title}</FormHelperText>
            <TextField fullWidth variant="outlined" value={props.value}
            sx = {{
                '& .MuiInputBase-input':{
                    py: 1,   
                }, 
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                }    
            }}
            {...props}
            />    
        </Box>
    )
}
