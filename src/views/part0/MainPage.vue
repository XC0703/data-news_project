<template>
    <div class="content">
        2019年11月，感到身体不适的马阿姨到当地医院就诊，检查结果是直肠癌全身多发转移。

肿瘤晚期，没有手术、化疗机会，马阿姨的生命已然进入倒计时。

这样的故事，几乎每天都在中国上演


随着中国进入人口老龄化时代，人口死亡率也呈现上升趋势

2021年，中国年末人口总数约为14.126亿，
其中65岁以上老年人口数量约为20059万，占总人口数的14.20%
    二十年间，我国人口死亡率从2001年的6.43‰，上升至2021年的7.18‰
尤其是在65岁以后，死亡率增速明显加大，60岁及以上年龄段的老年人群死亡率高达31.83‰。
其中，很多老年人在临终前都会受到疾病折磨
根据2002至2018年中国老年健康影响因素跟踪调查（CLHLS）中对1998至2018年间去世老年人亲属的调查（有效样本为12429人）有高达82.34%的老年人在临终前生活不能完全自理，37.29%的老年人在痛苦状态下离世，在65至79岁和80至89岁中高龄老年群体中，痛苦离世的老年人均多于安详离世的老年人。
当死亡不可避免，当痛苦被迫延续，安宁疗护拓展了生命的厚度，呵护生命的最后一程。

    </div>
    <FirstChartVue />
</template>

<script>
import FirstChartVue from './FirstChart.vue';
export default {
    name:'MainPage',
    components:{FirstChartVue}
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 200vh;
    background-color: rgb(220, 220, 220);
    position: relative;
}
</style>