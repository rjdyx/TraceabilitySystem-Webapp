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
      {{item.table_type | table_name}}
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
                case 'fodderuse': return '饲料使用';
                case 'disease': return '畜禽病疫';
                case 'detection': return '畜禽检疫';
                case 'area': return '畜禽圈舍';
            }
        }
    }
  }


</script>