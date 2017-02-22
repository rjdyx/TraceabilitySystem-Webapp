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
            title="种植基础信息管理"
            :taps="taps"
            :tableLists="tableLists"
        ></basic-model>
    </div>
</template>
 
<style>
</style>

<script>

    import BasicModel from '../components/public/basic-model.vue';
    import PopPlantation from '../components/basic/pop-plantation.vue';
    import AreaUnit from '../components/public/area-unit.vue';
    import PopPlanta from '../components/basic/pop-planta.vue';
    import PopPlant from '../components/basic/pop-plant.vue';
    import MyImage from '../components/public/image.vue';
    import PopManure from '../components/basic/pop-manure.vue';
    import PopMedicament from '../components/basic/pop-medicament.vue';
    import PopExpert from '../components/basic/pop-expert.vue';
    import ResearchField from '../components/basic/research-field.vue';
    

    export default{
        name: 'Basic',
        data(){
            return{
                taps:[
                    {name: '种植场信息', key: 'plantation'},
                    {name: '种植区信息', key: 'planta'},
                    {name: '果蔬档案', key: 'plant'},
                    {name: '肥料档案', key: 'manure'},
                    {name: '农药档案', key: 'medicament'},
                    {name: '专家档案', key: 'expert'}
                ],
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
                        widths: [24, 24, 25]
                    }, 
                    {
                        key: 'medicament',
                        component: {medicament: PopMedicament},
                        searchPlaceholder: '农药名称',
                        searchUrl: 'medicament',
                        theads: ['农药类别', '农药名称', '用途'],
                        protos: ['category_name', 'name', 'usage'],
                        widths: [26, 28, 19]
                    },
                    {
                        key: 'expert',
                        component: {expert: PopExpert, table_type: ResearchField},
                        searchPlaceholder: '专家名称',
                        searchUrl: 'expert',
                        params: {'class_type':0},
                        theads: ['专家名称', '研究领域', '操作模块'],
                        protos: ['expert_name', 'major', 'table_type'],
                        widths: [24, 28, 21]
                    }
                ]
            }
        },
        components:{
            BasicModel,
            PopPlantation,
            AreaUnit,
            PopPlanta,
            PopPlant,
            MyImage,
            PopManure,
            PopMedicament,
            PopExpert,
            ResearchField
        }
    } 
</script>
