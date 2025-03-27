import { Box, Toolbar, Typography } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid';
import * as React from 'react'
import DataGridDemo from '../components/dataGrid'
import ToolBar from '../components/toolBar';
import { Edit, Delete } from '@mui/icons-material';

export default function ManageCities(){
    const cols = [
        {
            field: 'name',
            headerName: 'city name',
            width: 100,
        },
        {
            field: 'price',
            headerName: 'price per KM',
            width: 150,
        },
        {
            field: 'subfee',
            headerName: 'subscription fee',
            width: 150,
        },
        {
            field: 'commission',
            headerName: 'commission',
            width: 150,
        },
        {
            field: 'createdBy',
            headerName: 'Created by',
            width: 150,
        },
        {
            field: 'createdAt',
            headerName: 'Created at',
            width: 150,
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
                    icon = {<Edit fontSize = "small"/>}
                    label="Edit"
                    showInMenu
                    sx = {{fontSize: 12, fontWeight: "bold"}}
                    
                />,
                <GridActionsCellItem
                    icon = {<Delete fontSize = "small"/>}
                    label="Delete"
                    showInMenu
                    sx = {{fontSize: 12, fontWeight: "bold"}}
                />
            ]
          },

    ]
    const rows = [
        {id: 1, name: 'Portharcourt', price: '1000', subfee: '1000', commission:'500', status: 'active', createdBy: 'Ayaefu', createdAt: '01-06-2023' },
        {id: 2, name: 'Bayelsa', price: '1000', subfee: '1000', commission:'500', status: 'active', createdBy: 'Ayaefu', createdAt: '01-06-2023' },
        {id: 3, name: 'Calabar', price: '1000', subfee: '1000', commission:'500', status: 'active', createdBy: 'Ayaefu', createdAt: '01-06-2023' },
        ];
    return(
        <Box>
            <Toolbar disableGutters>
            <Typography variant='h5'>
                Cities management   
            </Typography>
            </Toolbar>
            <ToolBar btnLabel = 'add city' href = "/Manage-cities/add" />
            <DataGridDemo cols = {cols} rows = {rows} />
        </Box>
    )
}