/**
 * 
 * 种植批次详细信息组件
 * @description 
 * @author 苏锐佳
 * @date 2017/02/07
 * 
 */
<template>
    <div>
        <ul>
            <li>种植批次号:{{cultivateMsg.serial}}</li>
            <li>所属种植场:{{cultivateMsg.plantation_name}}</li>
            <li>种植人:{{cultivateMsg.operator}}</li>
            <li>种植日期:{{cultivateMsg.cultivate_date}}</li>
            <li>所属种植区:{{cultivateMsg.name}}</li>
            <li>种植地址:{{cultivateMsg.address}}</li>
            <li>种植果蔬名称:{{cultivateMsg.plant_name}}</li>
            <li>当前批次面积:{{cultivateMsg.area+cultivateMsg.area_unit}}</li>
            <li>种植备注:{{cultivateMsg.memo}}</li>
        </ul>
    </div>
</template>

<style>
</style>

<script>

    export default{
        name: 'Basic',
        data () {
            return {
                cultivateMsg: {
                    serial: '',
                    plantation_name: '',
                    operator: '',
                    cultivate_date: '',
                    name: '',
                    address: '',
                    plant_name: '',
                    area: '',
                    area_unit: '',
                    memo: ''
                }
            }
        },
        mounted () {
            let cultivateId = this.$route.params.id;
            let params = {
                msg: 1,
                cid: cultivateId
            }
            this.$http.get(this.$adminUrl('plantation/cultivate/detail', 'p'), {params: params}).then((responce) => {
                this.cultivateMsg = responce.data;
            }, (error) => {

            })
        }
    }
</script>
