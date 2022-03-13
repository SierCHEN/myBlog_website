import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, setCurrentId } from '../../redux/web/action';

import MainLayout from "../../layout/mainLayout";
import Posts from "../../components/Posts";

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.web.blogs);
    const currentId = useSelector(state => state.web.currentId);

    console.log("currentId: ", currentId)

    useEffect(() => {
        dispatch(getBlogs());
        dispatch(setCurrentId(null));
    }, [getBlogs])

    return (
        <MainLayout>
            <Posts posts={posts} />
        </MainLayout>
    )
};

export default Home;