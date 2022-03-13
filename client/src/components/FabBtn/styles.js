import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        top: 'auto',
        right: 40,
        bottom: 40,
        left: 'auto',
        width: 80,
        height: 80,
    },
    [theme.breakpoints.down('sm')]: {
        fab: {
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            width: 60,
            height: 60,
        },
      },
}))