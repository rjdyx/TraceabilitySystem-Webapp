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
        <table-list
            ref="tableList"
            _key="cultivate"
            :component="component"
            searchPlaceholder="种植批次号搜索"
            searchUrl="cultivate"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        >
        </table-list> 
    </div>
</template>
<style lang="sass" scoped>

    @import "../../sass/function";
    @import "../../sass/_percent.scss";

</style>
<script>
    
    import {mapMutations} from 'vuex';
    import TableList from '../components/public/table-list.vue';
    import CultivateOperate from '../components/plant-cultivate/cultivate-operate.vue';

    export default{
        name: 'PlantCultivate',
        data(){
            return{
                component: {cultivate: null, open: {component: CultivateOperate, next: true}},
                theads: ['种植区', '批次号', '果蔬名称'],
                protos: ['plantation_name', 'serial', 'plant_name'],
                widths: [26, 30, 17]
            }
        },
        components:{
            TableList,
            CultivateOperate
        },
        mounted () {
            this.setTitle('种植批次管理');
            // 同步调用获取数据的方法
            this.$refs.tableList.getAllLists('cultivate')
        },
        methods: {

            ...mapMutations([
                'setTitle'
            ]),

            
        }
    }
</script>
