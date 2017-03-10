/**
 * 顶部模块右边按钮组件
 * @description 更多按钮，点击后展示批次相关信息
 * @author 舒丹彤
 * @date 2017/03/06
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
    <div @click="clickEvent()"class="right-btn">
        <img :src="$img('more.png')" alt="">
    </div> 
</template>

<script>

  import {mapMutations} from 'vuex';
  import VegetableDetailMsg from '../vegetable-harvest/vegetable-detail-msg.vue';

  export default {
    name:'HeadRightMore',
    methods: { 

        ...mapMutations([
            'setShowLayer',
            'setLayerComponent'
        ]),

        clickEvent () {
            this.setShowLayer(true);
            this.setLayerComponent(VegetableDetailMsg);
            this.$emit('clickEvent', 'more')
        }
    }
  }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    img {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: pxToRem(25);
        height: pxToRem(20);
        margin: auto;
    }
</style>