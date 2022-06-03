<template>
    <div v-if="$route.meta.show">
        <van-sticky :offset-bottom="0" position="bottom">
            <van-tabbar fixed v-model="active" active-color="#ee0a24" inactive-color="#000">
                <van-tabbar-item replace to="/found" icon="music">发现</van-tabbar-item>
                <van-tabbar-item replace to="/podcast" icon="audio">播客</van-tabbar-item>
                <van-tabbar-item replace to="/myindex" icon="manager">我的</van-tabbar-item>
                <van-tabbar-item replace to="/attention" icon="like">关注</van-tabbar-item>
                <van-tabbar-item replace to="/cloudsquare" icon="shop">云村</van-tabbar-item>
            </van-tabbar>
        </van-sticky>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Sticky } from 'vant';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'MyFooter',
    setup() {
        let route = useRoute();
        const active = ref(-1);
        setTimeout(() => {
            active.value = route.meta.active;
        }, 800);
        return {
            active,
        };
    },
    components: {
        VanTabbarItem: TabbarItem,
        VanTabbar: Tabbar,
        VanSticky: Sticky,
    },
};
</script>

<style lang="less" scoped></style>
