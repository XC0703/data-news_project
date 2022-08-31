<template>
    <div id="part0" class="content" :style="{background: 'url(/static/images/bgs/bg0.png)'}">
        <ScrollTo />
        <div class="content__topBox">Hospice Care</div>
        <!-- <div class="content__middleBox">
            温和地<br/>走进那个良夜
        </div>
        <div class="content__bottomBox">
            <div class="content__bottomBox__word">安宁疗护，是生死之间供生命之船停泊的港湾</div>
            <div class="content__bottomBox__word">当太阳的火焰熄灭，每个人终将迎来自己的“良夜”</div>
            <div class="content__bottomBox__word">当生命之船无奈鸣笛，即将伴着暮色驶出人间</div>
            <div class="content__bottomBox__word">人们或许可以选择，更加温和地走进那个良夜……</div>
        </div> -->
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
	background-size: 100% 100% !important;
    height: 100vh;
    @media
    screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
    screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
        height:7rem
    }
    width:100%;
    position: relative;
    &__topBox{
        color:#fff;
        width: 1rem;
        height: .2rem;
        position: absolute;
        left:50%;
        margin-left: -.5rem;
        margin-top:.8rem;
        text-align: center;
        line-height: .2rem;
        font-style: italic;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: .15rem;
        animation: showIn 0.5s ease;
    }
    &__middleBox{
        position: absolute;
        width:5rem;
        height:5rem;
        left:50%;
        margin-left:-2.5rem;
        margin-top:1rem;
        font-size: .8rem;
        text-align: center;
        line-height: 1.1rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
        color: #fff;
        animation: showIn 1s ease;
    }
    &__bottomBox{
        position: absolute;
        width:5rem;
        height:5rem;
        left:50%;
        margin-left:-2.5rem;
        text-align: center;
        color:#fff;
        margin-top:3.2rem;
        animation: fadeIn 1.5s ease;
        &__word{
            font-style: italic;
            line-height: .5rem;
            font-size: .15rem;
        }
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
@keyframes fadeIn{
from{opacity:0;margin-top:5.6rem;}

to{opacity:1;margin-top:3.2rem;}
}
</style>