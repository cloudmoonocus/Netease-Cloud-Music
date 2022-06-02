<template>
    <div class="bottom">
        <div id="container">
            网易云音乐
            <div id="flip">
                <div><div>Made</div></div>
                <div><div>By</div></div>
                <div><div>Cludmoon</div></div>
            </div>
            严禁商用
        </div>
    </div>
</template>

<style lang="less" scoped>
.bottom {
    @import url('https://fonts.googleapis.com/css?family=Roboto:700');
    font-family: 'Roboto';
    text-align: center;
    margin-top: 10px;

    #container {
        color: #999;
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        display: block;
    }

    #flip {
        height: 35px;
        overflow: hidden;
    }

    #flip > div > div {
        color: #fff;
        padding: 4px 12px;
        height: 45px;
        margin-bottom: 45px;
        display: inline-block;
    }

    #flip div:first-child {
        animation: show 5s linear infinite;
    }

    #flip div div {
        background: #42c58a;
    }
    #flip div:first-child div {
        background: #4ec7f3;
    }
    #flip div:last-child div {
        background: #dc143c;
    }

    @keyframes show {
        0% {
            margin-top: -270px;
        }
        5% {
            margin-top: -180px;
        }
        33% {
            margin-top: -180px;
        }
        38% {
            margin-top: -90px;
        }
        66% {
            margin-top: -90px;
        }
        71% {
            margin-top: 0px;
        }
        99.99% {
            margin-top: 0px;
        }
        100% {
            margin-top: -270px;
        }
    }
}
</style>
