<template>
    <div id="part4" class="content" :style="{background: 'url(../../../static/images/bgs/bg4.png)'}">
        <ScrollTo />
    </div>
</template>

<script>
import ScrollTo from '@/components/ScrollTo.vue';
export default {
    name:'FirstPage',
    components:{ScrollTo}
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 100vh;
    @media
    screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
    screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
        height:7rem
    }
    position: relative;
}
</style>