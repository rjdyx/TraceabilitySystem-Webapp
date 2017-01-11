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
        <navbar :taps="taps"></navbar>
        <!-- 列表模块 -->
        <router-view></router-view>

    </div>
</template>
<style>

</style>
<script>

    import {mapMutations} from 'vuex';
    import Navbar from '../components/basic/navbar.vue';

    export default{
        name: 'Basic',
        data(){
            return{
                title: '基础信息管理',
                taps:[
                    {name: '种植场信息', url: 'plantation'},
                    {name: '种植区信息', url: 'planta'},
                    {name: '果蔬档案', url: 'plant'},
                    {name: '肥料档案', url: 'manure'},
                    {name: '农药档案', url: 'medicament'},
                    {name: '专家档案', url: 'expert'}
                ],
            }
        },
        computed: {

        },
        components:{
            Navbar
        },
        mounted () {
            this.$router.push('/webapp/basic/plantation');
            this.setTitle('基础信息管理');
        },
        methods: {
            ...mapMutations([
                'setTitle'
            ])
        }
    }
</script>
