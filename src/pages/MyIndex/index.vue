<template>
    <!-- “我的”页面有 “最近播放” “云盘” “已购（单曲）” “我的好友（关注）（粉丝）” “收藏（无声音、K歌、直播）”界面 -->
    <router-view />
    <div v-if="$route.path == '/myindex'">
        <!-- 主页头部 -->
        <div class="myHead">
            <img src="https://avatars.githubusercontent.com/u/98140702?s=96&v=4" alt="你的头像" class="headImage" />
            <div class="headName">cloudmoon</div>
            <div class="headInfor">
                2 关注&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;1
                粉丝&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Lv.7
            </div>
        </div>
        <!-- 功能列表 -->
        <div class="second">
            <van-grid :gutter="5" class="grid" icon-size="25px" column-num="4">
                <van-grid-item v-for="value in grids" :key="value.id" :icon="value.icon" :text="value.text"
                    :to="value.path" class="gridIn" />
            </van-grid>
        </div>
        <!-- 喜欢的音乐 -->
        <div class="third">
            <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                alt="喜欢的音乐" />
            <div>我喜欢的音乐</div>
            <div>43首</div>
            <div>
                <van-icon name="like" />
                <span>心动模式</span>
            </div>
        </div>
        <!-- 创建歌单 -->
        <div class="fourth">
            <div>
                <span>创建歌单(3个)</span>
                <van-icon name="more-o" class="more-o" />
                <van-icon name="plus" class="plus" />
            </div>
            <div>
                <!-- 歌单 -->
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="歌单占位" />
                    <div>歌单占位</div>
                    <div>43首</div>
                    <div>
                        <van-icon name="more-o" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="歌单占位" />
                    <div>歌单占位</div>
                    <div>43首</div>
                    <div>
                        <van-icon name="more-o" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="歌单占位" />
                    <div>歌单占位</div>
                    <div>43首</div>
                    <div>
                        <van-icon name="more-o" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 收藏歌单 -->
        <div class="fourth">
            <div>
                <span>收藏歌单(5个)</span>
                <van-icon name="more-o" class="more-o" />
            </div>
            <div>
                <!-- 歌单 -->
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="收藏歌单占位" />
                    <div>收藏歌单占位</div>
                    <div>xxxxx</div>
                    <div>
                        <van-icon name="more-o" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="收藏歌单占位" />
                    <div>收藏歌单占位</div>
                    <div>xxxxx</div>
                    <div>
                        <van-icon name="more-o" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="收藏歌单占位" />
                    <div>收藏歌单占位</div>
                    <div>xxxxx</div>
                    <div>
                        <van-icon name="more-o" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <Tip />
        <!-- 防止底部遮挡 -->
        <div style="height: 60px; width: 100%"></div>
    </div>
</template>

<script>
import { Grid, GridItem, Swipe, SwipeItem, Icon, Divider } from 'vant';
import { Image as VanImage } from 'vant';
import Tip from '@/components/Tip';
export default {
    name: 'MyIndex',
    setup() {
        // 功能列表
        const grids = [
            { id: 1, icon: 'play-circle', text: '最近播放', path: '/myindex/rencently' },
            { id: 2, icon: 'graphic', text: '本地/下载', path: '/myindex/local-download' },
            { id: 3, icon: 'live', text: '云盘', path: '/myindex/cloudpan' },
            { id: 4, icon: 'shop-collect', text: '已购', path: '/myindex/buy' },
            { id: 5, icon: 'manager', text: '我的好友', path: '/myindex/friends' },
            { id: 6, icon: 'like', text: '收藏和赞', path: '/myindex/collection-praise' },
            { id: 7, icon: 'audio', text: '我的播客', path: '/myindex/index-podcast' },
            { id: 8, icon: 'new', text: '音乐罐子', path: '/myindex/musicbottle' },
        ];
        return { grids };
    },
    components: {
        Tip,
        VanGrid: Grid,
        VanGridItem: GridItem,
        VanSwipe: Swipe,
        VanSwipeItem: SwipeItem,
        VanImage: VanImage,
        VanIcon: Icon,
        VanDivider: Divider,
    },
};
</script>

<style lang="less" scoped>
.myHead {
    position: relative;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    width: 90%;
    height: 110px;
    background-color: #fff;

    .headImage {
        position: absolute;
        margin: 0 auto;
        top: -30%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50px;
        height: 75px;
    }

    .headName {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 15px;
        font-weight: 700;
    }

    .headInfor {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 10px;
        color: rgb(122, 119, 119);
    }
}

.second {
    .grid {
        margin: 0 auto;
        margin-top: 10px;
        width: 92%;
    }

    .gridIn {
        color: #e60026;
    }
}

.third {
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    height: 90px;
    width: 90%;
    background-color: #fff;
    border-radius: 10px;

    img:nth-child(1) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 15px;
        height: 60px;
        border-radius: 10px;
    }

    div:nth-child(2) {
        position: absolute;
        top: 30%;
        left: 85px;
        font-size: 15px;
    }

    div:nth-child(3) {
        position: absolute;
        top: 52%;
        left: 85px;
        font-size: 10px;
        font-weight: 700;
        color: rgb(122, 119, 119);
    }

    div:nth-child(4) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        border: #eee solid 1px;
        padding: 3px;
        width: 70px;
        border-radius: 10px;
        font-size: 13px;
    }
}

.fourth {
    margin: 0 auto;
    margin-top: 10px;
    padding-top: 15px;
    border-radius: 10px;
    width: 90%;
    background-color: #fff;

    div:nth-child(1)::after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    div:nth-child(1) {
        font-size: 10px;
        color: rgb(122, 119, 119);

        span {
            float: left;
            margin-left: 15px;
        }

        .plus {
            float: right;
            font-size: 22px;
            margin-right: 15px;
        }

        .more-o {
            float: right;
            font-size: 22px;
            margin-right: 10px;
        }
    }

    div:nth-child(2) {
        .card {
            position: relative;
            height: 90px;

            img:nth-child(1) {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                margin-left: 15px;
                height: 60px;
                border-radius: 10px;
            }

            div:nth-child(2) {
                position: absolute;
                top: 30%;
                left: 85px;
                font-size: 15px;
                color: #000;
            }

            div:nth-child(3) {
                position: absolute;
                top: 52%;
                left: 85px;
                font-size: 10px;
                font-weight: 700;
                color: rgb(122, 119, 119);
            }

            div:nth-child(4) {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 10px;
                font-size: 22px;
                color: rgb(122, 119, 119);
            }
        }
    }
}
</style>
