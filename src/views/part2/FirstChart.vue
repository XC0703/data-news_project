<template>
    <div id="container8"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "FirstChart",
  data() {
    return {
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
        if(scrollTop<8950){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>8950&&scrollTop<=9990&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>9990){
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
        var data_line = [
        2,2,23,12,1,40,57,12,22,32,22,27,39,31,66,28,15,28  
        ];
        var chartDom = document.getElementById("container8");
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
        function initEcharts(){
            let option = {
                title:{
                    text: '国家卫健委官网安宁疗护相关词条数量变化图',
                    x:'center',
                    textStyle:{
                        fontSize:15
                    },
                    top:-3,
                    left:'center',
                    subtext:"数据来源：国家卫健委",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    formatter:'{b}年{a}：'+'{c}',
                    axisPointer: {
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(255,255,255,0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(255,255,255,1)', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255,255,255,0)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisLabel: {
                            interval:0,
                            rotate:45,
                            formatter: '{value}',
                            fontSize: 10,
                            // margin: 20,
                            color: '#0F2650',
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#0F2650',
                            },
                        },
                        axisTick: {
                            show: true,
                            alignWithLabel:true
                        },
                        data: ['1994', '2000', '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020', '2021'],
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: false,
                        type: 'value',
                        min:0,
                        max:70,
                        name:'单位(条)',
                        nameTextStyle:{
                            color: '#0F2650', // 文字颜色
                            fontSize:10
                        },                      
                        axisLabel: {
                            formatter:'{value}',
                            color: '#0F2650',
                        },
                        // nameTextStyle: {
                        //     color: '#fff',
                        //     fontSize: 12,
                        //     lineHeight: 40,
                        // },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#0F2650',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: '安宁疗护相关词条数量',
                        type: 'line',
                        smooth: true,
                        showSymbol: true,
                        symbolSize: 3,
                        zlevel: 3,
                        itemStyle: {
                            color: '#0F2650',
                            borderColor: '#0F2650',
                        },
                        lineStyle: {
                            width: 1,
                            color: '#0F2650',
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(15,38,80,0.2)',
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(15,38,80,0)',
                                    },
                                ],
                                false
                            ),
                        },
                        data: data_line,
                    },
                ],
            };
            myChart.setOption(option);
        }
        initEcharts()
    }
    }
};
</script>

<style lang="scss" scoped>
#container8 {
  width: 7rem;
  height: 4rem;
  margin: 0rem auto 0;
}
</style>


