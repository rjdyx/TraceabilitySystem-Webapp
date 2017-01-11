/**
 * 侧边栏组件
 * @description 手机端的侧边栏，具备左右滑动的动画效果，侧边栏上的顶层菜单点击后展开子菜单，目前只支持二级菜单，子菜单可以是一开始就定义好的，也可以点击父菜单后才从后端加载
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  show 
 * 类型：Boolean
 * 是否必填：true
 * 默认值：true
 * 描述：显示或隐藏侧边栏的标志
 * 
 * 
 * @param  navbars 
 * 类型：Array
 * 是否必填：false
 * 默认值：[]
 * 描述：侧边栏数组，每一项的格式如下example
 * 例子：
 *   {
 *        name:'种植管理',  // 顶层菜单项名称
 *        isEvent: false,   // 为true时，表示是通过点击顶层菜单，从后台获取子菜单数据再渲染到页面；false表示子菜单项是一开始就定义好的
 *        children: [       // 子菜单项数组
 *            {
 *                path: '/basic',   // 子菜单项在vue-router中的访问路径
 *                name:'基础信息管理' // 子菜单项名称
 *            },
 *        ]
 *    }
 * 
 * 
 * Events:
 * 
 * @function hide
 * 返回：无
 * 必用：true
 * 描述：隐藏侧边栏
 * 
 * @function getSubNavbars
 * 返回：name 被点击的顶层菜单项的名称
 * 必用：false
 * 描述：如果顶层菜单项的isEvent为true，则点击顶层菜单项会触发此事件
 * 
 * 
 */
<template>
    <transition-group
        name="animate-class-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
    >
        <div v-show="show" v-touchstart:initTouch="[self]" key="black" class="black-layer"></div>
        <div v-show="show" v-touchstart:initTouch="[self]" key="slider" class="slider-bar">
            <ul>
                <li id="top">
                    <span class="top-img"></span>
                </li>
                <template v-for="(navbar, index) in navbars">
                    <li>
                        <span @click="triggle(navbar.name, navbar.isEvent, index)" class="not-hide">{{navbar.name}}</span>
                    </li>
                    <ul v-if="navbar.children.length != 0 && subNavbarIndex == index">
                        <li v-for="subNavbar in navbar.children" @click="hide">
                            <router-link :to="subNavbar.path" tag="span" exact class="not-hide">{{subNavbar.name}}</router-link>
                        </li>
                    </ul>
                </template>
                
            </ul>
            <div id="bottom">
                <button>返回</button>
            </div>
        </div>
        
    </transition-group>
</template>

<script>

    export default {
        name:'SliderBar',
        props:{
            // 显示或隐藏侧边栏的标志
            show: {
                type: Boolean,
                required: true,
                default: true
            },
            // 侧边栏数组
            navbars: {
                type: Array,
                default: []
            }
        },
        data (){
            return {
                // vue实例
                self: this,
                // 用于记住展开哪个子菜单的下标
                subNavbarIndex: -1
            }
        },
        computed: {},
        methods:{
            /**
             * 隐藏侧边栏
             */
            hide () {
                this.$emit('hide');
            },

            /**
             * 展开或隐藏子下来菜单
             * @param  {Boolean} isEvent 
             * @param  {Number}  index   
             */
            triggle (name, isEvent, index) {
                if(this.subNavbarIndex == index) {
                    this.subNavbarIndex = -1;
                }else {
                    if(isEvent) {
                        this.$emit('getSubNavbars', name);
                    }
                    this.subNavbarIndex = index;
                }
            },

            /**
             * 点击侧边栏不具备not-hide的class的元素时，隐藏侧边栏
             * @param  {Object} event   
             */
            initTouch (event) {
                if(event.target.className.indexOf('not-hide') == -1){
                    this.hide();
                }
            }
        }

    }
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";
    
    .slider-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;
        background: #494949;
        color: white;
        z-index: 19920220;
        

        &>ul {
            
            height: 100%;
            padding-bottom: pxToRem(50);
            overflow: auto;
            li {
                width: 100%;
                border-bottom: 1px solid #323232;

                span {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    padding: pxToRem(11) 0;
                    padding-left: pxToRem(25);
                }
            }

            #top {
                padding:pxToRem(11) 0;
                .top-img {
                    display: block;
                    width: pxToRem(10);
                    margin: 0 auto;
                    background: url(/public/icon.png);
                    background-position: 244px 434px !important;
                }
            }

            ul {


                li {
                    width: 100%;
                    border-bottom: 1px solid #323232;

                    span {
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        padding: pxToRem(11) 0;
                        padding-left: pxToRem(45);
                        color: white;
                        background: #595959;
                    }
                }
            }
        }

        

        #bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: pxToRem(11) 0;
            background: #494949;
            border-top: 1px solid #323232;

            button {
                display: block;
                width: 100px;
                height: 30px;
                margin: 0 auto;
                background: #494949;
                color: white;
                border: 1px solid white;
            }
        }
        
    }

    .black-layer {
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.0);
        z-index: 19920219;
    }
</style>