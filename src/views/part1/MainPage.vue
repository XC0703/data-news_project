<template>
    <div class="content">
        <div class="content__word">
            <p>“安宁疗护”一词由“Hospice Care”翻译而来，并不意味着放弃治疗，也不是安乐死。</p>
            <p>在我国，安宁疗护是“临终关怀”、“缓和医疗”、“姑息治疗”等概念的统称，</p>
            <p>是指为疾病终末期或老年患者在临终前提供身体、心理、精神等方面的照料和人文关怀等服务，</p>
            <p>控制痛苦和不适症状，提高生命质量，帮助患者舒适、安详、有尊严地离世。</p>
            <p>而安宁疗护在世界范围内的起源，最早可以追溯到1960年</p>
            <div class="chartBoxs" style="height:4rem">
                <div class="chartBox" style="height:4rem">
                    <FirstChart />
                </div> 
            </div>
            <div class="chartBoxs" style="height:9rem">
                <div class="chartBox" style="height:9rem">
                    <div class="chartBox__chart">
                        <SecondChart />
                    </div>
                    <div class="chartBox__word">
                        <span>【国内渊源】</span>
                        <span>1987年，北京松堂关怀医院的成立拉开了我国安宁疗护发展的序幕。
                            随后我国安宁疗护事业历经了数十年的艰难发展，
                            中国死亡质量指数排名也由2015年的71名（倒数第十名）上升至2021年的第53名。
                        </span>
                    </div>
                    <div class="chartBox__img">
                        <img src="../../../public/static/images/contents/part1_element0.png">
                    </div>
                </div> 
            </div>
            <ThirdChart />
        </div>
    </div>
</template>

<script>
import FirstChart from './FirstChart.vue';
import SecondChart from './SecondChart.vue';
import ThirdChart from './ThirdChart';
export default {
    name:'MainPage',
    components:{FirstChart,SecondChart,ThirdChart},
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 480vh;
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
            margin-top: .3rem;
        }
        p:nth-child(1),p:nth-child(4),p:nth-child(5){
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
    height: 4em;
    position: relative;
}
.chartBox{
    width: 100%;
    height: 4rem;
    position: absolute;
    // left:50%;
    // margin-left: -2.5rem !important;
    margin: 0 auto;
    &__chart{
        height: 9rem;
        position: absolute;
        left: 1.5rem;
    }
    &__word{
        width: 5rem;
        height: 2.2rem;
        position: absolute;
        left: 50%;
        margin-right: -2rem;
        top:.4rem;
        // background-color: #fff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
        span:nth-child(1){
            font-size: .3rem;
            word-wrap:break-word;
            width: 3rem;
            height: .4rem;
            margin-top: .4rem;
            position: absolute;
            left:50%;
            margin-left: -1.5rem;
            text-align: center;
            line-height: .4rem;
            transition: all 0.5s ease;
        }
        span:nth-child(2){
            width: 100%;
            padding:.1rem;
            position: absolute;
            right: 0;
            bottom: 0;
            color:#333;
            animation: showIn 1s ease;
            transition: all 0.2s ease;
            height:1.5rem;
            line-height: .4rem;
            text-align: center;
            font-size: .15rem;
        }
    }
    &__img{
        width: 100%;
        height: 100%;
        // position: absolute;
        // left: 50%;
        // margin-right: -1rem;
        // bottom:1.4rem;
        // background-color: #fff;
        // box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>