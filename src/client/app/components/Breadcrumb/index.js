import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const Breadcrumb = ({category, history}) => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
                <Breadcrumbs aria-label="Breadcrumb">
                    <Link className={classes.link} color="inherit" to="/"  onClick={() => history.push('/')}>
                        Productos
                    </Link>
                    {category !== '' && (
                        <Typography color="textPrimary">
                            {category}
                        </Typography>
                    )}
                </Breadcrumbs>
            </Paper>
        </div>
    );
}

Breadcrumb.propTypes = {
    category: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};

export default Breadcrumb;
