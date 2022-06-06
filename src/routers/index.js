import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
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
            meta: { active: 0, title: '发现', show: true },
            children: [
                {
                    name: 'dailyrecommendation',
                    path: 'dailyrecommendation',
                    component: () => import('@/pages/Found/DailyRecommendation'),
                    meta: { title: '每日推荐', show: false },
                },
                {
                    name: 'privatefm',
                    path: 'privatefm',
                    component: () => import('@/pages/Found/PrivateFM'),
                    meta: { title: '私人FM', show: false },
                },
                {
                    name: 'musiclist',
                    path: 'musiclist',
                    component: () => import('@/pages/Found/MusicList'),
                    meta: { title: '歌单', show: false },
                },
                {
                    name: 'rankinglist',
                    path: 'rankinglist',
                    component: () => import('@/pages/Found/RankingList'),
                    meta: { title: '排行榜', show: false },
                },
                {
                    name: 'digitalalbum',
                    path: 'digitalalbum',
                    component: () => import('@/pages/Found/DigitalAlbum'),
                    meta: { title: '数字专辑', show: false },
                    children: [
                        {
                            name: 'hotlist',
                            path: 'hotlist',
                            component: () => import('@/pages/Found/DigitalAlbum/HotList'),
                            meta: { title: '畅销榜', show: false },
                        },
                        {
                            name: 'musiclanguage',
                            path: 'musiclanguage',
                            component: () => import('@/pages/Found/DigitalAlbum/MusicLanguage'),
                            meta: { title: '语种风格馆', show: false },
                        },
                        {
                            name: 'albumbuy',
                            path: 'albumbuy',
                            component: () => import('@/pages/Found/DigitalAlbum/AlbumBuy'),
                            meta: { title: '已购', show: false },
                        },
                    ],
                },
                {
                    name: 'soundbook',
                    path: 'soundbook',
                    component: () => import('@/pages/Found/SoundBook'),
                    meta: { title: '有声书', show: false },
                },
                {
                    name: 'focusnewmusic',
                    path: 'focusnewmusic',
                    component: () => import('@/pages/Found/FocusNewMusic'),
                    meta: { title: '关注新歌', show: false },
                },
                {
                    name: 'musichouse',
                    path: 'musichouse',
                    component: () => import('@/pages/Found/MusicHouse'),
                    meta: { title: '歌房', show: false },
                },
                {
                    name: 'game',
                    path: 'game',
                    component: () => import('@/pages/Found/Game'),
                    meta: { title: '游戏专区', show: false },
                },
            ],
        },
        {
            name: 'podcast',
            path: '/podcast',
            component: () => import('@/pages/Podcast'),
            meta: { active: 1, title: '播客', show: true },
        },
        {
            name: 'myindex',
            path: '/myindex',
            component: () => import('@/pages/MyIndex'),
            meta: { active: 2, title: '我的', show: true },
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
            meta: { active: 3, title: '关注', show: true },
        },
        {
            name: 'cloudsquare',
            path: '/cloudsquare',
            component: () => import('@/pages/CloudSquare'),
            meta: { active: 4, title: '云村', show: true },
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
            meta: { title: '·*·Failed·*·' },
        },
    ],
});

export default router;
