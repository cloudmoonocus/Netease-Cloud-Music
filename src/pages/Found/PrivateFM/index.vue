<template>
    <div class="out"></div>
    <div class="second">
        <img src="https://p2.music.126.net/jJoLr9_AChEv-LcmDiPJzg==/109951165533909512.jpg?param=130y130" alt="" />
        <div class="name">夏天的风</div>
        <div class="author">
            <span class="author">曹浩煜&nbsp;</span>
            <van-icon name="add-o" class="icon" />
        </div>
        <van-slider v-model="value" active-color="#e60026" @change="onChange" class="bottom">
            <template #button>
                <div class="custom-button">{{ value }}</div>
            </template>
        </van-slider>
        <div class="fuc">
            <i class="iconfont icon-buxihuan"></i>
            <i class="iconfont icon-xihuan"></i>
            <i class="iconfont icon-zanting1"></i>
            <i class="iconfont icon-xiayigexiayishou"></i>
            <i class="iconfont icon-pinglun"></i>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Icon, Slider } from 'vant';
export default {
    name: 'PrivateFM',
    setup() {
        const value = ref(50);
        const onChange = (value) => {
            console.log(value);
        };
        return { value, onChange };
    },
    components: {
        VanIcon: Icon,
        VanSlider: Slider,
    },
};
</script>

<style lang="less" scoped>
.out {
    background-image: url(https://p2.music.126.net/jJoLr9_AChEv-LcmDiPJzg==/109951165533909512.jpg?param=130y130);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 90%;
    z-index: -1;
    filter: blur(30px);
}
.second {
    display: flex;
    flex-direction: column;

    img {
        margin: 0 auto;
        margin-top: 20px;
        height: 300px;
        width: 300px;
    }
    .name {
        margin: 0 auto;
        margin-top: 20px;
        font-size: 15px;
        font-weight: 700;
        color: #fff;
    }
    .author {
        margin: 0 auto;
        margin-top: 10px;
        height: 10px;
        line-height: 10px;
        font-size: 13px;
        font-weight: 300;
        color: #eee;
    }
    .bottom {
        margin: 0 auto;
        margin-top: 140px;
        width: 85%;

        .custom-button {
            width: 26px;
            color: #fff;
            font-size: 13px;
            line-height: 18px;
            text-align: center;
            background-color: #e60026;
            border-radius: 100px;
        }
    }
    .fuc {
        display: flex;
        justify-content: space-evenly;
        margin-top: 35px;
        color: #fff;

        i:nth-child(1) {
            font-size: 25px;
        }
        i:nth-child(2) {
            font-size: 25px;
        }
        i:nth-child(3) {
            font-size: 50px;
            transform: translateY(-10px);
        }
        i:nth-child(4) {
            font-size: 25px;
        }
        i:nth-child(5) {
            font-size: 25px;
        }
    }
}
</style>
