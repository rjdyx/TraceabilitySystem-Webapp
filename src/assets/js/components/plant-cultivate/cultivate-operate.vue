/**
 * 种植批次管理操作组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/05
 * 
 * Props:
 * 
 * @param  letItem 
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
        <li @click="showConfirm=true"><a href="javascript:void(0)">状态</a></li>
        <li @click="popDialog('farm')" :class="{active: isActive=='farm'}"><a href="javascript:void(0)">农事</a></li>
        <li @click="popDialog('fertilize')" :class="{active: isActive=='fertilize'}"><a href="javascript:void(0)">施肥</a></li>
        <li @click="popDialog('medicament')" :class="{active: isActive=='medicament'}"><a href="javascript:void(0)">施药</a></li>
        <li @click="popDialog('detect')" :class="{active: isActive=='detect'}"><a href="javascript:void(0)">检测</a></li>
        <li @click="popDialog('harvest')" :class="{active: isActive=='harvest'}"><a href="javascript:void(0)">采收</a></li>
        <li @click="popDialog('grow')" :class="{active: isActive=='grow'}"><a href="javascript:void(0)">图片</a></li>
        <li @click="popDialog('cultivate')" :class="{active: isActive=='cultivate'}"><a href="javascript:void(0)">编辑</a></li>
      </ul>
      <div v-if="show && !edit" class="pop">
        <component
          :is="component"
          :cultivateId="letItem.id"
          @closeNew="show=false"
        ></component>
      </div>
      <div v-if="show && edit" class="pop">
        <pop-cultivate
          :letItem="letItem"
          :edit="edit"
          @closeEdit="show=false"
        ></pop-cultivate>
      </div>
      <!-- 确认模块  -->
      <confirm
        :show="showConfirm"
        title="修改状态"
        message="确定要修改批次状态吗？"
        @confirmAction="changeState"
        @cancelAction="showConfirm=false"
      ></confirm>
    </div>
    
</template>
  
<script>
  import PopFarm from './pop-farm.vue'
  import PopFertilize from './pop-fertilize.vue'
  import PopMedicament from './pop-medicament.vue'
  import PopDetect from './pop-detect.vue'
  import PopHarvest from './pop-harvest.vue'
  import PopGrow from './pop-grow.vue'
  import PopCultivate from './pop-cultivate.vue'

  export default {
    name:'CultivateOperate',
    props:{
        letItem: {
            type: Object,
            default () {
                return null
            }
        }
    },
    data() {
      return {
        show: false,
        component: null,
        edit: false,
        showConfirm: false,
        isActive: ''
      }
    },
    components: {
      PopCultivate
    },
    methods: {

      /**
       * 修改批次状态
       */
      changeState () {
        this.$http.get(this.$adminUrl('cultivate/state?params=1')).then((response) => {
            if(response.data) {
              this.$alert('修改成功', 's');
            }
        }, (error) => {
            this.$alert('连接出错', 'e');
        });
      },

      popDialog (dialog) {
        this.show = true;
        this.edit=false;
        switch(dialog) {
          case 'farm': 
            this.component = PopFarm;
            this.isActive = 'farm';
            break;
          case 'fertilize': 
            this.component = PopFertilize;
            this.isActive = 'fertilize';
            break;
          case 'medicament': 
            this.component = PopMedicament;
            this.isActive = 'medicament';
            break;
          case 'detect': 
            this.component = PopDetect;
            this.isActive = 'detect';
            break;
          case 'harvest': 
            this.component = PopHarvest;
            this.isActive = 'harvest';
            break;
          case 'grow': 
            this.component = PopGrow;
            this.isActive = 'grow';
            break;
          case 'cultivate': 
            this.edit=true;
            this.isActive = 'cultivate';
            break;
        }
      }

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

  .active {
    background-color: #f0f0f0;
  }
</style>