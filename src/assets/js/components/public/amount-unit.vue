/**
 * 用量组件
 * @description 用量+单位
 * @author 苏锐佳
 * @date 2017/02/07
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
      {{amount}} 
    </div>
</template>

<script>
  export default {
    name:'AmountUnit',
    props: {
        item: {
            type: Object,
            default () {
                return null
            }
        },
    },
    computed: {
        amount () {
            let amount_with_unit = '';
            if(this.item.amount != null) {
                amount_with_unit += this.item.amount;
            }
            if(this.item.unit != null) {
                amount_with_unit += this.item.unit;
            }
            return amount_with_unit;
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