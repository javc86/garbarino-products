import * as dotenv from 'dotenv';

dotenv.config();

export default {
    url: (
        process.env.APP_ENV.toUpperCase() === 'DEV' ?
            'http://localhost:' + (process.env.SERVER_PORT || 3000) + '/api' :
                'http://localhost:' + (process.env.SERVER_PORT || 3000) + '/api'
    )
};
