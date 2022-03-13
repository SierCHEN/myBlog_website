import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { TextField, Button, Typography, CardMedia } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createBlogs, updateBlog } from "../../redux/web/action";
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
import useStyles from './styles';


const EditForm = () => {
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        tags: '',
        selectedFile: '',
        // text: ''
    });

    const currentId = useSelector(state => state.web.currentId);
    const blog = useSelector(state => currentId ? state.web.blogs.find(b => b._id === currentId) : null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (blog)
            setPostData(blog);
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            console.log("currentId: ", currentId)
            dispatch(updateBlog(currentId, { ...postData, name: user?.result?.name }));
            navigate('/');
        } else {
            dispatch(createBlogs({ ...postData, name: user?.result?.name }));
            navigate('/');
            navigate(0);
        }
    }

    return (
        user ? (
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    className={classes.textField}
                />
                <TextField
                    name="description"
                    variant="outlined"
                    label="Description"
                    fullWidth
                    multiline={true}
                    rows="5"
                    value={postData.description}
                    onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                    className={classes.textField}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (comma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    className={classes.textField}
                />

                <Typography variant="body2" display="block" gutterBottom className={classes.fileText}>Choose the cover photo of your article</Typography>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    {
                        postData.selectedFile ? (
                            <CardMedia
                                component="img"
                                src={postData.selectedFile}
                                className={classes.fileSelect}
                            />
                        ) : (
                            <></>
                        )
                    }
                </div>

                {/* <CKEditor
                    editor={Editor}
                    config={editorConfiguration}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setPostData({ ...postData, text: data });
                    }}
                /> */}
                <Button variant="contained" type="submit" fullWidth className={classes.btnSubmit}>Submit</Button>
            </form >
        ) : (
            <Alert severity="error">Please Sign In to create your own blogs and like or comment other's blogs.</Alert>
        )

    )
};

export default EditForm;


// const editorConfiguration = {
//     toolbar: [
//         'autoformat',
//         'blockQuote',
//         'bold',
//         'italic',
//         'indent',
//         'indentBlock',
//         'fontFamily',
//         'fontSize',
//         'heading',
//         'image',
//         'imageCaption',
//         'imageResize',
//         'imageStyle',
//         'imageToolbar',
//         'imageUpload',
//         'cKFinder',
//         'cKFinderUploadAdapter',
//         'cloudServices',
//         'essentials',
//         'link',
//         'list',
//         'paragraph',
//         'pasteFromOffice',
//         'table',
//         'tableToolbar',
//         'textTransformation',
//         'title',
//     ],
//     language: 'en',
//     image: {
//         toolbar: [
//             'imageTextAlternative',
//             'imageStyle:inline',
//             'imageStyle:block',
//             'imageStyle:side'
//         ]
//     },
//     table: {
//         contentToolbar: [
//             'tableColumn',
//             'tableRow',
//             'mergeTableCells'
//         ]
//     },
//     ckfinder: {
//         uploadUrl: '/uploads'
//     }
// };