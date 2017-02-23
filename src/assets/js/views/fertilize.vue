/**
 * 
 * 施肥管理
 * @description 
 * @author 苏锐佳
 * @date 2017/02/07
 * 
 */
<template>
    <div id="fertilize">
        <table-manage
            ref="tableList"
            _key="fertilize"
            :component="component"
            searchPlaceholder="肥料名称"
            searchUrl="fertilize"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        > 
        <router-link :to="{name:'cultivate-refer',params:{type: 'fertilize'}}" tag="button" slot="search" class="stl-btn" exact>新建</router-link>
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

    export default{
        name: 'PlantCultivate',
        data(){
            return{
                component: {fertilize: null},
                theads: ['种植区', '批次号', '果蔬名称'],
                protos: ['plantation_name', 'serial', 'plant_name'],
                widths: [26, 30, 17]
            }
        },
        components:{
            TableManage
        },
        mounted () {
            this.setTitle('施肥管理');
        },
        methods: {

            ...mapMutations([
                'setTitle'
            ]),

            
        }
    }
</script>
