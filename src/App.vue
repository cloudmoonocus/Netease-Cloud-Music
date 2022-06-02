<template>
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';

export default {
    name: 'App',
    setup() {},
    components: {
        MyHeader,
        MyFooter,
    },
};
</script>

<style></style>
