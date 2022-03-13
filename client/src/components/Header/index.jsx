import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Grid, Tabs, Tab, List, IconButton, Box, Drawer, ListItemText, Typography, Avatar, Button, Tooltip } from '@material-ui/core';
import MuiListItem from "@material-ui/core/ListItem";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import { withStyles } from "@material-ui/core/styles";
import styles from './icon.module.less';
import { LOGOUT } from "../../redux/types";
import decode from 'jwt-decode';

function LinkTab(props) {
    const navigate = useNavigate();
    return (
        <Tab
            component="a"
            onClick={() => { navigate(props.href) }}
            {...props}
        />
    );
}

const ListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "#e0e0e0",
            color: "white",
        },
    },
})(MuiListItem);

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [value, setValue] = useState(0);
    const [state, setState] = useState({ top: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime())
                logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleIconClick = () => {
        navigate('/');
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        navigate('/')
        setUser(null)
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        switch (index) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/myblog');
                break;
            case 2:
                navigate('/contact');
                break;
        }
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.listWrapper}>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText
                        disableTypography
                        primary={<Typography type="h6" style={{ fontWeight: 700 }}>Home</Typography>}
                    />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText
                        disableTypography
                        primary={<Typography type="h6" style={{ fontWeight: 700 }}>My Blog</Typography>}
                    />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText
                        disableTypography
                        primary={<Typography type="h6" style={{ fontWeight: 700 }}>Contact</Typography>}
                    />
                </ListItem>
            </List>
        </Box>
    );

    return (

        isMobile ? (
            <AppBar position="absolute" className={classes.tabBar} >
                <Toolbar>
                    <IconButton
                        edge="start"
                        style={{ color: '#424242' }}
                        className={classes.menuIcon}
                        onClick={toggleDrawer('top', true)}
                    >
                        <MenuIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                    <Drawer
                        anchor={'top'}
                        open={state['top']}
                        onClose={toggleDrawer('top', false)}
                        PaperProps={{ style: { height: 'auto' } }}
                    >
                        {list('top')}
                    </Drawer>
                    <Box sx={{ flexGrow: 1 }}>
                        <svg className={styles.icon_logo_isMobile} aria-hidden="true" onClick={handleIconClick}>
                            <use xlinkHref="#icon-blogger-logo"></use>
                        </svg>
                    </Box>

                    {
                        user ? (
                            <div className={classes.profile_mobile}>
                                <Tooltip title={user.result.name} >
                                    <Avatar alt={user.result.name} src={user.result.imageUrl}>
                                        {user.result.name.charAt(0)}
                                    </Avatar>
                                </Tooltip>
                                <IconButton variant="contained" style={{ backgroundColor: '#212121', color: '#ffffff', width: '40px', height: '40px' }} onClick={logout}>
                                    <LogoutIcon style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </div>
                        ) : (
                            <IconButton component={Link} to='/auth' variant="contained" style={{ color: '#212121' }}>
                                <LoginIcon style={{ width: '36px', height: '36px' }} />
                            </IconButton>
                        )
                    }
                </Toolbar>
            </AppBar>
        ) : (
            <AppBar position="absolute" className={classes.tabBar}>
                <Toolbar>
                    <Grid container spacing={2} className={classes.icon}>
                        <Grid item xs={4}>
                            <svg className={styles.icon_logo} aria-hidden="true" onClick={handleIconClick}>
                                <use xlinkHref="#icon-blogger-logo"></use>
                            </svg>
                        </Grid>
                        <Grid item xs={5}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="nav tabs example"
                                classes={{ indicator: classes.indicator }}
                                TabIndicatorProps={{ children: <span /> }}
                                centered
                            >
                                <LinkTab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Home" href="/" />
                                <LinkTab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Myblog" href="/myblog" />
                                <LinkTab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Contact" href="/contact" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={3}>
                            {
                                user ? (
                                    <div className={classes.profile}>
                                        <Tooltip title={user.result.name}>
                                            <Avatar alt={user.result.name} src={user.result.imageUrl}>
                                                {user.result.name.charAt(0)}
                                            </Avatar>
                                        </Tooltip>
                                        <Button variant="contained" style={{ backgroundColor: '#424242', color: '#fafafa' }} onClick={logout}>
                                            Logout
                                        </Button>
                                    </div>
                                ) : (
                                    <Button component={Link} to='/auth' variant="contained" style={{ backgroundColor: '#424242', color: '#fafafa' }}>
                                        Sign In
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )

    );
};

export default Header;

