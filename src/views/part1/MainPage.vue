<template>
    <div class="part1_content">
        <div class="content">
            <div class="content__word">
                <div class="content__word__special" style="margin-top:0.5rem;margin-bottom:0.8rem;">
                    <span>定义</span>
                </div>
                <div class="content__word__leftAlign" style="margin-top:.5rem">
                    <p class="firstLine">H<b>ospice Care</b>最初引入我国时被译为 “临终关怀”，在中国台湾、中国香港等地区也被学者称为“安宁疗护”、“缓和医疗”等。</p>
                </div>
                <div class="content__word__leftAlign" style="margin-top:.1rem">
                    <p>2017年，国家卫生健康委员会印发了《安宁疗护实践指南（试行）》《安宁疗护中心基本标准和管理规范（试行）》，明确了<b>“安宁</b></p>
                    <p><b>疗护”</b>这个名称。自此，我国在政策层面上将“临终关怀”、“缓和医疗”等概念统称为“安宁疗护”，<b>既包含“缓和医疗”中减轻</b></p>
                    <p><b>患者痛苦的医学治疗，也包含了“临终关怀”对患者在心理、生理、社会和灵性上的照护和关切，</b>强调医学学科视角下的医疗照护服</p>
                    <p>务体系。</p>
                </div>
                <div class="content__word__leftAlign" style="margin-top:.2rem">
                    <p>具体而言，安宁疗护的主要内容包括<b>疼痛及其他症状控制</b>（如呼吸困难、咳嗽咳痰、咯血等），<b>舒适照护，心理、精神及社会支持等</b></p>
                    <p>。安宁疗护为疾病终末期或老年患者在临终前提供身体、心理、精神等方面的照料和人文关怀等服务，控制痛苦和不适症状，提高生</p>
                    <p>命质量，帮助患者舒适、安详、有尊严地离世。</p>
                </div>
                <div class="chartBoxs" style="height: 7rem;margin-top: -0.5rem;margin-bottom: -0.8rem;">
                    <div class="chartBox" style="height: 7rem;width: 100%;margin-left: -50% !important;">
                        <div class="chartBox__chart" style="height:7rem;">
                            <FirstChart />
                        </div>
                        <div class="chartBox__chartTips iconfont" style="height:.2rem;left:0.6rem;top:1.7rem;">&#xe601;点击某一节点可进行子节点的展开与收起</div>
                    </div> 
                </div>
                <div class="content__word__special" style="margin-top:0.3rem;margin-bottom:0.8rem;">
                    <span class="specialSpan">国际渊源</span>
                </div>
                <div class="content__word__leftAlign" style="margin-top:.1rem">
                    <p>安宁疗护在世界范围内的起源，最早可以追溯到1960年。世界范围内普遍认为，现代缓和医疗由英国护士西西里.桑德斯（Cicely </p>
                    <p>Saunders）于上世纪六十年代创始，她被称为现代缓和医疗之母。</p>
                </div>
                <div class="chartBoxs" style="height: 4rem;margin-top: .3rem;">
                    <div class="chartBox" style="height: 4rem;width: 100%;margin-left: -50% !important;">
                        <div class="chartBox__chart" style="height:4rem;">
                            <SecondChart />
                        </div>
                        <div class="chartBox__chartTips iconfont" style="left:0.6rem;bottom:.2rem;">&#xe601;点击两侧圆环及中间实心圆按钮可进行事件切换显示</div>
                    </div> 
                </div>
                <div class="content__word__special" style="margin-top:0.5rem;margin-bottom:1rem;">
                    <span class="specialSpan">国内渊源</span>
                </div>
                <div class="content__word__leftAlign" style="margin-top:.1rem">
                    <p>谈及安宁疗护的国内发展，1987年，北京松堂关怀医院的成立拉开了我国安宁疗护发展的序幕。
                        部分学者将我国安宁疗护发展分为起</p>
                    <p>步及探索（1987年-1994年）、进入政策视野（1994年-2016年）、全国安宁疗护试点持续发展（2017年-今）三个阶段。</p>
                </div>
                <div class="chartBoxs" style="height: 8rem;width:100%;position: relative;margin-top:.3rem">
                    <ThirdChart />
                </div>
                <div class="content__word__leftAlign" style="margin-top:.1rem">
                    <p>我国安宁疗护事业历经了数十年的艰难发展，取得了进步。中国死亡质量指数排名由2015年的<b>71名</b>上升至2021年的第<b>53名</b>。</p>
                </div>
                <div class="chartBoxs" style="height: 9rem;margin-top: .1rem;">
                    <div class="chartTitle">
                        <div class="chartTitle__title">部分国家(地区)死亡质量指数排名图</div>
                        <div class="chartTitle__subTitle">数据来源：Economist Intelligence Unit. The 2015 Quality of Death Index., 2021年全球死亡质量专家评估的跨国比较</div>
                    </div>
                    <div class="chartBox" style="height: 9rem;width: 4.5rem;margin-left: -5rem !important;">
                        <div class="chartBox__chart" style="height:9rem">
                            <FourthChart />
                        </div>
                    </div> 
                    <div class="chartBox" style="height: 9rem;width: 4.5rem;margin-right: 0.6rem !important;">
                        <div class="chartBox__chart" style="height:9rem">
                            <FifthChart />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="content_bg" style="bottom: 30.4rem;">
            <ContentView />
        </div>
        <div class="content_bg" style="bottom: 22.8rem;">
            <ContentView />
        </div>
        <div class="content_bg" style="bottom: 15.2rem;">
            <ContentView />
        </div>
        <div class="content_bg" style="bottom: 7.6rem;">
            <ContentView />
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
import FifthChart from './FifthChart';
import ContentView from '../../components/ContentView.vue'
export default {
    name:'MainPage',
    components:{FirstChart,SecondChart,ThirdChart,FourthChart,FifthChart,ContentView},
}
</script>

