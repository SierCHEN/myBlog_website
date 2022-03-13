import React from "react";
import { useNavigate } from "react-router-dom";
import { Fab } from "@material-ui/core";
import useStyles from './styles';
import EditIcon from '@mui/icons-material/Edit';

const FabBtn = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Fab classes={{ root: classes.fab }} onClick={() => navigate('/write')}>
            <EditIcon />
        </Fab>
    )
};

export default FabBtn;