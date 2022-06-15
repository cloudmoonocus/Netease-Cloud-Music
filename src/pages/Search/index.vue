<template>
    <van-search v-model="value" placeholder="xxxx" shape="round" clearable />
    <div class="hot" v-show="hotShow">
        <div class="first">
            <span>热搜榜</span>
            <span>
                <van-icon name="play-circle" /> 播放
            </span>
        </div>
        <van-divider :hairline="false" />
        <div class="list">
            <div class="card">
                <span class="three">1</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="three">2</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="three">3</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">4</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">5</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">6</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">7</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">8</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">9</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">10</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">11</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">12</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">13</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">14</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">15</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">16</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">17</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">18</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">19</span>
                <span>林俊杰</span>
            </div>
            <div class="card">
                <span class="noThree">20</span>
                <span>林俊杰</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Search, Icon, Divider } from 'vant';
import { ref, watch } from 'vue';
export default {
    name: 'Search',
    setup() {
        // 搜索内容
        const value = ref('');
        // 搜索建议时的操作
        const hotShow = ref(true);
        const searchWatch = watch(value, () => {
            if (value.value) {
                hotShow.value = false;
            } else {
                hotShow.value = true;
            }
        })


        return { value, hotShow, searchWatch };
    },
    components: {
        VanSearch: Search,
        VanIcon: Icon,
        VanDivider: Divider
    }
};
</script>

<style lang="less" scoped>
.hot {
    width: 80%;
    margin: 0 auto;
    margin-top: 15px;
    padding: 20px 20px 2px;
    border-radius: 10px;
    background-color: #fff;

    .first {
        position: relative;
        height: 30px;

        span:nth-child(1) {
            position: absolute;
            font-weight: 700;
            font-size: 20px;
        }

        span:nth-child(2) {
            position: absolute;
            right: 0;
            padding: 4px 10px;
            border: solid rgb(122, 119, 119) 1px;
            border-radius: 20px;
            font-size: 13px;
            color: rgb(122, 119, 119);
        }
    }

    .list {
        .card {
            position: relative;
            margin-bottom: 15px;
            height: 25px;

            .three {
                position: absolute;
                font-size: 20px;
                font-weight: 700;
                color: #e60026;
            }

            .noThree {
                position: absolute;
                font-size: 20px;
                width: 15px;
                color: rgb(122, 119, 119);
            }

            span:nth-child(2) {
                position: absolute;
                font-size: 20px;
                left: 45px;
            }
        }
    }
}
</style>
