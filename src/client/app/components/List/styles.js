import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    containerList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    card: {
        width: 345,
        float: 'left',
        margin: 10
    },
    media: {
        height: 300
    },
    cardContainer: {
        height: 170
    },
    root: {
        flexGrow: 1
    },
    paper: {
        textAlign: 'center'
    }
});

export default styles;
