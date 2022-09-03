<template>
    <div id="part1" class="content">
        <ScrollTo />
    </div>
</template>

<script>
import ScrollTo from '@/components/ScrollTo.vue';
export default {
    name:'FirstPage',
    components:{ScrollTo},
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    background:url('/public/static/images/bgs/bg1.png');
    height: 100vh;
        @media
        screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
        screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
            height:7rem
        }
    position: relative;
}
</style>