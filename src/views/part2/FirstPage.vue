<template>
    <div id="part2" class="content">
        <ScrollTo />
        <img src="../../../public/static/images/bgs/bg2_element0.png" />
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
    width:100%;
    height: 9rem;
    background-color: rgba(0,0,0,0.1);
    position: relative;
    text-align: center;
    img{
        margin-top: 4rem;
    }
}
</style>