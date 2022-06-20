<template>
    <router-view />
    <div style="background-color: #fff; height: 93.5vh; z-index: -10" v-if="$route.path == '/found/digitalalbum'">
        <!-- 轮播图 -->
        <div class="head">
            <van-swipe :autoplay="5000" lazy-render class="swiper" round>
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" class="swiperIn" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 功能列表 -->
        <div class="second">
            <div class="fun" @click="routerHotList">
                <div>
                    <van-icon name="fire-o" class="icon" />
                </div>
                <div>畅销榜</div>
            </div>
            <div class="fun" @click="routerMusicLanguage">
                <div>
                    <van-icon name="expand-o" class="icon" />
                </div>
                <div>风格馆</div>
            </div>
            <div class="fun" @click="routerBuy">
                <div>
                    <van-icon name="passed" class="icon" />
                </div>
                <div>已购</div>
            </div>
        </div>
        <!-- 最新上架 -->
        <div class="third">
            <div @click="routerMusicLanguage">
                <span>最新上架&nbsp;</span>
                <van-icon name="arrow" />
            </div>
            <div>
                <!-- 列表 -->
                <div class="card">
                    <img
                        src="https://p1.music.126.net/8JaaXRFNrZnVJ0LZoULLHg==/2380442674160843.jpg?param=180y180"
                        alt="Pretty Rhythm Dear My Future Prism☆Music Collection"
                        title="Pretty Rhythm Dear My Future Prism☆Music Collection"
                    />
                    <div class="imgTitle">Pretty Rhythm Dear My Future Prism☆Music Collection</div>
                    <div class="author">長岡成貢</div>
                    <div class="money">￥18</div>
                </div>
                <div class="card">
                    <img
                        src="https://p1.music.126.net/8JaaXRFNrZnVJ0LZoULLHg==/2380442674160843.jpg?param=180y180"
                        alt="Pretty Rhythm Dear My Future Prism☆Music Collection"
                        title="Pretty Rhythm Dear My Future Prism☆Music Collection"
                    />
                    <div class="imgTitle">Pretty Rhythm Dear My Future Prism☆Music Collection</div>
                    <div class="author">長岡成貢</div>
                    <div class="money">￥18</div>
                </div>
                <div class="card">
                    <img
                        src="https://p1.music.126.net/8JaaXRFNrZnVJ0LZoULLHg==/2380442674160843.jpg?param=180y180"
                        alt="Pretty Rhythm Dear My Future Prism☆Music Collection"
                        title="Pretty Rhythm Dear My Future Prism☆Music Collection"
                    />
                    <div class="imgTitle">Pretty Rhythm Dear My Future Prism☆Music Collection</div>
                    <div class="author">長岡成貢</div>
                    <div class="money">￥18</div>
                </div>
                <div class="card">
                    <img
                        src="https://p1.music.126.net/8JaaXRFNrZnVJ0LZoULLHg==/2380442674160843.jpg?param=180y180"
                        alt="Pretty Rhythm Dear My Future Prism☆Music Collection"
                        title="Pretty Rhythm Dear My Future Prism☆Music Collection"
                    />
                    <div class="imgTitle">Pretty Rhythm Dear My Future Prism☆Music Collection</div>
                    <div class="author">長岡成貢</div>
                    <div class="money">￥18</div>
                </div>
                <div class="card">
                    <img
                        src="https://p1.music.126.net/8JaaXRFNrZnVJ0LZoULLHg==/2380442674160843.jpg?param=180y180"
                        alt="Pretty Rhythm Dear My Future Prism☆Music Collection"
                        title="Pretty Rhythm Dear My Future Prism☆Music Collection"
                    />
                    <div class="imgTitle">Pretty Rhythm Dear My Future Prism☆Music Collection</div>
                    <div class="author">長岡成貢</div>
                    <div class="money">￥18</div>
                </div>
                <div class="card">
                    <img
                        src="https://p1.music.126.net/8JaaXRFNrZnVJ0LZoULLHg==/2380442674160843.jpg?param=180y180"
                        alt="Pretty Rhythm Dear My Future Prism☆Music Collection"
                        title="Pretty Rhythm Dear My Future Prism☆Music Collection"
                    />
                    <div class="imgTitle">Pretty Rhythm Dear My Future Prism☆Music Collection</div>
                    <div class="author">長岡成貢</div>
                    <div class="money">￥18</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem, Icon } from 'vant';
import router from '@/routers';
export default {
    name: 'DigitalAlbum',
    setup() {
        // 轮播图
        const images = [
            'https://p1.music.126.net/EYoeQf1UO87VsjLSM8UrTA==/109951167498797892.jpg?imageView&quality=89',
            'https://p1.music.126.net/IeKzUXjjCMwGxGqgHj4v-w==/109951167497617795.jpg?imageView&quality=89',
            'https://p1.music.126.net/M0gOlZzX8EB3bLWR4nc0WQ==/109951167498119784.jpg?imageView&quality=89',
            'https://p1.music.126.net/jDtYPRILpU05JikiT2cWGg==/109951167499111244.jpg?imageView&quality=89',
            'https://p1.music.126.net/-rmocvj9qxcCIlsQemMGjw==/109951167497644391.jpg?imageView&quality=89',
            'https://p1.music.126.net/hHj81Oi3yQiFEp7BfUhKYQ==/109951167497696790.jpg?imageView&quality=89',
        ];
        function routerHotList() {
            router.push('/found/digitalalbum/hotlist');
        }
        function routerMusicLanguage() {
            router.push('/found/digitalalbum/musiclanguage');
        }
        function routerBuy() {
            router.push('/found/digitalalbum/albumbuy');
        }
        return { images, routerHotList, routerMusicLanguage, routerBuy };
    },
    components: {
        VanSwipe: Swipe,
        VanSwipeItem: SwipeItem,
        VanIcon: Icon,
    },
};
</script>

<style lang="less" scoped>
.head {
    .swiper {
        margin-left: 50%;
        transform: translate(-50%);
        padding-top: 10px;
        height: 140px;
        width: 92%;
    }
    .swiperIn {
        margin-left: 50%;
        transform: translate(-50%);
        border-radius: 5px;
        width: 100%;
        width: 340px;
    }
}
.second {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 10px;
    border-bottom: solid 1px #eee;

    .fun {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 65px;

        div:nth-child(1) {
            margin: 0 auto;
            background-color: #e60026;
            height: 45px;
            width: 45px;
            border-radius: 22.5px;

            .icon {
                line-height: 45px;
                margin-left: 50%;
                transform: translateX(-50%);
                font-size: 30px;
                color: #fff;
            }
        }
        div:nth-child(2) {
            margin: 0 auto;
            margin-top: 3px;
            width: 70px;
            font-size: 13px;
            text-align: center;
            color: rgb(122, 119, 119);
        }
    }
}
.third {
    width: 90%;
    margin: 0 auto;

    div:nth-child(1) {
        margin-top: 25px;
        font-size: 17px;
        font-weight: 700;
    }

    div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .card {
            position: relative;
            margin-top: 15px;
            width: 100px;
            height: 140px;
            font-size: 10px;
            font-weight: 400;

            img {
                height: 100px;
                width: 100px;
            }
            .imgTitle {
                position: absolute;
                top: 105px;
                width: 100px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                color: #000;
            }
            .author {
                position: absolute;
                top: 118px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                color: rgb(122, 119, 119);
            }
            .money {
                position: absolute;
                top: 130px;
                color: #e60026;
            }
        }
    }
}
</style>
