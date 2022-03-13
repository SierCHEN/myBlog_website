import React from "react";
import { Container } from "@material-ui/core";
import useStyles from './styles';
import styles from './loginLayout.module.less';

const LoginLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={styles.wrapper}>
            <Container
                disableGutters={true}
                classes={{ root: classes.container }}
            >
                {children}
            </Container>
        </div>

    )
};

export default LoginLayout;