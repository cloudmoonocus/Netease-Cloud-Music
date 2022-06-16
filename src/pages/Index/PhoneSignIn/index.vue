<template>
    <!-- 输入手机号页面 -->
    <div class="phoneOut" style="background-color: #fff; height:97vh" v-show="loginShow">
        <div>登录体验更多精彩</div>
        <div>未注册手机号登录后将自动创建账号</div>
        <Field v-model.trim="tel" clearable clear-icon="cross" placeholder="请输入手机号(仅支持+86)" maxlength="11"
            class="phoneInput" />
        <Button type="primary" size="large" round color="#e60026" class="phoneButton" @click="next">下一步</Button>
    </div>
    <!-- 输入验证码页面 -->
    <div class="verificationCode" style="background-color: #fff; height:100vh" v-show="!loginShow">
        <div class="please">请输入验证码</div>
        <div class="sendGroup">
            <div class="send">已发送至+86&nbsp;130****5555</div>
            <div class="resetSend">重新发送60s</div>
        </div>
        <password-input :value="verificationValue" :gutter="10" :focused="showKeyboard" :mask="false"
            @focus="showKeyboard = true" class="password-input" />

        <number-keyboard v-model="verificationValue" :show="showKeyboard" @blur="showKeyboard = false" />
    </div>
</template>

<script setup>
import { Field, Button, Toast, PasswordInput, NumberKeyboard } from "vant";
import { ref, watch } from "vue";

// 获取输入的手机号
const tel = ref('');
const loginShow = ref(true)
// 业务判断
function next() {
    if (tel.value) {
        if (tel.value.length < 11) {
            Toast({
                message: '请输入11位的手机号',
            });
        } else {
            loginShow.value = false;
        }
    } else {
        Toast({
            message: '请输入手机号',
        });
    }
}
// 利用正则表达式去除输入的非数字
watch(tel, () => {
    tel.value = tel.value.replace(/[^\d]/g, '')
})
// 验证码内容输入
const verificationValue = ref('123');
const showKeyboard = ref(true);

</script>

<style lang="less" scoped>
.phoneOut {
    padding: 20px;
    padding-bottom: 0;

    div:nth-child(1) {
        font-size: 20px;
    }

    div:nth-child(2) {
        margin-top: 5px;
        font-size: 15px;
        color: rgb(122, 119, 119);
    }

    .phoneInput {
        width: 95%;
        margin: 0 auto;
        margin-top: 5px;
        border-bottom: 1px solid rgb(122, 119, 119);
    }

    .phoneButton {
        height: 40px;
        margin-top: 30px;
    }
}

.verificationCode {

    .please {
        padding-top: 20px;
        margin-left: 20px;
        font-size: 20px;
    }

    .sendGroup {
        margin-top: 5px;
        margin-left: 20px;
        color: rgb(122, 119, 119);

        .send {
            font-size: 13px;
        }

        .resetSend {
            margin-top: 5px;
            font-size: 13px;
        }
    }

    .password-input {
        margin-top: 30px;
    }

}
</style>