<template>
    <div id="part2_container9"></div>
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
        let myChart = echarts.init(document.getElementById("part2_container9"));
        window.addEventListener("resize", ()=>{
            myChart.resize();
        });
        function initEcharts(mapData){
            let option = {
                title:{
                    text: '各国安宁缓和医疗发展情况',
                    x:'center',
                    textStyle:{
                        fontSize:17
                    },
                    top:5,
                    left:'center',
                    subtext:"数据来源：世界安宁缓和医疗联盟",
                    subtextStyle: {
                        fontSize: 12
                    },
                },
                tooltip: {
                    show: true,
                    formatter: function (params) { 
                        if(params.name==''){
                            return '克什米尔地区'+ ' : 暂无数据'; 
                        }
                        if(params.value+1){ 
                        return params.name + ' : ' + params.data.level; 
                        }else{ 
                        return params.name + ' : 暂无数据'; 
                        } 
                    } 
                },
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true,
                },
                visualMap: {
                    type: 'piecewise',
                    left: '5',
                    bottom: '150',
                    itemWidth: 15,
                    itemHeight: 10,
                    selectedMode:false,
                    textStyle: {
                        color: '#333333',
                        fontSize: 12,
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
                    }, {
                        value: 'undefined',
                        label: '暂无数据的国家',
                    }, ],
                    inRange: {
                        color: ['#fff','rgb(214,230,246)', 'rgb(82,154,232)', 'rgb(111,147,207)', 'rgb(33,105,179)','rgb(55,87,132)','rgb(16,50,98)']
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
                        areaColor:'#fff',
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
                        fontSize:12,
                    },
                    emphasis: {
                        itemStyle:{
                            areaColor: '#FFAE00',
                            fontSize:5,
                        },
                    },
                    itemStyle: {
                        areaColor:'rgb(190,219,250)',
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
            const url = process.env.NODE_ENV === 'production' ? '/data-news_project/static/data/worldMapData.json' : '/static/data/worldMapData.json'
            $.getJSON(url, data=>{
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
#part2_container9 {
  width: 10rem;
  height: 7rem;
  margin: 0rem auto 0;
}
</style>


