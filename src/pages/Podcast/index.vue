<template>
    <!-- 功能列表 -->
    <div>
        <van-grid :gutter="5" class="grid" icon-size="25px" column-num="3">
            <van-grid-item
                v-for="value in grids"
                :key="value.id"
                :icon="value.icon"
                :text="value.text"
                class="gridIn"
            />
        </van-grid>
    </div>
    <!-- 轮播图 -->
    <div>
        <van-swipe :autoplay="5000" lazy-render class="swiper" round>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" class="swiperIn" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 猜你喜欢 -->
    <div class="rec1">
        <div class="recChild">
            <span class="recommention">猜你喜欢</span>
            <a href="" class="more">兴趣定制 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 创作翻唱 -->
    <div class="rec1">
        <div class="recChild">
            <span class="recommention">创作翻唱</span>
            <a href="" class="more2">更多 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 情感 -->
    <div class="rec2">
        <div>
            <span class="recommention">情感&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="" class="more2">更多 ></a>
        </div>
        <van-grid :column-num="1" direction="horizontal" class="vanGrid">
            <van-grid-item v-for="value in grids2" :key="value.id" :icon="value.icon" :text="value.text" />
        </van-grid>
    </div>
    <!-- 电音 -->
    <div class="rec1">
        <div class="recChild">
            <span class="recommention">电音&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="" class="more2">更多 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 知识 -->
    <div class="rec1">
        <div class="recChild">
            <span class="recommention">知识&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="" class="more2">更多 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 轮播图2 -->
    <div>
        <van-swipe :autoplay="5000" lazy-render class="swiper" round>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" class="swiperIn" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 音乐推荐 -->
    <div class="rec1">
        <div class="recChild">
            <span class="recommention">音乐推荐</span>
            <a href="" class="more2">更多 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 有声书 -->
    <div class="rec1">
        <div class="recChild">
            <span class="recommention">有声书&nbsp;&nbsp;&nbsp;</span>
            <a href="" class="more2">更多 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg?param=140y140"
                />
                <a href="" title="其实无论怎么选择，都会有遗憾的对吧">其实无论怎么选择，都会有遗憾的对吧</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/EnqPlvMwbrWvcYWHYrMx2w==/109951167298988944.jpg?param=140y140"
                />
                <a href="" title="原速是版权 慢速是欣赏">原速是版权 慢速是欣赏</a>
            </van-grid-item>
            <van-grid-item class="vanGridItem">
                <van-image
                    class="vanImage"
                    radius="5"
                    src="https://p2.music.126.net/bpUDG9q4smPN8ReIl2s6cw==/109951167320600625.jpg?param=140y140"
                />
                <a href="" title="我对月亮许愿，你要永远快乐">我对月亮许愿，你要永远快乐</a>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 底部 -->
    <Tip />
    <!-- 防止底部遮挡 -->
    <div style="height: 60px; width: 100%"></div>
</template>

<script>
import { Grid, GridItem, Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';
import Tip from '@/components/Tip'
export default {
    name: 'Podcast',
    setup() {
        // 功能列表
        const grids = [
            { id: 1, icon: 'audio', text: '我的播客' },
            { id: 2, icon: 'expand', text: '全部分类' },
            { id: 3, icon: 'descending', text: '排行榜' },
            { id: 4, icon: 'closed-eye', text: '助眠解压' },
            { id: 5, icon: 'graphic', text: '有声书' },
            { id: 6, icon: 'live', text: '广播电台' },
        ];
        // 轮番图
        const images = [
            'https://p1.music.126.net/EYoeQf1UO87VsjLSM8UrTA==/109951167498797892.jpg?imageView&quality=89',
            'https://p1.music.126.net/IeKzUXjjCMwGxGqgHj4v-w==/109951167497617795.jpg?imageView&quality=89',
            'https://p1.music.126.net/M0gOlZzX8EB3bLWR4nc0WQ==/109951167498119784.jpg?imageView&quality=89',
            'https://p1.music.126.net/jDtYPRILpU05JikiT2cWGg==/109951167499111244.jpg?imageView&quality=89',
            'https://p1.music.126.net/-rmocvj9qxcCIlsQemMGjw==/109951167497644391.jpg?imageView&quality=89',
            'https://p1.music.126.net/hHj81Oi3yQiFEp7BfUhKYQ==/109951167497696790.jpg?imageView&quality=89',
        ];
        // 情感
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
        return { grids, images, grids2 };
    },
    components: {
        Tip,
        VanGrid: Grid,
        VanGridItem: GridItem,
        VanSwipe: Swipe,
        VanSwipeItem: SwipeItem,
        VanImage: VanImage,
    },
};
</script>

<style lang="less" scoped>
.grid {
    margin: 0 auto;
    margin-top: 10px;
    width: 92%;
}
.gridIn {
    color: red;
}
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
    height: 140px;
    border-radius: 10px;
}
.rec1 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    /* margin-bottom: 30px; */
    width: 91%;
    /* height: 190px; */
}
.recChild {
    display: flex;
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
.recommention {
    margin-left: 10px;
    margin-top: 12px;
    font-size: 15px;
    font-weight: 700;
}
.more {
    margin-left: 55%;
    margin-top: 10px;
    padding: 1px 5px;
    font-size: 13px;
    border: #eee solid 1px;
    border-radius: 10px;
    width: 65px;
    height: 18px;
}
.more2 {
    margin-left: 61%;
    margin-top: 10px;
    padding: 1px 5px;
    font-size: 13px;
    border: #eee solid 1px;
    border-radius: 10px;
    width: 40px;
    height: 18px;
}
.rec2 {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    width: 91%;
}
</style>
