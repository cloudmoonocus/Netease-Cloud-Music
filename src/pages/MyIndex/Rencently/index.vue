<template>
    <div style="background-color: #fff">
        <div class="rcMyHead">
            <van-tabs swipeable line-height="6px" :lazy-render="true">
                <van-tab title="歌曲" badge="300">
                    <div class="rcSecond">
                        <van-icon name="play-circle" style="color: #e60026; font-size: 30px; margin-left: 15px" />
                        <span>播放全部</span>
                        <span>(300)</span>
                    </div>
                    <div class="rcThird">
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                        <div class="rcCard">
                            <div>
                                <div>念想</div>
                                <div>小好14/于懿 - 念想</div>
                            </div>
                            <van-icon class="rcIcon" name="ellipsis" />
                        </div>
                    </div>
                </van-tab>
                <van-tab title="视频" badge="13">
                    <strong>本页未编写</strong>
                </van-tab>
                <van-tab title="声音" badge="23">
                    <strong>本页未编写</strong>
                </van-tab>
                <van-tab title="歌单" badge="78">
                    <strong>本页未编写</strong>
                </van-tab>
                <van-tab title="专辑" badge="0">
                    <strong>本页未编写</strong>
                </van-tab>
                <van-tab title="播客" badge="8">
                    <strong>本页未编写</strong>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import { Tab, Tabs, Icon } from 'vant';

export default {
    name: 'Rencently',
    setup() {
        return {};
    },
    components: {
        VanTabs: Tabs,
        VanTab: Tab,
        VanIcon: Icon,
    },
};
</script>

<style lang="less" scoped>
.rcSecond {
    display: flex;
    margin-top: 20px;

    span:nth-child(2) {
        margin-left: 10px;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        font-weight: 700;
    }

    span:nth-child(3) {
        margin-left: 8px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: rgb(122, 119, 119);
    }
}

.rcThird {
    margin-top: 30px;

    .rcCard {
        margin-bottom: 40px;

        div:nth-child(1) {
            width: 100%;
            height: 20px;

            div:nth-child(1) {
                margin-left: 20px;
                width: 75%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 15px;
            }

            div:nth-child(2) {
                margin-left: 20px;
                width: 75%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 10px;
                color: rgb(122, 119, 119);
            }
        }

        .rcIcon {
            float: right;
            transform: translateY(-50%);
            margin-right: 15px;
            font-size: 20px;
        }
    }
}
</style>
