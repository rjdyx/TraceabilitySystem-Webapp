/**
 * 兽药类别组件
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
      {{item.drug_type | table_name}}
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
                case 1: return '疾病防治药';
                case 2: return '传染病防治药';
                case 3: return '寄生虫病防治药';
                case 4: return '促生长药';
                case 5: return '其他类';
            }
        }
    }
  }


</script>