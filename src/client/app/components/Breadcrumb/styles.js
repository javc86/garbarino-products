import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    link: {
        cursor: 'pointer'
    },
    paper: {
        padding: theme.spacing(1, 2),
    },
}));

export default styles;
