import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo/Logo';
import { navItems } from '../../utils/navItems';


const NavbarTop = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState<boolean>(false);


    const listDesktop = (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
            {navItems.map((text, index) => (
                <Button key={index} className='fontSyle' color="inherit">{text}</Button>
            ))}
        </div>
    );

    const listMobile = (
        <List style={{ paddingTop: "70px" }}>
            {navItems.map((text) => (
                < ListItem key={text} disablePadding >
                    <ListItemButton>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar position="static" sx={{ width: '100vw' }}>
            <Toolbar>

                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, paddingLeft: isMobile ? '0' : '10%' }}>
                            <Logo />
                        </Box>
                        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                            {listMobile}
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', width: '100%', position: "absolute" }}>
                            {listDesktop}
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, paddingLeft: isMobile ? '0' : '10%' }}>
                            <Logo />
                        </Box>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavbarTop;
