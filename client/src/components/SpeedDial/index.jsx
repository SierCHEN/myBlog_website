import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';

import { deleteBlog, likeBlog } from '../../redux/web/action';
import useStyles from './styles';


const SpeedDialComponent = ({ posts }) => {
    const { id } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            {
                posts.filter(item => item._id === id).map((item) => {

                    const actions = [
                        {
                            icon: <ThumbUpIcon />, name: 'Like', action: () => {
                                dispatch(likeBlog(id));
                                navigate(0);
                            }
                        },
                        {
                            icon: <DeleteIcon />, name: 'Delete', action: () => {
                                dispatch(deleteBlog(id));
                                navigate('/');
                            }
                        },
                        {
                            icon: <EditIcon />, name: 'Edit', action: () => {
                                navigate('/write');
                            }
                        },
                        { icon: <CommentIcon />, name: 'Comment' },
                    ];

                    return (
                        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} className={classes.box} key={item._id}>
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                FabProps={{ color: 'success' }}
                                icon={<SpeedDialIcon />}
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={action.action}
                                    />
                                ))}
                            </SpeedDial>
                        </Box>
                    )

                })
            }
        </>
    );
}

export default SpeedDialComponent;