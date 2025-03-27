import React, { ReactNode, useEffect } from 'react';
import { Paper, Stack, Avatar, Typography } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useState } from 'react';


interface Props{
    avatar: ReactNode,
    name: String,
    value: number,
    color: Array<any>
}
export default function DashboardPaper(props: Props){
    const bg = 'rgba('+props.color.toString()+',0.1)'
    const iconColor = 'rgba('+props.color.toString()+')'
    const [val, setVal] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            setVal((oldVal) => {
                if (oldVal < props.value) {
                    return oldVal + 1;
                } else {
                    clearInterval(interval); 
                    return oldVal;
                }
            });
        }, 5000/props.value)
       return()=> clearInterval(interval)    
    }, [])
    return(
        <Paper sx = {{
            height: 70,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 0,
            px: 3,
            py: 2
        }}>
            <Stack sx = {{
                height: '100%',
                justifyContent: 'space-between',
                '& .MuiSvgIcon-root': {
                    color: iconColor
                }
            }}>
                <Avatar sx = {{
                    bgcolor: bg,
                }}>{props.avatar}</Avatar>
                <Typography sx = {{
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    letterSpacing: 1
                  }}>{props.name}</Typography>
            </Stack>
            <Typography sx = {{
                    fontSize: '24px',
                    letterSpacing: 1,
                    fontWeight: 'bolder',
                    lineHeight: 1,
            }}>{val}</Typography>
        </Paper>
    )
}
