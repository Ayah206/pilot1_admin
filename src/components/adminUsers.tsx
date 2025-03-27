import { Avatar, Box } from '@mui/material';
import * as React from 'react'
import DataGridDemo from './dataGrid'
import ToolBar from './toolBar'
import { GridActionsCellItem, GridDeleteIcon, GridRenderCellParams } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Block } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from "react-router";


export default function AdminUsers(){
    const [active, setActive] = useState(true)

    const cols = [
      { field: 'sn', 
        headerName: '',
        width: 50 ,
        renderCell: (params: GridRenderCellParams<String>) => (
          <Avatar sx = {{width: 32, height: 32}} alt = {params.value} src ={params.value} />
          
        )
      },
      {
          field: 'lname',
          headerName: 'Last Name',
          width: 150,
          editable: true,
      },
      {
          field: 'fname',
          headerName: 'First Name',
          width: 150,
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
          width: 170
      },
      {
        field: 'date',
        headerName: 'Date joined',
        width: 170,
        // valueFormatter: (value: Date) => {
        //   return (value.getFullYear())
        // },
        renderCell: (params: GridRenderCellParams<Date>) => (
          <span>{params.value.toISOString().split("T")[0]}</span>
          
        )
      },
      {
          field: 'status',
          headerName: 'Status',
          width: 100
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        type: 'actions',
        getActions: (params: any ) => [
            <GridActionsCellItem
                icon = {<EditIcon fontSize = "small"/>}
                label="Edit"
                showInMenu
                sx = {{fontSize: 12, fontWeight: "bold"}}
                
            />,
            <GridActionsCellItem
                icon = {<DeleteIcon fontSize = "small"/>}
                label="Delete"
                showInMenu
                sx = {{fontSize: 12, fontWeight: "bold"}}
            />,
            <GridActionsCellItem
                icon = {<Block fontSize = "small"/>}
                label="Block"
                showInMenu
                sx = {{fontSize: 12, fontWeight: "bold"}}
            />    
        ]
      },
    ]
    const rows = [
      {id: 1, sn: 'T',  lname: 'Tony', fname: 'Emeka', email: 'emeka@pilot1.com', mobile: '0709857264', status: 'active', date: new Date(1979, 0, 1) },
      {id: 2, sn: 'L', lname: 'Luke', fname: 'Ayaefu', email: 'aya@pilot1.com', mobile: '0709857264', status: 'active', date: new Date(1979, 0, 1) },
      {id: 3, sn: 'J', lname: 'Jon', fname: 'snow', email: 'admin@pilot1.com', mobile: '0709857264', status: 'active', date: new Date(1979, 0, 1) },
    ];

    let navigate = useNavigate();

    const nav = ()=>{
      navigate('/admins-management/add')
    } 

    return(
      <Box>
        <ToolBar btnLabel = 'add admin users' onClick = {nav} />
        <DataGridDemo cols = {cols} rows = {rows} />
      </Box>
    )
}