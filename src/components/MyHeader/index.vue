<template>
    <!-- 顶部 -->
    <van-sticky :offset-top="0">
        <van-nav-bar :title="title">
            <template #left>
                <van-icon @click="showPopup" name="wap-nav" size="25" style="color: #e60026" />
            </template>
            <template #right>
                <van-icon name="search" size="25" style="color: #e60026" @click="$router.push('/search')" />
            </template>
        </van-nav-bar>
    </van-sticky>
    <!-- 侧边栏 -->
    <van-popup v-model:show="show" position="left" :style="{ height: '100%', width: '80%', float: 'left' }"
        class="van-popup">
        <div class="headDiv">
            <van-image round width="35px" height="35px" src="https://avatars.githubusercontent.com/u/98140702?s=96&v=4"
                fit="cover" position="left" class="van-image" />
            <span class="headSpan">cloudmoonocus</span>
            <van-icon name="arrow" class="head-van-icon" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <van-icon name="scan" class="head-van-icon" />
        </div>
        <br />
        <van-cell-group inset>
            <van-cell title="&nbsp;我的消息" icon="chat-o" is-link />
            <van-cell title="&nbsp;云贝中心" icon="cash-back-record" is-link />
            <van-cell title="&nbsp;创作者中心" icon="bulb-o" is-link />
        </van-cell-group>
        <br />
        <van-cell-group inset>
            <van-cell title="音乐服务" />
            <van-cell title="&nbsp;云村有票" icon="description" is-link />
            <van-cell title="&nbsp;商城" icon="shopping-cart-o" is-link />
            <van-cell title="&nbsp;Beat交易平台" icon="shop-o" is-link />
            <van-cell title="&nbsp;游戏专区" icon="award-o" is-link />
            <van-cell title="&nbsp;口袋彩铃" icon="phone-circle-o" is-link />
        </van-cell-group>
        <br />
        <van-cell-group inset>
            <van-cell title="其他" />
            <van-cell title="&nbsp;设置" icon="setting-o" is-link />
            <van-cell title="&nbsp;夜间模式" icon="closed-eye" is-link>
                <template #right-icon>
                    <van-switch v-model="checked" size="24" />
                </template>
            </van-cell>
            <van-cell title="&nbsp;定时关闭" icon="underway-o" is-link />
            <van-cell title="&nbsp;个性装扮" icon="contact" is-link />
            <van-cell title="&nbsp;边听边存" icon="down" is-link />
            <van-cell title="&nbsp;在线听歌免流量" icon="debit-pay" is-link />
            <van-cell title="&nbsp;音乐黑名单" icon="close" is-link />
            <van-cell title="&nbsp;青少年模式" icon="certificate" is-link />
            <van-cell title="&nbsp;音乐闹钟" icon="tosend" is-link />
        </van-cell-group>
        <br />
        <van-cell-group inset>
            <van-cell title="&nbsp;我的订单" icon="records" is-link />
            <van-cell title="&nbsp;优惠券" icon="coupon-o" is-link />
            <van-cell title="&nbsp;我的客服" icon="exchange" is-link />
            <van-cell title="&nbsp;分享网易云音乐" icon="share-o" is-link />
            <van-cell title="&nbsp;个人信息收集和使用清单" icon="warning-o" is-link />
            <van-cell title="&nbsp;个人信息第三方共享清单" icon="browsing-history-o" is-link />
            <van-cell title="&nbsp;个人信息与隐私保护" icon="cart-o" is-link />
            <van-cell title="&nbsp;关于" icon="info-o" is-link />
        </van-cell-group>
        <br />
        <van-cell-group inset>
            <van-cell center style="color: #e60026" title="退出登录/关闭" />
        </van-cell-group>
        <br />
    </van-popup>
</template>

<script>
import { Icon, Sticky, NavBar, Popup, Cell, CellGroup, ConfigProvider, Switch } from 'vant';
import { Image as VanImage } from 'vant';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'MyHeader',
    setup() {
        const route = useRoute();
        let checked = ref();
        const show = ref(false);
        const title = ref();
        const showPopup = () => {
            show.value = true;
        };
        // 改变头部信息
        watch(route, () => {
            title.value = route.meta.title;
        });
        return {
            checked,
            show,
            showPopup,
            title,
        };
    },
    components: {
        VanIcon: Icon,
        VanSticky: Sticky,
        VanNavBar: NavBar,
        VanPopup: Popup,
        VanImage,
        VanCell: Cell,
        VanCellGroup: CellGroup,
        ConfigProvider,
        VanSwitch: Switch,
    },
};
</script>

<style scoped>
.van-image {
    margin: 10px 10px;
}

.headDiv {
    display: flex;
}

.headSpan {
    font-size: 20px;
    margin-top: 12px;
}

.head-van-icon {
    font-size: 24px;
    margin-top: 14px;
}
</style>
