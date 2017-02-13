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
            :searchUrl="searchUrl"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        ></table-list>


        <div class="paginator-module">
            <!-- 分页模块 -->
            <paginator
                :total="total"
                :url="searchUrl + '/query'"
                :paginatorParams="params"
                @lastPageEvent="setShowUp(false)"
                @nextPageEvent="setShowUp(false)"
                @changePageEvent="setShowUp(false)"
                @result="updateListByMore"
            ></paginator> 
        </div>

    </div>
</template>

<script>

    import { mapState, mapMutations } from 'vuex';
    import Search from './search.vue';
    import Paginator from './paginator.vue';
    import TableList from './table-list.vue';

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
            }
        },
        data () {
            return {
                // 是否显示新增模块
                showNewPanel: false,
                // 分页的总页数
                total: 1,
                // 搜索的参数对象
                params: {
                    'query_text': '',
                    'List_id': 0,
                    '_sort': 'id',
                    'order': ''
                }
            }
        },
        computed: {

            ...mapState([
                'list',
                'showList'
            ])

        },
        components: {
            Paginator,
            Search,
            TableList
        },
        methods: {

            ...mapMutations([
                'setList',
                'unshiftList',
                'setShowUp'
            ]),

            /**
             * 获取所有列表项信息
             */
            getAllLists (url, params) {
                // 同步调用获取数据的方法
                this.$refs.tableList.getAllLists(url, params)
                this.closeNew();
            },

            /**
            * 更新list中的一个
            * @param List
            */
            updateListByOne(newOne) {
                this.showNewPanel = false;
                console.log(newOne)
                this.unshiftList(newOne);
            },

            /**
            * 更新list中的多个
            * @param List
            */
            updateListByMore(newList) {
                this.setShowUp(true);
                this.$refs.tableList.init();
                this.setList(newList.data)
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
            }

        }
    }
</script>
