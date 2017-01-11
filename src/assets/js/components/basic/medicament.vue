/**
 * 
 * 农药档案
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            placeholder="农药名称"
            searchUrl="medicament"
            @callback="updateListByMore"
        >
            <button @click="showNewPanel=true" class="stl-btn">新建</button>
        </search>

        <!-- 新增模块 -->
        <pop-medicament
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
        ></pop-medicament>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="order" class="fir">序号</th>
                <th name="category_name">农药类别</th>
                <th name="name">农药名称</th>
                <th name="usage">用途</th>
                <th name="open" class="align-c"></th>
            </tr>
            </thead>
            <tbody class="list-body">
            <template v-for="(medicament, index) in list">
                <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:medicament.id, index:index}" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" name="order">
                    <td class="checked">
                        <input :value="{'id':medicament.id, 'index':index}" v-model="deleteMedicaments" type="checkbox">
                    </td>
                    <td class="td-note" :title="medicament.category_name" name="category_name">{{ medicament.category_name }}</td>
                    <td class="td-note" name="name">{{ medicament.name}}</td>
                    <td class="td-note" name="usage">{{ medicament.usage }}</td>
                    <td @click="troggleEdit(medicament.id)" class="align-c" name="open">
                        <img :src="$img('list.png')">
                    </td>
                </tr>
                <tr v-if="showItemDetail != '' && showItemDetail == medicament.id">
                    <td colspan="5">
                        <pop-medicament
                                :medicament="medicament"
                                :edit="showEditPane"
                                @closeEdit="closeOwnEditPane(medicament)"
                        ></pop-medicament>
                    </td>
                </tr>
            </template>

            </tbody>
            <tfoot class="list-foot">
                <tr class="list-foot-tr">
                    <td>
                        <input @click="selectAll" type="checkbox" name="medicament_check">
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
                url="medicament/query"
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
    import PopMedicament from './pop-medicament.vue';
    import Paginator from '../public/paginator.vue';

    export default {
        name: 'Medicament',
        data () {
            return {
                // 存放农药的数组
                list: [],
                // 存放批量删除的农药的数组
                deleteMedicaments: [],
                // 临时记录待删除的农药信息
                deleteMedicament: {'id':0, 'index': 0},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示新增模块
                showNewPanel: false,
                // 存放是否展开农药编辑模块的标志，
                showItemDetail: '',
                // 定义PopMedicament是新增模块还是编辑模块，true：编辑模块，false：新增模块
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
                    'medicament_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
            }
        },
        components: {
            PopMedicament,
            Paginator,
            Search,
        },
        mounted () {
            // 初始化，获取所有的农药信息
            this.getAllMedicaments();
        },
        methods: {


            /**
             * 获取所有农药信息
             */
            getAllMedicaments () {
                this.$index(this, 'medicament').then((response) => {
                    this.total = response.body.medicaments.last_page;
                    this.$set(this, 'list', response.body.medicaments.data);
                },(response) => {
                    this.$alert('连接出错', 'e');
                });
            },

            /**
            * 全选或取消全选
            * @param e
            */
            selectAll (e) {
                if(e.target.checked) {
                    this.deleteMedicaments = [];
                    for(let index of this.list.keys()) {
                        this.deleteMedicaments.push({'id':this.list[index].id, 'index':index});
                    }
                }else {
                    this.deleteMedicaments = [];
                }
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, 'medicament', this.deleteMedicament.id).then((response) => {
                    this.list.splice(this.deleteMedicament.index, 1);
                    this.deleteMedicament = {'id':0, 'index': 0};
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
                if(this.deleteMedicaments.length != 0){
                    let ids = [];
                    for(let deleteMedicament of this.deleteMedicaments) {
                        ids.push(deleteMedicament.id);
                    }
                    this.$batchDestroy(this, 'medicament', ids).then((response) => {
                        this.deleteMedicaments = this.$reverseObj(this.deleteMedicaments,'index');
                        for(let deleteMedicament of this.deleteMedicaments) {
                            this.list.splice(deleteMedicament.index, 1);
                        }
                        this.deleteMedicaments = [];
                        this.showConfirm = false;
                        this.$alert('成功删除'+response.body+'条');
                    },(response) => {
                        this.$alert('连接出错', 'e');
                    });
                }else {
                    this.$alert('请选择农药');
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
            * @param {Number} medicament
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
            * @param medicament
            */
            closeOwnEditPane(medicament) {
                this.troggleEdit(medicament);
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                if(flag == 1 &&this.deleteMedicaments.length == 0){
                    this.$alert('请选择农药');
                }else {
                    this.oneOrBatch = flag;
                    this.deleteMedicament.id = id;
                    this.deleteMedicament.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param medicament
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param medicament
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
