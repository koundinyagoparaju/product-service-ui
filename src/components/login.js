import React from "react";
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {loginUser} from "../actions/users";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.email.value, this.password.value);
    };

    classes = makeStyles(theme => ({
        "@global": {
            body: {
                backgroundColor: theme.palette.common.white
            }
        },
        paper: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    }));

    render = () => (<Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={this.classes.paper}>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={this.classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    inputRef={el => this.email = el}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    inputRef={el => this.password = el}
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={this.classes.submit}
                    onClick={this.handleSubmit}
                >
                    Sign In
                </Button>
                {`${this.props.userLoginFailed ? 'LoginFailed. Please try again' : ''}`}
                <Grid container>
                    <Grid item>
                        <Link href="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>);
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    };
};

const mapStateToProps = (state) => {
    return {
        userLoginFailed: state.userLoginFailed,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

