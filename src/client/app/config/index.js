export default {
    url: (
        process.env.APP_ENV === 'DEV' ?
            'http://localhost:4800/api' :
                'http://localhost:4800/api'
    )
};
