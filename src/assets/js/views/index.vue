/**
 * 
 * 最顶层组件
 * @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template>
 
    <div>
        <!-- 顶部 -->
        <my-header :title="title">
            <component
                :is="headLeftComponent"
                slot="left"
                @clickEvent="clickLeftBtn"
            ></component>
            <component
                :is="headRightComponent"
                slot="right"
                @clickEvent="clickRightBtn"
            ></component>
        </my-header>

		<!-- 进度条 -->
        <div id="mynprogress"></div>

        <!-- 路由 -->
        <router-view></router-view>

        <!-- 侧边栏 -->
        <slider-bar 
            :show="show"
            :navbars="navbars"
            @hide="show = !show"
            @getSubNavbars="getSubNavbars"
        ></slider-bar>

        <!-- 消息弹窗 -->
        <layer
            v-if="showLayer"
            @confirm="setShowLayer(false)"
        >
            <component :is="layerComponent"></component>
        </layer>

    </div>
</template>
<style lang="sass" scoped>

    @import "../../sass/function";
    @import "../../sass/_percent.scss";

	#mynprogress {
	    width: 100%;
    	height: 3px;
	} 

</style>
<script>

    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';
    import MyHeader from '../components/public/header.vue';
    import SliderBar from '../components/public/slider-bar.vue';
    import Layer from '../components/public/layer.vue';
    import HeadLeftSlider from '../components/index/head-left-slider.vue';
    

    export default{
        name:'Index',
        data () {
            return {
                // 是否显示侧边栏
                show: false,
                // 侧边栏数据
                navbars: [
                    {
                        name:'农业日志',
                        role: 'log',
                        isEvent: true,
                        children: []
                    },
                    { 
                        name:'种植管理',
                        role: 'plantation',
                        isEvent: false,
                        children: [
                            {
                                path: '/webapp/basic',
                                name:'基础信息管理'
                            },
                            {
                                path: '/webapp/plant-cultivate',
                                name:'种植批次管理'
                            },
                            {
                                path: '/webapp/fertilize',
                                name:'施肥管理'
                            }
                        ]
                    },
                    {
                        name:'果蔬采收批次管理',
                        role: 'plantation',
                        isEvent: false,
                        children: [
                            {
                                path: '/webapp/vegetable-harvest',
                                name:'采收批次管理'
                            },
                            {
                                path: '/webapp/vegetable-detection',
                                name:'采收检测管理'
                            }
                        ]
                    },
                    {
                        name:'养殖管理',
                        role: 'beast',
                        isEvent: false,
                        children: [
                            {
                                path: '/webapp/beast',
                                name:'基础信息管理'
                            },
                        ]
                    },
                    {
                        name:'果蔬加工管理',
                        role: 'process',
                        isEvent: false,
                        children: [
                            {
                                path: '/webapp/process-basic',
                                name:'基础信息管理'
                            },
                        ]
                    },
                ],
            } 
        },
        computed: {
            ...mapState([
                'title',
                'headLeftComponent',
                'headRightComponent',
                'showLayer',
                'layerComponent'
            ]),
        },
        components: {
            MyHeader,
            SliderBar,
            Layer
        },
        mounted () {
            if(this.headLeftComponent == null || this.headLeftComponent.name == 'HeadLeftSlider') {
                this.setHeadLeftComponent(HeadLeftSlider);
            }
        },
        methods: {
            ...mapMutations([
                'setHeadLeftComponent',
                'setShowLayer'
            ]),

            /**
             * 获取子菜单项
             * @param  {String} name 
             */
            getSubNavbars(name) {
                if(name == '农业日志'){
                    this.$http.get(this.$adminUrl('dailylog/gap')).then((response)=>{
                        let subnavbars = [];
                        for(let subnavbar of response.body){
                            let item = {};
                            item.path = '/webapp/log/' + subnavbar.plantation_id;
                            item.name = subnavbar.plantation_name;
                            subnavbars.push(item);
                        }
                        this.navbars[0].children = subnavbars;
                    }, (response)=>{

                    });
                }
            },
            /**
             * 历史图片页面
             */
            record() {
                this.$router.push('/webapp/record');
            },

            /**
             * 点击顶部左边按钮后的回调函数
             */
            clickLeftBtn (type) {
                if (type == 'slider') {
                    this.show = true;
                }
            },

            /**
             * 点击顶部右边按钮后的回调函数
             */
            clickRightBtn (type) {
                if (type == 'record') {
                   this.record(); 
                }
            }
        }
    }

</script>
