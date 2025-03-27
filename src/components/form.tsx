import React, { ReactNode, useState } from "react";
import { Box } from "@mui/material";

import Header from "./header";
import ToolBar from "./toolBar";
import { BoxProps } from "@mui/material";


type Props = {
  title: string;
  children: ReactNode;
  handleSubmit: any  
};
export default function Form({title, children, handleSubmit}: Props) {
  return (
    <Box sx = {{width: '100%', }} component = 'form' autoComplete="off" onSubmit= {handleSubmit} >
        <Header title = {title} goBack/>
        <Box 
          sx={{  
            display: "flex", 
            flexDirection: "column", 
            gap: 3,
            elevation: 2,
            backgroundColor: 'white',
            p: 6,
            borderRadius: 2,
            mx: 'auto',
            mt: 2
        }}>
          {children}
        </Box>
    </Box>
  );
}