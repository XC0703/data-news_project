<template>
    <div class="container">
        <div id="part1_container2"></div>
    </div>
</template>

<script>
import $ from "jquery";
let echarts = require("echarts/lib/echarts");

export default {
    name: "FifthChart",
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
        if(scrollTop<6770){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>6770&&scrollTop<=8230&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>8230){
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
        var chartDom = document.getElementById("part1_container2");
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
            var startIndex = 1;
            var score = [];
            for(let index = 0;index<newArr[startIndex].score.length;index++){
                if(index!=52){
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
                    text:'2021年',
                    left:"center",
                    textStyle:{
                        fontSize:20,
                        color:'#000'
                    },
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
    }
};
</script>

<style lang="scss" scoped>
.container{
    width: 4.5rem;
    height: 9rem;
    margin: 0rem auto 0;
    position: relative;
    #part1_container2 {
        width: 4.5rem;
        height: 9rem;
        margin: 0rem auto 0;
    }
}

</style>


