import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DrawerList } from '../utilities/drawerList';

const drawerWidth = 300;
const drawerList = DrawerList()

const theme = createTheme({
  palette: {
    secondary: {
      main: '#E1DDDB'
    },
    primary:{
      main: '#EF6C33'
    }
  },
});
export default function SideBar(props: any) {
  return (
    <ThemeProvider theme={theme}>
    <Box  sx={{ 
      bgcolor: 'secondary.main',
      display: 'flex', 
      '& .MuiAppBar-root':{
        bgcolor: 'secondary.main',
        boxShadow: 0
      }
    }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        className = 'appbar'
        sx={{ 
        width: `calc(100% - ${drawerWidth}px)`, 
        ml: `${drawerWidth}px`,
      }}
      >
        <Toolbar sx = {{
            color:'black',
            justifyContent: 'end'
          }}>
          <Typography mr =  {2} >
            Admin
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:'secondary.main'
          },
        }}
        variant="permanent"
        anchor="left"
        className = 'drawer'
      >
        <Toolbar sx = {{
          ml: 4,
          color: '#EF6C33'
        }}>
          <Typography variant="h5" >
            Pilot1
          </Typography>  
        </Toolbar>
        <Divider />
        <List>
          {drawerList.map((obj, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx = {{
                  '& .MuiSvgIcon-root' :{
                    // fill : '#EF6C33'
                  }
                }}>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText primary={obj.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {props.children}
    </Box>
    </ThemeProvider>
  );
}
