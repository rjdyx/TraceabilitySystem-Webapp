/**
 * 
 * 肥料档案
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            placeholder="肥料名称"
            searchUrl="manure"
            @callback="updateListByMore"
        >
            <button @click="showNewPanel=true" class="stl-btn">新建</button>
        </search>

        <!-- 新增模块 -->
        <pop-manure
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
        ></pop-manure>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="order" class="fir">序号</th>
                <th name="category_name">肥料类别</th>
                <th name="name">肥料名称</th>
                <th name="usage">用途</th>
                <th name="open" class="align-c"></th>
            </tr>
            </thead>
            <tbody class="list-body">
            <template v-for="(manure, index) in list">
                <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:manure.id, index:index}" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" name="order">
                    <td class="checked">
                        <input :value="{'id':manure.id, 'index':index}" v-model="deleteManures" type="checkbox">
                    </td>
                    <td class="td-note" :title="manure.category_name" name="category_name">{{ manure.category_name }}</td>
                    <td class="td-note" name="name">{{ manure.name}}</td>
                    <td class="td-note" name="usage">{{ manure.usage }}</td>
                    <td @click="troggleEdit(manure.id)" class="align-c" name="open">
                        <img :src="$img('list.png')">
                    </td>
                </tr>
                <tr v-if="showItemDetail != '' && showItemDetail == manure.id">
                    <td colspan="5">
                        <pop-manure
                                :manure="manure"
                                :edit="showEditPane"
                                @closeEdit="closeOwnEditPane(manure)"
                        ></pop-manure>
                    </td>
                </tr>
            </template>

            </tbody>
            <tfoot class="list-foot">
                <tr class="list-foot-tr">
                    <td>
                        <input @click="selectAll" type="checkbox" name="manure_check">
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
                url="manure/query"
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

    td[name="order"], td[name="category_name"], td[name="name"], td[name="usage"], td[name="open"] {
        @extend %wrap;
    }

    th[name="category_name"] {
        width: 32%;
    }

    th[name="name"] {
        width: 24%;
    }

    td[name="name"]{
        padding: 0 pxToRem(14);
    }

    th[name="usage"] {
        width: 17%;
    }

    th[name="open"] {
        width: 14%;
    }

    .align-c {
        img {
            width: pxToRem(17);
        }
    }

</style>

<script>

    import Search from '../public/search.vue';
    import PopManure from './pop-manure.vue';
    import Paginator from '../public/paginator.vue';

    export default {
        name: 'Manure',
        data () {
            return {
                // 存放肥料的数组
                list: [],
                // 存放批量删除的肥料的数组
                deleteManures: [],
                // 临时记录待删除的肥料信息
                deleteManure: {'id':0, 'index': 0},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示新增模块
                showNewPanel: false,
                // 存放是否展开肥料编辑模块的标志，
                showItemDetail: '',
                // 定义PopManure是新增模块还是编辑模块，true：编辑模块，false：新增模块
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
                    'manure_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
            }
        },
        components: {
            PopManure,
            Paginator,
            Search,
        },
        mounted () {
            // 初始化，获取所有的肥料信息
            this.getAllManures();
        },
        methods: {

            /**
             * 获取所有肥料信息
             */
            getAllManures () {
                this.$index(this, 'manure').then((response) => {
                    this.total = response.body.manures.last_page;
                    this.$set(this, 'list', response.body.manures.data);
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
                    this.deleteManures = [];
                    for(let index of this.list.keys()) {
                        this.deleteManures.push({'id':this.list[index].id, 'index':index});
                    }
                }else {
                    this.deleteManures = [];
                }
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, 'manure', this.deleteManure.id).then((response) => {
                    this.list.splice(this.deleteManure.index, 1);
                    this.deleteManure = {'id':0, 'index': 0};
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
                if(this.deleteManures.length != 0){
                    let ids = [];
                    for(let deleteManure of this.deleteManures) {
                        ids.push(deleteManure.id);
                    }
                    this.$batchDestroy(this, 'manure', ids).then((response) => {
                        this.deleteManures = this.$reverseObj(this.deleteManures,'index');
                        for(let deleteManure of this.deleteManures) {
                            this.list.splice(deleteManure.index, 1);
                        }
                        this.deleteManures = [];
                        this.showConfirm = false;
                        this.$alert('成功删除'+response.body+'条');
                    },(response) => {
                        this.$alert('连接出错', 'e');
                    });
                }else {
                    this.$alert('请选择肥料');
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
            * @param {Number} manure
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
            * @param manure
            */
            closeOwnEditPane(manure) {
                this.troggleEdit(manure);
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                if(flag == 1 &&this.deleteManures.length == 0){
                    this.$alert('请选择肥料');
                }else {
                    this.oneOrBatch = flag;
                    this.deleteManure.id = id;
                    this.deleteManure.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param manure
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param manure
            */
            updateListByMore(newList) {
                this.$set(this, 'list', newList.data)
                this.total = newList.last_page;
                if(newList.query_text != undefined){
                   this.params.query_text = newList.query_text; 
                }
                
            },

        }
    }


</script>
