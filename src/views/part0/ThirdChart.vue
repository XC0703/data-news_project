<template>
    <div id="container3"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "ThirdChart",
  data() {
    return {};
  },

  mounted() {
    // 初始化加载
    this.mapChart();
  },

   methods: {
    // 配置渲染map
    mapChart() {
        var data_line = [
        37.1,0.42,0.01,31.48
        ];
        let myChart = echarts.init(document.getElementById("container3"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                // backgroundColor: '#101e44',
                title:{
                    text:'中国不同年龄段人口死亡率折线图',
                    left:"center",
                    subtext:"数据来源：中国缓和医疗发展蓝皮书（2019-2020）",
                    subtextStyle: {
                        fontSize: 7
                    },
                    textStyle:{
                        fontSize:11
                    }
                },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '3%',
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
                        boundaryGap: true,
                        axisLabel: {
                            formatter: '{value}',
                            // fontSize: 14,
                            // margin: 20,
                            color: '#7ec7ff',
                            fontSize:7
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#243753',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        data: ['1岁以内婴儿', '1-4岁儿童', '5~39岁青少年和壮年','60岁以上老人'],
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: false,
                        type: 'value',
                        min:0,
                        max:40,
                        axisLabel: {
                            formatter:'{value}‰',
                            color: '#7ec7ff',
                        },
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: 12,
                            lineHeight: 40,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#283352',
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
                            color: '#19a3df',
                            borderColor: '#a3c8d8',
                        },
                        lineStyle: {
                                width: 1,
                                color: '#19a3df',
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
                                            color: 'rgba(88,255,255,0.2)',
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(88,255,255,0)',
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
#container3 {
  width: 5rem;
  height: 2rem;
  margin: 0px auto 0;
}
</style>


