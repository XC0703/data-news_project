<template>
    <div class="handleBtn iconfont">{{flag?"&#xe87a;":"&#xe87c;"}}</div>
    <div class="summarizeBox">{{summarize}}</div>
    <div class="outerBox">
        <div id="eventBoxs">
            <div 
                :class="{'eventBox': true, 'leftBox': index%2===0,'lastBox':index%listCount==0,'rightBox': index%2===1}"
                v-for="index in listCount"
                :key="index"
            >
                <div class="time">{{events[index+startIndex-1].time}}</div>
                <div class="node_line">
                    <div class="node iconfont">&#xe75c;</div>
                    <div 
                        class="line"
                    ></div>
                </div>
                <div class="content" @click="handleFun($event)">
                    <p>发生的事件</p>
                    <ul>{{events[index+startIndex-1].event}}</ul>
                </div>
                <div class="triangle"></div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ThirdChart",
  mounted(){
    this.slidershow();
  },
  data(){
    return{
        events : [{
            time:'1987年',
            event:'北京松堂关怀医院 中国第一所民办临终关怀医院',
            index:1
        },{
            time:'1988年',
            event:'天津医学院临终关怀研究中心成立（我国第一家临终关怀专门研究机构）',
            index:2
        },{
            time:'1990年',
            event:'上海总工会退休职工管理委员会下属退休职工护理院，开创在护理院中开展临终关怀的先例',
            index:3
        },{
            time:'1992年',
            event:'天津医科大学第二附属医院设立中国首家临终关怀病房',
            index:4
        },{
            time:'1994年',
            event:'卫生部第 35 号令《医疗机构管理条例》和《医疗机构诊疗科目》首次明确临终关怀科为卫生行政部门核定医疗诊疗科目登记注册。',
            index:5
        },{
            time:'1996年',
            event:'《中华人民共和国老年人权益保障法》首次规定保障老年人临终关怀服务需求。',
            index:6
        },{
            time:'2006年',
            event:'原卫生部中医药管理局《城市社区卫生服务机构管理办法（试行）》明确：临终关怀科作为可登记的诊疗科目。',
            index:7
        },{
            time:'2011年',
            event:'原国家卫生部颁布《护理院基本标准（2011版）》（卫医政发〔2011〕21号）将临终关怀科作为必设科室，并在现科室增加家属专门陪伴室。《中国护理事业发展纲要（2011-2015）》首次将临终关怀纳入护理规划和长期医疗护理服务。',
            index:8
        },{
            time:'2012年',
            event:'《中华人民共和国老年人权益保障法》要求：为老年患者开展临终关怀服务。',
            index:9
        },{
            time:'2013年',
            event:'国务院《关于促进健康服务产业发展的若干意见》首次提到临终关怀医院为覆盖全生命周期、内涵丰富、结构合理的健康服务体系的组成部分。',
            index:10
        },{
            time:'2014年',
            event:'我国政府和全球194个成员国向联合国承诺将临终关怀工作作为各自国家卫生体系的重点工作。',
            index:11
        },{
            time:'2015年',
            event:'《国务院关于推进医疗卫生与养老服务相结合的指导意见》对临终关怀工作进行了部署与要求，“要为老年人提供治疗期住院、康复期护理、稳定期生活照料以及临终关怀一体化的健康和养老服务”。',
            index:12
        },{
            time:'2016年4月',
            event:'4月21日，全国政协49次双周协商会实现了在国家层面首次推进全国安宁疗护，依据会议统一大陆地区临终关怀相关术语为“安宁疗护”，明确了安宁疗护的功能定位与内涵。',
            index:13
        },{
            time:'2016年10月',
            event:'10月25日，中共中央、国务院印发并实施《健康中国2030规划纲要》，首次将安宁疗护名词写入纲要，确保安宁疗护作为持续性医疗卫生服务。',
            index:14
        },{
            time:'2017年1月',
            event:'1月，国家卫生和计划生育委员会印发《安宁疗护实践指南（试行）》《安宁疗护中心基本标准（试行）》和《安宁疗护中心管理规范（试行）》。',
            index:15
        },{
            time:'2017年4月',
            event:'4月，国家卫计委第12条文《医疗机构管理条例实施细则》在医疗机构类别中新增安宁疗护中心。',
            index:16
        },{
            time:'2017年10月',
            event:'10月，国家卫计委选定北京市海淀区、吉林省长春市、上海市普陀区、河南省洛阳市和四川省德阳市作为全国第一批安宁疗护工作试点市（区）；并明确了试点工作的八项任务。',
            index:17
        },{
            time:'2018年8月',
            event:'8月29日国务院办公厅在《关于印发深化医药卫生体制改革下半年重点工作任务的通知》指出，在建立优质高效的医疗服务体系中将开展安宁疗护试点作为重点工作任务进行部署。',
            index:18
        },{
            time:'2019年5月',
            event:'5月，国家卫生健康委发布了《关于开展第二批安宁疗护试点工作的重要通知》，明确了在第一批安宁疗护试点工作的基础上，扩大试点范围，确定了上海市为第二批全国安宁疗护试点省（市），北京西城区等71个市（区）为安宁疗护试点市（区）。',
            index:19
        },{
            time:'2019年7月',
            event:'7月，健康中国行动推进委员会印发《健康中国行动(2019—2030年)》，强调要推进安宁疗护试点工作。',
            index:20
        },{
            time:'2019年10月',
            event:'10月，经国务院同意，国家卫健委等8部委联合印发了《关于建立完善老年健康服务体系的指导意见》，对安宁疗护出台了三条新政策',
            index:21
        },{
            time:'2019年12月',
            event:'12月，《基本医疗与健康促进法》规定：各级各类医疗卫生机构应当分工合作，为公民提供预防、保健、治疗、护理、康复、安宁疗护等全方位和全周期的医疗卫生服务。标志着国家已将安宁疗护上升到法律层面推动。12月23日，国家卫健委、民政部、国家医药管理局《关于印发医养结合机构服务指南（试行）》对医养结合机构安宁疗护工作进行规范。',
            index:22
        },{
            time:'2020年12月',
            event:'12月 北京市卫生健康委员会确定北京协和医院与北京医院2家医院为“北京市安宁疗护指导中心”，北京清华长庚医院、北京大学首钢医院、北京市海淀医院等9家医院为“北京市首批安宁疗护示范基地”。',
            index:23
        },{
            time:'2021年3月',
            event:'3月，两会代表提出将安宁疗护纳入医保体系，完善安宁疗护病房建立，加大专业人才培训，推动服务标准建立等重要提案。',
            index:24
        },{
            time:'2022年5月',
            event:'5月，《全国护理事业发展规划（2021-2025年）》指出，加快发展安宁疗护。推动各地按照《安宁疗护中心基本标准和管理规范（试行）》，结合分级诊疗要求和辖区内群众迫切需求，着力增加安宁疗护中心和提供安宁疗护服务的床位数量。制修订《安宁疗护实践指南（试行）》及相关技术标准，不断规范从业人员实践行为。加快培养培训从事安宁疗护服务的专业人员，切实提高生命终末期患者的安宁疗护质量。5月，《“十四五”国民健康规划》指出，我国将稳步扩大全国安宁疗护试点，支持有条件的省市全面开展安宁疗护工作，完善安宁疗护服务模式，建立安宁疗护服务制度体系，提高老年人和疾病终末期患者生命质量。',
            index:25
        },{
            time:'2022年7月',
            event:'7月，《关于进一步推进医养结合发展的指导意见》指出，各地要优化医疗资源布局，通过新建、改扩建、转型发展等方式，加强康复医院、护理院（中心、站）和安宁疗护机构建设，支持老年医学科和安宁疗护科发展。',
            index:26
        }],
        startIndex:0,
        listCount:26,
        summarizeWord:'1987-1994: 起步及探索阶段',
        flag:true,
        open:true,
    }
  },
  methods:{
    slidershow(){
        let that = this
        function sliderOff(){
            var eventBoxsFather = document.getElementById("eventBoxs")
            var eventBoxs = document.querySelectorAll("#eventBoxs .eventBox"); 
            for(let i = 0;i<eventBoxs.length;i++){
                eventBoxs[i].classList.remove('eventBoxActive');
            }
            eventBoxsFather.style.top = '0rem'
            that.summarizeWord='1987-1994: 起步及探索阶段'
            sliderOn()
        }
        function sliderOn(){
            var eventBoxsFather = document.getElementById("eventBoxs")
            var eventBoxs = document.querySelectorAll("#eventBoxs .eventBox");  
            let i =0
            let fun = ()=>{
                eventBoxs[i].classList.add('eventBoxActive');
                if(i==5){
                    that.summarizeWord='1994-2016: 进入政策视野的发展阶段'
                }else if(i==7){
                    eventBoxsFather.style.top = '-8.4rem'
                }else if(i==14){
                    that.summarizeWord='2017-今：全国安宁疗护试点的持续发展阶段'
                    eventBoxsFather.style.top = '-16.8rem'
                }else if(i==21){
                    eventBoxsFather.style.top = '-25.2rem'
                }
                i++;
                if(i>=eventBoxs.length){
                    clearInterval(interval);
                    setTimeout(sliderOff,1000)
                }
            }
            var interval = null;
            window.clearInterval(interval); 
            interval = window.setInterval(fun,1000)
            $('.handleBtn').unbind('click').click(function() { 
                that.flag=!that.flag
                if(that.flag){
                    window.clearInterval(interval);
                    interval = window.setInterval(fun,1000)
                }else{
                    window.clearInterval(interval); 
                } 
            }); 
        }
        sliderOn()
    },
    handleFun(event){
        var clickNode = event.currentTarget;
        this.open = !this.open;
        if(this.open){
            clickNode.lastElementChild.style.maxHeight = 2+'rem';
        }else{
            clickNode.lastElementChild.style.maxHeight = 0+'rem';
        }

          
    }
  },
  computed: {
    summarize() {
        return this.summarizeWord
    }
}

};
</script>

