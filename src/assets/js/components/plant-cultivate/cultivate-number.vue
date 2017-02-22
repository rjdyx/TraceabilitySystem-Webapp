/**
 * 批次号组件
 * @description 
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
        <router-link :to="{name: 'plant-cultivate-detail', params: {id: item.id}}" tag="span" exact>{{item.serial}}</router-link>
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
    }
  }


</script>

<style scoped>
    span {
        color: #2196F3;
    }
</style>