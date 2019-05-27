import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import styles from './styles';
import * as actions from '../../../actions/productsActions';
import Breadcrumb from '../../../components/Breadcrumb';
import Swiper from '../../../components/Swiper';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        }
    }
    componentDidMount() {
        const {getProductDetails, history} = this.props;
        const array = history.location.pathname.split('/');
        const id = array[array.length - 1];
        getProductDetails(id);
    }

    componentDidUpdate(prevProps, prevState) {
        const {details} = this.props;
        const {info} = this.state;
        if (info === null) this.setState({info: details});
    }

    render() {
        const {history, classes} = this.props;
        const {info} = this.state;

        return(
            <div>
                <Breadcrumb
                    category={info !== null ? info.category : ''}
                    history={history}
                />
                {info !== null && (
                    <div className={classes.root}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperLeft}>
                                    <Swiper resources={info.resources.images}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper className={classes.paperRight}>
                                    <div className={classes.containerTitle}>
                                        <Typography variant="h5" gutterBottom>
                                            {info.description}
                                        </Typography>
                                    </div>
                                    <Divider />
                                    <div className={classes.containerPrices}>
                                        <Typography variant="h4" gutterBottom className={classes.price}>
                                            $ {info.price}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom className={classes.listPrice}>
                                            $ {info.list_price}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom className={classes.discount}>
                                            {info.discount} % OFF
                                        </Typography>
                                    </div>
                                    <Divider />
                                    <div className={classes.installment}>
                                        <Typography variant="h5" gutterBottom>
                                            {info.preferred_installment.description}
                                        </Typography>
                                    </div>
                                    <Divider />
                                    <Typography variant="h6" gutterBottom className={classes.summary}>
                                        DESCRIPCIÓN
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className={classes.summary}>
                                        {info.summary}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        );
    }
}

Details.propTypes = {
    getProductDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({details: state.productsState.details});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Details));
