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
    <template v-for="(item, index) in list">         
        <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:item.id, index:index}" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" name="order">
            <td class="checked">
                <input :value="{'id':item.id, 'index':index}" v-model="deleteLists" type="checkbox">
            </td>
            <template v-for="proto in protos">
                <td v-if="proto instanceof Array" :name="proto[0]" class="td-note">
                    {{item[proto] | joinName}}
                </td>
                <td v-else :name="proto" class="td-note">
                    {{item[proto]}}
                </td>
            </template>
            <td @click="troggleEdit(item.id)" class="align-c" name="open">
                <img :src="$img('list.png')">
            </td>
        </tr>
        
    <tr v-if="showItemDetail != '' && showItemDetail == item.id">
        <td colspan="5">
            <slot name="pop-edit"></slot>
        </td>
    </tr>
</template>
</template>

<script>
  export default {
    name:'MyHead',
    props:{
        title:{
            type:String,
            default:''
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