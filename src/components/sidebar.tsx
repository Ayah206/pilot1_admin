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
      main: '#ffffff'
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
      display: 'flex', 
      '& .MuiAppBar-root':{
        boxShadow: 0
      }
    }}>      
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
            color:'black',
            justifyContent: 'space-between',
            position : 'sticky',
            bgcolor : 'secondary.main',
            top: 0
        }}>
          <Typography variant="h5" sx = {{color: '#CB8215'}} >
            Pilot1
          </Typography> 
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      <Divider />
      <Toolbar/>
      <List sx = {{position: 'static'}}>
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
