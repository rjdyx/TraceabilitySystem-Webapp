/**
 * 弹窗组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/08
 * 
 * Props:
 * 
 * @param  show 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：true
 * 描述：显示或隐藏提示框的标志
 * 
 * 
 * @param  title 
 * 类型：String
 * 是否必填：false
 * 默认值：'删除选项'
 * 描述：提示框的提示信息——标题
 * 
 * 
 * @param  message 
 * 类型：String
 * 是否必填：false
 * 默认值：'确认删除？'
 * 描述：提示框的提示信息——内容
 * 
 * 
 * @param  confirm 
 * 类型：String
 * 是否必填：false
 * 默认值：'确定'
 * 描述：提示框的右边按钮的文字
 * 
 * 
 * @param  cancel 
 * 类型：String
 * 是否必填：false
 * 默认值：'取消'
 * 描述：提示框的左边按钮的文字
 * 
 * 
 * 
 * Events:
 * 
 * @function confirmAction
 * 返回：无
 * 必用：false
 * 描述：右边按钮的触发事件
 * 
 * @function cancelAction
 * 返回：无
 * 必用：false
 * 描述：左边按钮的触发事件
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
            <div id="confirm" @click="confirm">确定</div>
        </div>
    </transition-group>
</template>
<script>

    export default {
        name: 'Dialog',
        props: {
        },
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
        height: 300px;
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

    #confirm {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8px;
        height: 40px;
        line-height: 40px;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        background: #009acb;
        color: white;
    }

    .animated {
      -webkit-animation-duration: .3s;
      animation-duration: .3s;
    }
</style>
