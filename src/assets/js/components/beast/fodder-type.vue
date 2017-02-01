/**
 * 饲料类别组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/01
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
    <span>
      {{item.fodder_type | table_name}}
    </span>
</template>

<script>
  export default {
    name:'ResearchField',
    props:{
        item: {
            type: Object,
            default () {
                return null
            }
        }
    },
    filters : {
        table_name (value) {
            switch (value) {
                case 1: return '粗粮类';
                case 2: return '维生素类';
                case 3: return '青蔬类';
                case 4: return '矿物质类';
                case 5: return '干草料类';
                case 6: return '其他类';
            }
        }
    }
  }


</script>