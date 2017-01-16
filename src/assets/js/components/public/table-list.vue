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
            <button @click="showNewPanel=true" class="stl-btn">新建</button>
        </search>
        <!-- 新增模块 -->
        <component 
            :is="component[_key]"
            v-if="showNewPanel"
            :edit="false"
            @callback="updateListByOne"
            @closeNew="showNewPanel=false"
        ></component>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="order" class="fir">序号</th>
                <template v-for="(thead, index) in theads">
                    <th 
                        v-if="protos[index] instanceof Array" 
                        :name="protos[index][0]"
                        :style="{width: widths[index] + '%'}"    
                    >
                        {{thead}}
                    </th>
                    <th 
                        v-else 
                        :name="protos[index]"
                        :style="{width: widths[index] + '%'}"
                    >
                        {{thead}}
                    </th>
                </template>
                <th name="open" class="align-c"></th>
                
            </tr>
            </thead>
            <transition-group :name="slide" mode="out-in" tag="tbody" class="list-body">
                <template v-for="(item, index) in list">
                    <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:item.id, index:index}" :id="searchUrl + item.id" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" :key="searchUrl + item.id" name="order">
                        <td class="checked">
                            <input :value="{'id':item.id, 'index':index}" v-model="deleteLists" type="checkbox">
                        </td>
                        <template v-for="proto in protos">
                            <td v-if="component[proto] != null" name="proto" class="td-note">
                                <component
                                    :is="component[proto]"
                                    :item="item"
                                ></component>
                            </td>
                            <td v-else-if="proto instanceof Array" :name="proto[0]" class="td-note">
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
                    <tr v-if="showItemDetail != '' && showItemDetail == item.id" :key="searchUrl + item.id + '-pop'">
                        <td colspan="5">
                            <component 
                                :is="component[_key]"
                                v-if="showEditPane"
                                :letItem="item"
                                :edit="true"
                                @closeEdit="closeOwnEditPane(item)"
                            ></component>
                        </td>
                    </tr>
                </template>
            </transition-group>
            <tfoot class="list-foot">
                <tr class="list-foot-tr">
                    <td>
                        <input @click="selectAll" type="checkbox" name="List_check">
                    </td>
                    <td colspan="5">
                        <button @click="showConfirmDialog(1)" class="btn btn-del" type="button">删除</button>
                    </td>
                </tr>
            </tfoot>
        </table>


        <div class="paginator-module">
            <!-- 分页模块 -->
            <paginator
                :total="total"
                :url="searchUrl + '/query'"
                :paginatorParams="params"
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



    th[name="order"] {
        width: 14%;
    }

    td {
        @extend %wrap;
    }

    td[name="area"]{
        padding: 0 pxToRem(14);
    }

    th[name="open"] {
        width: 14%;
    }

    .align-c {
        img {
            width: pxToRem(17);
        }
    }

    .slide-fade-enter-active, .slide-fade-leave-active{
      transition: all .5s ease;
    }

    .slide-fade-leave-active{
      transform: translateX(-10px);
      opacity: 0;
    }

    .slide-fade-enter {
      transform: translateX(10px);
      opacity: 0;
    }
</style>

<script>

    import Search from '../public/search.vue';
    import Paginator from '../public/paginator.vue';

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
            }
        },
        data () {
            return {
                // 存放列表项的数组
                list: [],
                // 存放批量删除的列表项的数组
                deleteLists: [],
                // 临时记录待删除的列表项信息
                deleteList: {'id':0, 'index': 0},
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
                slide: 'slide-fade'
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
        },
        methods: {

            /**
             * 获取所有列表项信息
             */
            getAllLists (url) {
                // 加上这句，解决过渡动画重复元素的bug
                this.slide = 'slide-fade'
                this.$set(this, 'list', []);
                this.$index(this, url).then((response) => {
                    let data = response.body[url + 's'];
                    this.total = data.last_page;
                    this.$set(this, 'list', data.data);
                },(error) => {
                    if(error.status == 401) {
                        this.$router.push('/webapp/login')
                    }else {
                       this.$alert('连接出错', 'e'); 
                    }
                });
            },

            /**
            * 全选或取消全选
            * @param e
            */
            selectAll (e) {
                if(e.target.checked) {
                    this.deleteLists = [];
                    for(let index of this.list.keys()) {
                        this.deleteLists.push({'id':this.list[index].id, 'index':index});
                    }
                }else {
                    this.deleteLists = [];
                }
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
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param List
            */
            updateListByMore(newList) {
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
