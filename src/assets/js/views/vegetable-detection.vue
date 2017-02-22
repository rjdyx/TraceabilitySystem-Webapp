/**
 * 
 * 果蔬采收检测管理
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
            searchPlaceholder="采收批次号搜索"
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
    import  PopVegetableDetection from '../components/vegetable-harvest/pop-vegetable-detection.vue';
    import EditVegetableDetection from '../components/vegetable-harvest/edit-vegetable-detection.vue';
    import CultivateNumber from '../components/plant-cultivate/cultivate-number.vue';

    export default{
        name: 'VegetableDetetion',
        data(){
            return{
                component: {new: PopVegetableDetection, cultivate: EditVegetableDetection, serial: CultivateNumber},
                theads: ['种植区', '批次号', '果蔬名称'],
                protos: ['plantation_name', 'serial', 'plant_name'],
                widths: [26, 30, 17]
            }
        },
        components:{
            TableManage,
            PopVegetableDetection,
            EditVegetableDetection
        },
        mounted () {
            this.setTitle('采收检测管理');
        },
        methods: {

            ...mapMutations([
                'setTitle'
            ]),

            
        }
    }
</script>
