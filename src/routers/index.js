import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    // 哈希模式
    history: createWebHashHistory(),
    // 路由切换滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },

    routes: [
        // !active控制下方标签页的颜色切换
        // !title控制最上方的标题名称
        // !show为布尔值，控制底层标签页是否展示
        // !activeHeader为布尔值，控制顶部是否展示
        // 发现
        {
            name: 'found',
            path: '/found',
            component: () => import('@/pages/Found'),
            meta: { active: 0, title: '发现', show: true, activeHeader: true },
            children: [
                {
                    name: 'dailyrecommendation',
                    path: 'dailyrecommendation',
                    component: () => import('@/pages/Found/DailyRecommendation'),
                    meta: { title: '每日推荐', show: false, activeHeader: true },
                },
                {
                    name: 'privatefm',
                    path: 'privatefm',
                    component: () => import('@/pages/Found/PrivateFM'),
                    meta: { title: '私人FM', show: false, activeHeader: true },
                },
                {
                    name: 'musiclist',
                    path: 'musiclist',
                    component: () => import('@/pages/Found/MusicList'),
                    meta: { title: '歌单', show: false, activeHeader: true },
                },
                {
                    name: 'rankinglist',
                    path: 'rankinglist',
                    component: () => import('@/pages/Found/RankingList'),
                    meta: { title: '排行榜', show: false, activeHeader: true },
                },
                {
                    name: 'digitalalbum',
                    path: 'digitalalbum',
                    component: () => import('@/pages/Found/DigitalAlbum'),
                    meta: { title: '数字专辑', show: false, activeHeader: true },
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
                    name: 'focusnewmusic',
                    path: 'focusnewmusic',
                    component: () => import('@/pages/Found/FocusNewMusic'),
                    meta: { title: '关注新歌', show: false, activeHeader: true },
                },
                {
                    name: 'musichouse',
                    path: 'musichouse',
                    component: () => import('@/pages/Found/MusicHouse'),
                    meta: { title: '歌房', show: false, activeHeader: true },
                },
            ],
        },
        // 播客
        {
            name: 'podcast',
            path: '/podcast',
            component: () => import('@/pages/Podcast'),
            meta: { active: 1, title: '播客', show: true, activeHeader: true },
            children: [
                {
                    name: 'mypodcast',
                    path: 'mypodcast',
                    component: () => import('@/pages/Podcast/MyPodCast'),
                    meta: { title: '我的播客', show: false, activeHeader: true },
                },
                {
                    name: 'allcategories',
                    path: 'allcategories',
                    component: () => import('@/pages/Podcast/AllCategories'),
                    meta: { title: '全部分类', show: false, activeHeader: true },
                    props: ($route) => {
                        return {
                            more2: $route.query.more2,
                        };
                    },
                },
                {
                    name: 'podcastrankinglist',
                    path: 'podcastrankinglist',
                    component: () => import('@/pages/Podcast/PodcastRankingList'),
                    meta: { title: '排行榜', show: false, activeHeader: true },
                },
                {
                    name: 'nightsleep',
                    path: 'nightsleep',
                    component: () => import('@/pages/Podcast/NightSleep'),
                    meta: { title: '助眠解压', show: false, activeHeader: true },
                },
                {
                    name: 'soundbook',
                    path: 'soundbook',
                    component: () => import('@/pages/Podcast/SoundBook'),
                    meta: { title: '有声书', show: false, activeHeader: true },
                },
                {
                    name: 'fm',
                    path: 'fm',
                    component: () => import('@/pages/Podcast/FM'),
                    meta: { title: '广播电台', show: false, activeHeader: true },
                },
            ],
        },
        // 我的
        {
            name: 'myindex',
            path: '/myindex',
            component: () => import('@/pages/MyIndex'),
            meta: { active: 2, title: '我的', show: true, activeHeader: true },
            children: [
                {
                    name: 'rencently',
                    path: 'rencently',
                    component: () => import('@/pages/MyIndex/Rencently'),
                    meta: { title: '最近播放', show: false, activeHeader: true },
                },
                {
                    name: 'local-download',
                    path: 'local-download',
                    component: () => import('@/pages/MyIndex/Local-Download'),
                    meta: { title: '本地/下载', show: false, activeHeader: true },
                },
                {
                    name: 'cloudpan',
                    path: 'cloudpan',
                    component: () => import('@/pages/MyIndex/CloudPan'),
                    meta: { title: '云盘', show: false, activeHeader: true },
                },
                {
                    name: 'buy',
                    path: 'buy',
                    component: () => import('@/pages/MyIndex/Buy'),
                    meta: { title: '已购(单曲)', show: false, activeHeader: true },
                },
                {
                    name: 'friends',
                    path: 'friends',
                    component: () => import('@/pages/MyIndex/Friends'),
                    meta: { title: '我的好友', show: false, activeHeader: true },
                },
                {
                    name: 'collection-praise',
                    path: 'collection-praise',
                    component: () => import('@/pages/MyIndex/Collection-Praise'),
                    meta: { title: '收藏和赞', show: false, activeHeader: true },
                },
                {
                    name: 'index-podcast',
                    path: 'index-podcast',
                    component: () => import('@/pages/MyIndex/Index-Podcast'),
                    meta: { title: '我的播客', show: false, activeHeader: true },
                },
                {
                    name: 'musicbottle',
                    path: 'musicbottle',
                    component: () => import('@/pages/MyIndex/MusicBottle'),
                    meta: { title: '音乐罐子', show: false, activeHeader: true },
                },
            ],
        },
        // 关注
        {
            name: 'attention',
            path: '/attention',
            component: () => import('@/pages/Attention'),
            meta: { active: 3, title: '关注', show: true, activeHeader: true },
        },
        // 云村
        {
            name: 'cloudsquare',
            path: '/cloudsquare',
            component: () => import('@/pages/CloudSquare'),
            meta: { active: 4, title: '云村', show: true, activeHeader: true },
        },
        // 搜索
        {
            name: 'search',
            path: '/search',
            component: () => import('@/pages/Search'),
            meta: { title: '搜索', show: false, activeHeader: true },
        },
        // 登录页
        {
            name: 'index',
            path: '/index',
            component: () => import('@/pages/Index'),
            meta: { title: '登录', show: false, activeHeader: false },
            children: [
                {
                    name: 'phonesignin',
                    path: 'phonesignin',
                    component: () => import('@/pages/Index/PhoneSignIn'),
                    meta: { title: '登录', show: false, activeHeader: false },
                },
            ],
        },
        // 自动起始跳转到发现页
        {
            path: '/',
            redirect: '/found',
        },
        // 404页
        {
            path: '/:catchAll(.*)',
            component: () => import('@/pages/Error'),
            meta: { title: '·*·Failed·*·' },
        },
    ],
});

export default router;
