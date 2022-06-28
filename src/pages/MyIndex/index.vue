<template>
    <!-- “我的”页面有 “最近播放（歌曲）” “已购（单曲）” “我的好友（关注）（粉丝）” “收藏（无：声音、K歌、直播）”界面 -->
    <router-view />
    <div v-if="$route.path == '/myindex'">
        <!-- 主页头部 -->
        <div class="myHead">
            <img src="https://avatars.githubusercontent.com/u/98140702?s=96&v=4" alt="你的头像" class="headImage" />
            <div class="headName">cloudmoon</div>
            <div class="headInfor">
                 2 关注 | 1 粉丝 | Lv.7
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
                <van-icon name="plus" class="plus" @click="isCreateShow" />
            </div>
            <div>
                <!-- 歌单 -->
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="歌单占位" />
                    <div>歌单占位</div>
                    <div>43首</div>
                    <div>
                        <van-icon name="more-o" @click="isMoreShow" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="歌单占位" />
                    <div>歌单占位</div>
                    <div>43首</div>
                    <div>
                        <van-icon name="more-o" @click="isMoreShow" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="歌单占位" />
                    <div>歌单占位</div>
                    <div>43首</div>
                    <div>
                        <van-icon name="more-o" @click="isMoreShow" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 创建歌单弹出层 -->
        <van-action-sheet v-model:show="createShow" title="创建音乐歌单">
            <van-cell-group inset>
                <van-field v-model="newMusicList" placeholder="输入新建歌单标题名" maxlength="40" clearable required autofocus />
                <van-checkbox-group v-model="checked">
                    <van-checkbox name="shareList" class="checked" checked-color="#e60026">设置为共享歌单（和好友一起管理）
                        <van-tag round type="danger">限免30天</van-tag>
                    </van-checkbox>
                    <van-checkbox name="privateList" class="checked" checked-color="#e60026">设置为私密歌单</van-checkbox>
                </van-checkbox-group>
                <van-button round type="primary" size="large" class="submitList" color="#e60026">完成创建</van-button>
            </van-cell-group>
        </van-action-sheet>
        <!-- 收藏歌单 -->
        <div class="fourth">
            <div>
                <span>收藏歌单(5个)</span>
            </div>
            <div>
                <!-- 歌单 -->
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="收藏歌单占位" />
                    <div>收藏歌单占位</div>
                    <div>xxxxx</div>
                    <div>
                        <van-icon name="more-o" @click="isMoreShow" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="收藏歌单占位" />
                    <div>收藏歌单占位</div>
                    <div>xxxxx</div>
                    <div>
                        <van-icon name="more-o" @click="isMoreShow" />
                    </div>
                </div>
                <div class="card">
                    <img src="https://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=140y140"
                        alt="收藏歌单占位" />
                    <div>收藏歌单占位</div>
                    <div>xxxxx</div>
                    <div>
                        <van-icon name="more-o" @click="isMoreShow" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 歌单操作 -->
        <van-action-sheet v-model:show="moreShow" title="歌单:&nbsp;欧美流行">
            <van-button size="large" color="#fff" style="color: #000;" icon="share-o" type="primary" @click="isShare">
                分享
            </van-button>
            <van-button size="large" color="#fff" style="color: #000; margin-bottom: 10px;" icon="delete-o"
                type="primary" @click="deleteList">
                删除
            </van-button>
        </van-action-sheet>
        <!-- 分享弹出层 -->
        <van-share-sheet v-model:show="showShare" title="立即分享" :options="options" style="background-color: #fff;" />
        <!-- 底部 -->
        <Tip />
        <!-- 防止底部遮挡 -->
        <div style="height: 60px; width: 100%"></div>
    </div>
</template>

<script>
import {
    Grid, GridItem, Swipe, SwipeItem, Icon, Divider, ActionSheet,
    Field, CellGroup, Checkbox, CheckboxGroup, Tag, Button, ShareSheet, Dialog, Notify
} from 'vant';
import { Image as VanImage } from 'vant';
import Tip from '@/components/Tip';
import { ref } from 'vue';

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

        // 判断展示创建歌单的弹出框
        const createShow = ref(false);
        function isCreateShow() {
            createShow.value = !createShow.value;
        }
        // 新歌单的名字
        const newMusicList = ref('');
        // 新歌单的选项(只要和选择框的name属性相同就为选中)
        const checked = ref(['no', 'no']);

        // 判断展示歌单操作的弹出框
        const moreShow = ref(false);
        function isMoreShow() {
            moreShow.value = !moreShow.value;
        }
        // 点击分享摁钮的操作
        const showShare = ref(false);
        function isShare() {
            moreShow.value = false;
            showShare.value = true;
        }
        // 分享的图片和文字
        const options = [
            [
                { name: '复制链接', icon: 'link' },
                { name: '微信', icon: 'wechat' },
                { name: '朋友圈', icon: 'wechat-moments' },
                { name: '微博', icon: 'weibo' },
                { name: 'QQ', icon: 'qq' },
            ]
        ];
        // 删除歌单
        function deleteList() {
            moreShow.value = false;
            Dialog.confirm({
                title: 'WARM PROMPT',
                message:
                    '确定要删除此歌单吗?',
            })
                .then(() => {
                    // 确认的调用
                    Notify({ type: 'success', message: '🔔删除成功！', color: "#fff", background: "#e60026" });
                })
                .catch(() => {
                    // 取消的调用
                });
        }


        return { grids, isCreateShow, isMoreShow, createShow, moreShow, newMusicList, checked, isShare, showShare, options, deleteList, Dialog };
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
        VanActionSheet: ActionSheet,
        VanCellGroup: CellGroup,
        VanField: Field,
        VanCheckboxGroup: CheckboxGroup,
        VanCheckbox: Checkbox,
        VanTag: Tag,
        VanButton: Button,
        VanShareSheet: ShareSheet,
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
        font-size: 13px;
        color: rgb(122, 119, 119);

        span {
            float: left;
            margin-left: 15px;
        }

        .plus {
            float: right;
            font-size: 23px;
            margin-right: 10px;
        }

        .more-o {
            float: right;
            font-size: 22px;
            margin-right: 15px;
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

.checked {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 13px;
}

.submitList {
    margin-top: 15px;
    margin-bottom: 20px;
    width: 50%;
    height: 43px;
    margin-left: 50%;
    transform: translateX(-50%);
}

.showShare {
    background-color: #fff;
}
</style>
