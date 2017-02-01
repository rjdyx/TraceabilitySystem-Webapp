/**
 * 是否上传图片组件
 * @description 如果传过来的列表项有图片，则显示打钩，否则不打钩
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
    <span>
      <img v-if="showImg" :src="$img('ok.png')">  
    </span>
</template>

<script>
  export default {
    name:'MyImage',
    props: {
        item: {
            type: Object,
            default () {
                return null
            }
        },
    },
    computed: {
      showImg () {
        return  this.item.image != null && 
                this.item.image != '' && 
                this.item.image != 'upload.png'
      }
    }
  }


</script>