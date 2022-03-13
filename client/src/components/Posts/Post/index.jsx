import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from './styles';
import { setCurrentId } from '../../../redux/web/action';

import img from '../../../assets/cardImg_1.jpg';

const Post = ({ post }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClick = () => {
        dispatch(setCurrentId(post._id));
        navigate(`/article/${post._id}`);
    }

    return (
        <Card variant="outlined" >
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="200"
                    src={post.selectedFile ? post.selectedFile : img}
                />
                <CardContent>
                    <Typography className={classes.tag} variant="body2" color="secondary">
                        {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                    <Typography className={classes.title} gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography className={classes.description} variant="body2" color="secondary">
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Post;