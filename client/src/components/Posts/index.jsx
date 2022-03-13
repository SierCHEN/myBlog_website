import React from "react";
import { Skeleton } from "@mui/material";
import { Masonry } from '@mui/lab';
import useStyles from './styles';

import Post from "./Post";

const Posts = ({ posts }) => {
    const styles = useStyles();

    return (
        !posts ? <Skeleton variant="rectangular" width={210} height={118} /> : (
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 2, sm: 3 }}>
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </Masonry>
        )
    )
};

export default Posts;