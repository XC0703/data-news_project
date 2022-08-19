<template>
    <div class="content">
        <div class="content__word">
            <p>“安宁疗护”一词由“Hospice Care”翻译而来，并不意味着放弃治疗，也不是安乐死。</p>
            <p>在我国，安宁疗护是“临终关怀”、“缓和医疗”、“姑息治疗”等概念的统称，</p>
            <p>是指为疾病终末期或老年患者在临终前提供身体、心理、精神等方面的照料和人文关怀等服务，</p>
            <p>控制痛苦和不适症状，提高生命质量，帮助患者舒适、安详、有尊严地离世。</p>
            <p>而安宁疗护在世界范围内的起源，最早可以追溯到1960年</p>
            <div class="chartBoxs" >
                <div class="chartBox">
                    <FirstChart />
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import FirstChart from './FirstChart.vue';
export default {
    name:'MainPage',
    components:{FirstChart},
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 300vh;
    background-color: rgb(220, 220, 220);
    position: relative;
    &__word{
        position: absolute;
        width:100%;
        height: 100%;
        left:50%;
        margin-left: -50%;
        p{
            height:.4rem;
            line-height: .4rem;
            text-align: center;
            font-size: .15rem;
        }
        p:nth-child(1){
            margin-bottom: .3rem;
        }
        p:nth-child(4){
            margin-bottom: .3rem;
        }
        p:nth-child(1)::first-letter{
            font-size: .5rem;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: italic;
        }
    }
}
.chartBoxs{
    width: 100%;
    height: 10rem !important;
    position: relative;
}
.chartBox{
    width: 100%;
    height: 10rem;
    position: absolute;
    // left:50%;
    // margin-left: -2.5rem !important;
    margin: 0 auto;
}
</style>