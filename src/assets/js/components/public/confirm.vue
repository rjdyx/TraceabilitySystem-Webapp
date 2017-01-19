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
        <div v-if="show" key="dialog" class="confirm">
            <div class="title">
                {{title}}
            </div>
            <div class="message">
                {{message}}
            </div>
            <div class="btns">
                <a href="#" @click="cancelMethod" class="btn btn-cancel">{{cancel}}</a>
                <a href="#" @click="confirmMethod" class="btn btn-confirm">{{confirm}}</a>
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
            title: {
                type: String,
                default: '删除选项'
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
                this.$emit('cancelAction');
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


    .confirm {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: #9E9E9E;
        background-color: white;
        z-index: 19920220;

        .title {
            padding: 18px 0;
            padding-bottom: 0;
            background-color: white;
            color: black;
            font-weight: 600;
            text-align: center;
        }

        .message {
            width: 80%;
            margin: 0 auto;
            padding: 17px 0;
            background-color: #ffffff;
            // border-bottom: 1px solid #d7d7d7;
        }
        
        .btns {
            
            width: 80%;
            margin: 0 auto;
            margin-top: 10px;
            margin-bottom: 24px;

            .btn {
                display: inline-block;
                width: 50%;
                height: 37px;
                text-align: center;
                line-height: 37px;
            }
        }
        

        a:link, a:visited, a:focus, a:hover, a:active {
            color: #6c6c6c;
        }

        a:active {
            background-color: #f0f0f0;
        }

        .btn-confirm {
            background-color: #ffffff;
            border: 1px solid #d7d7d7;
            border-radius: 0 40px 40px 0;
        }

        .btn-cancel {
            background-color: #ffffff;
            border: 1px solid #d7d7d7;
            border-right: 0;
            border-radius: 40px 0 0 40px;
            box-sizing: border-box;
        }

    }
</style>
