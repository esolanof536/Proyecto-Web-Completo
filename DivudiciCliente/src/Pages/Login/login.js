import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Log.css";
//importar funcioon de user function signInApi del API
import { signInApi } from '../../Api/Seguridad/usuarios'
//se importan las constantes de utils
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../Utils/constants'
import { notification } from 'antd';
import jwtDecode from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const login = async e => {
        e.preventDefault();

        const result = await signInApi(inputs);


        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
            notification["success"]({
                message: "Login Correcto"
            });
            const metaToken = jwtDecode(accessToken);
            const { admin } = metaToken;
            console.log(admin)
            var Rol = JSON.stringify(admin);
            if (admin === "Restaurante") {
                window.location.href='/abrirCaja'
            }
            if (admin === "Sistema") {
                window.location.href='/AdminSistema'
            }
            if (admin === "Seguridad") {
                window.location.href='/adminSeguridad'
            }
        }
        console.log(result);
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={login} onChange={changeForm}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        value={inputs.username}
                        label="Email Address"
                        name="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={inputs.password}
                        label="Password"
                        type="password"
                        id="password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>

                </form>
            </div>

        </Container>
    );
}