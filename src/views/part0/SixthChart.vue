<template>
    <div id="part0_container5"></div>
</template>

<script>
import $ from "jquery";
let echarts = require("echarts/lib/echarts");

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
        var chartDom = document.getElementById('part0_container5');
        var myChart = echarts.init(chartDom);
        var option;
        var colors = {
            '排除意外和事故的离世者':'rgb(2,18,48)',
            '排除意外和事故的离世者.发热':'rgb(46,69,83)',
            '排除意外和事故的离世者.咳嗽':'rgb(65,85,199)',
            '排除意外和事故的离世者.呼吸问题':'rgb(80,149,206)',
            '排除意外和事故的离世者.腹泻':'rgb(0,108,237)',
            '排除意外和事故的离世者.呕吐':'rgb(113,161,219)',
            '排除意外和事故的离世者.腹部问题':'rgb(55,162,255)',
            '排除意外和事故的离世者.意识错乱':'rgb(159,197,233)',
            '排除意外和事故的离世者.昏迷＞24h':'rgb(45,59,138)',
            '排除意外和事故的离世者.突然昏迷':'rgb(159,197,233)',
            '排除意外和事故的离世者.抽搐':'rgb(45,59,138)',
            '排除意外和事故的离世者.小便问题':'rgb(52,132,227)',
            '排除意外和事故的离世者.皮肤病':'rgb(173,184,243)',
            '排除意外和事故的离世者.口/鼻/肛门流血':'rgb(173,184,243)',
            '排除意外和事故的离世者.体重减轻':'rgb(15,38,80)',
            '排除意外和事故的离世者.口/舌/溃疡白斑':'rgb(15,38,80)',
            '排除意外和事故的离世者.僵硬/不能张嘴':'rgb(54,73,167)',
            '排除意外和事故的离世者.面部肿胀':'rgb(0,108,237)',
            '排除意外和事故的离世者.双脚浮肿':'rgb(6,63,118)',
            '排除意外和事故的离世者.肿块':'rgb(173,184,243)',
            '排除意外和事故的离世者.偏瘫':'rgb(173,184,243)',
            '排除意外和事故的离世者.黄疸':'rgb(65,83,104)',
            '排除意外和事故的离世者.头发微红/微黄':'rgb(15,38,80)',
            '排除意外和事故的离世者.脸色苍白':'rgb(0,108,237)',
            '排除意外和事故的离世者.眼睛凹陷':'rgb(45,38,80)',
            '排除意外和事故的离世者.喝水增多':'rgb(173,184,243)',
            '排除意外和事故的离世者.有疼痛':'rgb(36,110,171)',
            '排除意外和事故的离世者.严重胸部疼痛':'rgb(143,175,233)',
            '排除意外和事故的离世者.严重腹痛':'rgb(173,184,243)',
            '排除意外和事故的离世者.严重头痛':'rgb(159,197,233)',
            '排除意外和事故的离世者.颈部疼痛':'rgb(0,108,237)',
            '排除意外和事故的离世者.吞咽液体疼痛':'rgb(40,92,135)',
        }
        $.when(
            $.get(`/static/data/circlePackingData.json`),
            $.getScript(
                'https://fastly.jsdelivr.net/npm/d3-hierarchy@2.0.0/dist/d3-hierarchy.min.js'
            )
        ).done(function (res) {
            run(res[0][1]);
        });
        function run(rawData) {
            const dataWrap = prepareData(rawData);
            initChart(dataWrap.seriesData, dataWrap.maxDepth);
        }
        function prepareData(rawData) {
            const seriesData = [];
            let maxDepth = 0;
            function convert(source, basePath, depth,name) {
                if (source == null) {
                    return;
                }
                if (maxDepth > 5) {
                    return;
                }
                maxDepth = Math.max(depth, maxDepth);
                seriesData.push({
                    id: basePath,
                    name:name,
                    value: source.$count,
                    depth: depth,
                    index: seriesData.length
                });
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source,key) && !key.match(/^\$/)) {
                        var path = basePath+'.'+key;
                        convert(source[key], path, depth + 1,key);
                    }
                }
            }
            convert(rawData, '排除意外和事故的离世者', 0,'排除意外和事故的离世者');
            return {
                seriesData: seriesData,
                maxDepth: maxDepth
            };
        }
        function initChart(seriesData, maxDepth) {
            var displayRoot = stratify();
            function stratify() {
                return d3
                .stratify()
                .parentId(function (d) {
                    return d.id.substring(0, d.id.lastIndexOf('.'));
                })(seriesData)
                .sum(function (d) {
                    return d.value || 0;
                })
                .sort(function (a, b) {
                    return b.value - a.value;
                });
            }
            function overallLayout(params, api) {
                var context = params.context;
                d3
                .pack()
                .size([api.getWidth() - 2, api.getHeight() - 2])
                .padding(3)(displayRoot);
                context.nodes = {};
                displayRoot.descendants().forEach(function (node) {
                context.nodes[node.id] = node;
                });
            }
            function renderItem(params, api) {
                var context = params.context;
                // Only do that layout once in each time `setOption` called.
                if (!context.layout) {
                context.layout = true;
                overallLayout(params, api);
                }
                var nodePath = api.value('id');
                var node = context.nodes[nodePath];
                if (!node) {
                // Reder nothing.
                return;
                }
                var isLeaf = !node.children || !node.children.length;
                var focus = new Uint32Array(
                node.descendants().map(function (node) {
                    return node.data.index;
                })
                );
                var nodeName = isLeaf
                ? nodePath
                    .slice(nodePath.lastIndexOf('.') + 1)
                    .split(/(?=[A-Z][^A-Z])/g)
                    .join('\n')
                : '';
                var z2 = api.value('depth') * 2;
                return {
                type: 'circle',
                focus: focus,
                y:-20,
                shape: {
                    cx: node.x,
                    cy: node.y,
                    r: node.r
                },
                transition: ['shape'],
                z2: z2,
                textContent: {
                    type: 'text',
                    style: {
                    // transition: isLeaf ? 'fontSize' : null,
                    text: nodeName,
                    fontFamily: 'Arial',
                    width: node.r * 1.2,
                    overflow: 'truncate',
                    fontSize: node.r / 3
                    },
                    emphasis: {
                    style: {
                        overflow: null,
                        fontSize: Math.max(node.r / 3, 12)
                    }
                    }
                },
                textConfig: {
                    position: 'inside'
                },
                style: {
                    fill: colors[api.value('id')]||api.visual('color')
                },
                emphasis: {
                    style: {
                    fontFamily: 'Arial',
                    fontSize: 12,
                    shadowBlur: 20,
                    shadowOffsetX: 3,
                    shadowOffsetY: 5,
                    shadowColor: 'rgba(0,0,0,0.3)'
                    }
                }
            };
            }
            option = {
                dataset: {
                    source: seriesData
                },
                tooltip: {
                    formatter:function(params){
                        if(params.value.index!=0){
                            return '排除意外和事故的离世者中'+params.value.name+"的比例为"+params.value.value+'%'
                        }else{
                            return params.value.name
                        }                        
                    }
                },
                visualMap: [
                {
                    show: false,
                    min: 0,
                    max: maxDepth,
                    dimension: 'depth',
                    inRange: {
                        color:[
                            '#c73437', '#2e4553'
                        ]
                    }
                }
                ],
                hoverLayerThreshold: Infinity,
                series: {
                    type: 'custom',
                    renderItem: renderItem,
                    progressive: 0,
                    coordinateSystem: 'none',
                    encode: {
                        tooltip: 'value',
                        itemName: 'id',
                    }
                }
            };
            myChart.setOption(option);
            // 点击数据下钻
            // myChart.on('click', { seriesIndex: 0 }, function (params) {
            //     drillDown(params.data.id);
            // });
            // function drillDown(targetNodeId) {
            //     displayRoot = stratify();
            //     if (targetNodeId != null) {
            //         displayRoot = displayRoot.descendants().find(function (node) {
            //         return node.data.id === targetNodeId;
            //     });
            //     }
            //     // A trick to prevent d3-hierarchy from visiting parents in this algorithm.
            //     displayRoot.parent = null;
            //     myChart.setOption({
            //     dataset: {
            //         source: seriesData
            //     }
            //     });
            // }
            // Reset: click on the blank area.
            // myChart.getZr().on('click', function (event) {
            //     if (!event.target) {
            //     drillDown();
            //     }
            // });
        }
        option && myChart.setOption(option);
    }
}
};
</script>

<style lang="scss" scoped>
#part0_container5 {
  width: 4.5rem;
  height: 5rem;
  margin: 0 auto;
}
</style>


