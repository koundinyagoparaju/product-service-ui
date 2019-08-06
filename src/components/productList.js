import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbar: {
        flexWrap: "wrap"
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5)
    }
}));

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value
        })
    );
}

export default function InteractiveList() {
    const classes = useStyles();
    const [dense] = React.useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Company name
                    </Typography>

                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Products
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={"Secondary text"}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
