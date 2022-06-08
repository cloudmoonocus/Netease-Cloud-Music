<template>
    <div class="rcMyHead">
        <van-tabs swipeable line-height="6px" :lazy-render="true">
            <van-tab title="歌曲" badge="300"></van-tab>
            <van-tab title="视频" badge="13"></van-tab>
            <van-tab title="声音" badge="23"></van-tab>
            <van-tab title="歌单" badge="78"></van-tab>
            <van-tab title="专辑" badge="0"></van-tab>
            <van-tab title="播客" badge="8"></van-tab>
        </van-tabs>
    </div>
    <!-- 第二层-播放全部- -->
    <div class="second">
        <van-icon name="play-circle" style="color: #e60026; font-size: 30px; margin-left: 15px" />
        <span>播放全部</span>
        <span>(300)</span>
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
.second {
    display: flex;
    margin-top: 20px;

    span:nth-child(2) {
        margin-left: 15px;
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
</style>
