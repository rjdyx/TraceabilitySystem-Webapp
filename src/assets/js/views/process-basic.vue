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
            title="果蔬加工基础信息管理"
            :taps="taps"
            :tableLists="tableLists"
            :number="2"
        ></basic-model>
    </div>
</template>

<style>
</style>

<script>
    import BasicModel from '../components/public/basic-model.vue';
    import PopProduct from '../components/process/pop-product.vue';
    import PopDistributor from '../components/process/pop-distributor.vue';
    export default{
        name: 'processBasic',
        data(){
            return{
                taps:[
                    {name: '产品信息', key: 'product'},
                    {name: '经销售信息', key: 'distributor'},
                ],
                tableLists: [
                    {
                        key: 'product',
                        component: {product: PopProduct},
                        searchPlaceholder: '产品名称',
                        searchUrl: 'product',
                        theads: ['产品名称', '产品品牌', '生产单位'],
                        protos: ['name', 'marque', 'production_unit'],
                        widths: [32, 24, 17]
                    },
                    {
                        key: 'distributor',
                        component: {distributor: PopDistributor},
                        searchPlaceholder: '经销商名称',
                        searchUrl: 'distributor',
                        theads: ['经销商名称', '联系人', '联系电话'],
                        protos: ['name', 'contacts', 'phone'],
                        widths: [32, 24, 17]
                    }
                ]
            }
        },
        components:{
            BasicModel,
            PopProduct,
            PopDistributor
        }
    }
</script>
