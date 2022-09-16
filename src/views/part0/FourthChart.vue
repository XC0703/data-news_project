<template>
    <div id="part0_container3"></div>
</template>

<script>

let echarts = require("echarts/lib/echarts");

export default {
  name: "ThirdChart",
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
        if(scrollTop<1600){
            this.isRender=false;
        }else if(this.isPC==true&&scrollTop>1600&&scrollTop<=2680&&this.isRender==false){
            this.$nextTick(()=>{
                this.mapChart();
            })
            this.isRender=true;
        }else if(scrollTop>2680){
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
        var data_pie = [
            {name:'心脏病',value:26.50,mortality:1062.00,
                labelLine:{
                    length:10,
                    length2:3,
                }
            },
            {name:'脑血管疾病',value:24.41,mortality:977.99,
                labelLine:{
                    length:-10,
                    length2:20,
                }
            },
            {name:'恶性肿瘤',value:20.54,mortality:823.07,
                labelLine:{
                    length:-50,
                    length2:10,
                }
            },
            {name:'呼吸系统疾病',value:12.77,mortality:511.54,
                labelLine:{
                    length:-100,
                    length2:3,
                }
            },
            {name:'伤害',value:4.14,mortality:165.71,
                labelLine:{
                    length:-160,
                    length2:10,
                }
            },
            {name:'内分泌营养代谢疾病',value:2.95,mortality:118.26,
                labelLine:{
                    length:-160,
                    length2:10,
                }
            },
            {name:'消化系统疾病',value:1.93,mortality:77.37,
                labelLine:{
                    length:-180,
                    length2:20,
                }
            },
            {name:'其它疾病',value:1.51,mortality:60.64,
                labelLine:{
                    length:-190,
                    length2:10,
                }
            },
            {name:'神经系统疾病',value:1.36,mortality:54.64,
                labelLine:{
                    length:-190,
                    length2:10,
                }
            },
            {name:'死因不明',value:1.31,mortality:52.61,
                labelLine:{
                    length:-190,
                    length2:20,
                }
            },
            {name:'泌尿生殖系统疾病',value:0.93,mortality:37.34,
                labelLine:{
                    length:-190,
                    length2:30,
                }
            },
            {name:'精神障碍',value:0.46,mortality:18.40,
                labelLine:{
                    length:-190,
                    length2:70,
                }
            },
            {name:'肌肉骨骼和结缔组织疾病',value:0.31,mortality:12.55,
                labelLine:{
                    length:-190,
                    length2:50,
                }
            },
            {name:'血液造血免疫疾病',value:0.17,mortality:6.82,
                labelLine:{
                    length:-190,
                    length2:50,
                }
            },
            {name:'先天异常',value:0.01,mortality:0.46,
                labelLine:{
                    length:-170,
                    length2:30,
                }
            },
            {name:'寄生虫病',value:0.01,mortality:0.37,
                labelLine:{
                    length:-150,
                    length2:10,
                }
            },
        ]
        var chartDom = document.getElementById("part0_container3");
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
                title : {
                    text: '各类疾病在死亡原因中的构成比',
                    x:'center',
                    textStyle:{
                        fontSize:15
                    },
                    subtext:"数据来源：《中国缓和医疗发展蓝皮书（2019-2020）》",
                    subtextStyle: {
                        fontSize: 10
                    },
                },
                color:['#0F2650','#063F76','#246EAB',' #5095CE',' #73C0DE','#F3C450','#5095CE','#F1C27F','#FF9500'],
                tooltip : {
                    trigger: 'item',
                    formatter: function(params){
                        return params.name+"："+params.value+'%<br/>死亡率：'+params.data.mortality+'（单位：1/10万）'
                    }
                },
                calculable : true,
                series : [
                    {
                        type:'pie',
                        radius : [30, 280],
                        center : ['50%', '70%'],
                        roseType : 'area',
                        data:data_pie,
                        // labelLayout:{
                        //     x:1,
                        //     y:1
                        // },
                        label:{
                            fontSize:12,
                            color:'#333',
                            position:'outside',
                        },
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
#part0_container3 {
  width: 7rem;
  height: 5rem;
  margin: 0rem auto 0;
}
</style>
