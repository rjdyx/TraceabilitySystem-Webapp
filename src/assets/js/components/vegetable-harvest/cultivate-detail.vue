/**
 * 
 * 种植批次详细管理页面组件
 * @description 
 * @author 舒丹彤
 * @date 2017/03/06
 *  
 */ 
<template>
    <div>
        <basic-model
            title="采收批次详细管理"
            :tableLists="tableLists"
        ></basic-model>
    </div>
</template>

<style>
</style>

<script>
 
    import {mapMutations} from 'vuex';
    import BasicModel from '../public/basic-model.vue';
    import PopDetail from '../vegetable-harvest/pop-vegetable-detection.vue'
    import HeadLeftSlider from '../index/head-left-slider.vue';
    import HeadLeftBack from '../index/head-left-back.vue';
    import HeadRightMoreCultivate from '../index/head-right-more-cultivate.vue';

    export default{
        name: 'Basic',
        data(){
            return{
                tableLists: [
                    {
                        key: 'farm',
                        component: {farm: PopDetail},
                        searchPlaceholder: '操作方法',
                        searchUrl: 'farming',
                        theads: ['检测方式', '检测项目名称', '检测人'],
                        protos: ['method', 'content', 'operate'],
                        widths: [28, 28, 17]
                    }
                ]
            }
        },
        components:{
            BasicModel,
            PopDetail,
        },
        created () {
            let cultivateId = this.$route.params.id;
            let params = {params: {cultivate_id: cultivateId}};
            for(let item of this.tableLists) {
                item.params = params;
            }
            
        },
        mounted () {
            this.setHeadLeftComponent(HeadLeftBack);
            this.setHeadRightComponent(HeadRightMoreCultivate);
        },
        methods: {
            ...mapMutations([
                'setHeadLeftComponent',
                'setHeadRightComponent'
            ])
        },
        destroyed () {
            this.setHeadLeftComponent(HeadLeftSlider)
            this.setHeadRightComponent(null)
        }
    }
</script>
