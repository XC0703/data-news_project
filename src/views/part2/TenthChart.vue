<template>
    <div id="container17"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
require("../../utils/worldZH");
import $ from "jquery";

export default {
  name: "worldMap",
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
        let myChart = echarts.init(document.getElementById("container17"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(mapData){
            let option = {
                title:{
                    text: '各国安宁缓和医疗发展情况',
                    x:'center',
                    textStyle:{
                        fontSize:12
                    },
                    top:5,
                    left:'center',
                    subtext:"数据来源：世界安宁缓和医疗联盟",
                    subtextStyle: {
                        fontSize: 7
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function (params) { 
                        // console.log(params)
                        if(params.value){ 
                        return params.name + ' : ' + params.data.level; 
                        }else{ 
                        return params.name + ' : 暂无数据'; 
                        } 
                    } 
                },
                grid: {
                    top: '10%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                visualMap: {
                    type: 'piecewise',
                    left: '-5',
                    bottom: '50',
                    itemWidth: 15,
                    itemHeight: 10,
                    textStyle: {
                        color: '#333333',
                        fontSize: 10,
                    },
                    pieces: [{
                        value:5,
                        label: '提供广泛全面的安宁疗护服务（4B级）',
                    },{
                        value: 4,
                        label: '安宁疗护纳入主流医疗服务的国家（4A级）',
                    },{
                        value: 3,
                        label: '能提供一般性安宁疗护服务的国家（3B级）',
                    }, {
                        value: 2,
                        label: '可以提供少量疗护服务的国家（3A级）',
                    }, {
                        value: 1,
                        label: '有一定建设努力但尚未建立服务的国家（2级）',
                    }, {
                        value: 0,
                        label: '没有安宁缓和医疗的国家（1级）',
                    }, ],
                    inRange: {
                        color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8']
                    },
                    outOfRange: {
                        color: ['#999999']
                    }
                },
                geo: {
                    map: 'world',
                    top:60,
                    show: true,
                    roam: false,
                    emphasis: {
                        label:{
                            show: false
                        },
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
                    map: 'world',
                    geoIndex:0,
                    aspectScale: 0.75,
                    //zoom:1.1,
                    label: {
                        show: false,
                    },
                    labelLayout:{
                        show:false,
                        fontSize:10,
                    },
                    emphasis: {
                        itemStyle:{
                            areaColor: '#FFAE00',
                            fontSize:5,
                        },
                    },
                    itemStyle: {
                        areaColor: '#B2CAE0',
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                    data:mapData
                }],
            };
            myChart.setOption(option);
        }
        // 数据格式转换
        function convertDataFormat(data){
            const convertedData = [];
            for(let i = 0;i<data.length;i++){
                for(let j = 0;j<data[i].content.length;j++){
                    convertedData.push(...(data[i].content)[j].country)
                }
            }
            return convertedData;
        }
        //展示地图
        function showMap() {
            $.getJSON(`/static/map/mapData/worldMapData.json`, data=>{
                // console.log(convertDataFormat(data))
                initEcharts(convertDataFormat(data));
            })
        }
        showMap()
    }
    }
};
</script>

<style lang="scss" scoped>
#container17 {
  width: 7rem;
  height: 5rem;
  margin: 0rem auto 0;
}
</style>


