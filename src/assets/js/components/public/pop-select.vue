/**
 * 选择弹窗组件
 * @description 
 * @author 何翠香
 * @date 2016/12/20
 * 
 * Props:
 * 
 * @param  items 
 * 类型：Array
 * 是否必填：false
 * 默认值：[]
 * 描述：弹窗信息列表
 * 
 * @param  title 
 * 类型：String
 * 是否必填：false
 * 默认值：请选择
 * 描述：弹窗信息标题，默认显示为“请选择”
 * 
 * @param  defaultIndex 
 * 类型：Number
 * 是否必填：false
 * 默认值：0
 * 描述：页面加载时默认显示列表的第一个
 * 
 *@param  protoBack 
 * 类型：String
 * 是否必填：false
 * 默认值：空
 * 描述：函数默认返回的类型
 *
 *@param  protoShow 
 * 类型：String
 * 是否必填：false
 * 默认值：空
 * 描述：默认显示的类型
 *
 * Events:
 * 
 * @function getMsg
 * 返回：无
 * 必用：true
 * 描述：点击显示对应的下标，并返回给父组件
 * 
 * @function pop
 * 返回：无
 * 必用：true
 * 描述：选择弹窗状态
 * 
 */
<template>
    <div>
        <div @click.stop="show = !show">{{showMsg}}<img :src="$img('/images/arrow.png')" class="arrow"></div>
        <div class="maskLayer" v-if="show" @click="pop">
            <div class="list" v-if="show">
                <div class="title">{{title}}</div>
                <ul>
                    <li v-for="(item,index) in items" @click="getMsg(index)">
                        <template v-if="protoBack == ''">{{item}}</template>
                        <template v-else>{{item[protoShow]}}</template>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'pop-select',
        props:{
            items: {
                type: Array,
                default () {
                  return ['']
                }
            },
            title: {
                type: String,
                default: '请选择'
            },
            //默认显示
            defaultIndex: {
                type: Number,
                default: 0
            },
            //默认返回的类型
            protoBack: {
                type: String,
                default: ''
            },
            //默认显示的类型
            protoShow: {
                type: String,
                default: 'name'
            }
        },
        //计算属性
        computed: {
            showMsg: {

                get () {
                    if(this.items.length != 0) {
                        if(this.index == -1){
                            if(this.protoBack == ''){
                                return this.items[this.defaultIndex];
                            }else {
                                return this.items[this.defaultIndex][this.protoShow];
                            }
                        }else {
                            if(this.protoBack == ''){
                                return this.items[this.index];
                            }else {
                                return this.items[this.index][this.protoShow];
                            }
                        }
                    }else {
                        return this.items[0];
                    }
                },
                set (newValue) {
                    this.index = newValue;
                }
                
            }
        },
        data () {
            return {
            msg: '',
            show: false,
            index: -1
          }
        },
        methods: {
            getMsg (index) {
                this.showMsg = index;
                if(this.protoBack == '') {
                    this.$emit('callback', this.items[index]);
                }else {
                    this.$emit('callback', this.items[index][this.protoBack]);
                }
                
            },
            //选择弹窗状态
            pop (){
                if(this.show=true){
                    this.show=false;
                }
            },
            
        }
    }

</script>

