import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import styles from './styles';
import * as actions from '../../actions/productsActions';
import List from '../../components/List';

class Products extends Component {
    componentDidMount() {
        const {getProductsList} = this.props;
        getProductsList();
    }

    render() {
        const {list} = this.props
        return(<List list={list}/>);
    }
}

Products.propTypes = {
    getProductsList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({list: state.productsState.list});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
