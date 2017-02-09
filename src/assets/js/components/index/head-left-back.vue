/**
 * 顶部模块左边按钮组件
 * @description 返回按钮
 * @author 苏锐佳
 * @date 2017/02/08
 * 
 * Props:
 * 
 * @param  item 
 * 类型：Object
 * 是否必填：false
 * 默认值：null
 * 描述：单个列表项
 * 例子：
 * 
 */
<template>
    <div @click="clickEvent()" class="left-btn">
        <img :src="$img('back.png')" alt="">
    </div>
</template>

<script>
  export default {
    name:'HeadLeftBack',
    methods: {
        clickEvent () {
            this.$router.back();
            this.$emit('clickEvent', 'back')
        }
    }
  }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    img {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: pxToRem(15);
        height: pxToRem(25);
        margin: auto;
    }
</style>