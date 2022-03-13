import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    form: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    textField: {
        margin: '20px 0',
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        }
    },
    fileText:{
        fontWeight: "600"
    },
    fileSelect:{
        margin: '8px 0', 
    },
    btnSubmit :{
        margin: '40px 0',
        padding: '12px 0',
        color: "#8bc34a",
        backgroundColor: "#e0e0e0",
        '&:hover':{
            color: "#f1f8e9",
            backgroundColor:"#8bc34a"
        }
    },
}))