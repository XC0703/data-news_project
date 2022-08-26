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
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn1': currentIndex1 === 0}"
                            @click="() => handleIndexClick1(0)"
                        >人口老龄化折线图</div>
                        <div 
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn2': currentIndex1 === 1}"
                            @click="() => handleIndexClick1(1)"
                        >死亡率折线图</div>
                        <!-- <div
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn': currentIndex1 === item.index}"
                            v-for="item in categories1"
                            :key="item.name"
                            @click="() => handleIndexClick1(item.index)"
                        >
                            {{item.name}}
                        </div> -->
                    </div>
                        <div class="chartBox__chart" v-if="currentIndex1==0">
                            <FirstChart />
                        </div>
                        <div class="chartBox__chart" v-else-if="currentIndex1==1">
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
            <p>根据2002至2018年中国老年健康影响因素跟踪调查（CLHLS）中</p>
            <p>对1998至2018年间去世老年人亲属的调查（有效样本为12429人）,</p>
            <p>有高达82.34%的老年人在临终前生活不能完全自理，</p>
            <p>37.29%的老年人在痛苦状态下离世，</p>
            <p>在65至79岁和80至89岁中高龄老年群体中，</p>
            <p>痛苦离世的老年人均多于安详离世的老年人。</p>
            <div class="chartBoxs" style="height: 4.7rem;">
                <div class="chartBox" style="height: 4.7rem; margin-left: -2.5rem !important;">
                    <div class="chartBox__chartTitle">最后疾病期间症状和疼痛比例图</div>
                    <div class="chartBox__chartSubtitle">数据来源：中国缓和医疗发展蓝皮书（2019-2020）</div>
                    <div class="chartBox__chartBtns" style="top:.5rem">
                        <div 
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn1': currentIndex2 === 0}"
                            @click="() => handleIndexClick2(0)"
                        >所有离世者</div>
                        <div 
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn2': currentIndex2 === 1}"
                            @click="() => handleIndexClick2(1)"
                        >排除意外和事故的离世者</div>
                        <!-- <div
                            :class="{'chartBox__chartBtns__chartBtn': true, 'activeBtn': currentIndex1 === item.index}"
                            v-for="item in categories1"
                            :key="item.name"
                            @click="() => handleIndexClick1(item.index)"
                        >
                            {{item.name}}
                        </div> -->
                    </div>
                        <div class="chartBox__chart" style="height: 4rem;" v-if="currentIndex2==0">
                            <FifthChart />
                        </div>
                        <div class="chartBox__chart" style="height: 4rem;" v-else-if="currentIndex2==1">
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

const categories1 = [
    { name: '人口老龄化折线图',index:0},
    { name:'死亡率折线图',index:1},
]
const categories2 = [
    { name: '所有离世者',index:0},
    { name:'排除意外和事故的离世者',index:1},
]

// Index 切换相关的逻辑
const useTabEffect = () => {
  const currentIndex1 = ref(categories1[0].index)
  const currentIndex2 = ref(categories2[0].index)
  const handleIndexClick1 = (index) => {
    currentIndex1.value = index
  }
  const handleIndexClick2 = (index) => {
    currentIndex2.value = index
  }
  return { currentIndex1, handleIndexClick1,currentIndex2, handleIndexClick2}
}
export default {
    name:'MainPage',
    components:{FirstChart,SecondChart,ThirdChart,FourthChart,FifthChart,SixthChart},
    setup(){
        const { currentIndex1, handleIndexClick1, currentIndex2, handleIndexClick2 } = useTabEffect()
        return {categories1,currentIndex1, handleIndexClick1, categories2,currentIndex2, handleIndexClick2}
    }
}
</script>

<style lang="scss" scoped>
.content{
    background-repeat: no-repeat !important;
	background-size: cover !important;
    height: 390vh;
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
        p:nth-child(1),p:nth-child(9),p:nth-child(13),p:nth-child(20){
            margin-top: .3rem;
        }
        p:nth-child(3),p:nth-child(4),p:nth-child(7),p:nth-child(9),p:nth-child(11),p:nth-child(18){
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
    height: 2.5rem;
    position: relative;
}
.chartBox{
    width: 5rem;
    height: 2.5rem;
    position: absolute;
    left:50%;
    margin: 0 auto;
    &__chartTitle{
        position: absolute;
        left:.8rem;
        top:0rem;
        width:3.4rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        color:#333;
        font-weight: bolder;
    }
    &__chartSubtitle{
        position: absolute;
        left:1.65rem;
        top:.2rem;
        width:3.4rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        color:#999;
        font-weight: bolder;
        font-size: .14rem;
        -webkit-transform-origin-x: 0;
        transform: scale(0.50);
    }
    &__chartBtns{
        position: absolute;
        left:1.3rem;
        top:0;
        display: flex;
        width:3.4rem;
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