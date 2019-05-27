import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import Breadcrumb from '../../components/Breadcrumb';

class NotFound extends Component {
    render() {
        const {classes, history} = this.props;

        return(
            <div>
                <Breadcrumb category="Producto no encontrado" history={history}/>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h3" gutterBottom>
                                    404 NOT FOUND
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
