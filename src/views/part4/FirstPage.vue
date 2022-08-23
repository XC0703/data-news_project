<template>
    <div id="part4" class="content" :style="{background: 'url(/static/images/bgs/bg2.png)'}">
        <ScrollTo />
        <div class="content__leftBox">
            <img src="../../../public/static/images/bgs/bg2_element0.png" alt="白云">
        </div>
        <div class="content__rightBox">
            尾声
        </div>
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
    position: relative;
    &__leftBox{
        width:7rem;
        height: 3.5rem;
        position: absolute;
        left:0;
        bottom: 0;
        animation: showIn 0.5s ease;
        img{
            width: 100%;
            height: 100%;
        }
    }
    &__rightBox{
        position: absolute;
        width:6rem;
        height:2rem;
        left:50%;
        margin-left:-2.5rem;
        margin-top:2rem;
        font-size: .8rem;
        text-align: center;
        line-height: 1.1rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
        color: #fff;
        animation: showIn 1.5s ease;
    }
}
@keyframes showIn{
    0%{
        opacity: 0;
    }
    20%{
        opacity: 0;
    }
    100%{
    opacity: 1;
    }
}
</style>