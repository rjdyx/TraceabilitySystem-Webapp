/**
 * 
 * 果蔬档案
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template xmlns:v-touchDelete="http://www.w3.org/1999/xhtml">
    <div>

        <!-- 搜索模块 -->
        <search
            placeholder="果蔬名称"
            searchUrl="plant"
            @callback="updateListByMore"
        >
            <button @click="showNewPanel=true" class="stl-btn">新建</button>
        </search>

        <!-- 新增模块 -->
        <pop-plant
                v-if="showNewPanel"
                :edit="false"
                @callback="updateListByOne"
                @closeNew="showNewPanel=false"
        ></pop-plant>

        <table class="table-list">
            <thead class="list-head">
            <tr class="list-head-th">
                <th name="order" class="fir">序号</th>
                <th name="name">果蔬名称</th>
                <th name="growth_cycle">生长周期</th>
                <th name="select-pic">已传图片</th>
                <th name="open" class="align-c"></th>
            </tr>
            </thead>
            <tbody class="list-body">
            <template v-for="(plant, index) in list">
                <tr v-touchDelete:showConfirmDialog="{vm:self, type:0, id:plant.id, index:index}" :class="{'list-body-tr':true,'list-body-tr-event':(index%2 != 0)}" name="order">
                    <td class="checked">
                        <input :value="{'id':plant.id, 'index':index}" v-model="deletePlants" type="checkbox">
                    </td>
                    <td class="td-note" :title="plant.name" name="name">{{ plant.name }}</td>
                    <td class="td-note" name="growth_cycle">{{ plant.growth_cycle}}</td>
                    <td class="td-note" name="image">
                        <img v-if="plant.image != null && plant.image != '' &&plant.image != '/common/images/inc/upload.png'" class="plant_img" :src="$img('/common/images/inc/ok.png')">
                    </td>
                    <td @click="troggleEdit(plant.id)" class="align-c" name="open">
                        <img :src="$img('/images/list.png')">
                    </td>
                </tr>
                <tr v-if="showItemDetail != '' && showItemDetail == plant.id">
                    <td colspan="5">
                        <pop-plant
                                :plant="plant"
                                :edit="showEditPane"
                                @closeEdit="closeOwnEditPane(plant)"
                        ></pop-plant>
                    </td>
                </tr>
            </template>

            </tbody>
            <tfoot class="list-foot">
                <tr class="list-foot-tr">
                    <td>
                        <input @click="selectAll" type="checkbox" name="plant_check">
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
                url="plant/query"
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

    td[name="order"], td[name="name"], td[name="growth_cycle"], td[name="select-pic"], td[name="open"] {
        @extend %wrap;
    }

    th[name="name"] {
        width: 32%;
    }

    th[name="growth_cycle"] {
        width: 20%;
    }

    td[name="growth_cycle"]{
        padding: 0 pxToRem(14);
    }

    th[name="select-pic"] {
        width: 21%;
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
    import PopPlant from './pop-plant.vue';
    import Paginator from '../public/paginator.vue';

    export default {
        name: 'Plant',
        data () {
            return {
                // 存放果蔬的数组
                list: [],
                // 存放批量删除的果蔬的数组
                deletePlants: [],
                // 临时记录待删除的果蔬信息
                deletePlant: {'id':0, 'index': 0},
                // 单个删除或批量删除
                oneOrBatch: 0,
                // 是否显示新增模块
                showNewPanel: false,
                // 存放是否展开果蔬编辑模块的标志，
                showItemDetail: '',
                // 定义PopPlant是新增模块还是编辑模块，true：编辑模块，false：新增模块
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
                    'plant_id': 0,
                    '_sort': 'id',
                    'order': ''
                },
            }
        },
        components: {
            PopPlant,
            Paginator,
            Search,
        },
        mounted () {
            // 初始化，获取所有的果蔬信息
            this.getAllPlants();
        },
        methods: {

            /**
             * 获取所有果蔬信息
             */
            getAllPlants () {
                this.$index(this, 'plant').then((response) => {
                    this.total = response.body.plants.last_page;
                    this.$set(this, 'list', response.body.plants.data);
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
                    this.deletePlants = [];
                    for(let index of this.list.keys()) {
                        this.deletePlants.push({'id':this.list[index].id, 'index':index});
                    }
                }else {
                    this.deletePlants = [];
                }
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, 'plant', this.deletePlant.id).then((response) => {
                    this.list.splice(this.deletePlant.index, 1);
                    this.deletePlant = {'id':0, 'index': 0};
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
                if(this.deletePlants.length != 0){
                    let ids = [];
                    for(let deletePlant of this.deletePlants) {
                        ids.push(deletePlant.id);
                    }
                    this.$batchDestroy(this, 'plant', ids).then((response) => {
                        this.deletePlants = this.$reverseObj(this.deletePlants,'index');
                        for(let deletePlant of this.deletePlants) {
                            this.list.splice(deletePlant.index, 1);
                        }
                        this.deletePlants = [];
                        this.showConfirm = false;
                        this.$alert('成功删除'+response.body+'条');
                    },(response) => {
                        this.$alert('连接出错', 'e');
                    });
                }else {
                    this.$alert('请选择果蔬');
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
            * @param {Number} plant
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
            * @param plant
            */
            closeOwnEditPane(plant) {
                this.troggleEdit(plant);
            },

            /**
            * 显示确认窗口
            * @param flag
            * @param id
            * @param index
            */
            showConfirmDialog (flag, id=0, index=0) {
                if(flag == 1 &&this.deletePlants.length == 0){
                    this.$alert('请选择果蔬');
                }else {
                    this.oneOrBatch = flag;
                    this.deletePlant.id = id;
                    this.deletePlant.index = index;
                    this.showConfirm = true;
                }

            },

            /**
            * 更新list中的一个
            * @param plant
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.list.unshift(newOne);
            },

            /**
            * 更新list中的多个
            * @param plant
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
