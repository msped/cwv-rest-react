import React, { useState } from 'react'
import { 
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Container,
  Button,
  DialogTitle,
  Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const pages = [
    {'name': 'Home', 'url': '/'},
    {'name': 'Buy', 'url': '/buy'},
    {'name': 'Featured Gallery', 'url': '/gallery'},
    {'name': 'Contact', 'url': '/contact'},
]

export default function Header() {
    const [nav, setNav] = useState(false)

    const toggleDrawer = (event, open) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setNav(open);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                Cheshire West Vehicles
            </Typography>

            
            {/* Phone nav view */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="Navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={(e) => {toggleDrawer(e, true)}}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  id="menu-appbar"
                  anchor='top'
                  open={nav}
                  color="primary"
                  onClose={(e) => toggleDrawer(e, false)}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                    <DialogTitle textAlign="right">
                        <IconButton
                        onClick={(e) => toggleDrawer(e, false)}
                        >
                        <CancelIcon />
                        </IconButton>
                    </DialogTitle>
                    {pages.map((page) => (
                        <Link
                            key={page.name}
                            href={page.url}
                            onClick={(e) => toggleDrawer(e, false)}
                            sx={{ my: 2, color: 'black', display: 'block', textAlign: 'center' }}
                            underline="none"
                        >
                            {page.name}
                        </Link>
                    ))}
                </Drawer>
              </Box> 

            
            {/* Desktop View */}
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                Cheshire West Vehicles
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        href={page.url}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.name}
                    </Button>
                ))}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}