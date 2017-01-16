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
            :_key="_key"
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
    import AreaUnit from '../components/basic/area-unit.vue';
    import PopPlanta from '../components/basic/pop-planta.vue';
    import PopPlant from '../components/basic/pop-plant.vue';
    import MyImage from '../components/basic/image.vue';
    import PopManure from '../components/basic/pop-manure.vue';
    import PopMedicament from '../components/basic/pop-medicament.vue';
    import PopExpert from '../components/basic/pop-expert.vue';
    import ResearchField from '../components/basic/research-field.vue';
    

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
                _key: '',
                component: null,
                searchPlaceholder: '',
                searchUrl: '',
                theads: [],
                protos: [],
                widths: [],
                tableLists: [
                    {
                        key: 'plantation',
                        component: {plantation: PopPlantation, area: AreaUnit},
                        searchPlaceholder: '种植场名称',
                        searchUrl: 'plantation',
                        theads: ['种植场名称', '种植面积', '负责人'],
                        protos: ['name', 'area', 'director'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'planta',
                        component: {planta: PopPlanta, area: AreaUnit},
                        searchPlaceholder: '种植区名称',
                        searchUrl: 'planta',
                        theads: ['种植区名称', '种植面积', '负责人'],
                        protos: ['name', 'area', 'director'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'plant',
                        component: {plant: PopPlant, image: MyImage},
                        searchPlaceholder: '果蔬名称',
                        searchUrl: 'plant',
                        theads: ['果蔬名称', '生长周期', '已传图片'],
                        protos: ['name', 'growth_cycle', 'image'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'manure',
                        component: {manure: PopManure},
                        searchPlaceholder: '肥料名称',
                        searchUrl: 'manure',
                        theads: ['肥料类别', '肥料名称', '用途'],
                        protos: ['category_name', 'name', 'usage'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'medicament',
                        component: {medicament: PopMedicament},
                        searchPlaceholder: '农药名称',
                        searchUrl: 'medicament',
                        theads: ['农药类别', '农药名称', '用途'],
                        protos: ['category_name', 'name', 'usage'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'expert',
                        component: {expert: PopExpert, table_type: ResearchField},
                        searchPlaceholder: '专家名称',
                        searchUrl: 'expert',
                        theads: ['专家名称', '研究领域', '操作模块'],
                        protos: ['expert_name', 'major', 'table_type'],
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
            AreaUnit,
            PopPlanta,
            PopPlant,
            MyImage,
            PopManure,
            PopMedicament,
            PopExpert,
            ResearchField
        },
        created () {
            this.setTitle('基础信息管理');
            this._key = this.tableLists[0].key;
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
                        this._key = item.key;
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
