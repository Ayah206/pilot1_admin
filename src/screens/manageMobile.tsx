import { Box, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import DataGridDemo from '../components/dataGrid'
import ToolBar from '../components/toolBar';

export default function ManageMobile(){
    const cols = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: true,
        },
        {
            field: 'drivers',
            headerName: 'Drivers',
            width: 200,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'mobile',
            headerName: 'Mobile number',
            width: 150
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 100
        }
    ]
    const rows = [
        { id: 1, name: 'Jon Snow', drivers: '111, 222, 333', email: 'admin@gmail.com', mobile: '0709857264', status: 'active' },
        { id: 1, name: 'Jon Snow', drivers: '111, 222, 333', email: 'admin@gmail.com', mobile: '0709857264', status: 'active' },
        { id: 1, name: 'Jon Snow', drivers: '111, 222, 333', email: 'admin@gmail.com', mobile: '0709857264', status: 'active' },
        { id: 1, name: 'Jon Snow', drivers: '111, 222, 333', email: 'admin@gmail.com', mobile: '0709857264', status: 'active' },
        { id: 1, name: 'Jon Snow', drivers: '111, 222, 333', email: 'admin@gmail.com', mobile: '0709857264', status: 'active' }
      ];
    return(
        <Box>
            <Toolbar disableGutters>
            <Typography variant='h5'>
                Manage mobile app versions   
            </Typography>
            </Toolbar>
            <ToolBar btnLabel = 'add mobile app version'/>
            <DataGridDemo cols = {cols} rows = {rows} />
        </Box>
    )
}