<template>
    <div class="part0_content">
        <div class="content">
            <div class="content__word">
                <div class="content__word__special">
                    <span>安宁疗护，是生死之间供生命之船停泊的港湾</span>
                    <span>当太阳的火焰熄灭，每个人终将迎来自己的“良夜”</span>
                    <span>当生命之船无奈鸣笛，即将伴着暮色驶出人间</span>
                    <span>人们或许可以选择，更加温和地走进那个良夜……</span>
                </div>
                <div class="content__word__leftAlign">
                    <p class="firstLine">2019年11月，感到身体不适的马阿姨到当地医院就诊，检查结果是直肠癌全身多发转移。
                    肿瘤晚期，没有手术、化疗机会，马阿姨的生命</p>
                    <p>已然进入倒计时。这样的故事，几乎每天都在中国上演——</p>
                </div>
                <div class="content__word__centerAlign">
                    <p>随着中国进入人口老龄化时代，人口死亡率也呈现上升趋势。</p>
                    <p>2021年，中国年末人口总数约为14.126亿，</p>
                    <p>其中<b>65岁</b>以上老年人口数量约为<b>20059万</b>，占总人口数的<b>14.20%。</b></p>
                    <p> 二十年间，我国人口死亡率从2001年的<b>6.43‰</b>，上升至2021年的<b>7.18‰</b>。</p>
                </div>
                <div class="chartBoxs" style="height: 4.5rem;">
                    <div class="chartBox" style="height: 4.5rem;width: 7rem;margin-left: -3.5rem !important;">
                        <div class="chartBox__chartBtns" style="left:2.05rem;">
                            <div 
                                :class="{'chartBox__chartBtns__chartBtn chartBtn1': true, 'activeBtn1': currentIndex1 === 0}"
                                @click="() => handleIndexClick1(0)"
                            >人口老龄化折线图</div>
                            <div 
                                :class="{'chartBox__chartBtns__chartBtn chartBtn2': true, 'activeBtn2': currentIndex1 === 1}"
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
                        <div class="chartBox__chart" style="height: 4rem;margin-top: .4rem;">
                            <FirstChart v-if="currentIndex1==0"></FirstChart>
                            <SecondChart v-else-if="currentIndex1==1"></SecondChart>
                        </div>
                        <div class="chartBox__chartTips iconfont">&#xe601;点击圆环按钮可进行两图切换显示</div>
                    </div> 
                </div>
                <div class="content__word__centerAlign">
                    <p>尤其是在<b>65岁</b>以后，死亡率增速明显加大，<b>60岁</b>及以上年龄段的老年人群死亡率高达<b>31.83‰</b>。</p>
                </div>
                <div class="chartBoxs" style="height: 4rem;">
                    <div class="chartBox" style="height: 4rem;width: 7rem;margin-left: -3.5rem !important;">
                        <div class="chartBox__chart" style="height:4rem">
                            <ThirdChart />
                        </div>
                    </div> 
                </div>
                <div class="content__word__centerAlign">
                    <p>其中，很多老年人在临终前都会受到疾病折磨</p>
                </div>
                <div class="chartBoxs" style="height:5rem">
                    <div class="chartBox" style="height:5rem;width: 7rem;margin-left: -3.5rem !important;">
                        <div class="chartBox__chart" style="height:5rem">
                            <FourthChart />
                        </div>
                    </div> 
                </div>
                <div class="content__word__leftAlign">
                    <p>根据2002年至2018年中国老年健康影响因素跟踪调查（CLHLS）中对1998至2018年间去世老年人亲属的调查（有效样本为12429人）,有高达</p>
                    <p><b>82.34%</b>的老年人在临终前生活不能完全自理，<b>37.29%</b>的老年人在痛苦状态下离世，<b>在65至79岁和80至89岁中高龄老年群体中，痛苦离世的</b></p>
                    <p><b>老年人均多于安详离世的老年人。</b></p>
                </div>
                <div class="chartBoxs" style="height: 5.9rem;">
                    <div class="chartBox" style="height: 5.9rem;width:5rem;margin-left: -2.5rem !important;">
                        <div class="chartBox__chartTitle">最后疾病期间症状和疼痛比例图</div>
                        <div class="chartBox__chartSubtitle">数据来源：《中国缓和医疗发展蓝皮书（2019-2020）》</div>
                        <div class="chartBox__chartBtns" style="top:0.5rem;left:0.8rem;">
                            <div 
                                :class="{'chartBox__chartBtns__chartBtn chartBtn3': true, 'activeBtn1': currentIndex2 === 0}"
                                @click="() => handleIndexClick2(0)"
                            >所有离世者</div>
                            <div 
                                :class="{'chartBox__chartBtns__chartBtn chartBtn4': true, 'activeBtn2': currentIndex2 === 1}"
                                @click="() => handleIndexClick2(1)"
                            >排除意外和事故的离世者</div>
                        </div>
                        <div class="chartBox__chart" style="height: 5rem;bottom:0.1rem">
                            <FifthChart v-if="currentIndex2==0"></FifthChart>
                            <SixthChart v-else-if="currentIndex2==1"></SixthChart>
                        </div>
                        <div class="chartBox__chartTips iconfont" style="left:-0.7rem;top:.4rem;">&#xe601;点击圆环按钮可进行两图切换显示</div>
                    </div> 
                </div>
                <div class="content__word__special">
                    <span>当死亡不可避免</span>
                    <span>当痛苦被迫延续</span>
                    <span>安宁疗护拓展了生命的厚度</span>
                    <span>呵护生命的最后一程</span>
                </div>
            </div>
        </div>
        <div class="content_bg" style="bottom:24rem;">
            <ContentView />
        </div>
        <div class="content_bg" style="bottom:16rem;">
            <ContentView />
        </div>
        <div class="content_bg" style="bottom:8rem;">
            <ContentView />
        </div>
        <div class="content_bg" style="bottom:0;">
            <ContentView />
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
import ContentView from '../../components/ContentView.vue'
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
    components:{FirstChart,SecondChart,ThirdChart,FourthChart,FifthChart,SixthChart,ContentView},
    setup(){
        const { currentIndex1, handleIndexClick1, currentIndex2, handleIndexClick2 } = useTabEffect()
        return {categories1,currentIndex1, handleIndexClick1, categories2,currentIndex2, handleIndexClick2}
    }
}
</script>

