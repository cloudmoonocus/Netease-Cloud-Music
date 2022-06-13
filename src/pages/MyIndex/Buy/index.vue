<template>
    <div style="background-color: #fff">
        <div class="out">
            <div class="card">
                <img src="https://p1.music.126.net/SrQOymubpzWHHL2XC97Ylw==/109951167508113796.jpg?param=130y130"
                    alt="">
                <div class="right">
                    <div class="title">看得最远的地方</div>
                    <div class="author">毛不易</div>
                    <div class="buy">已购6534首</div>
                </div>
            </div>
            <div class="card">
                <img src="https://p1.music.126.net/SrQOymubpzWHHL2XC97Ylw==/109951167508113796.jpg?param=130y130"
                    alt="">
                <div class="right">
                    <div class="title">看得最远的地方</div>
                    <div class="author">毛不易</div>
                    <div class="buy">已购6534首</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Buy',
    setup() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.out {
    padding-top: 5px;
    margin-left: 15px;

    .card {
        margin-top: 15px;
        width: 100%;
        height: 120px;

        img {
            float: left;
            height: 120px;
            width: 120px;
        }

        .right {
            float: left;
            margin-left: 10px;
            height: 100px;
            width: 60%;

            .title {
                margin-top: 15px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 20px;
            }

            .author {
                margin-top: 5px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 15px;
                color: rgb(122, 119, 119);
            }

            .buy {
                margin-top: 5px;
                font-size: 15px;
                color: rgb(122, 119, 119);
            }
        }
    }
}
</style>
