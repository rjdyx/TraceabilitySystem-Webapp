/**
 * 
 * 列表项信息管理组件
 * @description 包含搜索模块，新增模块，分页模块和列表项模块
 * @author 苏锐佳
 * @date 2017/02/08
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
 * open属性的值为{component: null, next: false}，其中next决定传给component属性的组件是作用于
 * 操作按钮还是作用于下一行组件
 * 
 * @param  searchPlaceholder 
 * 类型：String
 * 是否必填：false
 * 默认值：''
 * 描述：搜索框的placeholder
 * 
 * @param  searchUrl 
 * 类型：String
 * 是否必填：true
 * 默认值：''
 * 描述：搜索的url
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
        

        <!-- 列表项模块 -->
        <table-list
            ref="tableList"
            :_key="_key"
            :component="component"
            :params="params"
            :excInit="excInit"
            :theads="theads"
            :protos="protos"
            :widths="widths"
            :showOperate="showOperate"
            @getAllLists="getAllLists"
            @destroy="destroy"
            @batchDestroy="batchDestroy"
            @troggleEdit="troggleEdit"
        >
            <component :is="batchButtons" slot="batchButtons"></component>
        </table-list>
    

        <div class="paginator-module">
            <!-- 分页模块 -->
            <paginator
                ref="paginator"
                :total="total"
                :url="searchUrl + '/query'"
                :paginatorParams="params"
                @lastPageEvent="lastPageClicked"
                @nextPageEvent="nextPageClicked"
                @changePageEvent="$tableList.setShowList(false)"
                @result="updateListByMore"
            ></paginator> 
        </div>

    </div>
</template>

<script>

    import { mapState, mapMutations } from 'vuex';
    import Search from './search.vue';
    import Paginator from './paginator.vue';

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
            // 搜索框的placeholder
            searchPlaceholder: {
                type: String,
                default: ''
            },
            // 搜索的url
            searchUrl: {
                type: String,
                required: true,
                default: ''
            },
            // url参数
            params: {
                type: Object,
                default () {
                    return null;
                }
            },
            // 更新list的时候是否执行初始化函数
            excInit: {
                type: Boolean,
                default: true
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
            // 底部批量操作模块
            batchButtons: {
                type: Object,
                default() {
                    return null
                }
            }
        },
        data () {
            return {
                // 是否显示新增模块
                showNewPanel: false,
                // 分页的总页数
                total: 1,
                // 搜索的参数对象
                searchParams: {
                    'query_text': '',
                    'List_id': 0,
                    '_sort': 'id',
                    'order': ''
                }
            }
        },
        components: {
            Paginator,
            Search
        },
        watch: {
            searchUrl: function(val) {
                this.getAllLists()
            }
        },
        mounted() {
            this.getAllLists();
        },
        methods: {

            /**
             * 获取所有列表项信息
             */
            getAllLists () {
                if(this.excInit) {
                    this.$tableList.invokingInit();
                    this.$tableList.setShowList(false);
                }
                this.$tableList.setSlideList('slide-fade-right');
                this.$tableList.setSlideListItem('slide-up');

                this.$index(this, this.searchUrl, this.params).then((response) => {
                    let data = response.body[this.searchUrl + 's'];
                    this.$emit('getAllLists', data);
                    this.$tableList.setList(data.data);
                    this.$tableList.setShowList(true);
                    this.total = data.last_page;
                    this.$refs.paginator.init();
                },(error) => {
                    if(error.status == 401) {
                        this.$router.push('/webapp/login/401')
                    }else {
                       this.$alert('连接出错', 'e'); 
                    }
                });
            },

            /**
            * 单个删除
            */
            destroy() {
                this.$destroyL(this, this.searchUrl, this.deleteList.id).then((response) => {
                    this.$tableList.spliceList(this.deleteList.index);
                    this.$alert('删除成功');
                },(response) => {
                    this.$alert('连接出错', 'e');
                });
            },

            /**
            * 批量删除
            */
            batchDestroy (ids) {
                this.$batchDestroy(this, this.searchUrl, ids).then((response) => {
                    this.$tableList.reverseSelectedLists('index');
                    for(let deleteList of this.selectedLists) {
                        this.$tableList.spliceList(deleteList.inde);
                    }
                    this.$tableList.setSelectedLists([]);
                    this.$alert('成功删除'+response.body+'条');
                },(response) => {
                    this.$alert('连接出错', 'e');
                });
            },

            /**
            * 更新list中的一个
            * @param List
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                this.$tableList.setSlideListItem('slide-up');
                this.$tableList.unshiftList(newOne);
            },

            /**
            * 更新list中的多个
            * @param List
            */
            updateListByMore(newList) {
                this.$tableList.setShowList(true);
                this.$tableList.invokingInit();
                this.$tableList.setList(newList.data)
                this.total = newList.last_page;
                if(newList.query_text != undefined){
                   this.searchParams.query_text = newList.query_text; 
                }
                
            },

            /**
             * 点击上一页
             */
            lastPageClicked () {
                this.$tableList.setSlideList('slide-fade-left');
                this.$tableList.setShowList(false);
            },

            /**
             * 点击下一页
             */
            nextPageClicked () {
                this.$tableList.setSlideList('slide-fade-right');
                this.$tableList.setShowList(false);
            },

            /**
             * 关闭新增弹窗
             */
            closeNew () {
                this.showNewPanel=false;
            },

            /**
             * 每行操作按钮的点击事件回调
             */
            troggleEdit(result) {
                if(result) {
                    this.$tableList.setSlideListItem();
                }else {
                    this.$tableList.setSlideListItem('slide-up');
                }
                
            }

        }
    }
</script>
