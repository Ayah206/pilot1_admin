import { Box } from '@mui/material';
import * as React from 'react'
import DataGridDemo from './dataGrid'
import ToolBar from './toolBar'

const cols = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: true,
  },
  {
      field: 'display',
      headerName: 'Display name',
      width: 250,
      editable: true,
  },
  {
      field: 'description',
      headerName: 'Description',
      width: 350,
      editable: true,
  }
]
const rows = [
  { id: 1, name: 'Jon Snow', display: 'Jon Snow', description: 'administration'},
  ];

export default function Roles(){
    return(
      <Box>
        <ToolBar btnLabel = 'add roles'/>
        <DataGridDemo cols = {cols} rows = {rows} />
      </Box>
    )
}