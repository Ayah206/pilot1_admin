import { Box, FormHelperText, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, OutlinedInputProps, Select, TextField, TextFieldProps } from '@mui/material'
import React, {useState} from 'react'
import * as countryCodes from "country-codes-list";

const myCountryCodesObject = countryCodes.customList(
  "countryCallingCode"
);
const allCountryCodes = Object.keys(myCountryCodesObject);

type Props = TextFieldProps & {
    title: string;  
};
export default function PhoneField(props: Props) {
    const [countryCode, setCountryCode] = useState('234')
    return (
        <Box sx = {{display: "flex",flexDirection: "column", gap: 1, flex: 1}}>
            <FormHelperText sx={{
                fontWeight: 'bold', 
                color: 'black',
                textTransform: 'capitalize' 
            }}>{props.title}</FormHelperText>
            <TextField
                value={props.value}
                sx = {{
                    '& .MuiInputBase-input':{
                        py: 1   
                    }, 
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                    }
                }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                        <Select
                        size="small"
                        value={countryCode}
                        variant = "standard"
                        disableUnderline
                        sx={{
                            minWidth: 50,
                        }}
                        MenuProps={{
                            slotProps: {
                            paper: {
                                variant: "outlined",
                                sx: {
                                boxShadow:
                                    "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)",
                                mt: 0.5,
                                },
                            },
                            },
                        }}
                        onChange={(event) => {
                            setCountryCode(event.target.value);
                        }}
                        >   
                        {
                            allCountryCodes.map((item:string)=>{
                                return(<MenuItem value={item}>+ {item}</MenuItem>)
                        })}
                        </Select>
                </InputAdornment>
                }}
                {...props}        
            /> 
            
        </Box>
    )
}
