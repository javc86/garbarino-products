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

import styles from './styles';
import logo from '../../../../../public/assets/logo-garbarino.svg';

const List = ({list}) => {
    const classes = styles();

    return (
        <div className={classes.containerList}>
        {list.map(item => (
            <Card key={item.id} className={classes.card}>
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
        </div>
    );
}

List.propTypes = {
    list: PropTypes.array.isRequired
};

export default List;
