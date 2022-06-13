<template>
    <van-tabs v-model:active="active" line-height="7px">
        <van-tab title="专辑">内容 1</van-tab>
        <van-tab title="视频">内容 2</van-tab>
        <van-tab title="专栏">内容 3</van-tab>
    </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';

export default {
    name: 'Collection-Praise',
    setup() {
        return {};
    },
    components: {
        VanTabs: Tabs,
        VanTab: Tab
    }
};
</script>

<style lang="less" scoped>
</style>
