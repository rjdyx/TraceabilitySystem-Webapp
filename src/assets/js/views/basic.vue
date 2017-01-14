/**
 * 
 * 种植管理顶层组件
 * @description 
 * @author 苏锐佳
 * @date 2016/12/14
 * 
 */
<template>
    <div>
        <!-- tap模块 -->
        <navbar 
        :taps="taps"
        @getKey="flashList"
        ></navbar>
        <!-- 列表模块 -->
        <table-list
            ref="tableList"
            :component="component"
            :searchPlaceholder="searchPlaceholder"
            :searchUrl="searchUrl"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        >
        </table-list>
    </div>
</template>

<style>
</style>

<script>

    import {mapMutations} from 'vuex';
    import Navbar from '../components/basic/navbar.vue';
    import tableList from '../components/public/table-list.vue';
    import PopPlantation from '../components/basic/pop-plantation.vue';
    import PopPlanta from '../components/basic/pop-planta.vue';

    export default{
        name: 'Basic',
        data(){
            return{
                title: '基础信息管理',
                taps:[
                    {name: '种植场信息', key: 'plantation'},
                    {name: '种植区信息', key: 'planta'},
                    {name: '果蔬档案', key: 'plant'},
                    {name: '肥料档案', key: 'manure'},
                    {name: '农药档案', key: 'medicament'},
                    {name: '专家档案', key: 'expert'}
                ],
                component: null,
                searchPlaceholder: '',
                searchUrl: '',
                theads: [],
                protos: [],
                widths: [],
                tableLists: [
                    {
                        key: 'plantation',
                        component: PopPlantation,
                        searchPlaceholder: '种植场名称',
                        searchUrl: 'plantation',
                        theads: ['种植场名称', '种植面积', '负责人'],
                        protos: ['name', ['area', 'area_unit'], 'director'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'planta',
                        component: PopPlanta,
                        searchPlaceholder: '种植区名称',
                        searchUrl: 'planta',
                        theads: ['种植区名称', '种植面积', '负责人'],
                        protos: ['name', ['area', 'area_unit'], 'director'],
                        widths: [32, 24, 17]
                    }
                ]
            }
        },
        computed: {

        },
        components:{
            Navbar,
            tableList,
            PopPlantation,
            PopPlanta
        },
        created () {
            this.setTitle('基础信息管理');
            this.searchPlaceholder = this.tableLists[0].searchPlaceholder;
            this.searchUrl = this.tableLists[0].searchUrl;
            this.theads = this.tableLists[0].theads;
            this.protos = this.tableLists[0].protos;
            this.widths = this.tableLists[0].widths;
        },
        mounted () {
            this.component = this.tableLists[0].component;
            this.$refs.tableList.getAllLists(this.searchUrl);
        },
        methods: {
            ...mapMutations([
                'setTitle'
            ]),

            flashList (key) {
                for(let item of this.tableLists){
                    if(item.key == key) {
                        this.searchPlaceholder = item.searchPlaceholder;
                        this.searchUrl = item.searchUrl;
                        this.theads = item.theads;
                        this.protos = item.protos;
                        this.widths = item.widths;
                        this.component = item.component;
                        // 同步调用获取数据的方法
                        this.$refs.tableList.getAllLists(item.searchUrl)
                        // 关闭新增弹窗
                        this.$refs.tableList.closeNew()
                        // 关闭编辑弹窗
                        this.$refs.tableList.closeEdit()
                    }
                }
            }
        }
    }
</script>
