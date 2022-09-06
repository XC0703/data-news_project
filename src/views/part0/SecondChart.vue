<template>
    <div id="container2"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");

export default {
  name: "SecondChart",
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
        if(scrollTop<650){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>650&&scrollTop<=1650&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>1650){
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
        6.45, 6.43, 6.41,6.40,6.42,6.51,6.81,6.93,7.06,7.08,7.11,7.14,7.13,7.13,7.12,7.07,7.04,7.06,7.08,7.09,7.07,7.18
        ];
        var chartDom = document.getElementById("container2");
        let myChart;
        let option = {
                title:{
                    top:-13,
                    left:'center',
                    subtext:"数据来源：中国缓和医疗发展蓝皮书（2019-2020）",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                grid: {
                    top: '10%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    formatter:'{b}年{a}：'+'{c}%',
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
                        boundaryGap: false,
                        axisLabel: {
                            formatter: '{value}',
                            fontSize: 10,
                            color: '#0F2650',
                            interval:0,
                            rotate:45,
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
                        data: ['2000', '2001', '2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016', '2017', '2018','2019','2020','2021'],
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: false,
                        type: 'value',
                        min:6,
                        max:7.5,
                        axisLabel: {
                            formatter:'{value}%',
                            color: '#0F2650',
                        },
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: 12,
                            lineHeight: 40,
                        },
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
                        name: '死亡率',
                        type: 'line',
                        smooth: true,
                        showSymbol: true,
                        symbolSize: 3,
                        zlevel: 3,
                        itemStyle: {
                            color: '#0F2650',
                            borderColor: '#a3c8d8',
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
        if(chartDom!=null){
            myChart = echarts.getInstanceByDom(chartDom)
            if(myChart!=null){
                myChart.dispose();
                myChart = echarts.init(chartDom);
                window.addEventListener("resize", ()=>{
                    myChart.resize();
                });
            }else{
                myChart = echarts.init(chartDom);
            }
            myChart.setOption(option);
        }
    }
    }
};
</script>

<style lang="scss" scoped>
#container2 {
  width: 7rem;
  height: 4rem;
  margin: 0rem auto 0;
}
</style>


