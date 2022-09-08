<template>
    <div class="part1_content">
        <!-- <div class="content_bg" style="top: 0;">
            <ContentView />
        </div> -->
        <div class="content">
            <div class="content__word">
                <div class="content__word__leftAlign" style="margin-top:.5rem">
                    <p class="firstLine">“安宁疗护”一词由“Hospice Care”翻译而来，并不意味着放弃治疗，
                        也不是安乐死。在我国，<b>安宁疗护是“临终关怀”、“缓和医</b></p>
                    <p><b>疗”、“姑息治疗”等概念的统称</b>，是指为疾病终末期或老年患者在临终前提供身体、
                        心理、精神等方面的照料和人文关怀等服务，控制痛苦</p>
                    <p>和不适症状，提高生命质量，帮助患者舒适、安详、有尊严地离世。而安宁疗护在世界范围内的起源，最早可以追溯到1960年。</p>
                </div>
                <div class="chartBoxs" style="height: 4rem;margin-top: .8rem;">
                    <div class="chartBox" style="height: 4rem;width: 100%;margin-left: -50% !important;">
                        <div class="chartBox__chart" style="height:4rem;">
                            <FirstChart />
                        </div>
                        <div class="chartBox__chartTips iconfont" style="left:0.6rem;bottom:.2rem;">&#xe601;点击两侧圆环及中间实心圆按钮可进行事件切换显示</div>
                    </div> 
                </div>
                <div class="content__word__leftAlign" style="margin-top:.5rem">
                    <p>而谈及安宁疗护的国内发展，1987年，北京松堂关怀医院的成立拉开了我国安宁疗护发展的序幕。
                        部分学者将我国安宁疗护发展分为起步及</p>
                    <p>探索（1987-1994）、进入政策视野（1994-2016）、全国安宁疗护试点持续发展（2017-今）三个阶段。</p>
                </div>
                <div class="chartBoxs" style="height: 8.4rem;width:100%;position: relative;margin-top:.3rem">
                    <SecondChart />
                </div>
                <div class="content__word__leftAlign" style="margin-top:.5rem">
                    <p>我国安宁疗护事业历经了数十年的艰难发展，取得了进步。中国死亡质量指数排名由2015年的71名
                        （倒数第十名）上升至2021年的第53名。</p>
                </div>
                <div class="chartBoxs" style="height: 9rem;margin-top: .5rem;">
                    <div class="chartTitle">
                        <div class="chartTitle__title">部分国家(地区)死亡质量指数排名图</div>
                        <div class="chartTitle__subTitle">数据来源：Economist Intelligence Unit. The 2015 Quality of Death Index., 2021年全球死亡质量专家评估的跨国比较</div>
                    </div>
                    <div class="chartBox" style="height: 9rem;width: 4.5rem;margin-left: -5rem !important;">
                        <div class="chartBox__chart" style="height:9rem">
                            <ThirdChart />
                        </div>
                    </div> 
                    <div class="chartBox" style="height: 9rem;width: 4.5rem;margin-right: 0.6rem !important;">
                        <div class="chartBox__chart" style="height:9rem">
                            <FourthChart />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="content_bg" style="bottom: 0;">
            <ContentView />
        </div>
    </div>
</template>

<script>
import FirstChart from './FirstChart.vue';
import SecondChart from './SecondChart.vue';
import ThirdChart from './ThirdChart';
import FourthChart from './FourthChart';
import ContentView from '../../components/ContentView.vue'
export default {
    name:'MainPage',
    components:{FirstChart,SecondChart,ThirdChart,FourthChart,ContentView},
}
</script>

<style lang="scss" scoped>
.part1_content{
    width:100%;
    height:30rem;
    text-align: center;
    position: relative;
}
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    height: 100%;
    width:10.2rem;
    background-color: rgba(220, 220, 220,0.8);
    position: relative;
    margin:0 auto;
    z-index: 1;
    &__word{
        position: absolute;
        width:100%;
        height: 100%;
        left:50%;
        margin-left: -50%;
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
    height: 100vh;
    @media
    screen and (orientation:portrait) and (max-device-width:768px) and (max-device-height:1024px),
    screen and (orientation:landscape) and (max-device-width:1024px) and (max-device-height:768px) {
        height:7rem
    }
    position: absolute;
    background-color: #fff;
}
.chartBoxs{
    width: 100%;
    position: relative;
    margin-top: .2rem;
    margin-bottom: .2rem;
}
.chartTitle{
    width:100%;
    height:.5rem;
    position: relative;
    &__title{
        position: absolute;
        left:50%;
        margin-left: -1.7rem;
        top:0rem;
        width:3.4rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        font-size: .16rem;
        color:#333;
        font-weight: bolder;
    }
    &__subTitle{
        position: absolute;
        left:50%;
        margin-left: -2.5rem;
        top:.2rem;
        width:10rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        color:#999;
        font-weight: bolder;
        font-size: .18rem;
        -webkit-transform-origin-x: 0;
        transform: scale(0.50);
    }
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
        position: absolute;
    }
    &__chartTips{
        position:absolute;
        left: 0;
        bottom: 0;
        color:#666;
        font-size: .12rem;
    }
}
</style>