<style lang="scss" scoped>
.handleBtn{
    position: relative;
    top:0.76rem;
    right:-1.7rem;
    width:.2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #fff;
    color:#999;
    text-align: center;
    line-height: .2rem;
    font-size: .1rem;
    cursor: pointer;
}
.handleBtn:hover{
    background-color: orange;
}
.summarizeBox{
    position: relative;
    left:2rem;
    top:0.5rem;
    color:orange;
    font-size: .28rem;
}
.outerBox{
    width: 100%;
    height: 8.4rem;
    position: relative;
    top:1rem;
    overflow: hidden;
    z-index: 999;
}
#eventBoxs{
    width: 100%;
    height: 8.4rem;
    position: relative;
    top:0rem;
    z-index: 999;
    .eventBox {
        width: 100%;
        height: 1.2rem;
        // background-color: #fff;
        position: relative;
        margin-top: -.4rem;
        opacity: 0;
        transition: all 1s ease;
        // 时间盒子样式
        .time{
            width: 1rem;
            height: .3rem;
            position: absolute;
            margin-top: 0rem;
            color: rgb(84, 84, 85);
            text-align: center;
            line-height: .3rem;
            font-size: .15rem;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            cursor: pointer;
        }
        // 中间节点+线的样式
        .node_line{
            width: .3rem;
            height: 1.2rem;
            margin: 0rem auto;
            position: relative;
            top:0rem;
            .node{
                background-color: #fff !important;
                border: .03rem solid rgba(15, 38, 80,0.8);
                width: .3rem; 
                height: .3rem;
                border-radius: 50%;
                position: absolute;
                top:0rem;
                text-align: center;
                line-height: .27rem;
                color:rgba(15, 38, 80,0.8);
                font-size: .2rem;
                font-weight: bolder;
                transition:all 0.5s ease
            }
            .line{
                width: .03rem;
                height: 1.2rem;
                background: rgba(15, 38, 80,0.6);
                margin: .4rem auto;
                position: relative;
            }
        }
        /* 左右事件的样式 */
        .content{
            position: absolute;
            top: 0rem;
            right: 2rem;
            width: 3rem;
            display: inline-block;
            border: .02rem solid rgb(84, 84, 85);
            border-radius: .06rem;
            z-index: 2;
            overflow: hidden;
            cursor: pointer;
            transition: all 1s ease-in-out;
            ul {
                /* 左右事件触摸展开后内容的样式 */
                list-style: none;
                max-height: 0;
                width: 3rem;
                padding: .04rem;
                border-top: .02rem solid rgb(84, 84, 85);
                color: rgb(84, 84, 85);
                font-size: .14rem;
                transition: max-height .5s linear;
            }
            p{
                /* 左右事件的字体样式 */
                color: rgb(84, 84, 85);
                font-weight: bold;
                text-align: center;
            }
        }
        // 三角形角标样式
        .triangle{
            content: '';
            position: absolute;
            top: .1rem;
            right: 5rem;
            width: 0rem;
            height: 0rem;
            border: .09rem solid transparent;
            border-right: .07rem solid rgb(84, 84, 85);
        }
    }
    // 左边的事件盒子
    .leftBox{
        .time{
            right:0;
            margin-right: 5rem;
        }
        .content{
            left: 2rem;
        }
        .triangle{
            left: 5rem;
            transform: rotate(180deg);
        }
    }
    // 右边事件盒子
    .rightBox{
        .time{
            margin-left: 5rem;
        }
    }
    // 加载到的事件盒子
    .eventBoxActive{
        opacity: 1;
        .node_line{
            width: .36rem;
            .node{
                width: .36rem; 
                height: .36rem;
                border: .05rem solid rgba(240, 204, 121,0.8);
                color:rgba(240, 204, 121,0.8)
            }
            .line{
                background-color: rgba(240, 204, 121,0.8);
            }
        }
        .content{
            ul{
                max-height: 2rem;
            }
        }
    }
    // 第七个盒子隐藏线条，不知道为什么v-if会出错
    .eventBoxActive.lastBox{
        .node_line{
            .line{
                opacity: 0;
            }
        }
    }
    // 盒子触碰时
    .eventBox:hover{
        .node_line{
            width: .4rem;
            .node{
                width: .4rem; 
                height: .4rem;
                border: .07rem solid rgba(15, 38, 80,0.8);
                color:rgba(15, 38, 80,0.8)
            }
        }
    }
}
</style>


