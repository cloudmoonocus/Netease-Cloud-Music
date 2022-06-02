import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            name: 'found',
            path: '/found',
            component: () => import('@/pages/Found'),
            meta: {},
            children: [
                {
                    name: 'dailyrecommendation',
                    path: 'dailyrecommendation',
                    component: () => import('@/pages/Found/DailyRecommendation'),
                    meta: {},
                },
                {
                    name: 'privatefm',
                    path: 'privatefm',
                    component: () => import('@/pages/Found/PrivateFM'),
                    meta: {},
                },
                {
                    name: 'musiclist',
                    path: 'musiclist',
                    component: () => import('@/pages/Found/MusicList'),
                    meta: {},
                },
                {
                    name: 'rankinglist',
                    path: 'rankinglist',
                    component: () => import('@/pages/Found/RankingList'),
                    meta: {},
                },
                {
                    name: 'digitalalbum',
                    path: 'digitalalbum',
                    component: () => import('@/pages/Found/DigitalAlbum'),
                    meta: {},
                },
                {
                    name: 'soundbook',
                    path: 'soundbook',
                    component: () => import('@/pages/Found/SoundBook'),
                    meta: {},
                },
                {
                    name: 'focusnewmusic',
                    path: 'focusnewmusic',
                    component: () => import('@/pages/Found/FocusNewMusic'),
                    meta: {},
                },
                {
                    name: 'musichouse',
                    path: 'musichouse',
                    component: () => import('@/pages/Found/MusicHouse'),
                    meta: {},
                },
                {
                    name: 'game',
                    path: 'game',
                    component: () => import('@/pages/Found/Game'),
                    meta: {},
                },
            ],
        },
        {
            name: 'podcast',
            path: '/podcast',
            component: () => import('@/pages/Podcast'),
            meta: {},
        },
        {
            name: 'myindex',
            path: '/myindex',
            component: () => import('@/pages/MyIndex'),
            meta: {},
            children: [
                {
                    name: 'rencently',
                    path: 'rencently',
                    component: () => import('@/pages/MyIndex/Rencently'),
                    meta: {},
                },
                {
                    name: 'local-download',
                    path: 'local-download',
                    component: () => import('@/pages/MyIndex/Local-Download'),
                    meta: {},
                },
                {
                    name: 'cloudpan',
                    path: 'cloudpan',
                    component: () => import('@/pages/MyIndex/CloudPan'),
                    meta: {},
                },
                {
                    name: 'buy',
                    path: 'buy',
                    component: () => import('@/pages/MyIndex/Buy'),
                    meta: {},
                },
                {
                    name: 'friends',
                    path: 'friends',
                    component: () => import('@/pages/MyIndex/Friends'),
                    meta: {},
                },
                {
                    name: 'collection-praise',
                    path: 'collection-praise',
                    component: () => import('@/pages/MyIndex/Collection-Praise'),
                    meta: {},
                },
                {
                    name: 'mypodcast',
                    path: 'mypodcast',
                    component: () => import('@/pages/MyIndex/MyPodcast'),
                    meta: {},
                },
                {
                    name: 'musicbottle',
                    path: 'musicbottle',
                    component: () => import('@/pages/MyIndex/MusicBottle'),
                    meta: {},
                },
            ],
        },
        {
            name: 'attention',
            path: '/attention',
            component: () => import('@/pages/Attention'),
            meta: {},
        },
        {
            name: 'cloudsquare',
            path: '/cloudsquare',
            component: () => import('@/pages/CloudSquare'),
            meta: {},
        },
        {
            name: 'search',
            path: '/search',
            component: () => import('@/pages/Search'),
            meta: {},
        },
        {
            path: '/',
            redirect: '/found',
        },
        {
            path: '/:catchAll(.*)',
            component: () => import('@/pages/Error'),
        },
    ],
});

export default router;
