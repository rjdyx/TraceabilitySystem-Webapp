/**
 * 
 * 种植批次管理
 * @description 
 * @author 苏锐佳
 * @date 2017/02/04  
 * 
 */ 
<template>
    <div id="cultivate">
        <table-manage
            ref="tableList"
            _key="cultivate"
            :component="component"
            searchPlaceholder="种植批次号搜索"
            searchUrl="cultivate"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        >
        </table-manage> 
    </div>
</template>
<style lang="sass" scoped>
 
    @import "../../sass/function";
    @import "../../sass/_percent.scss";
 
</style>
<script> 
     
    import {mapMutations} from 'vuex';
    import TableManage from '../components/public/table-manage.vue';
    import PopCultivate from '../components/plant-cultivate/pop-cultivate.vue';
    import CultivateOperate from '../components/plant-cultivate/cultivate-operate.vue';
    import CultivateNumber from '../components/plant-cultivate/cultivate-number.vue';

    export default{
        name: 'PlantCultivate',
        data(){
            return{
                component: {cultivate: CultivateOperate, new: PopCultivate, serial: CultivateNumber},
                theads: ['种植区', '批次号', '果蔬名称'],
                protos: ['plantation_name', 'serial', 'plant_name'],
                widths: [26, 30, 17]
            }
        },
        components:{
            TableManage,
            PopCultivate,
            CultivateOperate
        },
        mounted () {
            this.setTitle('种植批次管理');
        },
        methods: {

            ...mapMutations([
                'setTitle'
            ]),

            
        }
    }
</script>