<style lang="scss" scoped>
.part1_content{
    width:100%;
    height:38rem;
    text-align: center;
    position: relative;
}
.content{
    background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
    height: 100%;
    width:100%;
    background-color: rgba(220, 220, 220,0.8);
    position: relative;
    margin:0 auto;
    z-index: 1;
    &__word{
        position: absolute;
        width:10.2rem;
        height: 100%;
        left:50%;
        margin-left: -5.1rem;
        &__special{
            width:100%;
            color:#0F2650;
            margin-top:.8rem;
            position: relative;
            margin-bottom: 1.3rem;
            span{
                display: inline-block;
                font-family: "STKaiti";
                height:.4rem;
                width: 2rem;
                line-height: .4rem;
                text-align: center;
                font-size: .22rem;
                font-weight:bold;
                position: absolute;
                left:50%;
                margin-left: -1rem;
            }
            span::before{
                content:'';
                display: block;
                position: absolute;
                width:.15rem;
                height: .02rem;
                left:.65rem;
                top:.18rem;
                background: #0F2650;
            }
            span::after{
                content:'';
                display: block;
                position: absolute;
                width:.15rem;
                height: .02rem;
                right:.65rem;
                top:.18rem;
                background: #0F2650;
            }
            .specialSpan::before{
                left:.42rem;
            }
            .specialSpan::after{
                right:.42rem;
            }
        }
        &__leftAlign{
            width: 100%;
            margin-bottom: .24rem;
            p{
                width: 10rem;
                height:.32rem;
                margin: 0 auto;
                text-align: left;
                font-size: .17rem;
                font-family: "STHeiti";
                line-height: .32rem;
            }
            .firstLine{
                height:.5rem;
                line-height: .4rem;
            }
            .firstLine::first-letter{
                font-size: .35rem;
                font-style: italic;
            }
        }
        &__centerAlign{
            p{
                height:.32rem;
                line-height: .32rem;
                text-align: center;
                font-size: .17rem;
            }
        }
    }
}
.content_bg{
    width:100%;
    height: 7.6rem;
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
        font-size: .17rem;
        color:#333;
        font-weight: bolder;
    }
    &__subTitle{
        position: absolute;
        left:50%;
        margin-left: -3.2rem;
        top:.2rem;
        width:13rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        color:#777;
        font-weight: 500;
        font-size: .23rem;
        -webkit-transform-origin-x: 0;
        -moz-transform-origin-x: 0;
        -ms-transform-origin-x: 0;
        -o-transform-origin-x:0;
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