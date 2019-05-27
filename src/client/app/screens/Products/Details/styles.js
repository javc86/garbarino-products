const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    paperLeft: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    containerTitle: {
        width: '100%',
        textAlign: 'center'
    },
    containerPrices: {
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 15
    },
    price: {
        color: '#d70000',
        marginLeft: 15,
        marginRight: 15
    },
    listPrice: {
        textDecoration: 'line-through',
        marginLeft: 15,
        marginRight: 15
    },
    discount: {
        color: '#1db04b',
        marginLeft: 15,
        marginRight: 15
    },
    summary: {
        marginTop: 15
    },
    installment: {
        width: '100%',
        textAlign: 'center',
        marginTop: 15
    }
});

export default styles;
