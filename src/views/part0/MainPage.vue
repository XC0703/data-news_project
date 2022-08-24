<template>
    <div class="content">
        <div class="content__word">
            <p>2019年11月，感到身体不适的马阿姨到当地医院就诊，检查结果是直肠癌全身多发转移。</p>
            <p>肿瘤晚期，没有手术、化疗机会，马阿姨的生命已然进入倒计时。</p>
            <p>这样的故事，几乎每天都在中国上演</p>
            <p>随着中国进入人口老龄化时代，人口死亡率也呈现上升趋势</p>
            <p>2021年，中国年末人口总数约为14.126亿，</p>
            <p>其中65岁以上老年人口数量约为20059万，占总人口数的14.20%</p>
            <p> 二十年间，我国人口死亡率从2001年的6.43‰，上升至2021年的7.18‰</p>
            <div class="chartBoxs">
                <div class="chartBox" style="margin-left: -2.5rem !important;">
                    <div class="chartBox__chartBtns">
                        <div 
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn1': currentIndex === 0}"
                            @click="() => handleIndexClick(0)"
                        >人口老龄化折线图</div>
                        <div 
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn2': currentIndex === 1}"
                            @click="() => handleIndexClick(1)"
                        >死亡率折线图</div>
                        <!-- <div
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn': currentIndex === item.index}"
                            v-for="item in categories"
                            :key="item.name"
                            @click="() => handleIndexClick(item.index)"
                        >
                            {{item.name}}
                        </div> -->
                    </div>
                        <div class="chartBox__chart" v-if="currentIndex==0">
                            <FirstChart />
                        </div>
                        <div class="chartBox__chart" v-else-if="currentIndex==1">
                            <SecondChart />
                        </div>
                </div> 
            </div>
            <p>尤其是在65岁以后，死亡率增速明显加大，60岁及以上年龄段的老年人群死亡率高达31.83‰。</p>
            <div class="chartBoxs" style="height:2.3rem">
                <div class="chartBox" style="height:2.3rem;margin-left: -2.5rem !important;" >
                    <div class="chartBox__chart" style="height:2.3rem">
                        <ThirdChart />
                    </div>
                </div> 
            </div>
            <p>其中，很多老年人在临终前都会受到疾病折磨</p>
            <div class="chartBoxs" style="height:3.2rem">
                <div class="chartBox" style="height:3.2rem;margin-left: -2.5rem !important;">
                    <div class="chartBox__chart" style="height:3.2rem">
                        <FourthChart />
                    </div>
                </div> 
            </div>
            <p>根据2002至2018年中国老年健康影响因素跟踪调查（CLHLS）中对1998至2018年间去世老年人亲属的调查（有效样本为12429人）,</p>
            <p>有高达82.34%的老年人在临终前生活不能完全自理，37.29%的老年人在痛苦状态下离世，在65至79岁和80至89岁中高龄老年群体中，痛苦离世的老年人均多于安详离世的老年人。</p>
            <div class="chartBoxs" style="height:4rem">
                <div class="chartBox circlePacking" style="height:4rem;left:0">
                    <div class="chartBox__chart" style="height:4rem">
                        <FifthChart />
                    </div>
                </div> 
                <div class="chartBox circlePacking" style="height:4rem;right:0rem">
                    <div class="chartBox__chart" style="height:4rem">
                        <SixthChart />
                    </div>
                </div> 
            </div>
            <p>当死亡不可避免，当痛苦被迫延续，安宁疗护拓展了生命的厚度，呵护生命的最后一程。</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import FirstChart from './FirstChart.vue';
import SecondChart from './SecondChart.vue';
import ThirdChart from './ThirdChart.vue';
import FourthChart from './FourthChart.vue';
import FifthChart from './FifthChart.vue';
import SixthChart from './SixthChart.vue';

const categories = [
    { name: '人口老龄化折线图',index:0},
    { name:'死亡率折线图',index:1},
]

// Index 切换相关的逻辑
const useTabEffect = () => {
  const currentIndex = ref(categories[0].index)
  const handleIndexClick = (index) => {
    currentIndex.value = index
  }
  return { currentIndex, handleIndexClick}
}
export default {
    name:'MainPage',
    components:{FirstChart,SecondChart,ThirdChart,FourthChart,FifthChart,SixthChart},
    setup(){
        const { currentIndex, handleIndexClick } = useTabEffect()
        return {categories,currentIndex, handleIndexClick}
    }
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
        p:nth-child(3){
            margin-bottom: .2rem;
        }
        p:nth-child(4){
            margin-bottom: .2rem;
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
    height: 2.5rem;
    position: relative;
}
.chartBox{
    width: 5rem;
    height: 2.5rem;
    position: absolute;
    left:50%;
    margin: 0 auto;
    &__chartBtns{
        position: absolute;
        left:1.5rem;
        top:0;
        display: flex;
        width:2.6rem;
        height: .3rem;
        &__chartBtn{
            position: relative;
            flex:1;
            margin-right: .2rem;
            padding-left: .05rem;
            line-height: .3rem;
            border-radius: 25%;
            cursor: pointer;
        }
        &__chartBtn::before{
            content:'';
            box-sizing: border-box;
            display: block;
            background-clip: content-box;
            background-color: #333;
            border: .015rem solid #333;
            width: .13rem;
            height: .13rem;
            padding:.02rem;   
            border-radius: 50%;
            position: absolute;
            left:-.1rem;
            top:.08rem
        }
        .activeBtn1{
            color:  #60A5F0;
        }
        .activeBtn1::before{
            background-color:  #60A5F0;
            border: .015rem solid  #60A5F0;
        }
        .activeBtn2{
            color:  #0F2650;
        }
        .activeBtn2::before{
            background-color:  #0F2650;
            border: .015rem solid  #0F2650;
        }
        &__chartBtn:nth-child(1):hover{
            color:#60A5F0;
        }
        &__chartBtn:nth-child(1):hover::before{
            background-color:  #60A5F0;
            border: .015rem solid  #60A5F0;
        }
        &__chartBtn:nth-child(2):hover{
            color:#0F2650;
        }
        &__chartBtn:nth-child(2):hover::before{
            background-color:  #0F2650;
            border: .015rem solid  #0F2650;
        }
    }
    &__chart{
        width:100%;
        height: 2.2rem;
        position: absolute;
        bottom: 0;
    }
}
.circlePacking{
    width: 50%;
    height: 2.5rem;
    position: absolute;
}
</style>