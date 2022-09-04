<template>
    <div class="container">
        <div id="container7"></div>
        <div class="handleBtn iconfont" @click="handleClick()">{{flag?"&#xe87a;":"&#xe87c;"}}</div>
    </div>
</template>

<script>
import $ from "jquery";
let echarts = require("echarts/lib/echarts");

export default {
    name: "ThirdChart",
    data() {
        return {
            flag:false,
            isPC:true,
            isRender:false,
        };
    },
    mounted() {
    // 初始化加载
    this.createListener();
    },

    methods: {
    //监听窗口滚动
    windowScrollListener() {
        // 判断屏幕类型
        if(window.screen.width>window.screen.height){
            this.isPC = true;
        }else{
            this.isPC = false;
        }
        //获取操作元素最顶端到页面顶端的垂直距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollTop)
        if(scrollTop<6090){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>6090&&scrollTop<=7650&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>7650){
            this.isRender=false;
        }
    },
    createListener() {
        this.mapChart();
        //添加滚动监听事件
        //在窗口滚动时调用监听窗口滚动方法
        window.addEventListener('scroll', this.windowScrollListener);
    },
    // 配置渲染map
    mapChart() {
        var chartDom = document.getElementById("container7");
        let myChart = echarts.getInstanceByDom(chartDom)
        if(myChart!=null){
            myChart.dispose();
            myChart = echarts.init(chartDom);
            window.addEventListener("resize", ()=>{
                myChart.resize();
            });
        }else{
            myChart = echarts.init(chartDom);
        }
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(newArr){
            var updateFrequency = 1000;
            var startIndex = 0;
            var score = [];
            for(let index = 0;index<newArr[startIndex].score.length;index++){
                if(index!=70){
                score.push(newArr[startIndex].score[index])
                }else{
                    score[index] = {
                        value:newArr[startIndex].score[index],
                        itemStyle: {
                            color: '#F0CC79',
                        }
                    }
                }
            }
            var option = {
                title:{
                    text:'部分国家死亡质量指数排名动态变化图',
                    left:"center",
                    textStyle:{
                        fontSize:15,
                        color:'#000'
                    },
                    subtext:"数据来源：Economist Intelligence Unit. The 2015 Quality of Death Index., 2021年全球死亡质量专家评估的跨国比较",
                    subtextStyle: {
                        fontSize: 8,
                        color:'#333'
                    }
                },
                tooltip:{
                    trigger: 'axis',
                    formatter: function (params) {
                        return params[0].name+"<br/>分数："+params[0].value+"<br/>排名："+(params[0].dataIndex+1)
                    }
                },
                grid: {
                    top: '6%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    max: 100,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(21,26,56, 0.4)',
                            type: 'dashed'
                        }
                    },
                    axisLabel: {
                        show: true,
                        fontSize: 6,
                        color:'#000'
                    },
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    max: 80,
                    boundaryGap: true,
                    data: newArr[startIndex].country,
                    axisLabel: {
                        show: true,
                        fontSize: 6,
                        color:'#000'
                    },
                    axisTick:{
                        show:true,
                        alignWithLabel:true,
                        lineStyle:{
                            color:'#000'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'rgba(21,26,56, 0.4)'
                        }
                    },
                    animationDuration: 300,
                    animationDurationUpdate: 300
                },
                series: [{
                    realtimeSort: true,
                    seriesLayoutBy: 'column',
                    type: 'bar',
                    barWidth:6,
                    itemStyle: {
                        color: '#0F2650'
                    },
                    label: {
                        show: true,
                        precision: 1,
                        position: 'right',
                        color:'#0F2650',
                        valueAnimation: true,
                        fontFamily: 'monospace',
                    },
                    data: score
                }],
                animationDuration: 1000,
                animationDurationUpdate: 1000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear',
                // 右下角年份显示
                graphic: {
                    elements: [{
                        type: 'text',
                        right: 30,
                        bottom: 60,
                        style: {
                            text: newArr[startIndex].year,
                            font: 'bolder .4rem monospace',
                            fill: 'rgba(21,26,56, 0.4)'
                        },
                        z: 100
                    }]
                }
            };
            // 循环数据
            for (let i = startIndex; i < newArr.length - 1; ++i) {
                (function (i) {
                    setTimeout(function () {
                        updateYear(newArr[i + 1]);
                    }, (i + 1) * updateFrequency);
                })(i);
            }
            // 更新年份
            function updateYear(year) {
                var score = [];
                for(let index = 0;index<year.score.length;index++){
                    if(index!=52){
                    score.push(year.score[index])
                    }else{
                        score[index] = {
                            value:year.score[index],
                            itemStyle: {
                                color: '#F0CC79',
                            }
                        }
                    }
                }
                option.yAxis.data = year.country;
                option.series[0].data = score;
                option.graphic.elements[0].style.text = year.year;
                myChart.setOption(option);
                window.addEventListener("resize", ()=>{
                    myChart.resize();
                });
            }
            myChart.setOption(option);
        }
        //展示
        function showMap() {
            // myChart.clear();
            $.getJSON(`/static/data/rankingData.json`, data=>{
                var newArr=[{
                    year:"2015",
                    country:[],
                    score:[]
                },{
                    year:"2021",
                    country:[],
                    score:[]
                }]
                for(let i = 0;i<data.length;i++){
                    for(let j = 0;j<data[0].content.length;j++){
                        newArr[i].country.push((data[i].content)[j].name)
                        newArr[i].score.push((data[i].content)[j].value)
                    }
                }
                initEcharts(newArr)
            })
        }
        this.showMap=showMap;
        showMap()
    },
    handleClick(){
        this.flag=!this.flag
        if(this.flag){
            // 记得每次调用之前先清除上一次的定时器
            this.showMap();
            clearInterval(this.timer);
            this.timer = setInterval(this.showMap,4000);
        }else{
            clearInterval(this.timer);
        }
    }
    }
};
</script>

<style lang="scss" scoped>
.container{
    width: 4.5rem;
    height: 9rem;
    margin: 0rem auto 0;
    position: relative;
    #container7 {
        width: 4.5rem;
        height: 9rem;
        margin: 0rem auto 0;
    }
    .handleBtn{
        position: absolute;
        top:.01rem;
        right:.7rem;
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
        background-color: #666;
    }
}

</style>


