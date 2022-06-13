<template>
    <div style="background-color: #fff">
        <van-tabs v-model:active="active">
            <van-tab title="关注">
                <div class="out">
                    <div class="card">
                        <img src="https://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg?param=130y130"
                            alt="">
                        <div class="name">许嵩</div>
                    </div>
                    <div class="card">
                        <img src="https://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg?param=130y130"
                            alt="">
                        <div class="name">许嵩</div>
                    </div>
                    <div class="card">
                        <img src="https://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg?param=130y130"
                            alt="">
                        <div class="name">许嵩</div>
                    </div>
                    <div class="card">
                        <img src="https://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg?param=130y130"
                            alt="">
                        <div class="name">许嵩</div>
                    </div>
                    <div class="card">
                        <img src="https://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg?param=130y130"
                            alt="">
                        <div class="name">许嵩</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="粉丝">
                <!-- 通知，开发时删掉即可 -->
                <van-notice-bar mode="closeable">此处并非是作者粉丝，占位作用，切勿当真</van-notice-bar>
                <div class="out">
                    <div class="fanCard">
                        <img src="https://p1.music.126.net/0L5drAV43FLJk6J9dRhfew==/109951165911947840.jpg?param=130y130"
                            alt="">
                        <div class="middle">
                            <div class="name">林俊杰</div>
                            <div class="intro">JJ Lin;Wayne Lim</div>
                        </div>
                        <div class="huiguan">
                            + 回关
                        </div>
                    </div>
                    <div class="fanCard">
                        <img src="https://p1.music.126.net/0L5drAV43FLJk6J9dRhfew==/109951165911947840.jpg?param=130y130"
                            alt="">
                        <div class="middle">
                            <div class="name">林俊杰</div>
                            <div class="intro">JJ Lin;Wayne Lim</div>
                        </div>
                        <div class="huguan">
                            互相关注
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tab, Tabs, NoticeBar } from 'vant';

export default {
    name: 'Friends',
    setup() {
        return {};
    },
    components: {
        VanTab: Tab,
        VanTabs: Tabs,
        VanNoticeBar: NoticeBar
    }
};
</script>

<style lang="less" scoped>
.out {
    padding-top: 5px;
    margin-left: 25px;
    padding-bottom: 15px;

    .card {
        margin-top: 20px;
        width: 100%;
        height: 60px;

        img {
            float: left;
            height: 60px;
            width: 60px;
            border-radius: 30px;
        }

        div {
            float: left;
            margin-left: 20px;
            line-height: 60px;
            font-size: 15px;
        }
    }

    .fanCard {
        margin-top: 20px;
        width: 100%;
        height: 60px;

        img {
            float: left;
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }

        .middle {
            float: left;
            width: 55%;
            margin-top: 15px;
            margin-left: 15px;

            .name {
                width: 80%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 15px;
            }

            .intro {
                width: 80%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 12px;
                color: rgb(122, 119, 119);
            }
        }

        .huiguan {
            float: right;
            padding: 5px 10px;
            margin-top: 15px;
            margin-right: 15px;
            border: 1px solid #e60026;
            border-radius: 10px;
            font-size: 12px;
            color: #e60026;
        }

        .huguan {
            float: right;
            padding: 5px 8px;
            margin-top: 15px;
            margin-right: 15px;
            border: 1px solid rgb(122, 119, 119);
            border-radius: 10px;
            font-size: 12px;
            color: rgb(122, 119, 119);
        }
    }
}
</style>
