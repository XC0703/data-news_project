<template>
    <!--时间线-->
    <div class="timeLine" style="overflow: hidden;">
        <div class="timeLine__contents">
            <div class="timeLine__contents__content">
                <p id="content1">{{timeLineList[0].year}}</p>
                <p id="content2">{{timeLineList[0].info}}</p>
            </div>
        </div>
        <div class="timeLine__line">
            <div class="timeLine__line__btns">
                <div class="timeLine__line__btns__leftBtn btn iconfont" @click="moveLeft">&#xe779;</div>
                <div class="timeLine__line__btns__rightBtn btn iconfont" @click="moveRight">&#xe775;</div>
            </div>
            <div class="ul_box">
                <ul class="my_timeline" ref="mytimeline">
                    <li class="my_timeline_item" 
                        v-for="(item,index) in timeLineList" 
                        :class="{active: index == timeIndex}"
                        :key="index"
                    >
                        <!--圈圈节点-->
                        <div 
                            class="my_timeline_node"
                            @click="changeActive(index)"
                        ></div>
                        <!--线-->
                        <div class="my_timeline_item_line" v-if="index!=6"></div>
                        <!--标注-->
                        <div class="my_timeline_item_content">
                            {{item.timestamp}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from "jquery";

export default {
    name: 'SecondChart',
    data() {
        return {
            timeIndex: 0,
            timeLineList: [{
                    timestamp: '1960年',
                    year: '1960年',
                    info: '英国护士西西里·桑德斯(Dame Cicely Saunders, 1918－2005)首次系统总结出对临终患者提供全面医疗照护的方案。'
                }, {
                    timestamp: '1967年',
                    year: '1967年',
                    info: '桑德斯在伦敦创办了圣克里斯托弗安宁院(St. Christopher Hospice)。这是世界上第一所现代意义的安宁疗护机构。'
                }, {
                    timestamp: '20世纪60—70年代',
                    year: '20世纪60—70年代',
                    info: '桑德斯及其创办的圣克里斯托弗安宁院，在英国以及其他西方发达国家引起了广泛而热烈的响应。'
                }, {
                    timestamp: '1974年',
                    year: '1974年',
                    info: '耶鲁大学护理学院院长弗洛伦斯·沃尔德(Florence Wald)与两名儿科医生及一名牧师建立了康涅狄格临终关怀中心。'
                }, {
                    timestamp: '20世纪80年代',
                    year: '20世纪80年代',
                    info: '英国、美国、加拿大等发达国家将安宁疗护纳入到国家医疗卫生体制与医疗保险体系中，生前预嘱(advance directive)等配套措施也得到法律支持，而以缓解晚期患者疼痛为主要目标的缓和医学(palliative medicine)，正式成为医学的一个重要分支。'
                }, {
                    timestamp: '1987年',
                    year: '1987年',
                    info: '全世界第一份缓和医疗专业学术期刊《缓和医学》(Palliative Medicine)在英国正式创刊。'
                }, {
                    timestamp: '21世纪以来',
                    year: '21世纪以来',
                    info: '在世界卫生组织等国际组织的推动下，安宁疗护稳步发展，成为全球医疗照顾的一个基本要素，也成为衡量国家文明程度的窗口。'
            }]
        }
    },
    methods: {
        getContent(){
            var contents = document.querySelectorAll('.timeLine .timeLine__contents .timeLine__contents__content p')
            return contents;
        },
        changeActive(index) {
            this.getContent()[0].style.opacity = 0;
            this.getContent()[1].style.opacity = 0;
            this.timeIndex = index;
            var that = this;
            setTimeout(function(){
            that.getContent()[0].innerHTML=that.timeLineList[that.timeIndex].year
            that.getContent()[1].innerHTML=that.timeLineList[that.timeIndex].info
            that.getContent()[0].style.opacity = 1;
            that.getContent()[1].style.opacity = 1;
            },500);
        },
        moveLeft()  {
            this.getContent()[0].style.opacity = 0;
            this.getContent()[1].style.opacity = 0;
            if(this.timeIndex!=0){
                this.timeIndex--;
            }
            var that = this;
            setTimeout(function(){
            that.getContent()[0].innerHTML=that.timeLineList[that.timeIndex].year
            that.getContent()[1].innerHTML=that.timeLineList[that.timeIndex].info
            that.getContent()[0].style.opacity = 1;
            that.getContent()[1].style.opacity = 1;
            },500);
        },
        moveRight() {
            this.getContent()[0].style.opacity = 0;
            this.getContent()[1].style.opacity = 0;
            if(this.timeIndex!=6){
                this.timeIndex++;
            }
            var that = this;
            setTimeout(function(){
            that.getContent()[0].innerHTML=that.timeLineList[that.timeIndex].year
            that.getContent()[1].innerHTML=that.timeLineList[that.timeIndex].info
            that.getContent()[0].style.opacity = 1;
            that.getContent()[1].style.opacity = 1;
            },300);
        },
    }
}
</script>

<style lang="scss" scoped>
.timeLine{
    width: 100%;
    height: 4rem;
    position: relative;
    &__contents{
        width: 100%;
        height: 2rem;
        position: relative;
        margin-bottom: .5rem;
        &__content{
        width: 4rem;
        height: 2.2rem;
        position: absolute;
        left: 50%;
        margin-left: -2rem;
        background-color: #fff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,0.20);
        p:nth-child(1){
            font-size: .4rem;
            word-wrap:break-word;
            width: 3.5rem;
            height: .4rem;
            margin-top: .4rem;
            position: absolute;
            left:50%;
            margin-left: -1.75rem;
            text-align: center;
            line-height: .4rem;
            color:#F0CC79;
            transition: all 0.5s ease;
        }
        p:nth-child(2){
            width: 100%;
            height: 1.4rem;
            padding:.1rem;
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: center;
            font-size: .18rem;
            color:#666;
            animation: showIn 1s ease;
            transition: all 0.2s ease;
        }
        }
        &__content:hover{
            box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.20);
        }
    }
    &__line{
        width: 100%;
        height: 1rem;
        padding:0 .2rem 0 .2rem;
        position: relative;
        &__btns{
            .btn{
                width: .4rem;
                height: .4rem;
                font-size: .4rem;
                border: .02rem solid #F0CC79;
                color:#F0CC79;
                border-radius: 50%;
                text-align: center;
                line-height: .4rem;
                position: absolute;
                // top:50%;
                margin-top:-1.6rem;
                z-index: 99999;
            }
            .btn:hover{
                background-color: #F0CC79;
                cursor: pointer;
            }
            &__leftBtn{
                left: 2rem;
            }
            &__rightBtn{
                right: 2rem;
            }
        }
    }
}
.ul_box {
    width: 100%;
    height: 1rem;
    overflow: hidden;
    position: absolute;
    top:50%;
    margin-top: -.5rem;
    .my_timeline{
        display: flex;
        margin:0.35rem 0 0 .4rem;
        padding:0 .1rem 0 .1rem
    }
}
.my_timeline_item {
    width: 2.5rem;
    flex: left;
    position: relative;
}
.my_timeline_node {
    box-sizing: border-box;
    border-radius: 50%;
    background-color:#0F2650,;
    width: .28rem; 
    height: .28rem;
    cursor: pointer;
    transition:all .5s ease;
}
.my_timeline_item_line {
    width: 100%;
    height: .1rem;
    margin: -.14rem 0 0 .28rem;
    border-top: .02rem solid #0F2650;
    border-left: none;
}
.my_timeline_item_content {
    margin: .1rem 0 0 -1.1rem;
    color: #999;
    font-size:.18rem;
}
.my_timeline_item:nth-child(7){
    .my_timeline_item_content{
    position: absolute;
    top:.24rem;
    left:0.75rem;
    }
}
.my_timeline_item.active{
    .my_timeline_node{
        background-color: #fff !important;
        border: .06rem solid #F0CC79;
        width: .38rem; 
        height: .38rem;
        position: absolute;
        top:-.04rem
    }
    .my_timeline_item_line{
        margin: .14rem 0 0 .28rem;
    }
    .my_timeline_item_content{
        position: absolute;
        top:-.4rem;
        left:1rem;
    }
}
.my_timeline_item:nth-child(3).active{
    .my_timeline_item_content{
    left:0.5rem;
    }
}
.my_timeline_item:nth-child(5).active{
    .my_timeline_item_content{
    left:0.7rem;
    }
}
.my_timeline_item:nth-child(7).active{
    .my_timeline_item_content{
    left:0.85rem;
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
</style>