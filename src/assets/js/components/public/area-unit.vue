/**
 * 单位组件
 * @description 面积+单位
 * @author 苏锐佳
 * @date 2017/01/16
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
    <div>
      {{area}} 
    </div>
</template>

<script>
  export default {
    name:'AreaUnit',
    props: {
        item: {
            type: Object,
            default () {
                return null
            }
        },
    },
    computed: {
        area () {
            let area_with_unit = '';
            if(this.item.area != null) {
                area_with_unit += this.item.area;
            }
            if(this.item.area_unit != null) {
                area_with_unit += this.item.area_unit;
            }
            return area_with_unit;
        }
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