/**
 * 
 * 列表项信息管理
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            :placeholder="searchPlaceholder"
            :searchUrl="searchUrl"
            @callback="updateListByMore"
        >
            <slot name="search">
               <button @click="showNewPanel=true" class="stl-btn">新建</button> 
            </slot>
        </search>
        <!-- 新增模块 -->
        <template v-if="component != null && component[_key] != null">
            <component 
                :is="component[_key]"
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
            ></component>
        </template>
        

        <div class="table-list">
            <div class="list-head">
                <div class="list-head-th">
                    <span v-if="showCheckbox" name="order" class="fir">序号</span>
                    <template v-for="(thead, index) in theads">
                        <span 
                            :name="protos[index]"
                            :style="{width: widths[index] + '%'}"
                        >
                            {{thead}}
                        </span>
                    </template>
                    <span name="open" class="align-c"></span>
                </div>
            </div>
            <transition name="slide-fade">
                <transition-group name="slide-up" tag="ul" key="tbody" class="list-body" v-if="showUp">
                    <template v-for="(item, index) in list">
                            <li 
                                v-touchDelete:showConfirmDialog="{vm:self, type:0, id:item.id, index:index, flag:item.serial_state, tip:tipMsg}" 
                                :id="searchUrl + item.id" 
                                :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" 
                                :key="searchUrl + item.id" 
                                name="order">
                                <!-- checkbox -->
                                <span v-if="showCheckbox" class="checked" name="order">
                                    <span :class="{'f-checkbox':true, 'f-checkbox-check': isCheck(item.id)}" @click="checkedBox({'id':item.id, 'index':index, flag:item.serial_state})"></span>
                                </span>
                                
                                <!-- middle item -->
                                <template v-for="(proto, indexProto) in protos">
                                    <span v-if="component != null && component[proto] != null" :style="{width: widths[indexProto] + '%'}" :name="proto" class="td-note">
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
                                <span v-if="component != null && component.hispic != null" class="align-c" name="open">
                                    <component
                                        :is="component.hispic"
                                        :item="item"
                                    ></component>
                                </span>
                                <span v-else @click="troggleEdit(item.id)" class="align-c" name="open">
                                    <img :src="$img('list.png')">
                                </span>
                            </li>
                        
                        <li v-if="showItemDetail != '' && showItemDetail == item.id" :key="searchUrl + item.id + '-pop'">
                            <template v-if="component != null && component[_key] != null">
                                <component 
                                    :is="component[_key]"
                                    v-if="showEditPane"
                                    :letItem="item"
                                    :edit="true"
                                    @closeEdit="closeOwnEditPane(item)"
                                ></component>
                            </template>
                        </li>
                    </template>
                </transition-group>
            </transition>
            <div class="list-foot">
                <div class="list-foot-tr">
                    <span  name="order">
                        <span :class="{'f-checkbox':true, 'f-checkbox-check': isAllCheck}" @click="selectAll"></span>
                    </span>
                    <span style="width: 86%">
                        <button @click="showConfirmDialog(1)" class="btn btn-del" type="button">删除</button>
                    </span>
                </div>
            </div>
        </div>


        <div class="paginator-module">
            <!-- 分页模块 -->
            <paginator
                :total="total"
                :url="searchUrl + '/query'"
                :paginatorParams="params"
                @lastPageEvent="showUp=false"
                @nextPageEvent="showUp=false"
                @changePageEvent="showUp=false"
                @result="updateListByMore"
            ></paginator> 
        </div>

        

        <!-- 确认模块 -->
        <confirm
                :show="showConfirm"
                @confirmAction="oneOrBatchdestroy"
                @cancelAction="showConfirm=false"
        ></confirm>
    </div>
</template>

<style lang="sass" scoped>
    @import "../../../sass/function";
    @import "../../../sass/_percent.scss";

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

    .slide-fade-enter-active, .slide-fade-leave-active{
      transition: all .8s ease;
    }

    .slide-fade-leave-active{
      transform: translateX(-30px);
      opacity: 0;
    }

    .slide-fade-enter {
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

    import Search from './search.vue';
    import Paginator from './paginator.vue';

    export default {
        name: 'List',
        props: {
            _key: {
                type: String,
                default: ''
            },
            // 弹出框
            component: {
                type: Object,
                default () {
                    return null
                }
            },
            // 搜索框的placeholder
            searchPlaceholder: {
                type: String,
                default: ''
            },
            // 搜索的url
            searchUrl: {
                type: String,
                default: ''
            },
            // thead
            theads: {
                type: Array,
                default () {
                    return ['']
                }
            },
            // 属性
            protos: {
                type: Array,
                default () {
                    return []
                }
            },
            // 列表th的宽：%
            widths: {
                type: Array,
                default () {
                    return []
                }
            },
            // 是否显示checkbox
            showCheckbox: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                // 存放列表项的数组
                list: [],
                // 存放批量删除的列表项的数组
                deleteLists: [],
                // 是否全选
                isAllCheck: false,
                // 临时记录待删除的列表项信息
                deleteList: {'id':0, 'index': 0, 'flag': null},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示新增模块
                showNewPanel: false,
                // 存放是否展开列表项编辑模块的标志，
                showItemDetail: '',
                // 定义PopList是新增模块还是编辑模块，true：编辑模块，false：新增模块
                showEditPane: true,
                // 是否显示确认模块
                showConfirm: false,
                // vue实例
                self: this,
                // 无法删除时的提示信息
                tipMsg: '被使用，无法删除',
                // 分页的总页数
                total: 1,
                // 搜索的参数对象
                params: {
                    'query_text': '',
                    'List_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
                // 动画效果
                slide: 'slide-fade',
                showUp: true
            }
        },
        watch: {
            showItemDetail: function(val) {
                this.slide = 'slide'
            }
        },
        components: {
            Paginator,
            Search,
        },
        mounted () {
        },
        methods: {

            /**
             * 初始化数据
             */
            init () {
                this.deleteLists = [];
                this.deleteList = {'id':0, 'index': 0, 'flag': null};
                this.oneOrBatch = 0;
                this.isAllCheck = false;
            },

            /**
             * 获取所有列表项信息
             */
            getAllLists (url) {
                this.init();
                this.showUp = false;
                this.$index(this, url).then((response) => {
                    let data = response.body[url + 's'];
                    this.total = data.last_page;
                    this.$set(this, 'list', data.data);
                    this.showUp = true;
                },(error) => {
                    if(error.status == 401) {
                        this.$router.push('/webapp/login/401')
                    }else {
                       this.$alert('连接出错', 'e'); 
                    }
                });
            },

            /**
            * 全选或取消全选
            * @param e
            */
            selectAll () {
                if(!this.isAllCheck) {
                    this.isAllCheck = true;
                    this.deleteLists = [];
                    for(let index of this.list.keys()) {
                        this.deleteLists.push({'id':this.list[index].id, 'index':index, 'flag':this.list[index].serial_state});
                    }
                }else {
                    this.isAllCheck = false;
                    this.deleteLists = [];
                }
            },

            /**
             * 将选中的checkbox信息存入deleteLists
             * @param  {Object} checkedMsg 
             */
            checkedBox (checkedMsg) {
                for(let index of Object.keys(this.deleteLists)) {
                    if(this.deleteLists[index].id == checkedMsg.id) {
                        this.deleteLists.splice(index, 1);
                        return true;
                    }
                }
                this.deleteLists.push(checkedMsg);
            },

            /**
             * 判断checkbox是否被选中
             * @param  {Integer}  id
             */
            isCheck (id) {
                for(let index of Object.keys(this.deleteLists)) {
                    if(this.deleteLists[index].id == id) {
                        return true;
                    }
                }
                return false;
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, this.searchUrl, this.deleteList.id).then((response) => {
                    this.list.splice(this.deleteList.index, 1);
                    this.deleteList = {'id':0, 'index': 0};
                    this.showConfirm = false;
                    this.$alert('删除成功');
                },(response) => {
                    this.$alert('连接出错', 'e');
                });
            },

            /**
            * 批量删除
            */
            batchDestroy () {
                if(this.deleteLists.length != 0){
                    let ids = [];
                    for(let deleteList of this.deleteLists) {
                        ids.push(deleteList.id);
                    }
                    this.$batchDestroy(this, this.searchUrl, ids).then((response) => {
                        this.deleteLists = this.$reverseObj(this.deleteLists,'index');
                        for(let deleteList of this.deleteLists) {
                            this.list.splice(deleteList.index, 1);
                        }
                        this.deleteLists = [];
                        this.showConfirm = false;
                        this.$alert('成功删除'+response.body+'条');
                    },(response) => {
                        this.$alert('连接出错', 'e');
                    });
                }else {
                    this.$alert('请选择列表项');
                }
            },


            /**
             * 判断调用单个删除或批量删除
             */
            oneOrBatchdestroy () {
                if(this.oneOrBatch == 0) {
                    this.destroy();
                }else {
                    this.batchDestroy();
                }
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
            },

            /**
            * 关闭编辑模块
            * @param List
            */
            closeOwnEditPane(List) {
                this.troggleEdit(List);
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                for(let deleteList of this.deleteLists) {
                    if(deleteList.flag) {
                        this.$alert(this.tipMsg);
                        return false;
                    }
                }
                if(flag == 1 &&this.deleteLists.length == 0){
                    this.$alert('请选择列表项');
                }else {
                    this.oneOrBatch = flag;
                    this.deleteList.id = id;
                    this.deleteList.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param List
            */
            updateListByOne(newOne) {
                this.slide = 'slide-fade'
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param List
            */
            updateListByMore(newList) {
                this.showUp = true;
                this.init();
                this.$set(this, 'list', newList.data)
                this.total = newList.last_page;
                if(newList.query_text != undefined){
                   this.params.query_text = newList.query_text; 
                }
                
            },

            /**
             * 关闭新增弹窗
             */
            closeNew () {
                this.showNewPanel=false;
            },

            /**
             * 关闭编辑弹窗
             */
            closeEdit () {
                this.showItemDetail = '';
            }

        }
    }
</script>
