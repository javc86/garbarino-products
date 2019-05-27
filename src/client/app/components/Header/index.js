import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

import styles from './styles';
import logo from '../../../../../public/assets/logo-garbarino.svg';

const theme = createMuiTheme({
    palette: {
        primary: { main: red[700] }
    },
});

const Header = () => {
    const classes = styles();

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" className={classes.container} color="primary">
                <Toolbar>
                    <div className={classes.image} onClick={e => {}}>
                        <img src={`/${logo}`}/>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
