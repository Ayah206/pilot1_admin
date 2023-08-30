import { Box } from '@mui/material';
import * as React from 'react'
import DataGridDemo from './dataGrid'
import ToolBar from './toolBar'

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

export default function AdminUsers(){
    return(
      <Box>
        <ToolBar btnLabel = 'add admin users'/>
        <DataGridDemo cols = {cols} rows = {rows} />
      </Box>
    )
}