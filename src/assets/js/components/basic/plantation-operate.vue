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
        <li><a :href="aHref" target="vedioFrame" @click="showVedioClick">视频监控</a></li>
        <li @click="edit" :class="{active: isActive}"><a href="javascript:void(0)">编辑</a></li>
      </ul>
      <iframe v-if="showVedio && letItem.live_address" id="vedioFrame" name="vedioFrame" scrolling="no" frameborder="0" style="width:100%; height:180px; "></iframe> 
      <div v-if="show" class="pop">
        <pop-plantation
          :letItem="letItem"
          :edit="true"
          @closeEdit="show=false"
        ></pop-plantation>
      </div>
    </div>
    
</template>
  
<script>

  import PopPlantation from './pop-plantation.vue';

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
        isActive: false,
        showVedio: false,
      }
    },
    computed: {
      aHref () {
        if(!this.showVedio) {
          return 'javascript:void(0)'
        }else {
          return 'https://open.ys7.com/view/h5/' + this.letItem.live_address
        }
      }
    },
    components: {
      PopPlantation
    },
    methods: {

      edit () {
        this.show = !this.show
        this.isActive = !this.isActive
      },

      showVedioClick () {
        if(this.letItem.live_address) {
          this.showVedio = !this.showVedio
        }else {
          this.$alert('请配置视频设备号')
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
      width: 50%;
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