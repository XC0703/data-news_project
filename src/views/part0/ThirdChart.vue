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
        37.1,0.42,0.01,31.48
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
                    text:'中国不同年龄段人口死亡率折线图',
                    left:"center",
                    subtext:"数据来源：《中国缓和医疗发展蓝皮书（2019-2020）》",
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
                    formatter:'{b}年{a}：'+'{c}‰',
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
                            fontSize:12,
                            // rotate:30,
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
                        data: ['1岁以内婴儿', '1-4岁儿童', '5~39岁青少年和壮年','60岁以上老人'],
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: false,
                        name:'单位(‰)',
                        type: 'value',
                        min:0,
                        max:40,
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
                        barWidth: 25,
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


