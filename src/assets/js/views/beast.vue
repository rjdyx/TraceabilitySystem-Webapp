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
        <basic-model
            title="养殖基础信息管理"
            :taps="taps"
            :tableLists="tableLists"
        ></basic-model>
    </div>
</template>

<style>
</style>

<script> 

    import BasicModel from '../components/public/basic-model.vue';
    import AreaUnit from '../components/public/area-unit.vue';
    import MyImage from '../components/public/image.vue';
    import PopFarm from '../components/beast/pop-farm.vue';
    import PopFarmed from '../components/beast/pop-farmed.vue';
    import PopBeast from '../components/beast/pop-beast.vue';
    import PopFodder from '../components/beast/pop-fodder.vue';
    import FodderType from '../components/beast/fodder-type.vue';
    import PopDrug from '../components/beast/pop-drug.vue';
    import DrugType from '../components/beast/drug-type.vue';
    import PopOperate from '../components/beast/pop-operate.vue';
    import PopExpert from '../components/beast/pop-expert.vue';
    import OperateType from '../components/beast/operate-type.vue';
    

    export default{
        name: 'Basic',
        data() {
            return{
                taps:[
                    {name: '养殖场信息', key: 'farm'},
                    {name: '养殖区信息', key: 'farmed'},
                    {name: '畜禽档案', key: 'beast'},
                    {name: '饲料档案', key: 'fodder'},
                    {name: '兽药档案', key: 'drug'},
                    {name: '人物档案', key: 'operate'},
                    {name: '专家档案', key: 'expert'}
                ],
                tableLists: [
                    {
                        key: 'farm',
                        component: {farm: PopFarm, area: AreaUnit},
                        searchPlaceholder: '养殖场名称',
                        searchUrl: 'farm',
                        theads: ['养殖场名称', '养殖面积', '负责人'],
                        protos: ['name', 'area', 'principal'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'farmed',
                        component: {farmed: PopFarmed, area: AreaUnit},
                        searchPlaceholder: '养殖区名称',
                        searchUrl: 'farmed',
                        theads: ['养殖区名称', '养殖面积', '负责人'],
                        protos: ['name', 'area', 'principal'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'beast',
                        component: {beast: PopBeast, image: MyImage},
                        searchPlaceholder: '畜禽名称',
                        searchUrl: 'beast',
                        theads: ['畜禽种类', '畜禽名称', '已传图片'],
                        protos: ['type_name', 'name', 'image'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'fodder',
                        component: {fodder: PopFodder, fodder_type: FodderType},
                        searchPlaceholder: '饲料名称',
                        searchUrl: 'fodder',
                        theads: ['饲料类别', '饲料名称', '用途'],
                        protos: ['fodder_type', 'name', 'use'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'drug',
                        component: {drug: PopDrug, drug_type: DrugType},
                        searchPlaceholder: '兽药名称',
                        searchUrl: 'drug',
                        theads: ['兽药类别', '兽药名称', '用途'],
                        protos: ['drug_type', 'name', 'use'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'operate',
                        component: {operate: PopOperate},
                        searchPlaceholder: '姓名',
                        searchUrl: 'operate',
                        theads: ['姓名', '年龄', '身份'],
                        protos: ['name', 'age', 'identity'],
                        widths: [28, 24, 21]
                    },
                    {
                        key: 'expert',
                        component: {expert: PopExpert, table_type: OperateType},
                        searchPlaceholder: '专家名称',
                        searchUrl: 'expert',
                        theads: ['操作模块', '专家名称', '研究领域'],
                        protos: ['table_type', 'expert_name', 'major'],
                        widths: [28, 24, 21]
                    }
                ]
            }
        },
        components:{
            BasicModel,
            AreaUnit,
            MyImage,
            PopFarm,
            PopFarmed,
            PopBeast,
            PopFodder,
            FodderType,
            PopDrug,
            DrugType,
            PopOperate,
            OperateType
        }
    }
</script>
