/**
 * 确认提示框组件
 * @description 确认提示框，具备从窗口底部上滑的动画效果
 * @author 苏锐佳
 * @date 2016/12/14
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
 * @param  message 
 * 类型：String
 * 是否必填：false
 * 默认值：'确认删除？'
 * 描述：提示框的提示信息
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
    <pop-transition>
        <div v-if="show" key="black" class="black-layer"></div>
        <div v-if="show" key="dialog" class="comfirn">
            <div class="message">
                {{message}}
            </div>
            <div>
                <div @click="cancelMethod" class="btn btn-cancel">{{cancel}}</div>
                <div @click="confirmMethod" class="btn btn-confirm">{{confirm}}</div>
            </div>
        </div>
    </pop-transition>
</template>
<script>

    export default {
        name: 'Dialog',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            message: {
                type: String,
                default: '确认删除？'
            },
            confirm: {
                type: String,
                default: '确定'
            },
            cancel: {
                type: String,
                default: '取消'
            },
        },
        methods: {
            /**
             * 触发confirmAction事件
             */
            confirmMethod () {
                this.$emit('confirmAction');
            },

            /**
             * 触发cancelAction事件
             */
            cancelMethod () {
                this.$emit('cancelAction');
            },
        }
    }
</script>
<style lang="sass" scoped>


    .comfirn {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: #9E9E9E;
        z-index: 19920220;

        .message {
            padding: 45px 0;
            text-align: center;
            background-color: #ffffff;
        }

        .btn {
            float: left;
            width: 50%;
            text-align: center;
            padding: 15px 0;
        }

        .btn-confirm {
            background-color: #ffffff;
        }

        .btn-cancel {
            background-color: #ffffff;
            color: #9E9E9E;
            border-right: 1px solid #d7d7d7;
            box-sizing: border-box;
        }

    }
</style>
