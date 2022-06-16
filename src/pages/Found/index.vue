<template>
    <router-view />
    <div v-if="$route.path == '/found'">
        <!-- 轮播图 -->
        <div>
            <van-swipe :autoplay="5000" lazy-render class="swiper" round>
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" class="swiperIn" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 功能列表 -->
        <div>
            <van-grid :gutter="5" class="grid" icon-size="25px" column-num="4">
                <van-grid-item v-for="value in grids" :key="value.id" :icon="value.icon" :text="value.text"
                    :to="value.path" class="gridIn" />
            </van-grid>
        </div>
        <!-- 推荐歌单 -->
        <div class="rec1">
            <div class="recChild">
                <span class="recommention">推荐歌单</span>
                <a class="more" @click="$router.push('/found/musiclist')">更多 ></a>
            </div>
            <van-grid :border="false" :column-num="3">
                <van-grid-item class="vanGridItem">
                    <van-image class="vanImage" radius="5"
                        src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140" />
                    <a title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
                </van-grid-item>
                <van-grid-item class="vanGridItem">
                    <van-image class="vanImage" radius="5"
                        src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140" />
                    <a title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
                </van-grid-item>
                <van-grid-item class="vanGridItem">
                    <van-image class="vanImage" radius="5"
                        src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140" />
                    <a title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
                </van-grid-item>
            </van-grid>
        </div>
        <!-- 推荐歌曲 -->
        <div class="rec2">
            <div>
                <span class="recommention">推荐歌曲</span>
                <a class="more2" @click="$router.push('/found/dailyrecommendation')">播放
                    <van-icon name="play-circle-o" />
                </a>
            </div>
            <van-grid :column-num="1" direction="horizontal" class="vanGrid">
                <van-grid-item v-for="value in grids2" :key="value.id" :icon="value.icon" :text="value.text" />
            </van-grid>
        </div>
        <!-- 新歌 新碟 数字专辑 -->
        <div class="rec3">
            <van-tabs v-model:active="active" swipeable>
                <van-tab title="新歌">
                    <van-grid :column-num="1" direction="horizontal" class="vanGrid">
                        <van-grid-item v-for="value in grids3" :key="value.id" :icon="value.icon" :text="value.text" />
                    </van-grid>
                </van-tab>
                <van-tab title="新碟">
                    <van-grid :column-num="1" direction="horizontal" class="vanGrid">
                        <van-grid-item v-for="value in grids4" :key="value.id" :icon="value.icon" :text="value.text" />
                    </van-grid>
                </van-tab>
                <van-tab title="数字专辑">
                    <van-grid :column-num="1" direction="horizontal" class="vanGrid">
                        <van-grid-item v-for="value in grids5" :key="value.id" :icon="value.icon" :text="value.text" />
                    </van-grid>
                </van-tab>
            </van-tabs>
        </div>
        <!-- 排行榜 -->
        <div class="rec4">
            <div class="recChild">
                <span class="recommention">排行榜&nbsp;&nbsp;</span>
                <a class="more" @click="$router.push('/found/rankinglist')">更多 ></a>
            </div>
            <van-grid :column-num="1" direction="horizontal" class="vanGrid">
                <van-grid-item v-for="value in 5" :key="value" icon="music" text="1️⃣占位" />
            </van-grid>
        </div>
        <!-- 热门话题 -->
        <div class="rec5">
            <div class="recChild">
                <span class="recommention">热门话题</span>
            </div>
            <van-grid :column-num="1" direction="horizontal" class="vanGrid">
                <van-grid-item v-for="value in 10" :key="value" icon="shop" text="1️⃣占位" />
            </van-grid>
        </div>
        <!-- 底部 -->
        <Tip />
        <!-- 防止底部遮挡 -->
        <div style="height: 60px; width: 100%"></div>
    </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Icon, Tab, Tabs } from 'vant';
