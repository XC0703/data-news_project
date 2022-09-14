<template>
    <div id="part2_container1"></div>
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
        if(scrollTop<10476){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>10476&&scrollTop<=11520&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>11520){
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
            [1519,2175,2642,4685],
            [276,354,510,1027]
        ];
        var chartDom = document.getElementById("part2_container1");
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
                    text: '老年医学、临终关怀机构数量变化图',
                    x:'center',
                    textStyle:{
                        fontSize:15
                    },
                    top:-3,
                    left:'center',
                    subtext:"数据来源：国家卫生健康委员会2018-2021《卫生健康事业发展统计公报》",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                legend: {
                    // 如果series有name属性，则legend可以不用写data值
                    // data:['新增粉丝','新增游客'],
                    textStyle:{
                        fontSize: 8,
                        color:'#0F2650'
                    },
                    itemHeight: 8,//图例大小
                    top:'13%',
                    right: '26%', // 距离右边10%
                    // data:[
                    //     {name:'设老年医学科的二级以上综合医院数量',textStyle:{color:' #0F2650'}},
                    //     {name:'设临终关怀科的医疗卫生机构数量',textStyle:{color:'#0E7CE2'}}
                    // ]
                },
                grid: {
                    top: '30%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    // formatter:'{b}年{a}：'+'{c}',
                    formatter: function (params) {
                        let html=params[0].name+"年<br>";
                        for(let i=0;i<params.length;i++){
                        html+='<span style="display:inline-block;margin-right:0.05rem;border-radius:0.1rem;width:0.1rem;height:0.1rem;background-color:'+params[i].color+';"></span>'
                            html+=params[i].seriesName+":"+params[i].value+"<br>";
                        }
                        return html;
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
                        boundaryGap: false,
                        axisLabel: {
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
                            show: false,
                        },
                        data: ['2018','2019','2020','2021'],
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: false,
                        type: 'value',
                        min:200,
                        max:4800,
                        axisLabel: {
                            formatter:'{value}',
                            color: '#0F2650',
                        },
                        name:'单位(所)',
                        nameTextStyle:{
                            color: '#0F2650', // 文字颜色
                            fontSize:10
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
                        name: '设老年医学科的二级以上综合医院数量',
                        type: 'line',
                        smooth: true,
                        showSymbol: true,
                        symbolSize: 3,
                        zlevel: 3,
                        itemStyle: {
                            color: ' #0F2650',
                            borderColor: ' #0F2650',
                        },
                        lineStyle: {
                            width: 1,
                            color: ' #0F2650',
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
                        data: data_line[0],
                    },
                    {
                        name: '设临终关怀科的医疗卫生机构数量',
                        type: 'line',
                        smooth: true,
                        showSymbol: true,
                        symbolSize: 3,
                        zlevel: 3,
                        itemStyle: {
                            color: '#0E7CE2',
                            borderColor: '#0E7CE2',
                        },
                        lineStyle: {
                            width: 1,
                            color: '#0E7CE2',
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
                                        color: 'rgba(14,124,226,0.2)',
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(14,124,226,0)',
                                    },
                                ],
                                false
                            ),
                        },
                        data: data_line[1],
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
#part2_container1 {
  width: 7rem;
  height: 4rem;
  margin: 0rem auto 0;
}
</style>


