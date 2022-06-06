<template>
    <div style="background-color: #fff; height: 93.5vh">
        <div class="head">
            <van-tabs type="card">
                <!-- 数字专辑 -->
                <van-tab title="数字专辑榜">
                    <div class="myBody">
                        <van-tabs title-active-color="#e60026" :lazy-render="true">
                            <van-tab title="日榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 排名上升的标签为up，下降的为down，不变的为no（无序加<span>） -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                            <div class="down">
                                                <van-icon name="arrow-down" />
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                            <div class="no">
                                                <van-icon name="minus" />
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="周榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 排名上升的标签为up，下降的为down，不变的为no（无序加<span>） -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                            <div class="down">
                                                <van-icon name="arrow-down" />
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                            <div class="no">
                                                <van-icon name="minus" />
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <!-- 年度总榜只做了2022年 -->
                            <van-tab title="2022年榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 年榜无排名变动 -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="总榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 总榜无排名变动 -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                        </van-tabs>
                    </div>
                </van-tab>
                <!-- 数字单曲 -->
                <van-tab title="数字单曲榜">
                    <div class="myBody">
                        <van-tabs title-active-color="#e60026" :lazy-render="true">
                            <van-tab title="日榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 排名上升的标签为up，下降的为down，不变的为no（无序加<span>） -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                            <div class="down">
                                                <van-icon name="arrow-down" />
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                            <div class="no">
                                                <van-icon name="minus" />
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="周榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 排名上升的标签为up，下降的为down，不变的为no（无序加<span>） -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                            <div class="down">
                                                <van-icon name="arrow-down" />
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                            <div class="up">
                                                <van-icon name="arrow-up" />
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                            <div class="no">
                                                <van-icon name="minus" />
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <!-- 年度总榜只做了2022年 -->
                            <van-tab title="2022年榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 年榜无排名变动 -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="总榜">
                                <div class="first">
                                    <span>榜单每半小时更新1次&nbsp;</span>
                                    <van-icon name="warning-o" />
                                </div>
                                <!-- 前三的左侧排名标签为three，非前三标签为noThree -->
                                <!-- 总榜无排名变动 -->
                                <div class="second">
                                    <div class="card">
                                        <div>
                                            <div class="three">1</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">2</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="three">3</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div>
                                            <div class="noThree">4</div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://p1.music.126.net/J9t-hmMYJMVXpFdMgHMB6A==/109951167149343548.jpg?param=177y177"
                                                alt=""
                                            />
                                            <div>I NEVER DIE</div>
                                            <div>已售1170张</div>
                                            <div>支持</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                        </van-tabs>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import { Tab, Tabs, Icon } from 'vant';
export default {
    name: 'HotList',
    setup() {
        return {};
    },
    components: {
        VanTabs: Tabs,
        VanTab: Tab,
        VanIcon: Icon,
    },
};
</script>

<style lang="less" scoped>
.head {
    padding-top: 20px;
}

.myBody {
    border-top: 1px solid #eee;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;

    .first {
        margin-top: 10px;
        font-size: 13px;
    }
    .second {
        margin-top: 10px;

        .card {
            display: flex;
            margin-top: 10px;
            height: 80px;

            div:nth-child(1) {
                width: 10%;

                .three {
                    margin-left: 20%;
                    margin-top: 50%;
                    font-size: 25px;
                    font-weight: 700;
                    color: #c0112e;
                }
                .noThree {
                    margin-left: 20%;
                    margin-top: 50%;
                    font-size: 20px;
                    color: rgb(122, 119, 119);
                }
                .up {
                    margin-left: 20%;
                    font-size: 10px;
                    font-weight: 700;
                    color: #e60026;

                    span {
                        font-weight: 400;
                        color: rgb(122, 119, 119);
                    }
                }
                .down {
                    margin-left: 20%;
                    font-size: 10px;
                    font-weight: 700;
                    color: rgb(25, 165, 165);

                    span {
                        font-weight: 400;
                        color: rgb(122, 119, 119);
                    }
                }
                .no {
                    margin-left: 20%;
                    font-size: 10px;
                    font-weight: 700;
                    color: rgb(122, 119, 119);
                }
            }
            div:nth-child(2) {
                position: relative;
                width: 85%;
                margin-left: 10px;

                img {
                    position: absolute;
                    border-radius: 4px;
                    height: 80px;
                }
                div:nth-child(2) {
                    position: absolute;
                    top: 20px;
                    margin-left: 90px;
                    font-size: 14px;
                }
                div:nth-child(3) {
                    position: absolute;
                    top: 45px;
                    margin-left: 90px;
                    font-size: 10px;
                    color: rgb(122, 119, 119);
                }
                div:nth-child(4) {
                    position: absolute;
                    top: 30px;
                    right: 10px;
                    padding: 2px 10px;
                    border: #e60026 solid 1px;
                    border-radius: 10px;
                    font-size: 13px;
                    color: #e60026;
                }
            }
        }
    }
}
</style>