import { Image as VanImage } from 'vant';
import Tip from '@/components/Tip';
import { ref } from 'vue';
export default {
    name: 'Found',
    setup() {
        const active = ref(0);
        // 轮播图
        const images = [
            'https://p1.music.126.net/EYoeQf1UO87VsjLSM8UrTA==/109951167498797892.jpg?imageView&quality=89',
            'https://p1.music.126.net/IeKzUXjjCMwGxGqgHj4v-w==/109951167497617795.jpg?imageView&quality=89',
            'https://p1.music.126.net/M0gOlZzX8EB3bLWR4nc0WQ==/109951167498119784.jpg?imageView&quality=89',
            'https://p1.music.126.net/jDtYPRILpU05JikiT2cWGg==/109951167499111244.jpg?imageView&quality=89',
            'https://p1.music.126.net/-rmocvj9qxcCIlsQemMGjw==/109951167497644391.jpg?imageView&quality=89',
            'https://p1.music.126.net/hHj81Oi3yQiFEp7BfUhKYQ==/109951167497696790.jpg?imageView&quality=89',
        ];

        // 功能列表
        const grids = [
            { id: 1, icon: 'hot', text: '每日推荐', path: '/found/dailyrecommendation' },
            { id: 2, icon: 'audio', text: '私人FM', path: '/found/privatefm' },
            { id: 3, icon: 'column', text: '歌单', path: '/found/musiclist' },
            { id: 4, icon: 'descending', text: '排行榜', path: '/found/rankinglist' },
            { id: 5, icon: 'coupon', text: '数字专辑', path: '/found/digitalalbum' },
            { id: 6, icon: 'graphic', text: '有声书', path: '/podcast/soundbook' },
            { id: 7, icon: 'music', text: '关注新歌', path: '/found/focusnewmusic' },
            { id: 8, icon: 'fire', text: '歌房', path: '/found/musichouse' },
        ];

        // 推荐歌曲
        const grids2 = [
            {
                id: '1',
                icon: 'https://p3.music.126.net/sH2TdZ2CKuyQqOh1BAwrSw==/109951167493939061.jpg?param=50y50&quality=100',
                text: '最后一个晚安',
            },
            {
                id: '2',
                icon: 'https://p3.music.126.net/LYizx3uW9_yBaLLDRl6reA==/109951167467043176.jpg?param=50y50&quality=100',
                text: '朋友圈 - (要怪就怪我不争气)',
            },
            {
                id: '3',
                icon: 'https://p4.music.126.net/me6QV0CallEOlOP6Zb0b3w==/109951165770805050.jpg?param=50y50&quality=100',
                text: '再见莫妮卡 - (月光温柔缠绵)',
            },
        ];

        // 新歌
        const grids3 = [
            {
                id: 1,
                icon: 'https://p3.music.126.net/0F__dZoHl_t_k7BH9qsPoQ==/109951167482165690.jpg?param=50y50&quality=100',
                text: '最美好的时光 (Official Live)',
            },
            {
                id: 2,
                icon: 'https://p4.music.126.net/fw5f7Gifm_vCirn4Hdo2jQ==/109951167435417002.jpg?param=50y50&quality=100',
                text: '三国恋',
            },
            {
                id: 3,
                icon: 'https://p3.music.126.net/CpL8pNTQps9aD1fTbXhjng==/109951167435640688.jpg?param=50y50&quality=100',
                text: '异地恋 - (我每天问一百次)',
            },
        ];

        // 新碟
        const grids4 = [
            {
                id: 1,
                icon: 'https://p4.music.126.net/KtJBizoWDiUwqvCGsg-UoA==/109951167478486282.jpg?param=130y130',
                text: '倾 ∙ 听',
            },
            {
                id: 2,
                icon: 'https://p3.music.126.net/KdiJjqEenuXEO7Ax8nmozg==/109951167482882037.jpg?param=130y130',
                text: '= (Tour Edition)',
            },
            {
                id: 3,
                icon: 'https://p4.music.126.net/I-NjvZ6EXOmNyo3q9fYRKw==/109951167473885750.jpg?param=130y130',
                text: '你最好知道',
            },
        ];

        // 数字专辑
        const grids5 = [
            {
                id: 1,
                icon: 'https://p2.music.126.net/-9iCL1qgI8i3W9NjmJZBuQ==/109951165145166144.jpg?param=177y177',
                text: '重启之极海听雷OST',
            },
            {
                id: 2,
                icon: 'https://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=177y177',
                text: '平凡的一天',
            },
            {
                id: 3,
                icon: 'https://p2.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg?param=177y177',
                text: '打上火花',
            },
        ];

        return { images, grids, grids2, active, grids3, grids4, grids5 };
    },
    components: {
        Tip,
        VanSwipe: Swipe,
        VanSwipeItem: SwipeItem,
        VanGrid: Grid,
        VanGridItem: GridItem,
        VanIcon: Icon,
        VanImage: VanImage,
        VanTabs: Tabs,
        VanTab: Tab,
    },
};
</script>

<style lang="less" scoped>
.swiper {
    margin-left: 50%;
    transform: translate(-50%);
    margin-top: 10px;
    height: 140px;
    width: 92%;
}

.swiperIn {
    margin-left: 50%;
    transform: translate(-50%);
    width: 100%;
    width: 340px;
}

.swiperIn {
    width: 340px;
    height: 140px;
    border-radius: 10px;
}

.grid {
    margin: 0 auto;
    margin-top: 10px;
    width: 92%;
}

.gridIn {
    color: #e60026;
}

.rec1 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    width: 91%;
}

.rec2 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    width: 91%;
}

.rec3 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    width: 91%;
}

.rec4 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    width: 91%;
}

.rec5 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    width: 91%;
}

.recChild {
    display: flex;
}

.recommention {
    margin-left: 10px;
    margin-top: 12px;
    font-size: 15px;
    font-weight: 700;
}

.more {
    margin-left: 61%;
    margin-top: 10px;
    padding: 1px 5px;
    font-size: 13px;
    border: #eee solid 1px;
    border-radius: 10px;
    width: 40px;
    height: 18px;
}

.more2 {
    margin-left: 58%;
    margin-top: 10px;
    padding: 1px 5px;
    font-size: 13px;
    border: #eee solid 1px;
    border-radius: 10px;
    width: 48px;
    height: 18px;
}

.vanImage {
    border-radius: 10px;
}

.vanGridItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.vanGridItem a {
    margin-top: 4px;
    font-size: 10px;
}

.rec2 {
    margin-top: 10px;
}

.vanGrid {
    margin-top: 15px;
}
</style>