<style lang="scss" scoped>
.part0_content{
    width:100%;
    height:32rem;
    text-align: center;
    position: relative;
}
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    height: 100%;
    width:100%;
    background-color: rgba(220, 220, 220,0.8);
    margin:0 auto;
    position: relative;
    z-index: 1;
    &__word{
        position: absolute;
        width:10.2rem;
        height: 100%;
        left:50%;
        margin-left: -5.1rem;
        &__special{
            width:100%;
            margin-bottom: .6rem;
            color:#333;
            margin-top:.4rem;
            span{
                display: inline-block;
                font-family: "STKaiti";
                height:.4rem;
                width: 100%;
                line-height: .4rem;
                text-align: center;
                font-size: .15rem;
                font-weight:bold;
            }
        }
        &__leftAlign{
            width: 100%;
            margin-bottom: .4rem;
            p{
                width: 10rem;
                height:.4rem;
                margin: 0 auto;
                text-align: left;
                font-size: .16rem;
                font-family: "STHeiti";
                line-height: .4rem;
            }
            .firstLine{
                height:.5rem;
                line-height: .5rem;
            }
            .firstLine::first-letter{
                font-size: .35rem;
                font-style: italic;
            }
        }
        &__centerAlign{
            p{
                height:.4rem;
                line-height: .4rem;
                text-align: center;
                font-size: .16rem;
            }
        }
    }
}
.content_bg{
    width:100%;
    height: 8rem;
    position: absolute;
    background-color: #fff;
}
.chartBoxs{
    width: 100%;
    position: relative;
    margin-top: .2rem;
    margin-bottom: .2rem;
}
.chartBox{
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
        font-size: .16rem;
        color:#333;
        font-weight: bolder;
    }
    &__chartSubtitle{
        position: absolute;
        left:1.3rem;
        top:.2rem;
        width:5rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        color:#999;
        font-weight: bolder;
        font-size: .18rem;
        -webkit-transform-origin-x: 0;
        -moz-transform-origin-x: 0;
        -ms-transform-origin-x: 0;
        -o-transform-origin-x:0;
        transform: scale(0.50);
    }
    &__chartBtns{
        position: absolute;
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
            left:0.15rem;
            top:.084rem
        }
        .chartBtn2::before{
            left:0.26rem;
        }
        .chartBtn3::before{
            left:0.3rem;
        }
        .chartBtn4::before{
            left:-0.05rem;
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
        position: absolute;
    }
    &__chartTips{
        position:absolute;
        left: .2rem;
        top: -.1rem;
        color:#666;
        font-size: .12rem;
    }
}
.circlePacking{
    width: 50%;
    height: 2.5rem;
    position: absolute;
}
</style>