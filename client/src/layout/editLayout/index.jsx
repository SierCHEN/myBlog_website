import React from "react";
import { Container, Typography } from "@material-ui/core";
import BackBtn from "../../components/BackBtn";
import styles from './editLayout.module.less';
import useStyles from './styles';

const EditLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={styles.wrapper}>
            <BackBtn />
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" className={classes.typography}>START YOUR CREATION</Typography>
                {children}
            </Container>
        </div>
    )
};

export default EditLayout;