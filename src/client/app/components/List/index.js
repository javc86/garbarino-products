import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import logo from '../../../../../public/assets/logo-garbarino.svg';

const List = ({list, history}) => {
    const classes = styles();
    const filterList = list.filter(a => a.enabled);

    return (
        <div className={classes.containerList}>
            {filterList.map(item => (
                <Card key={item.id} className={classes.card} onClick={() => history.push('/details/' + item.id)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.image_url}
                            title={item.description}
                        />
                        <CardContent className={classes.cardContainer}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Precio de Lista: {item.list_price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Precio: {item.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Descuento: {item.discount} %
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            {filterList.length === 0 && (
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>
                                    No hay Productos
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )}
        </div>
    );
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
};

export default List;
