/**
 * 
 * 专家档案
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            placeholder="专家名称"
            searchUrl="expert"
            :params="{class_type: 0}"
            @callback="updateListByMore"
        >
            <button @click="showNewPanel=true" class="stl-btn">新建</button>
        </search>

        <!-- 新增模块 -->
        <pop-expert
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
        ></pop-expert>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="order" class="fir">序号</th>
                <th name="expert_name">专家名称</th>
                <th name="major">操作模块</th>
                <th name="table_type">研究领域</th>
                <th name="open" class="align-c"></th>
            </tr>
            </thead>
            <tbody class="list-body">
            <template v-for="(expert, index) in list">
                <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:expert.id, index:index}" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}">
                    <td class="checked" name="order">
                        <input :value="{'id':expert.id, 'index':index}" v-model="deleteMedicaments" type="checkbox">
                    </td>
                    <td class="td-note" :title="expert.expert_name" name="expert_name">{{ expert.expert_name }}</td>
                    <td class="td-note" name="table_type">{{ expert.table_type | table_name}}</td>
                    <td class="td-note" name="major">{{ expert.major }}</td>
                    <td @click="troggleEdit(expert.id)" class="align-c" name="open">
                        <img :src="$img('list.png')">
                    </td>
                </tr>
                <tr v-if="showItemDetail != '' && showItemDetail == expert.id">
                    <td colspan="5">
                        <pop-expert
                                :expert="expert"
                                :edit="showEditPane"
                                @closeEdit="closeOwnEditPane(expert)"
                        ></pop-expert>
                    </td>
                </tr>
            </template>

            </tbody>
            <tfoot class="list-foot">
                <tr class="list-foot-tr">
                    <td>
                        <input @click="selectAll" type="checkbox" name="expert_check">
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
                url="expert/query"
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

    td[name="order"], td[name="expert_name"], td[name="major"], td[name="table_type"], td[name="open"] {
        @extend %wrap;
    }

    th[name="expert_name"] {
        width: 28%;
    }

    th[name="major"] {
        width: 22%;
    }

    td[name="major"]{
        padding: 0 pxToRem(14);
    }

    th[name="table_type"] {
        width: 23%;
    }

    th[name="open"] {
        width: 14%;
    }

    .align-c {
        img {
            width: pxToRem(17);
        }
    }

    .paginator-module {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 0;
        background: white;
        box-shadow: 0 0 10px 0 #9E9E9E;
    }
</style>

<script>

    import Search from '../public/search.vue';
    import PopExpert from './pop-expert.vue';
    import Paginator from '../public/paginator.vue';

    export default {
        name: 'Medicament',
        data () {
            return {
                // 存放专家的数组
                list: [],
                // 存放批量删除的专家的数组
                deleteMedicaments: [],
                // 临时记录待删除的专家信息
                deleteMedicament: {'id':0, 'index': 0},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示新增模块
                showNewPanel: false,
                // 存放是否展开专家编辑模块的标志，
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
                    'expert_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
            }
        },
        filters : {
            table_name (value) {
                if(value == 'fertilize'){
                    return '施肥';
                }else if(value == 'spray') {
                    return '病虫害';
                }else if(value == 'detect') {
                    return '检验检测';
                }else {
                    return '农事';
                }
            }
        },
        components: {
            PopExpert,
            Paginator,
            Search,
        },
        mounted () {
            // 初始化，获取所有的专家信息
            this.getAllMedicaments();
        },
        methods: {

            /**
             * 根据index获取不同的class
             * @param  {Number} index 
             * @return {String} 
             */
            getListClass (index) {
                return index%2 == 0 ? 'list-body-tr':'list-body-tr list-body-tr-event';
            },

            /**
             * 获取所有专家信息
             */
            getAllMedicaments () {
                this.$http.get(this.$adminUrl('expert/query'), {params:{class_type: 0}}).then((response) => {
                    this.total = response.body.experts.last_page;
                    this.$set(this, 'list', response.body.experts.data);
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
                this.$destroyL(this, 'expert', this.deleteMedicament.id).then((response) => {
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
                    this.$batchDestroy(this, 'expert', ids).then((response) => {
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
                    this.$alert('请选择专家');
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
            * @param {Number} expert
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
            * @param expert
            */
            closeOwnEditPane(expert) {
                this.troggleEdit(expert);
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                if(flag == 1 &&this.deleteMedicaments.length == 0){
                    this.$alert('请选择专家');
                }else {
                    this.oneOrBatch = flag;
                    this.deleteMedicament.id = id;
                    this.deleteMedicament.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param expert
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param expert
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
