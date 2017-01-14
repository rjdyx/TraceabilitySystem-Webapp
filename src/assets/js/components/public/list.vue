/**
 * 顶部栏组件
 * @description 顶部栏，可在title之前插入slot
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 * Props:
 * 
 * @param  title 
 * 类型：String
 * 是否必填：false
 * 默认值：''
 * 描述：标题
 * 
 * 
 * Slots:
 * 
 * @name 
 * 位置：title之前
 * 默认内容：无
 * 
 * 
 */
<template>       
    <tr :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" name="order">
        <template v-for="proto in protos">
            <td v-if="proto instanceof Array" :name="proto[0]" class="td-note">
                {{item[proto] | joinName}}
            </td>
            <td v-else :name="proto" class="td-note">
                {{item[proto]}}
            </td>
        </template>
        <td class="align-c" name="open">
            <img :src="$img('list.png')">
        </td>
    </tr>
</template>

<script>
  export default {
    name:'MyHead',
    props:{
        item:{
            type:Object,
            default () {
                return null
            }
        },
        // 属性
        protos: {
            type: Array,
            default () {
                return []
            }
        },
    },
    filters: {
        joinName (arr) {
            let str = '';
            if(arr instanceof Array) {
                for(let item of arr) {
                    str += item;
                }
            }
            return str;
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";

    .header{
        position: relative;
        background-color: #009acb;
    }

    .title{
        width: 100%;
        height: pxToRem(54);
        font: pxToRem(21) 微软雅黑;
        color: #fff;
        line-height: pxToRem(54);
        text-align: center;
    }

</style>