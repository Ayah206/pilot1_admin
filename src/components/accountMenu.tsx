import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Toolbar } from '@mui/material';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
       <Toolbar disableGutters sx = {{
            color:'black',
            px: 2,
            justifyContent: 'space-between',
            position : 'sticky',
            bgcolor : 'secondary.main',
            top: 0,
            zIndex: 99999,
             
        }}>
          <a className = "logoDiv" href = "/">
            <img alt = "Pilot one" src = "/logo-png/Orange-1.png" width = "45px" />
          </a>
          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ 
              '&:hover, &:active': {
                backgroundColor: 'transparent'
              } 
            }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx = {{width: 32, height: 32}}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: 200,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} disableGutters sx = {{
          paddingX: 1
        }}>
          <Avatar>A</Avatar>
          <Box sx = {{
            '& .MuiTypography-root':{
              lineHeight: 1
            }
            }}>
            <Typography component = 'p' sx = {{fontSize: 12, fontWeight: 'bold', mb:0.5}}>
              Ayaefu Luke
            </Typography>
            <Typography fontSize = 'smaller' sx = {{color: 'grey'}}>
              Admin
            </Typography>
          </Box>  
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose} component = 'a' href = '/login' disableGutters sx = {{
          color: 'red',
          px: 1,
          '& .MuiListItemIcon-root':{
            minWidth: 0,
          } 
          }} >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <Typography component = 'p' sx = {{ml: 1, fontSize: 14}}>Logout</Typography> 
        </MenuItem>
      </Menu>
    </>
  );
}