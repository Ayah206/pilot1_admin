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
import { DrawerList } from '../utilities/drawerList';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './accountMenu';




const drawerWidth = 250;
const drawerList = DrawerList()


export default function SideBar(props: any) {
  React.useEffect(()=>{
    const path = window.location.pathname.split('/')[1]
    const activeMenu = document.getElementById(path)
    activeMenu && activeMenu.classList.add('activeMenuItem')
  })
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box  sx={{ 
      display: 'flex', 
      '& .MuiAppBar-root':{
        boxShadow: 0
      }
    }}>      
      <Drawer className = 'drawer'
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:'secondary.main',
            borderRight: 0
          },
          '& .MuiTypography-root': {
            fontSize : '12px'
          }

        }}
        // variant="permanent"
        anchor="left"
      >
        <AccountMenu/>
      <List>
        {drawerList.map((obj, index) => (
          <ListItem key={index} disablePadding sx = {{}} >
            <ListItemButton id = {obj.href} component = "a" href = {obj.href}
             sx ={{
              textTransform: 'capitalize'
            }}>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Drawer>
      <Drawer className = 'drawer'
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:'secondary.main',
            borderRight: 0
          },
          '& .MuiTypography-root': {
            fontSize : '12px'
          }

        }}
        variant="permanent"
        anchor="left"
      >
        <AccountMenu/>
      <List>
        {drawerList.map((obj, index) => (
          <ListItem key={index} disablePadding sx = {{}} >
            <ListItemButton id = {obj.href} component = "a" href = {obj.href}
             sx ={{
              textTransform: 'capitalize'
            }}>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Drawer>
      <Box
      component="main"
      sx={{ flexGrow: 1, p: 5 }}
      >
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        {props.children}
      </Box>
      
    </Box>
  );
}
