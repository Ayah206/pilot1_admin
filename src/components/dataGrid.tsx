import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

// width of all columns should be 950 + 100
interface Props{
    rows: Array<object>,
    cols: any
}
export default function DataGridDemo(props: Props){
  return (
    <Box sx={{ 
        height: 'fit-content',
        width: '100%',
        
    }}>
      <DataGrid
        rows={props.rows}
        columns={props.cols}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[1,2,3,4,5,6,7,8,9]}
        density = {'comfortable'}
        disableRowSelectionOnClick
        autoHeight
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        sx = {{
            minWidth: '100%',
            maxWidth: '100px',
            overflowX: 'scroll',
            '& .MuiDataGrid-toolbarContainer':{
                pb: 2
            },
            '& .MuiDataGrid-columnHeaders': {
                padding: '20px',
                backgroundColor: 'white',
                mb: 1,
                textTransform: 'capitalize'
            },
            '& .MuiDataGrid-row':{
                px: '20px',
                borderBottom: '1px solid',
                borderColor: 'rgba(224, 224, 224, 1)',
            },
            '& .MuiDataGrid-cell':{
                borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller':{
                backgroundColor: 'white',
                borderRadius: '0px 0px 4px 4px' 
            },
            '& .MuiDataGrid-root':{
                border: 0,
            },
            '& .MuiDataGrid-footerContainer':{
                borderTop: 0
            },
            "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus": {
                outline: "none",
            },
            '& .MuiDataGrid-row:hover':{
                backgroundColor:'white'
            },
           
            
        }}
      />
    </Box>
  );
}