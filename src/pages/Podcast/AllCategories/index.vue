<template>
    <div class="head">
        <van-tabs v-model:active="active" swipeable :lazy-render="true">
            <van-tab title="创作翻唱">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="歌曲翻唱">
                        <Presentation />
                    </van-tab>
                    <van-tab title="抖音热歌">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="新闻资讯">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="商业财经">
                        <Presentation />
                    </van-tab>
                    <van-tab title="热点资讯">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="情感">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="情感故事">
                        <Presentation />
                    </van-tab>
                    <van-tab title="成长励志">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="电音">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="3D环绕">
                        <Presentation />
                    </van-tab>
                    <van-tab title="REMIX">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="知识">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="个人提升">
                        <Presentation />
                    </van-tab>
                    <van-tab title="商业财经">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="二次元">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="动漫">
                        <Presentation />
                    </van-tab>
                    <van-tab title="游戏">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="脱口秀">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="搞笑段子">
                        <Presentation />
                    </van-tab>
                    <van-tab title="脱口秀">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="相声曲艺">
                <van-tabs
                    swipeable
                    :lazy-render="true"
                    title-active-color="#000"
                    title-inactive-color="rgb(122, 119, 119)"
                    line-height="0"
                >
                    <!-- 只展示三个选项 -->
                    <van-tab title="全部">
                        <Presentation />
                    </van-tab>
                    <van-tab title="相声">
                        <Presentation />
                    </van-tab>
                    <van-tab title="小品">
                        <Presentation />
                    </van-tab>
                </van-tabs>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import { ref } from 'vue';
import Presentation from './Presentation.vue';

export default {
    name: 'AllCategories',
    setup() {
        const active = ref(0);
        return { active };
    },
    components: {
        Presentation,
        VanTabs: Tabs,
        VanTab: Tab,
    },
};
</script>

<style lang="less" scoped></style>
