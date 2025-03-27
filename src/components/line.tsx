import { Box } from '@mui/material'
import React from 'react'

export default function Line({color}: {color: string}) {
    return (
        <Box className= "line" sx  = {{backgroundColor: color}} >
            <Box className ="circle" sx  = {{borderColor: color}}>
            </Box>
        </Box>
    )
}
