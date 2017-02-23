/**
 * 
 * 列表项信息组件
 * @description 
 * @author 苏锐佳
 * @date 2017/01/13
 * 
 * 
 * Props:
 * 
 * @param  _key 
 * 类型：String
 * 是否必填：true
 * 默认值：''
 * 描述：显示此table-list的唯一标识
 * 
 * @param  component 
 * 类型：Object
 * 是否必填：true
 * 默认值：null
 * 描述：此prop传入的是一个包含“新增/编辑弹窗”组件的对象，
 * 包含“新增/编辑弹窗”组件的属性名必须和_key完全一致；
 * 第一，如果每一列中的某个属性不是简单地显示字符串，可以给此prop对象添加新的属性，属性名与protos数组里的保持一致；
 * 例如：{planta: PopPlanta, area: AreaUnit}：
 * 其中'planta'属性名与_key完全一样，
 * 'area'属性名与protos数组里的某个值完全一样，
 * 这样遍历到此属性的时候，会用AreaUnit组件去显示而不是简单显示字符串
 * 第二，如果想要自定义每一行的操作按钮，则可以给此prop添加open属性，
 * open属性的值为自定义组件
 * 
 * @param  args 
 * 类型：Object
 * 是否必填：false
 * 默认值：{edit: true}
 * 描述：传递给编辑模块的参数
 * 
 * @param  theads 
 * 类型：Array
 * 是否必填：true
 * 默认值：['']
 * 描述：table的thead里每一列显示的名字，例如['种植区名称', '种植面积', '负责人']
 * 
 * @param  protos 
 * 类型：Array
 * 是否必填：true
 * 默认值：[]
 * 描述：属性，例如['name', 'area', 'director']
 * 
 * @param  widths 
 * 类型：Array
 * 是否必填：true
 * 默认值：[]
 * 描述：table除去前后两列后的每一列的宽（单位%），合计不超过73%，例如[32, 24, 17]
 * 
 * @param  showCheckbox 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：true
 * 描述：是否显示每一行的checkbox
 * 
 * @param  showOperate 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：true
 * 描述：是否显示每一行的操作按钮
 * 
 * @param  showFooter 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：true
 * 描述：是否显示底部批量操作模块
 * 
 * Events:
 * 
 * @function selectAll
 * 返回：
 * 必用：false
 * 描述：点击全选按钮时触发
 * 
 * @function checkedBox
 * 返回：{'item':item, 'index':index}
 * 必用：false
 * 描述：点击checkbox时触发
 *
 * @function longTouchEvent
 * 返回：{'item':item, 'index':index}
 * 必用：false
 * 描述：长按某一行时触发
 * 
 * @function troggleEdit
 * 返回：true or false
 * 必用：false
 * 描述：点击每一行的操作按钮时触发
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>
        <div class="table-list">
            <!-- 表格的顶部栏thead -->
            <div class="list-head">
                <div class="list-head-th">
                    <!-- 序号列，宽度14% -->
                    <span v-if="showCheckbox" name="order" class="fir">序号</span>

                    <!-- 自定义的数据列，总宽度73% -->
                    <template v-for="(thead, index) in theads">
                        <span 
                            :name="protos[index]"
                            :style="{width: widths[index] + '%'}"
                        >
                            {{thead}}
                        </span>
                    </template>

                    <!-- 按钮列，宽度13% -->
                    <span v-if="showOperate" name="open" class="align-c"></span>
                </div>
            </div> 

            <!-- 表格的中间数据栏tbody -->
            <transition :name="slideList">
                <transition-group :name="slideListItem" tag="ul" key="tbody" class="list-body" v-if="showList">
                    <template v-for="(item, index) in list">

                            <li 
                                v-touchAction:longTouchEvent="{vm:self, item:item, index:index}" 
                                :id="_key + item.id" 
                                :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" 
                                :key="_key + item.id" 
                                name="order">

                                <!-- checkbox -->
                                <span v-if="showCheckbox" class="checked" name="order">
                                    <span 
                                        :class="{'f-checkbox':true, 'f-checkbox-check': isCheck(item.id)}" 
                                        @click="checkedBox({item:item, index:index})"></span>
                                </span>
                                
                                <!-- middle item -->
                                <template v-for="(proto, indexProto) in protos">
                                    <span 
                                        v-if="component != null && component[proto] != null" :style="{width: widths[indexProto] + '%'}" 
                                        :name="proto" class="td-note">
                                        <component
                                            :is="component[proto]"
                                            :item="item"
                                        ></component>
                                    </span>
                                    <span v-else :name="proto" :style="{width: widths[indexProto] + '%'}" class="td-note">
                                        {{item[proto]}}
                                    </span>
                                </template>

                                <!-- open button -->
                                <span v-if="cusButton && showOperate" class="align-c" name="open">
                                    <component
                                        :is="component.open"
                                        :item="item"
                                    ></component>
                                </span>
                                <span v-else-if="showOperate" @click="troggleEdit(item.id)" class="align-c" name="open">
                                    <img :src="$img('list.png')">
                                </span>
                            </li>
                        
                        <li v-if="showItemDetail != '' && showItemDetail == item.id" :key="_key + item.id + '-pop'">
                            <template v-if="component != null && component[_key] != null">
                                <component 
                                    :is="component[_key]"
                                    :letItem="item"
                                    :args="args"
                                ></component>
                            </template>
                        </li>
                    </template>
                </transition-group>
            </transition>

            <!-- 表格的底部栏tfoot -->
            <div v-if="showFooter" class="list-foot">
                <div class="list-foot-tr">
                    <span name="order">
                        <span :class="{'f-checkbox':true, 'f-checkbox-check': isAllCheck}" @click="selectAll"></span>
                    </span>
                    <span style="width: 86%">
                        <slot name="batchButtons"></slot>
                    </span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="sass" scoped>
    @import "../../../../sass/function";
    @import "../../../../sass/_percent.scss";

    .f-checkbox {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        vertical-align: middle;
    }

    .f-checkbox-check {
        background-color: #009acb;
        border-color: #009acb;
    }

    .f-checkbox-check::after{
        position: absolute;
        left: 5px;
        top: 2px;
        width:4px;
        height:8px;
        content:"1";
        box-sizing:content-box;
        border:2px solid #fff;
        border-left:0;
        border-top:0;
        color: rgba(255, 0, 0, 0);

        transform:rotate(45deg);
        -ms-transform:rotate(45deg);
        -webkit-transform:rotate(45deg);
        

        transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;

        -webkit-transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
        -ms-transform-origin:center;
        -webkit-transform-origin:center;

        transform-origin:center;
        -ms-transform-origin:center;
        -webkit-transform-origin:center;
    }

    span[name="order"] {
        width: 14%;
    }

    span {
        @extend %wrap;
    }

    span[name="open"] {
        width: 13%;
    }

    .align-c {
        img {
            width: pxToRem(17);
        }
    }

    .slide-fade-left-enter-active, 
    .slide-fade-left-leave-active, 
    .slide-fade-right-enter-active, 
    .slide-fade-right-leave-active{
      transition: all .8s ease;
    }

    .slide-fade-left-leave-active{
      transform: translateX(30px);
      opacity: 0;
    }

    .slide-fade-left-enter {
      transform: translateX(-30px);
      opacity: 0;
    }

    .slide-fade-right-leave-active{
      transform: translateX(-30px);
      opacity: 0;
    }

    .slide-fade-right-enter {
      transform: translateX(30px);
      opacity: 0;
    }

    .slide-up-enter-active, .slide-up-leave-active{
      transition: all .3s ease;
    }

    .table-list {
        .list-body {
            li.slide-up-leave-active, li.slide-up-enter{
              height: 0px;
              line-height: 0px;
              opacity: 0;
            }
        }
    }
</style>

<script>

    // import { api } from '../../protoName.js'

    export default {
        name: 'List',
        props: {
            _key: {
                type: String,
                required: true,
                default: ''
            },
            // 弹出框
            component: {
                type: Object,
                default () {
                    return null
                }
            },
            // 传递给component的参数
            args: {
                type: Object,
                default () {
                    return {edit: true}
                }
            },
            // thead
            theads: {
                type: Array,
                required: true,
                default () {
                    return ['']
                }
            },
            // 属性
            protos: {
                type: Array,
                required: true,
                default () {
                    return []
                }
            },
            // 列表th的宽：%
            widths: {
                type: Array,
                required: true,
                default () {
                    return []
                }
            },
            // 是否显示checkbox
            showCheckbox: {
                type: Boolean,
                default: true
            },
            // 是否显示操作按钮
            showOperate: {
                type: Boolean,
                default: true
            },
            // 是否显示底部批量操作模块
            showFooter: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                // 是否全选
                isAllCheck: false,
                // 存放是否展开列表项编辑模块的标志，
                showItemDetail: '',
                // vue实例
                self: this
            }
        },
        computed: {

            // 是否显示自定义操作按钮
            cusButton () {
                return this.component != null && this.component.open != null
            }
        },
        watch: {
            // 如果不是全部选中，则取消全选按钮的选中状态
            selectedLists: function(val) {
                if(this.selectedLists.length !== this.list.length) {
                    this.isAllCheck = false;
                }else if(this.selectedLists.length !== 0) {
                    this.isAllCheck = true;
                }
            },
            // [api.invoke]: function(invoke) {
            //     this.$pluginApi.excFn(this, 'init', 'closeNextLine');
            // }
        },
        methods: {

            /**
             * 初始化数据
             */
            init () {
                this.$tableList.setSelectedLists([]);
                this.isAllCheck = false;
                this.closeNextLine();
            },


            /**
            * 全选或取消全选
            */
            selectAll () {
                this.isAllCheck = !this.isAllCheck
                this.$tableList.setSelectedLists([])
                this.$emit('selectAll', this.isAllCheck)
            },

            /**
             * 将选中的checkbox信息存入SelectedLists
             * @param  {Object} checkedMsg 
             */
            checkedBox (checkedMsg) {
                this.$emit('checkedBox', checkedMsg);
            },

            /**
             * 判断checkbox是否被选中
             * @param  {Integer}  id
             */
            isCheck (id) {
                for(let index of Object.keys(this.selectedLists)) {
                    if(this.selectedLists[index].id == id) {
                        return true;
                    }
                }
                return false;
            },


            /**
            * 显示或隐藏编辑模块
            * @param {Number} List
            */
            troggleEdit (id) {
                if(this.showItemDetail != id){
                    this.showItemDetail = id;
                }else {
                    this.showItemDetail = '';
                }
                this.$emit('troggleEdit', this.showItemDetail != id)
            },

            /**
             * 关闭下一行组件
             */
            closeNextLine () {
                this.showItemDetail = '';
            },

            /**
             * 长按触发事件
             */
            longTouchEvent({item, index}) {
                this.$emit('longTouchEvent', {item:item, index:index})
            }

        }
    }
</script>
