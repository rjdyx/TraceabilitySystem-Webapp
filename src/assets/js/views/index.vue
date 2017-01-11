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
            <div @click="show = true" class="show-sliderBar-btn">
                <img :src="$img('/images/slider.png')" alt="">
            </div>
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

    </div>
</template>
<style lang="sass" scoped>

    @import "../../sass/function";
    @import "../../sass/_percent.scss";

	#mynprogress {
	    width: 100%;
    	height: 3px;
	}

    .show-sliderBar-btn {
        position: absolute;
        left: pxToRem(25);
        bottom: 0;
        width: pxToRem(35);
        height: pxToRem(35);
        margin: auto;
        top: 0;

        img {
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            width: pxToRem(20);
            height: pxToRem(20);
            margin: auto;
        }
    }
</style>
<script>

    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';
    import MyHeader from '../components/public/header.vue';
    import SliderBar from '../components/public/slider-bar.vue';

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
                        isEvent: true,
                        children: []
                    },
                    {
                        name:'种植管理',
                        isEvent: false,
                        children: [
                            {
                                path: '/webapp/basic/plantation',
                                name:'基础信息管理'
                            },
                        ]
                    },
                ],
            }
        },
        computed: {
            ...mapState([
                'title'
            ]),
        },
        components: {
            MyHeader,
            SliderBar
        },
        methods: {
            ...mapMutations([

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
            }

        }
    }

</script>
