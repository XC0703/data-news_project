<template>
    <div id="part2_container8"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");

export default {
  name: "NinthChart",
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
        if(scrollTop<13714){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>13714&&scrollTop<=14754&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>14754){
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
        var chartDom = document.getElementById("part2_container8");
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
            let option={
                title:{
                    text: '各年份安宁疗护企业成立数量',
                    x:'center',
                    textStyle:{
                        fontSize:15
                    },
                    top:-3,
                    left:'center',
                    subtext:"数据来源：企查查",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "none",
                    },
                    formatter: function (params) {//hover到某一柱子时显示单位，例如：“1号商店进货：60个”
                        return params[0].name + "年成立数量: " + params[0].value + "个";
                    },
                },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    data: ["2000", "2004", "2005","2009","2009","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2020","2021"],
                    axisLine: {
                        lineStyle: {
                        color: "#0F2650",
                        },
                    },
                    axisLabel: {
                        color: "#0F2650",
                        rotate:45,
                        interval: 0,//隔几个显示一次，0表示全部显示
                        fontSize: "12",//x轴字体大小
                        itemSize: "",
                        formatter: function (params) {
                        var newParamsName = ""; // 最终拼接成的字符串
                        var paramsNameNumber = params.length; // 实际标签的个数
                        var provideNumber = 4; // 每行能显示的字的个数
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                        /**
                         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                         */
                        // 条件等同于rowNumber>1
                        if (paramsNameNumber > provideNumber) {
                            /** 循环每一行,p表示行 */
                            for (var p = 0; p < rowNumber; p++) {
                            var tempStr = ""; // 表示每一次截取的字符串
                            var start = p * provideNumber; // 开始截取的位置
                            var end = start + provideNumber; // 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr; // 最终拼成的字符串
                            }
                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        //将最终的字符串返回
                        return newParamsName;
                        },
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel:true
                    },
                    axisPointer: {
                        type: "shadow",
                    },
                },
                yAxis: {
                    name: "单位：个",
                    type: "value",
                    //设置Y轴坐标最大、最小值
                    min: 0,
                    max: 60,
                    interval: 10,
                    axisLabel: {
                        color: "#0F2650",
                    },
                    axisTick: { show: false },
                    axisLine: {
                        show: true,
                        lineStyle: {
                        color: "#0F2650",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                        color: "rgba(72,61,139,0.7)",
                        type: "dashed",
                        },
                    },
                },
                series: [{
                    name: "hill",
                    type: "pictorialBar",
                    barCategoryGap: "5%",
                    symbol:
                    "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
                    //要改成山峰图就改成<  symbol: 'path://path://M10 600 Q 95 0 180 600' >
                    //要改成三角图就改成< symbol: 'triangle' >
                    itemStyle: {
                        opacity: 1,
                        color: {//设置渐变颜色
                            type: "linear",
                        //x 和 y 表示起始的坐标，x2 和 y2 表示终点坐标, 所以也就是向下渐变
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                            {
                                offset: 0,
                                color: "red", // 0% 处的颜色
                            },
                            {
                                offset: 0.3,
                                color: "rgba(15,38,80, .8)", // 30% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(15,38,80, .1)", // 100% 处的颜色
                            },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                    emphasis: {
                        itemStyle: {
                            opacity: 1,
                        },
                    },
                    label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            color: 'black',
                            fontSize: 10
                    },
                    data: [1,1,2,2,1,1,1,3,2,5,5,6,33,58,30,23,9],
                    z: 10,
                },
                {
                    name: "glyph",
                    type: "pictorialBar",
                    barGap: "-100%",//设置图的大小，越大底部重叠的越多
                    symbolPosition: "end",
                    symbolSize: 0,
                    symbolOffset: [0, "100%"],
                    data: [],
                },
                ],
            }
            myChart.setOption(option);
        }
        //展示地图
        function showMap() {
            initEcharts();
        }
        showMap()
    }
    }
};
</script>

<style lang="scss" scoped>
#part2_container8 {
  width: 7rem;
  height: 4rem;
  margin: 0rem auto 0;
}
</style>


