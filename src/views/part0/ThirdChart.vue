<template>
    <div id="part0_container2"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "ThirdChart",
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
        if(scrollTop<1040){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>1040&&scrollTop<=2160&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>2160){
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
        var data_bar = [
        0.24,0.03,0.02,0.02,0.03,0.03,0.04,0.06,0.09,0.13,0.21,0.34,0.54,2.94
        ];
        var chartDom = document.getElementById("part0_container2");
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
                    text:'中国不同年龄段人口死亡率图',
                    left:"center",
                    subtext:"数据来源：中国疾病预防控制中心,《中国死因监测数据集2019》",
                    subtextStyle: {
                        fontSize: 12
                    },
                    textStyle:{
                        fontSize:17
                    }
                },
                grid: {
                    top: '15%',
                    left: '5%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    formatter:function(params){
                        if(params[0].name=='60~'){
                            return '60岁以上年龄段人口死亡率为'+params[0].value+'%'
                        }else{
                            return params[0].name+'岁年龄段人口死亡率为'+params[0].value+'%'
                        }
                    },
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
                        axisLabel: {
                            formatter: '{value}',
                            // fontSize: 14,
                            // margin: 20,
                            color: '#0F2650',
                            fontSize:11,
                            // rotate:30,
                            interval: 0
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#0F2650',
                            },
                        },
                        axisTick: {
                            show: true,
                            alignWithLabel:true
                        },
                        data: ['0~1', '1~5', '5~10','10~15','15~20','20~25', '25~30','30~35','35~40','40~45','45~50','50~55','55~60','60~'],
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: false,
                        name:'单位(百分之)',
                        type: 'value',
                        min:0,
                        max:3,
                        axisLabel: {
                            formatter:'{value}',
                            color: '#0F2650',
                        },
                        nameTextStyle: {
                            color: '#0F2650',
                            fontSize: 12,
                            lineHeight: 20,
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
                        type: 'bar',
                        barWidth: 10,
                        zlevel: 3,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgba(15,38,80,1)',
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(15,38,80,0.7)',
                                        },
                                    ],
                                    false
                                ),
                            borderColor: '#0F2650',
                        },
                        data: data_bar,
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
#part0_container2 {
  width: 8.6rem;
  height: 4.4rem;
  margin: 0rem auto 0;
}
</style>


