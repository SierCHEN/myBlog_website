import React from "react";
import { Container } from "@material-ui/core";
import BackBtn from "../../components/BackBtn";
import styles from './articleLayout.module.less';

const ArticleLayout = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            <BackBtn />
            <Container maxWidth="sm">
                {children}
            </Container>
        </div>
    )
};

export default ArticleLayout;