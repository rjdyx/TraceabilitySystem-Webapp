/**
 * 
 * 种植区信息管理
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            placeholder="种植区名称"
            searchUrl="planta"
            @callback="updateListByMore"
        >
            <button @click="showNewPanel=true" class="stl-btn">新建</button>
        </search>

        <!-- 新增模块 -->
        <pop-planta
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
        ></pop-planta>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="order" class="fir">序号</th>
                <th name="name">种植区名称</th>
                <th name="area">种植面积</th>
                <th name="director">负责人</th>
                <th name="open" class="align-c"></th>
            </tr>
            </thead>
            <tbody class="list-body">
            <template v-for="(planta, index) in list">
                <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:planta.id, index:index}" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" name="order">
                    <td class="checked">
                        <input :value="{'id':planta.id, 'index':index}" v-model="deletePlantas" type="checkbox">
                    </td>
                    <td class="td-note" :title="planta.name" name="name">{{ planta.name }}</td>
                    <td class="td-note" name="area">{{ planta.area + planta.area_unit }}</td>
                    <td class="td-note" name="director">{{ planta.director }}</td>
                    <td @click="troggleEdit(planta.id)" class="align-c" name="open">
                        <img :src="$img('list.png')">
                    </td>
                </tr>
                <tr v-if="showItemDetail != '' && showItemDetail == planta.id">
                    <td colspan="5">
                        <pop-planta
                                :planta="planta"
                                :edit="showEditPane"
                                @closeEdit="closeOwnEditPane(planta)"
                        ></pop-planta>
                    </td>
                </tr>
            </template>

            </tbody>
            <tfoot class="list-foot">
                <tr class="list-foot-tr">
                    <td>
                        <input @click="selectAll" type="checkbox" name="planta_check">
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
                url="planta/query"
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

    td[name="order"], td[name="name"], td[name="area"], td[name="director"], td[name="open"] {
        @extend %wrap;
    }

    th[name="name"] {
        width: 32%;
    }

    th[name="area"] {
        width: 24%;
    }

    td[name="area"]{
        padding: 0 pxToRem(14);
    }

    th[name="director"] {
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
    import PopPlanta from './pop-planta.vue';
    import Paginator from '../public/paginator.vue';

    export default {
        name: 'Planta',
        data () {
            return {
                // 存放种植区的数组
                list: [],
                // 存放批量删除的种植区的数组
                deletePlantas: [],
                // 临时记录待删除的种植区信息
                deletePlanta: {'id':0, 'index': 0},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示新增模块
                showNewPanel: false,
                // 存放是否展开种植区编辑模块的标志，
                showItemDetail: '',
                // 定义PopPlanta是新增模块还是编辑模块，true：编辑模块，false：新增模块
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
                    'planta_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
            }
        },
        components: {
            PopPlanta,
            Paginator,
            Search,
        },
        mounted () {
            // 初始化，获取所有的种植区信息
            this.getAllPlantas();
        },
        methods: {

            /**
             * 获取所有种植区信息
             */
            getAllPlantas () {
                this.$index(this, 'planta').then((response) => {
                    this.total = response.body.plantas.last_page;
                    this.$set(this, 'list', response.body.plantas.data);
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
                    this.deletePlantas = [];
                    for(let index of this.list.keys()) {
                        this.deletePlantas.push({'id':this.list[index].id, 'index':index});
                    }
                }else {
                    this.deletePlantas = [];
                }
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, 'planta', this.deletePlanta.id).then((response) => {
                    this.list.splice(this.deletePlanta.index, 1);
                    this.deletePlanta = {'id':0, 'index': 0};
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
                if(this.deletePlantas.length != 0){
                    let ids = [];
                    for(let deletePlanta of this.deletePlantas) {
                        ids.push(deletePlanta.id);
                    }
                    this.$batchDestroy(this, 'planta', ids).then((response) => {
                        this.deletePlantas = this.$reverseObj(this.deletePlantas,'index');
                        for(let deletePlanta of this.deletePlantas) {
                            this.list.splice(deletePlanta.index, 1);
                        }
                        this.deletePlantas = [];
                        this.showConfirm = false;
                        this.$alert('成功删除'+response.body+'条');
                    },(response) => {
                        this.$alert('连接出错', 'e');
                    });
                }else {
                    this.$alert('请选择种植区');
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
            * @param {Number} planta
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
            * @param planta
            */
            closeOwnEditPane(planta) {
                this.troggleEdit(planta);
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                if(flag == 1 &&this.deletePlantas.length == 0){
                    this.$alert('请选择种植区');
                }else {
                    this.oneOrBatch = flag;
                    this.deletePlanta.id = id;
                    this.deletePlanta.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param planta
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param planta
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
