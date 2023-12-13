// Navbar.js
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { useRouter } from 'next/navigation';
import { Paths } from '../../utils/path';

const Logo = () => {


    const router = useRouter();

    return (
        <Box sx={{
            display: 'flex', alignItems: 'center',
        }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {
                router.push(Paths.HOME);
            }}>
                <PlayArrowOutlinedIcon />
                <Typography className='fontSyle' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Start & Go
                </Typography>
            </IconButton>
        </Box >
    );
};

export default Logo;
