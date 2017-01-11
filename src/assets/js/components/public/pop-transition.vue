/**
 * 向上滑动组件
 * @description 给插入其中的组件赋予向上滑动显示的动画效果
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * 
 * Slots:
 * 
 * @name 
 * 位置：
 * 默认内容：无
 * 
 * 
 */
<template>
    <transition-group
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
    >
        <slot></slot>
    </transition-group>
</template>

<script>

    export default {
        name: 'pop-transition',
        methods: {
            beforeEnter (el) {

            },
            enter (el, done) {
                if(document.body.clientHeight != el.offsetHeight) {
                    el.style.bottom = '-'+ el.offsetHeight +'px';
                    Velocity(el, { bottom: 0 }, { duration: 300 });
                    Velocity(el, { bottom: 0 }, { complete: done });
                }

            },
            leave (el, done) {
                el.style.display = 'none';
            },
        }
    }
</script>

