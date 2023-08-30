import React from "react";
import Box from '@mui/material/Box';
import Form from "../components/login/form";
import { Toolbar } from "@mui/material";




export default function Login(){

    return(
        <div className = "loginScreen">
            <Toolbar sx = {{p: 2}}>
                <img alt = "Pilot one" src = "/logo-png/white-1.png" width = "45px" />
            </Toolbar>
            <Form/>
        </div>    
    )
}