<template>
    <div id="part2_container0"></div>
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
        if(scrollTop<9440){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>9440&&scrollTop<=10550&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>10550){
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
        2,2,23,12,1,0,0,12,22,32,22,27,39,84,88,104,106,71  
        ];
        var chartDom = document.getElementById("part2_container0");
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
                    text: '国家卫生健康委员会临终关怀、安宁疗护相关词条数量变化图',
                    x:'center',
                    textStyle:{
                        fontSize:17
                    },
                    top:-3,
                    left:'center',
                    subtext:"数据来源：国家卫生健康委员会",
                    subtextStyle: {
                        fontSize: 12
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
                        boundaryGap: false,
                        axisLabel: {
                            interval:0,
                            rotate:45,
                            formatter: '{value}',
                            fontSize: 12,
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
                        max:110,
                        interval:22,
                        name:'单位(条)',
                        nameTextStyle:{
                            color: '#0F2650', // 文字颜色
                            fontSize:12
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
                        name: '相关词条数量',
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
                        markPoint:{
                            symbol: 'pin', //标记(气泡)的图形
                            symbolSize: 25, //标记(气泡)的大小
                            itemStyle: {
                                borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                                borderWidth: 0, //描边线宽。为 0 时无描边。
                                borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
                            },
                            label:{
                                position:'top',
                                color:'rgba(15,38,80,0.6)',
                                fontSize:12,
                            },
                            data: [
                                { name: '2006年', coord: [2, 23],value:"《城市社区卫生服务机构\n管理办法（试行）》规定：\n有条件的社区可设临终关怀科",label:{position:[-60, -40]}},
                                { name: '2013年', coord: [9, 32],value:'国际护士节护理大会在京召开；\n上海力争3年实现医疗机构\n“临终关怀”服务全覆盖'},
                                { name: '2017年', coord: [13, 84],value:'2017-2020期间两批安宁疗护试点开展、\n人大代表政协委员相关提案增多、\n国家相关政策增多',label:{position:[-140, -40]}},
                                { name: '2018年', coord: [14, 88] },
                                { name: '2019年', coord: [15, 104] },
                                { name: '2020年', coord: [16, 106] },
                            ],
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
#part2_container0 {
  width: 8.6rem;
  height: 4.6rem;
  margin: 0rem auto 0;
}
</style>


