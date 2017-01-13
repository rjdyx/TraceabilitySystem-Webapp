/**
 * 顶部栏组件
 * @description 顶部栏，可在title之前插入slot
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  title 
 * 类型：String
 * 是否必填：false
 * 默认值：''
 * 描述：标题
 * 
 * 
 * Slots:
 * 
 * @name 
 * 位置：title之前
 * 默认内容：无
 * 
 * 
 */
<template>
    <header class="header">
        <slot name="left"></slot>
        <h1 class="title">{{title}}</h1>
        <slot name="right"></slot>
    </header>
</template>

<script>
  export default {
    name:'MyHead',
    props:{
        title:{
            type:String,
            default:''
        }
    }
  }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";

    .header{
        position: relative;
        background-color: #009acb;
    }

    .title{
        width: 100%;
        height: pxToRem(54);
        font: pxToRem(21) 微软雅黑;
        color: #fff;
        line-height: pxToRem(54);
        text-align: center;
    }

</style>