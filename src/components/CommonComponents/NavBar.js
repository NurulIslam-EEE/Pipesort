import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{background:'white'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <img height='50px' width='50px' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDEwNSAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB4PSIyLjUiIHk9IjIuNTAwMDMiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMzgiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMzRDdEQzAiIHN0cm9rZS13aWR0aD0iNSIvPgo8cmVjdCB4PSI5My42NDgyIiB5PSI5LjUzMzY3IiB3aWR0aD0iMTAiIGhlaWdodD0iODcuOTM2OCIgdHJhbnNmb3JtPSJyb3RhdGUoNDMuMTI2NSA5My42NDgyIDkuNTMzNjcpIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjM0Q3REMwIiBzdHJva2Utd2lkdGg9IjUiLz4KPHJlY3QgeD0iMzUuNSIgeT0iMzMuNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMzUuNSAzMy41KSIgZmlsbD0iIzNEN0RDMCIgc3Ryb2tlPSIjM0Q3REMwIiBzdHJva2Utd2lkdGg9IjUiLz4KPHJlY3QgeD0iMjIuNSIgeT0iODAuNSIgd2lkdGg9IjgiIGhlaWdodD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKC05MCAyMi41IDgwLjUpIiBmaWxsPSIjM0Q3REMwIiBzdHJva2U9IiMzRDdEQzAiIHN0cm9rZS13aWR0aD0iNyIvPgo8cmVjdCB4PSIxMy41MTU0IiB5PSIxMi41MTUyIiB3aWR0aD0iMTAiIGhlaWdodD0iODkuNDY0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTg5LjY0NTcgMTMuNTE1NCAxMi41MTUyKSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzNEN0RDMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+CjxyZWN0IHg9IjIyLjUiIHk9IjI0LjUiIHdpZHRoPSI3IiBoZWlnaHQ9IjU2IiBmaWxsPSIjM0Q3REMwIiBzdHJva2U9IiMzRDdEQzAiIHN0cm9rZS13aWR0aD0iNyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjEwNSIgaGVpZ2h0PSIxNDMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==' alt='logo'/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {/* menu */}
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
             
              textDecoration: 'none',
            }}
          >
            {/* responsive logo */}
                   <img height='50px' width='50px' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDEwNSAxNDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB4PSIyLjUiIHk9IjIuNTAwMDMiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMzgiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMzRDdEQzAiIHN0cm9rZS13aWR0aD0iNSIvPgo8cmVjdCB4PSI5My42NDgyIiB5PSI5LjUzMzY3IiB3aWR0aD0iMTAiIGhlaWdodD0iODcuOTM2OCIgdHJhbnNmb3JtPSJyb3RhdGUoNDMuMTI2NSA5My42NDgyIDkuNTMzNjcpIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjM0Q3REMwIiBzdHJva2Utd2lkdGg9IjUiLz4KPHJlY3QgeD0iMzUuNSIgeT0iMzMuNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMzUuNSAzMy41KSIgZmlsbD0iIzNEN0RDMCIgc3Ryb2tlPSIjM0Q3REMwIiBzdHJva2Utd2lkdGg9IjUiLz4KPHJlY3QgeD0iMjIuNSIgeT0iODAuNSIgd2lkdGg9IjgiIGhlaWdodD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKC05MCAyMi41IDgwLjUpIiBmaWxsPSIjM0Q3REMwIiBzdHJva2U9IiMzRDdEQzAiIHN0cm9rZS13aWR0aD0iNyIvPgo8cmVjdCB4PSIxMy41MTU0IiB5PSIxMi41MTUyIiB3aWR0aD0iMTAiIGhlaWdodD0iODkuNDY0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTg5LjY0NTcgMTMuNTE1NCAxMi41MTUyKSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzNEN0RDMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+CjxyZWN0IHg9IjIyLjUiIHk9IjI0LjUiIHdpZHRoPSI3IiBoZWlnaHQ9IjU2IiBmaWxsPSIjM0Q3REMwIiBzdHJva2U9IiMzRDdEQzAiIHN0cm9rZS13aWR0aD0iNyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjEwNSIgaGVpZ2h0PSIxNDMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==' alt='logo'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'center' }}>
           
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, fontWeight:'700', display: 'block' }}
               color='primary'
              >
                <Link className='linkStyle' to='/'>
                Home
                </Link>
                
              </Button>
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <Link className='linkStyle' to='/signUp'>
                <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: 'block',fontWeight:'700' }}
                color="primary"
              >
               Sign Up
              </Button>
              </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
