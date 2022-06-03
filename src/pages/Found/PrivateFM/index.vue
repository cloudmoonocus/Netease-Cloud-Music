<template>
    <div class="out"></div>
    <img src="https://p2.music.126.net/wO_VXV2J0-GtYWinlUlPJw==/109951164465515443.jpg?param=130y130" alt="" />
    <div class="name">夏天的风</div>
    <div class="author">曹浩煜</div>
    <van-icon name="add-o" class="icon" />
    <div class="bottom">
        <van-progress :percentage="50" stroke-width="2" pivot-text="" inactive color="#fff" />
    </div>
</template>

<script>
import { Icon, Progress } from 'vant';
export default {
    name: 'PrivateFM',
    setup() {
        return {};
    },
    components: {
        VanIcon: Icon,
        VanProgress: Progress,
    },
};
</script>

<style lang="less" scoped>
.out {
    position: absolute;
    background-image: url(https://p2.music.126.net/jJoLr9_AChEv-LcmDiPJzg==/109951165533909512.jpg?param=130y130);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(30px);
}
img {
}
.name {
    color: #fff;
}
.author {
    color: #fff;
}
.icon {
    color: #fff;
}
</style>
