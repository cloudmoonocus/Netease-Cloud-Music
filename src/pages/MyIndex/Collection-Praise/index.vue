<template>
    <div style="background-color: #fff;">
        <van-tabs line-height="7px">
            <van-tab title="专辑">
                <div class="album">
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                    <div class="card">
                        <img src="https://p2.music.126.net/XYXw4JhqbH4szy0IwQ4cmA==/109951165825546595.jpg?param=130y130"
                            alt="" />
                        <div>Always online(温柔男声)</div>
                        <div>嘉琪先生&nbsp;&nbsp;8首</div>
                        <van-icon name="more-o" class="more-o" />
                    </div>
                </div>
            </van-tab>
            <van-tab title="视频">
                <div class="video">
                    <div class="card">
                        <div></div>
                        <div>《弱者的命运》原曲：尚雯婕《致勇敢的我们》</div>
                        <div>一泽万EZ</div>
                        <div>12分钟前赞过</div>
                    </div>
                    <div class="card">
                        <div></div>
                        <div>《弱者的命运》原曲：尚雯婕《致勇敢的我们》</div>
                        <div>一泽万EZ</div>
                        <div>12分钟前赞过</div>
                    </div>
                    <div class="card">
                        <div></div>
                        <div>《弱者的命运》原曲：尚雯婕《致勇敢的我们》</div>
                        <div>一泽万EZ</div>
                        <div>12分钟前赞过</div>
                    </div>
                    <div class="card">
                        <div></div>
                        <div>《弱者的命运》原曲：尚雯婕《致勇敢的我们》</div>
                        <div>一泽万EZ</div>
                        <div>12分钟前赞过</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="专栏">内容 3</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tab, Tabs, Icon } from 'vant';

export default {
    name: 'Collection-Praise',
    setup() {
        return {};
    },
    components: {
        VanTabs: Tabs,
        VanTab: Tab,
        VanIcon: Icon
    }
};
</script>

<style lang="less" scoped>
.album {
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

.video {
    margin-top: 20px;

    .card {
        margin-top: 15px;
        position: relative;
        height: 100px;

        div:nth-child(1) {
            position: absolute;
            left: 15px;
            top: -5px;
            background-image: url(http://p6.music.126.net/obj/w5nDkMOCwrDCmDDDi8Om/15031378431/c3b2/511a/e7d8/11a4a2d5df64702520d5ee5a23f26278.data);
            background-size: cover;
            border-radius: 10px;
            width: 180px;
            height: 100px;
        }

        div:nth-child(2) {
            position: absolute;
            left: 210px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 13px;
        }

        div:nth-child(3) {
            position: absolute;
            left: 210px;
            top: 45px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            font-size: 10px;
            color: rgb(122, 119, 119);
        }

        div:nth-child(4) {
            position: absolute;
            left: 210px;
            top: 60px;
            font-size: 10px;
            color: rgb(122, 119, 119);
        }
    }
}
</style>
