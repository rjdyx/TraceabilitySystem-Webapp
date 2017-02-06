/**
 * 种植批次管理操作组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/05
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
      <ul>
        <li @click="changeState"><a href="javascript:void(0)">状态</a></li>
        <li @click="popDialog('farm')"><a href="javascript:void(0)">农事</a></li>
        <li @click="popDialog('fertilize')"><a href="javascript:void(0)">施肥</a></li>
        <li @click="popDialog('medicament')"><a href="javascript:void(0)">施药</a></li>
        <li @click="popDialog('detect')"><a href="javascript:void(0)">检测</a></li>
        <li @click="popDialog('harvest')"><a href="javascript:void(0)">采收</a></li>
        <li @click="popDialog('grow')"><a href="javascript:void(0)">图片</a></li>
        <li><a href="javascript:void(0)">编辑</a></li>
      </ul>
      <div v-if="show" class="pop">
        <component
          :is="component"
          :cultivateId="item.id"
          @closeNew="show=false"
        ></component>
      </div>
    </div>
    
</template>

<script>
  import PopFarm from './pop-farm.vue'
  import PopFertilize from './pop-fertilize.vue'
  import PopMedicament from './pop-medicament.vue'
  import PopDetect from './pop-detect.vue'
  import PopHarvest from './pop-harvest.vue'
  import PopGrow from './pop-grow.vue'

  export default {
    name:'CultivateOperate',
    props:{
        item: {
            type: Object,
            default () {
                return null
            }
        }
    },
    data() {
      return {
        show: false,
        component: null
      }
    },
    methods: {

      changeState () {

      },

      popDialog (dialog) {
        this.show = true;
        switch(dialog) {
          case 'farm': this.component = PopFarm;break;
          case 'fertilize': this.component = PopFertilize;break;
          case 'medicament': this.component = PopMedicament;break;
          case 'detect': this.component = PopDetect;break;
          case 'harvest': this.component = PopHarvest;break;
          case 'grow': this.component = PopGrow;break;
        }
      },

    }
  }


</script>

<style lang="sass" scoped>

  @import "../../../sass/function";


  ul {
    width: 98%;
    margin: 0 auto;
    margin-bottom: 5px;
    overflow: hidden;
    border: 1px solid #d4d4d4;
    border-right: 0;
    border-bottom: 0;

    li {
      float: left;
      width: 25%;
      height: pxToRem(35);
      line-height: 35px;
      border-right: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;

      a {
        display: inline-block;
        width: 100%;
        color: black;

        &:active {
          background-color: #f0f0f0;
        }
      }
    }
  }
</style>