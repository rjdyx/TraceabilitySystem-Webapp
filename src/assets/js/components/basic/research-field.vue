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
      {{item.table_type | table_name}}
    </div>
</template>

<script>
  export default {
    name:'MyImage',
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
            if(value == 'fertilize'){
                return '施肥';
            }else if(value == 'spray') {
                return '病虫害';
            }else if(value == 'detect') {
                return '检验检测';
            }else {
                return '农事';
            }
        }
    }
  }


</script>