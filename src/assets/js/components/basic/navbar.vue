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
    <div class="nav-top">
        <ul class="nt-ul">
            <li v-for="tap in taps" class="nt-li">
                <span @click="getKey(tap.key)" :class="{'link-active': activeKey == tap.key}">{{tap.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name:'Navbar',
    props:{
        taps: {
            type:Array,
            default: [{name: 'default', key: 'default'}]
        },
    },
    data () {
        return {
            activeKey: this.taps[0].key
        }
    },
    methods: {
        getKey (key) {
            this.activeKey = key;
            this.$emit('getKey', key);
        }
    }
  }


</script>

<style lang="sass" scoped>

    @import '../../../sass/function';

    .nt-ul{
        overflow: hidden;
    }
    .nt-li{
        float: left;
        width: 33.33%;
        height: pxToRem(39);
        line-height: pxToRem(39);
        background-color: #eaeaea;
        margin-top: pxToRem(6.4);
        text-align: center;
        border: 1px solid #d4d4d4;
        box-sizing: border-box;
        border-right: 0;

        span {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #4d4d4d;
            box-sizing: border-box;

            &.link-active {
              display: inline-block;
              width: 100%;
              height: 100%;
              background-color: #009acb;
              border: 1px solid #009acb;
              color: white;
            }
        }

    }
    .nt-li-bor{
        border-left: 0px solid #d4d4d4;
        border-right: 0px solid #d4d4d4;
    }
</style>