<template>
    <div id="container"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");

export default {
  name: "FirstChart",
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
        // 四个数组是因为有两条线，两个柱子
        [8872, 9062, 9377, 9692,9879,10068,10384,10702,11023,11343,11934,12277,12777,13262,13902,14524,15037,15961,16724,17767,19064,20059],
        [126743,127627,128453,129227,129988,130756,131448,132129,132802,133450,134091,134916,135922,136726,137646,138326,139232,140011,140541,141008,141212,141260],
        [7.00,7.10,7.30,7.50,7.60,7.70,7.90,8.10,8.30,8.50,8.90,9.10,9.40,9.70,10.10,10.50,10.80,11.40,11.90,12.60,13.50,14.20],
        ];
        let myChart = echarts.init(document.getElementById("container"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(){
            let option = {
                // 通过这里直接设置颜色
                // color: ['#00f2f1', '#ed3f35',"#0E7CE2","#ffc72b"],
                emphasis: {
                itemStyle: {
                    color: "white",//柱条颜色，设置为柱图颜色则取消高亮
                }
                },
                tooltip: {
                trigger: 'axis',
                // 判断是否会显示出百分比
                formatter: function (params) {
                    let html=params[0].name+"<br>";
                    for(let i=0;i<params.length;i++){
                    html+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+params[i].color+';"></span>'
                    if(params[i].seriesName=="老年人口占比"){
                        html+=params[i].seriesName+":"+params[i].value+"%<br>";
                    }else{
                        html+=params[i].seriesName+":"+params[i].value+"万人<br>";
                    }
                    }
                    return html;
                }
                },
                // 图例组件
                legend: {
                    // 如果series有name属性，则legend可以不用写data值
                    // data:['新增粉丝','新增游客'],
                    textStyle: {
                    color: '#4c9bfd', // 图例文字颜色
                    fontSize: 8,
                    },
                    itemHeight: 8,//图例大小
                    right: '10%' // 距离右边10%
                },
                // 设置网格样式
                grid: { 
                    top: '15%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    show: true,// 显示边框
                    borderColor: '#012f4a',// 边框颜色
                    containLabel: true // 包含刻度文字在内
                },
                xAxis: {
                type: 'category',
                boundaryGap: true,//不用去除轴间距
                triggerEvent: true,
                data: ['2000', '2001', '2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016', '2017', '2018','2019','2020','2021'],
                axisTick: {
                    show: false // 去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd',
                    interval:1//使横坐标显示完全
                },
                axisLine: {
                    show: false // 去除轴线
                },
                },
                yAxis: [
                {
                type: 'value',
                min: 0,
                max: 150000,
                interval:30000,
                name:'单位(万人)',
                nameTextStyle:{
                    color: '#4c9bfd', // 文字颜色
                    fontSize:10
                },
                axisTick: {
                    show: true,  // 去除刻度
                },
                axisLabel: {
                    // show:false,
                    color: '#4c9bfd', // 文字颜色
                    fontSize:10
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                    color: '#012f4a' // 分割线颜色
                    }
                }
                },
                {
                type: 'value',
                min: 0,
                max: 20,
                interval: 5,
                nameTextStyle:{
                    color: '#4c9bfd', // 文字颜色
                    fontSize:10
                },
                axisLabel: {
                    formatter:'{value}%',
                    color: '#4c9bfd', // 文字颜色
                    fontSize:10
                },
                axisTick: {
                    show: true,  // 去除刻度
                },
                splitLine: {
                    show:false
                }
                }
                ],
                series: [
                {
                    name: '老年人口人数',
                    type: 'bar',
                    barWidth:5,
                    data: data_line[0]
                },
                {
                    name: '年末总人数',
                    type: 'bar',
                    barWidth:5,
                    data: data_line[1]
                },
                {
                    name: '老年人口占比',
                    type: 'line',
                    smooth:true,
                        lineStyle:{
                        width:1,
                    },
                    yAxisIndex:1,//对齐右边Y轴
                    data: data_line[2]
                }
                ]
            };
            myChart.setOption(option);
        }
            
        initEcharts()
    }
    }
};
</script>

<style lang="scss" scoped>
#container {
  width: 6rem;
  height: 4rem;
  margin: 0px auto 0;
}
</style>


