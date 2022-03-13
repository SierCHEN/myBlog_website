import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    tabBar: {
        backgroundColor: '#e0e0e0',
        minHeight: 100,
        justifyContent: 'center',
        boxShadow: 'none',
    },
    menuIcon: {
        marginLeft: '8px',
        marginRight: '5px',
    },
    listWrapper: {
        backgroundColor: '#eeeeee',
        padding: 0
    },
    listItem: {
        fontWeight: 900,
        fontFamily: 'sans-serif'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        "& > span": {
            maxWidth: 50,
            width: "100%",
            backgroundColor: "#212121"
        }
    },
    tabRoot: {
        minWidth: 100,
        color: '#9e9e9e',
        fontSize: '12px',
        fontWeight: '600',
        "&:hover": {
            color: "#212121",
            opacity: 1
        }
    },
    selectedTab: {
        color: "#212121"
    },
    signinBtn: {
        backgroundColor: '#212121',
        color: '#212121',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    profile_mobile:{
        display: 'flex',
        justifyContent: 'space-evenly',
        minWidth: '120px',
        alignItems: 'center'
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
}))