/**
 * tap组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  taps 
 * 类型：Array
 * 是否必填：false
 * 默认值：[]
 * 描述：
 * 例子：
 *   {
 *        url:'/plant',  // 在vue-router中的访问路径
 *        name:'种植管理',  // tap名
 *    }
 * 
 */
<template>
    <div class="nav-top">

        <ul class="nt-ul">
            <li v-for="(tap, index) in taps" v-if="index < 3" class="nt-li">
                <span @click="getKey(tap.key)" :class="{'link-active': activeKey == tap.key}">{{tap.name}}</span>
            </li>
        </ul>
        <transition 
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
        >
            <ul class="nt-ul" v-if="!isMore">
                <li v-for="(tap, index) in taps" v-if="index >= 3" class="nt-li">
                    <span @click="getKey(tap.key)" :class="{'link-active': activeKey == tap.key}">{{tap.name}}</span>
                </li>
            </ul>
        </transition>
        

        <div 
            v-if="taps.length > 3"
            @click="toggleTap()"
            :class="{'tap-more': isMore, 'tap-shrink': !isMore}"
        ></div>

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name:'Navbar',
    props:{
        taps: {
            type:Array,
            default: [{name: 'default', key: 'default'}]
        },
    },
    data () {
        return {
            self: this,
            activeKey: this.taps[0].key,
            // 初始位置
            yPosition: 0,
            // 箭头的样式
            isMore: true,
            body: null
        }
    },
    methods: {

        /**
         * 点击tap获取相应的key，以此改变tap的样式以及把key传回父组件
         * @param  {[type]} key [description]
         * @return {[type]}     [description]
         */
        getKey (key) {
            this.activeKey = key;
            this.$emit('getKey', key);
        },

        enter (el, done) {
            el.style.height = 0;
            let num = Math.ceil((this.taps.length - 3)/3);
            let totalHeight = 45.4 * num + 'px';
            Velocity(el, { height: totalHeight }, { duration: 300 });
            Velocity(el, { height: totalHeight }, { complete: done });
        },

        leave (el, done) {
            let num = Math.ceil((this.taps.length - 3)/3);
            let totalHeight = 45.4 * num + 'px';
            el.style.height = totalHeight;
            Velocity(el, { height: 0 }, { duration: 300 });
            Velocity(el, { height: 0 }, { complete: done });
        },

        touchstart (event) {
            //获取第一个触摸点
            let touch = event.targetTouches[0];
            this.yPosition = touch.pageY;
        },

        touchmove (event) {

            let touch = event.targetTouches[0];
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop == 0) {
                // 下滑，则展开tap
                if (touch.pageY - this.yPosition > 20){
                    this.isMore = false;
                }
                // 上滑，则收起tap
                if (this.yPosition - touch.pageY > 20){
                    this.isMore = true;
                } 
            }
        },

        toggleTap () {
            if (this.isMore) {
                this.isMore = false;
            }else {
                this.isMore = true;
            }
        }

    }
  }


</script>

<style lang="sass" scoped>

    @import '../../../sass/function';

    .nt-ul{
        overflow: hidden;
        height: pxToRem(45.4);
    }
    .nt-li{
        float: left;
        width: 33.33%;
        height: pxToRem(39);
        line-height: pxToRem(39);
        background-color: #eaeaea;
        margin-top: pxToRem(6.4);
        text-align: center;
        border: 1px solid #d4d4d4;
        box-sizing: border-box;
        border-left: 0;

        span {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #4d4d4d;
            box-sizing: border-box;

            &.link-active {
              display: inline-block;
              width: 100%;
              height: 100%;
              background-color: #009acb;
              border: 1px solid #009acb;
              color: white;
            }
        }

    }
    .nt-li-bor{
        border-left: 0px solid #d4d4d4;
        border-right: 0px solid #d4d4d4;
    }

    .tap-more, .tap-shrink {
        width: 100%;
        height: pxToRem(20);
        margin-top: pxToRem(8);
        background: url(/public/tap-more.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 5% 41%;
    }

    .tap-shrink {
        transform: rotate(180deg);
    }
    

</style>