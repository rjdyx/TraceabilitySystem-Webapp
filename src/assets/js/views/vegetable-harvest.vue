/**
 * 
 * 果蔬采收批次管理
 * @description 
 * @author 舒丹彤
 * @date 2017/02/17
 * 
 */ 
<template>
    <div id="cultivate">
        <table-manage
            ref="tableList"
            _key="cultivate"
            :component="component"
            searchPlaceholder="果蔬批次号搜索"
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
    import  PopVegetable from '../components/vegetable-harvest/pop-vegetable.vue';
    import EditVegetable from '../components/vegetable-harvest/edit-vegetable.vue';
    import CultivateNumber from '../components/plant-cultivate/cultivate-number.vue';

    export default{
        name: 'VegetableHarvest',
        data(){
            return{
                component: {cultivate: PopVegetable, open: {component: EditVegetable, next: true}, serial: CultivateNumber},
                theads: ['种植区', '批次号', '果蔬名称'],
                protos: ['plantation_name', 'serial', 'plant_name'],
                widths: [26, 30, 17]
            }
        },
        components:{
            TableManage,
            PopVegetable,
            EditVegetable
        },
        mounted () {
            this.setTitle('采收批次管理');
        },
        methods: {
            ...mapMutations([
                'setTitle'
            ]),

            
        }
    }
</script>
