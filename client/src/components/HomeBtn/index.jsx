import React from "react";
import { useNavigate } from "react-router-dom";
import { Fab } from "@material-ui/core";
import useStyles from './styles';
import HomeIcon from '@mui/icons-material/Home';

const HomeBtn = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Fab classes={{ root: classes.home }} onClick={() => navigate('/')}>
            <HomeIcon />
        </Fab>
    )
};

export default HomeBtn;