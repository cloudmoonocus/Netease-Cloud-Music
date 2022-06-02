import found from './modules/found';
import podcast from './modules/podcast';
import myindex from './modules/myindex';
import attention from './modules/attention';
import cloudsquare from './modules/cloudsquare';
import { createStore } from 'vuex';

export default createStore({
    modules: {
        found,
        podcast,
        myindex,
        attention,
        cloudsquare,
    },
});
