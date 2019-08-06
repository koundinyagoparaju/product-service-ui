import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {createUser} from "../actions/users";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.email = React.createRef();
        // this.password = React.createRef();
        // this.firstName = React.createRef();
        // this.lastName = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createUser({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value
        });
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
             marginTop: theme.spacing(3)
         },
         submit: {
             margin: theme.spacing(3, 0, 2)
         }
     }));

    render = () => (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={this.classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={this.classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                inputRef={el => this.firstName = el}
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                inputRef={el => this.lastName = el}
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                inputRef={el => this.email = el}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                inputRef={el => this.password = el}
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={this.classes.submit}
                        onClick={this.handleSubmit}
                    >
                        Sign Up
                    </Button>
                    {`${this.props.userCreationFailed ? 'User Signup failed. Please try again later': ''}`}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    };
};

const mapStateToProps = (state) => {
    return {
        userCreationFailed: state.userCreationFailed,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
