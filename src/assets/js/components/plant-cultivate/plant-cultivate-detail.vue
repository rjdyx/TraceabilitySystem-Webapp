/**
 * 
 * 种植批次详细管理页面组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/07
 * 
 */
<template>
    <div>
        <basic-model
            title="种植批次详细管理"
            :taps="taps"
            :tableLists="tableLists"
        ></basic-model>
    </div>
</template>

<style>
</style>

<script>

    import BasicModel from '../public/basic-model.vue';
    import PopFarm from './pop-farm.vue'
    import PopFertilize from './pop-fertilize.vue'
    import PopMedicament from './pop-medicament.vue'
    import PopDetect from './pop-detect.vue'
    import PopGrow from './pop-grow.vue'
    import AmountUnit from '../public/amount-unit.vue'
    

    export default{
        name: 'Basic',
        data(){
            return{
                taps:[
                    {name: '农事信息', key: 'farm'},
                    {name: '施肥信息', key: 'fertilize'},
                    {name: '病虫害信息', key: 'medicament'},
                    {name: '检测信息', key: 'detect'},
                    {name: '生长过程信息', key: 'grow'}
                ],
                tableLists: [
                    {
                        key: 'farm',
                        component: {farm: PopFarm},
                        searchPlaceholder: '操作方法',
                        searchUrl: 'farming',
                        theads: ['操作方法', '内容', '操作人'],
                        protos: ['method', 'content', 'operate'],
                        widths: [28, 28, 17]
                    },
                    {
                        key: 'fertilize',
                        component: {fertilize: PopFertilize, amount: AmountUnit},
                        searchPlaceholder: '肥料名称',
                        searchUrl: 'fertilize',
                        theads: ['肥料名称', '肥料用量', '施肥人'],
                        protos: ['manure_name', 'amount', 'operator'],
                        widths: [28, 24, 21]
                    },
                    {
                        key: 'medicament',
                        component: {medicament: PopMedicament, amount: AmountUnit},
                        searchPlaceholder: '肥料名称',
                        searchUrl: 'spray',
                        theads: ['农药名称', '农药用量', '施药人'],
                        protos: ['medicament_name', 'amount', 'operator'],
                        widths: [28, 24, 21]
                    },
                    {
                        key: 'detect',
                        component: {detect: PopDetect},
                        searchPlaceholder: '检测项目名称',
                        searchUrl: 'detect',
                        theads: ['检测机构', '项目名称', '检查人'],
                        protos: ['department', 'item', 'operator'],
                        widths: [28, 24, 21]
                    },
                    {
                        key: 'grow',
                        component: {grow: PopGrow},
                        searchPlaceholder: '图片名称',
                        searchUrl: 'grow',
                        theads: ['图片名称', '图片描述', '上传日期'],
                        protos: ['name', 'description', 'image_date'],
                        widths: [28, 24, 21]
                    }
                ]
            }
        },
        components:{
            BasicModel,
            PopFarm,
            PopFertilize,
            PopMedicament,
            PopDetect,
            PopGrow,
            AmountUnit
        },
        created () {
            let cultivateId = this.$route.params.id;
            let params = {params: {cultivate_id: cultivateId}};
            for(let item of this.tableLists) {
                item.params = params;
            }
        }
    }
</script>
