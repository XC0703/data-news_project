<template>
    <div id="container"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
require("../utils/china");
import $ from "jquery";

export default {
  name: "mapChart",
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
        let myChart = echarts.init(document.getElementById("container"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(mapData){
            let yearArray=[2017,2019];
            let option = {
                title:{
                    x:'center',
                    y:'bottom'
                },
                timeline: {   // 时间轴样式
                    axisType: 'category',
                    data: yearArray,
                    playInterval: 1500,
                    bottom: '0',
                    symbolSize: 10,
                    autoPlay: true,
                    loop: true,
                    realtime: true,
                    lineStyle: {
                        color: '#466872',
                        width: 2,
                    },
                    label: {
                        color: '#5cc5da',
                        fontSize: 14,
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function (params) { 
                        if(params.value){ 
                        return params.name + ' : ' + params.value+'<br />'+params.data.content; 
                        }else{ 
                        return params.name + ' : 0'; 
                        } 
                    } 
                },
                visualMap: {
                    type: 'piecewise',
                    left: '15',
                    bottom: '15',
                    itemWidth: 27,
                    itemHeight: 15,
                    textStyle: {
                        color: '#333333',
                        fontSize: 14,
                    },
                    pieces: [{
                        min:5,
                        label: '>4',
                    },{
                        value: 4,
                        label: '4',
                    },{
                        value: 3,
                        label: '3',
                    }, {
                        value: 2,
                        label: '2',
                    }, {
                        value: 1,
                        label: '1',
                    }, {
                        value: 0,
                        label: '0',
                    }, ],
                    inRange: {
                        color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8']
                    },
                    outOfRange: {
                        color: ['#999999']
                    }
                },
                geo: {
                    map: 'china',
                    show: true,
                    roam: false,
                    emphasis: {
                        label:{
                            show: false
                        }
                    },
                    itemStyle: {
                        borderColor: 'rgba(0,63,140,0.2)',
                        shadowColor: 'rgba(0,63,140,0.2)',
                        shadowOffsetY: 20,
                        shadowBlur: 30
                    }
                },
                series: [{
                    type: 'map',
                    map: 'china',
                    aspectScale: 0.75,
                    //zoom:1.1,
                    label: {
                        show: true,
                    },
                    labelLayout:{
                        show:false,
                        fontSize:10,
                    },
                    emphasis: {
                        itemStyle:{
                            areaColor: '#FFAE00',
                        }
                    },
                    itemStyle: {
                        areaColor: '#B2CAE0',
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                }],
                options:[{
                    title:{
                        text:'2017年统计值'
                    },
                    series:[{
                        data:mapData[0].data
                    }]
                },{
                    title:{
                        text:'2019年统计值'
                    },
                    series:[{
                        data:mapData[1].data
                    }]
                }
                ]
            };
            myChart.setOption(option);
        }
        //展示地图
        function showMap() {
            $.getJSON(`/static/map/mapData/mapData.json`, data=>{
                initEcharts(data);
            })
        }
        showMap()
    }
    }
};
</script>

<style lang="scss" scoped>
#container {
  width: 600px;
  height: 600px;
  margin: 0px auto 0;
}
.btn {
  position: absolute;
  right: 10%;
  z-index: 999;
}
</style>


