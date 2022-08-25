<template>
    <div id="container12"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
require("../../utils/china");
import $ from "jquery";

export default {
  name: "FifthChart",
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
        let myChart = echarts.init(document.getElementById("container12"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(mapData){
            let option = {
                title : {
                    text:'各省份安宁疗护企业数量',
                    x:'center',
                    top:-3,
                    textStyle:{
                        fontSize:12
                    },
                    subtext:"数据来源：企查查",
                    subtextStyle: {
                        fontSize: 7
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function (params) { 
                        if(params.value){ 
                        return params.name + ' : ' + params.value; 
                        }else{ 
                        return params.name + ' : 0'; 
                        } 
                    } 
                },
                visualMap: {
                    type: 'piecewise',
                    left: '15',
                    bottom: '15',
                    itemWidth: 15,
                    itemHeight: 10,
                    textStyle: {
                        color: '#333333',
                        fontSize: 8,
                    },
                    pieces: [{
                        min:64,
                        label: '>64',
                    },{
                        min:50,
                        max:64,
                        label: '50~64',
                    },{
                        min:40,
                        max:50,
                        label: '40~50',
                    }, {
                        min:30,
                        max:40,
                        label: '30~40',
                    }, {
                        min:10,
                        max:30,
                        label: '10~30',
                    }, {
                        min:5,
                        max:10,
                        label: '5~10',
                    }, {
                        min:3,
                        max:5,
                        label: '3~5',
                    }, {
                        max:3,
                        label: '≤3',
                    }],
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
                    geoIndex:0,
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
                    data:mapData
                }]
            };
            myChart.setOption(option);
        }
        //展示地图
        function showMap() {
            $.getJSON(`/static/data/chinaMapData2.json`, data=>{
                initEcharts(data);
            })
        }
        showMap()
    }
    }
};
</script>

<style lang="scss" scoped>
#container12 {
  width: 4.5rem;
  height: 4rem;
  margin: 0rem auto 0;
}
</style>


