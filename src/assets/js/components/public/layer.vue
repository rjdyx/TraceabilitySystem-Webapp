/**
 * 弹窗组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/08
 * 
 * 
 * Events:
 * 
 * @function confirm
 * 返回：无
 * 必用：false
 * 描述：确认按钮的触发事件
 * 
 * 
 * 
 */
<template>
    <transition-group
            name="animate-class-transition"
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
    >
        <div key="black" class="black-layer"></div>
        <div key="layer" class="layer">
            <div class="content">
                <slot></slot>
            </div>
            <div class="confirm">
                <div id="confirm-btn" @click="confirm">确定</div>
            </div>
        </div>
    </transition-group>
</template>
<script>

    export default {
        name: 'Dialog',
        methods: {
            confirm () {
                this.$emit('confirm');
            }
        }
    }
</script>
<style lang="sass" scoped>

    .layer {
        position: absolute;
        width: 80%;
        height: 45%;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: white;
        box-shadow: 0 0 3px 0px #9E9E9E;
        z-index: 19920220;

        .content {
            width: 90%;
            height: 80%;
            margin: 6px auto;
            overflow: scroll;
        }
    }

    .confirm {
        
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 4px 0px;
        background: white;

        #confirm-btn {
            width: 80%;
            margin: 0 auto;
            text-align: center;
            background: #009acb;
            color: white;
        }
    }
    

    .animated {
      -webkit-animation-duration: .3s;
      animation-duration: .3s;
    }
</style>
