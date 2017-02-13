/**
 * 重置按钮组件
 * @description
 * @author 苏锐佳
 * @date 2017/02/09
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
    <button @click="reset" class="btn btn-del" type="button">重置批次</button>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name:'AreaUnit',
    methods: {
        ...mapMutations([
            'setSelectedLists'
        ]),

        reset () {
            this.setSelectedLists([]);
        }
    }
  }


</script>