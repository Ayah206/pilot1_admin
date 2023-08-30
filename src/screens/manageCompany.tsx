import { Box, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import DataGridDemo from '../components/dataGrid'
import ToolBar from '../components/toolBar';

export default function ManageCompany(){
    const cols = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'fname',
            headerName: 'first name',
            width: 100,
        },
        {
            field: 'lname',
            headerName: 'Last name',
            width: 100,
        },
        {
            field: 'cname',
            headerName: 'Company name',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'gender',
            headerName: 'gender',
            width: 100,
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
        },
        {
            field: 'createdAt',
            headerName: 'Created at',
            width: 150,
        },
    ]
    const rows = [
        { id: 1, fname: 'Arya', lname: 'Stark', cname: 'pilot1', email:'admin@gmail.com', gender: 'female', mobile: '0709857264', status: 'active', createdAt: '01-06-2023' },
        { id: 1, fname: 'Arya', lname: 'Stark', cname: 'pilot1', email: 'admin@gmail.com', gender: 'female', mobile: '0709857264', status: 'active', createdAt: '01-06-2023' },
        ];
    return(
        <Box>
            <Toolbar disableGutters>
            <Typography variant='h5'>
                Company management   
            </Typography>
            </Toolbar>
            <ToolBar btnLabel = 'add company'/>
            <DataGridDemo cols = {cols} rows = {rows} />
        </Box>
    )
}