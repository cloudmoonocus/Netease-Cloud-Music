<template>
    <div style="background-color: #fff">
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
            <div class="fun">
                <div>
                    <van-icon name="fire-o" class="icon" />
                </div>
                <div>畅销榜</div>
            </div>
            <div class="fun">
                <div>
                    <van-icon name="expand-o" class="icon" />
                </div>
                <div>语种风格馆</div>
            </div>
            <div class="fun">
                <div>
                    <van-icon name="passed" class="icon" />
                </div>
                <div>已购</div>
            </div>
        </div>
        <hr style="color: #eee; height: 1px" />
    </div>
</template>

<script>
import { Swipe, SwipeItem, Icon, Divider } from 'vant';
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
        return { images };
    },
    components: {
        VanSwipe: Swipe,
        VanSwipeItem: SwipeItem,
        VanIcon: Icon,
        VanDivider: Divider,
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
    .fun {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        width: 65px;

        div:nth-child(1) {
            margin: 0 auto;
            background-color: red;
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
            font-size: 13px;
            color: rgb(122, 119, 119);
        }
    }
}
</style>
