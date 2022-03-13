import React from "react";
import { useNavigate } from "react-router-dom";
import { Fab, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import useStyles from './styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const BackBtn = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        isMobile ? (
            <AppBar position="absolute" className={classes.tabBar}>
                <Toolbar variant="dense">
                    <IconButton edge="start" sx={{ mr: 2 }} className={classes.backIcon} onClick={() => navigate(-1)}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        ) : (
            <Fab classes={{ root: classes.back }} onClick={() => navigate(-1)}>
                <ArrowBackIosNewIcon />
            </Fab >
        )

    )
};

export default BackBtn;