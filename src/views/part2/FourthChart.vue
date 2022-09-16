<template>
    <div id="part2_container3"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
require("../../utils/china");
import $ from "jquery";

export default {
  name: "FourthChart",
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
        let myChart = echarts.init(document.getElementById("part2_container3"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(mapData){
            let option = {
                title : {
                    x:'center',
                    top:-3,
                    text:'2019年',
                    textStyle:{
                        fontSize:20
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function (params) { 
                        if(params.value){
                            if(params.data.content.length!=17){
                                return params.name + ' : ' + params.value+'<br />'+params.data.content; 
                            }else{
                                return params.name + ' : ' + params.value
                                +'<br />'+params.data.content[0]+','+params.data.content[1]+','+params.data.content[2]+','+params.data.content[3]+','+params.data.content[4]+','+params.data.content[5]
                                +'<br />'+params.data.content[6]+','+params.data.content[7]+','+params.data.content[8]+','+params.data.content[9]+','+params.data.content[10]+','+params.data.content[11]
                                +'<br />'+params.data.content[12]+','+params.data.content[13]+','+params.data.content[14]+','+params.data.content[15]+','+params.data.content[16];
                            } 
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
                    selectedMode:false,
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
                        color: ['rgb(214,230,246)', 'rgb(82,154,232)', 'rgb(111,147,207)', 'rgb(33,105,179)','rgb(16,50,98)']
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
                        areaColor: 'rgb(214,230,246)',
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
                        areaColor: 'rgb(214,230,246)',
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                    data:mapData[1].data
                }],
            };
            myChart.setOption(option);
        }
        //展示地图
        function showMap() {
            $.getJSON(`/static/data/chinaMapData1.json`, data=>{
                initEcharts(data);
            })
        }
        showMap()
    }
    }
};
</script>

<style lang="scss" scoped>
#part2_container3 {
  width: 5rem;
  height: 3.5rem;
  margin: 0rem auto 0;
}
</style>


