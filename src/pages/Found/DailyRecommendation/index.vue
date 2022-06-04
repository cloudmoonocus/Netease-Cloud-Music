<template>
    <div style="background-color: #fff">
        <!-- 顶部图片 -->
        <div class="head">
            <div class="pure_top"></div>
        </div>
        <!-- 第二层-播放全部- -->
        <div class="second">
            <van-icon name="play-circle" style="color: red; font-size: 30px; margin-left: 15px" />
            <span>播放全部</span>
            <van-icon name="passed" style="color: #000; font-size: 30px; margin-left: 55%" />
        </div>
        <!-- 歌曲列表 -->
        <div class="third">
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
            <div class="card">
                <img
                    src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                    alt=""
                />
                <div>Always online(温柔男声)</div>
                <div>嘉琪先生</div>
                <van-icon name="play-circle-o" class="play-circle-o" />
                <van-icon name="more-o" class="more-o" />
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
export default {
    name: 'DailyRecommendation',
    setup() {
        return {};
    },
    components: {
        VanIcon: Icon,
    },
};
</script>

<style lang="less" scoped>
.head {
    .pure_top {
        width: 100%;
        height: 200px;
        position: relative;
        z-index: 100;
        overflow: hidden;
    }
    .pure_top::after {
        content: '';
        width: 140%;
        height: 200px;
        position: absolute;
        left: -20%;
        top: 0;
        z-index: 100;
        border-radius: 0 0 130px 130px;
        background-image: url('@/assets/images/Found/headDaily.jpg');
        background-size: 100% 100%;
    }
}
.second {
    display: flex;
    margin-top: 10px;

    span:nth-child(2) {
        margin-left: 15px;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        font-weight: 700;
    }
}
.third {
    margin-top: 20px;

    .card {
        position: relative;
        height: 80px;
        img:nth-child(1) {
            position: absolute;
            margin-left: 15px;
            border-radius: 10px;
            height: 55px;
        }
        div:nth-child(2) {
            position: absolute;
            left: 80px;
            top: 10px;
            font-size: 13px;
        }
        div:nth-child(3) {
            position: absolute;
            left: 80px;
            top: 30px;
            font-size: 10px;
            color: rgb(122, 119, 119);
        }
        .play-circle-o {
            position: absolute;
            top: 10px;
            right: 55px;
            color: rgb(122, 119, 119);
        }
        .more-o {
            position: absolute;
            top: 10px;
            right: 10px;
            color: rgb(122, 119, 119);
        }
    }
}
</style>
