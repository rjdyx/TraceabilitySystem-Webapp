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
    <div class="logo"></div>
</template>

<script>
  export default {
    name:'Logo',
    destroyed () {
      console.log('destroyed');
      console.log(this);
      this.$emit('callback');
    }
  }
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";

    .logo {
        width: pxToRem(100);
        height: pxToRem(100);
        margin: 0 auto;
        padding-top: pxToRem(100);
        margin-bottom: pxToRem(50);
        background-image: url(/public/logo.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom;
    }

</style>