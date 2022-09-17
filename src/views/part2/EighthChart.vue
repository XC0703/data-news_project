<template>
    <div id="part2_container7"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
require("../../utils/china");
import $ from "jquery";

export default {
  name: "EighthChart",
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
        let myChart = echarts.init(document.getElementById("part2_container7"));
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
                        fontSize:17
                    },
                    subtext:"数据来源：企查查",
                    subtextStyle: {
                        fontSize: 12
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        if(params.name==='台湾'){
                            return params.name + ' : 暂无数据'; 
                        } else if(params.value){ 
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
                    selectedMode:false,
                    textStyle: {
                        color: '#333333',
                        fontSize: 10,
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
                        min:0,
                        label: '≤3',
                    }],
                    inRange: {
                        color: ['rgb(115,192,222)', 'rgb(82,154,232)', 'rgb(111,147,207)', 'rgb(57,119,163)',
                        'rgb(33,105,179)','rgb(55,87,132)','rgb(5,28,70)'
                        ]
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
                        areaColor:'rgb(115,192,222)',
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
                        fontSize:12,
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
#part2_container7 {
  width: 8.6rem;
  height: 6rem;
  margin: 0rem auto 0;
}
</style>


