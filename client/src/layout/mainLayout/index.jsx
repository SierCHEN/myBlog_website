import React from "react";
import { Container } from "@material-ui/core";
import useStyles from './styles';
import styles from './mainLayout.module.less';

import Header from "../../components/Header";
import FabBtn from "../../components/FabBtn";

const MainLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={styles.wrapper}>
            <Header />
            <Container
                disableGutters={true}
                classes={{ root: classes.container }}
            >
                {children}
            </Container>
            <FabBtn />
        </div>

    )
};

export default MainLayout;