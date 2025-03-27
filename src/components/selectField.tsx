import { FormControl, MenuItem, Select, Box, FormHelperText, TextFieldProps } from '@mui/material'
import React from 'react'

type Props = TextFieldProps & {
    title: string;
    options: string[]; 
};
export default function SelectField(props: Props) {
    return (
        <Box sx = {{display: "flex",flexDirection: "column", gap: 1, flex: 1}}>
            <FormHelperText sx={{
                fontWeight: 'bold', 
                color: 'black',
                textTransform: 'capitalize' 
            }}>{props.title}</FormHelperText>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx = {{
                '& .MuiInputBase-input':{
                        py: 1   
                    }, 
              }}
              
            >
                {props.options.map((item: string)=>(<MenuItem value={item}>{item}</MenuItem>))}
            </Select>
            </FormControl>
        </Box>
    )
}
