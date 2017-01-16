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
    <div>
      {{item.area + item.area_unit}} 
    </div>
</template>

<script>
  export default {
    name:'AreaUnit',
    props:{
        item: {
            type: Object,
            default () {
                return null
            }
        },
    }
  }


</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    @import "../../../sass/_percent.scss";

    div {
        width: 100%;
        @extend %wrap;
    }
</style>