<template>
    <!-- 全部分类的内组件，使用时传参即可 -->
    <div style="background-color: #fff; padding-top: 10px; padding-bottom: 10px">
        <div class="card">
            <img
                src="https://p1.music.126.net/yG30SbJ_8MirwPnhKUecuQ==/109951167437139689.jpg?param=180y180"
                alt="看见什么吃什么"
            />
            <div>
                <div>看见什么吃什么</div>
                <div>温柔男声轻声吟唱</div>
                <div>
                    <span><i class="iconfont icon-bofangzhong"></i>81</span>
                    <span><i class="iconfont icon-kaishi"></i>1038万</span>
                </div>
            </div>
        </div>
        <div class="card">
            <img
                src="https://p1.music.126.net/yG30SbJ_8MirwPnhKUecuQ==/109951167437139689.jpg?param=180y180"
                alt="看见什么吃什么"
            />
            <div>
                <div>看见什么吃什么</div>
                <div>温柔男声轻声吟唱</div>
                <div>
                    <span><i class="iconfont icon-bofangzhong"></i>81</span>
                    <span><i class="iconfont icon-kaishi"></i>1038万</span>
                </div>
            </div>
        </div>
        <div class="card">
            <img
                src="https://p1.music.126.net/yG30SbJ_8MirwPnhKUecuQ==/109951167437139689.jpg?param=180y180"
                alt="看见什么吃什么"
            />
            <div>
                <div>看见什么吃什么</div>
                <div>温柔男声轻声吟唱</div>
                <div>
                    <span><i class="iconfont icon-bofangzhong"></i>81</span>
                    <span><i class="iconfont icon-kaishi"></i>1038万</span>
                </div>
            </div>
        </div>
        <div class="card">
            <img
                src="https://p1.music.126.net/yG30SbJ_8MirwPnhKUecuQ==/109951167437139689.jpg?param=180y180"
                alt="看见什么吃什么"
            />
            <div>
                <div>看见什么吃什么</div>
                <div>温柔男声轻声吟唱</div>
                <div>
                    <span><i class="iconfont icon-bofangzhong"></i>81</span>
                    <span><i class="iconfont icon-kaishi"></i>1038万</span>
                </div>
            </div>
        </div>
        <div class="card">
            <img
                src="https://p1.music.126.net/yG30SbJ_8MirwPnhKUecuQ==/109951167437139689.jpg?param=180y180"
                alt="看见什么吃什么"
            />
            <div>
                <div>看见什么吃什么</div>
                <div>温柔男声轻声吟唱</div>
                <div>
                    <span><i class="iconfont icon-bofangzhong"></i>81</span>
                    <span><i class="iconfont icon-kaishi"></i>1038万</span>
                </div>
            </div>
        </div>
        <div class="card">
            <img
                src="https://p1.music.126.net/yG30SbJ_8MirwPnhKUecuQ==/109951167437139689.jpg?param=180y180"
                alt="看见什么吃什么"
            />
            <div>
                <div>看见什么吃什么</div>
                <div>温柔男声轻声吟唱</div>
                <div>
                    <span><i class="iconfont icon-bofangzhong"></i>81</span>
                    <span><i class="iconfont icon-kaishi"></i>1038万</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Presentation',
    setup() {
        return {};
    },
    components: {},
};
</script>

<style lang="less" scoped>
.card {
    display: flex;
    margin-top: 10px;
    margin-bottom: 15px;

    img {
        margin-left: 20px;
        height: 85px;
        border-radius: 10px;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        div:nth-child(1) {
            margin-left: 15px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            font-size: 14px;
        }

        div:nth-child(2) {
            margin-left: 15px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            font-size: 11px;
            color: rgb(122, 119, 119);
        }
        div:nth-child(3) {
            margin-left: 15px;
            font-size: 10px;
            color: rgb(122, 119, 119);

            span:nth-child(1) {
                i {
                    margin-right: 3px;
                    font-size: 10px;
                }
            }
            span:nth-child(2) {
                margin-left: 10px;

                i {
                    margin-right: 3px;
                    font-size: 10px;
                }
            }
        }
    }
}
</style>
