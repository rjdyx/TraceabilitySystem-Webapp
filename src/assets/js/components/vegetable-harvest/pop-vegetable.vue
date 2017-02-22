/**
 * 采收批次管理新建组件
 * @description 
 * @author 舒丹彤
 * @date 2017/02/21
 * 
 * Props:
 * 
 * @param  letItem 
 * 类型：Object
 * 是否必填：false
 * 默认值：{}
 * 描述：采收批次对象
 * 
 * @param  edit 
 * 类型：Boolean
 * 是否必填：false
 * 默认值：false
 * 描述：表明此组件是用于新增还是编辑，true表示编辑，false表示新增
 * 
 * 
 * 
 * Events:
 * 
 * @function closeNew
 * 返回：无
 * 必用：true
 * 描述：隐藏新增组件
 * 
 * @function closeEdit
 * 返回：无
 * 必用：true
 * 描述：隐藏编辑组件
 * 
 * @function callback
 * 返回：medicament对象
 * 必用：true
 * 描述：
 * 
 * 
 * 
 */
<template>
    <form @submit.prevent="validateBeforeSubmit">

        <table class="main form-pop">
            <tbody class="form-body">
                 <tr>
                    <td class="label-tit">
                        <label for="new_date">采收日期</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <input 
                        v-model="letItem.harvest_date" 
                        v-validate.initial="letItem.harvest_date" 
                        data-vv-rules="required|max:255" 
                        data-vv-as="操作日期" 
                        type="text" id="harvest_new_date" name="harvest_date" placeholder="必填">
                    </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_plant">所属种植区</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="plantation_id" id="harvest_plantation_select"
                            :items="PlantationName"
                            protoBack="plantation_id"
                            protoShow="plantation_name"
                            :defaultIndex="parseInt(defaultPlantationSelectIndex)"
                            @callback="getMsgPlantationSelect"
                        ></pop-select>
                    </td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="new_matchinfor">种植批次号</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <pop-select name="cultivate_id" id="harvest_cultivate_serial"
                            :items="plantIds"
                            protoBack="id"
                            protoShow="serial"
                            :defaultIndex="parseInt(defaultplantIdIndex)"
                            @callback="getMsgplantId"
                        ></pop-select>
                    </td>
                </tr>
                 <tr>
                    <td class="label-tit">
                        <label for="new_gsName">果蔬名称</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <input v-model="letItem.plant_name" type="text" id="harvest_plant_new_gsName" disabled>
                    </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_date">种植日期</label>
                    </td>
                    <td class="input-pop" colspan="2">
                    <input 
                    v-model="letItem.cultivate_date" 
                    v-validate.initial="letItem.cultivate_date" 
                    data-vv-rules="required|max:255" 
                    data-vv-as="操作日期" 
                    type="text" id="harvest_cultivate_date" name="cultivate_date" disabled>
                    </td>
                </tr>
                <tr v-show="errors.has('cultivate_date')">
                    <td colspan="3" class="error">{{ errors.first('cultivate_date') }}</td>
                </tr>

                <tr>
                    <td class="label-tit">
                        <label for="pop_area">种植面积</label>
                    </td>
                    <td class="input-pop">
                        <input v-model="letItem.area" type="text" id="harvest_cultivate_new_area" name="area" disabled>
                    </td>
                    <td class="input-pop">
                        <input type="text" v-model="letItem.area_unit" name="area_unit" disabled>
                    </td>
                </tr>
                <tr>
                    <td class="label-tit">
                        <label for="new_user">采收重量</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <input v-model="letItem.amount" type="text" id="harvest_new_amount" name="amount">
                    </td>
                </tr>
             
                <tr>
                    <td class="label-tit">
                        <label for="medicament_new_note">备注信息</label>
                    </td>
                    <td class="input-pop" colspan="2">
                        <input v-model="letItem.memo" type="text" id="medicament_new_note" name="memo">
                    </td>

                </tr>

                <tr>
                    <td colspan="3">
                        <div class="footer-r">
                            <a v-if="edit" href="javascript:void(0)">
                                <button @click="cancelEditmedicament" type="button">
                                    取消
                                </button>  
                            </a>
                            
                            <a v-else href="javascript:void(0)">
                                <button @click="cancelAddmedicament" type="button">
                                    取消
                                </button>
                            </a>
                        </div>
                        <div class="footer-r">
                            <a href="javascript:void(0)">
                                <button class="btn-pop">
                                    保存
                                </button>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </form>
</template>

<style lang="sass" scoped>

@import "../../../sass/function";

</style>

<script>

    export default {
        name: 'Popmedicament',
        props: {
            cultivateId: {
                type: Number,
                default: 0
            },
            letItem: {
                type: Object,
                default() {
                    return {
                        'cultivate_id': 0,
                        'id': '',
                        'cultivate_date': '',
                        'harvest_date':'',
                        'area_unit':'',
                        'amount': '',
                        'plant_name': '',
                        'area': '',
                        'expert_id': '',
                        'operator': '',
                        'memo': '',
                        'plantation_id':''
                    }
                }
            },
            // 表示此模块是编辑模块还是新增模块的标志
            edit: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                PlantationName:[],
                plantIds:[],
                tmp: {
                    'cultivate_id': 0,
                    'id': '',
                    'cultivate_date': '',
                    'harvest_date':'',
                    'plant_name': '',
                    'area_unit':'',
                    'amount': '',
                    'area': '',
                    'expert_id': '',
                    'operator': '',
                    'memo': '',
                    'plantation_id':''
                },
                arr: Array()
            }
        },
        computed: {
            //判断是编辑状态还是新建状态，取出不同的下标
            defaultPlantationSelectIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.PlantationName){
                        if(this.PlantationName[index].plantation_name == this.letItem.plantation_name){
                            return index;
                        }
                    }
                    return 0;
                }
            },
            
            defaultplantIdIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.plantIds){
                        if(this.plantIds[index].id == this.letItem.plantname){
                            return index;
                        }
                    } 
                    return 0;
                }
            },
            defaultIndex () {
                if (this.edit == false) {
                    return 0;
                } else {
                    for(let index in this.unit){
                        if(this.unit[index] == this.letItem.unit){
                            return index;
                        }
                    }
                    
                }
            }
        },
        mounted () {
            let time = new Date();
            let date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
            this.letItem.harvest_date = date;
            this.getAllplantation();
            for(let key of Object.keys(this.letItem)){
                this.tmp[key] = this.letItem[key];
            }
        },
        methods: {
            /**
            * 获取所有数据
            */
            getAllplantation() {
                this.$http.get(this.$adminUrl('cultivate/query')).then((response)=>{
                    let plantationName=[];
                    let names = response.body.cultivates.data;
                    // 先将第一个传入数组，再进行循环比较
                    if(names.length !=0 ) {
                        plantationName.push(names[0])
                    }
                    for(let name of names){
                        plantationName.forEach((item)=>{
                            if(item.plantation_name !== name.plantation_name){
                                plantationName.push(name)
                            }
                        })
                        
                    }
                    this.$set(this, 'PlantationName',plantationName);
                }, (response)=>{
                });

                if (this.edit) {
                    this.$http.get(this.$adminUrl('cultivate/query?params[plantation_id]='+this.letItem.plantation_id+'&params[state]=0')).then((response)=>{
                        this.$set(this, 'plantIds', response.body);
                    }, (response)=>{
                    });
                }
                this.$http.get(this.$adminUrl('cultivate/query?params[cultivate_id]='+this.letItem.plantation_id)).then((response)=>{
                    this.$set(this, 'plantIds', response.body.cultivates.data);

                }, (response)=>{

                });
            },

            /**
            * 提交表单
            */
            validateBeforeSubmit () {
                if(this.edit) {
                    this.$update(this, 'cultivate_id', this.letItem).then((response) => {
                        for(let key of Object.keys(this.letItem)){
                            this.tmp[key] = this.letItem[key];
                        }
                        this.$alert('修改成功', 's');
                    }, (response) => {
                        if(response != false) {
                            this.$alert('连接出错', 'e');
                        }else {
                            return false;
                        }
                    });
                }else {
                    let cultivateId = this.cultivateId == 0 ? this.$route.params.id : this.cultivateId;
                    this.letItem.cultivate_id = cultivateId;
                    this.$storeL(this, 'spray', this.letItem).then((response) => {
                        this.letItem.id = response.body;
                        this.$emit('callback', this.letItem);
                        this.$alert('新增成功', 's');
                    }, (response) => {
                        if(response != false) {
                            this.$alert('连接出错', 'e');
                        }else {
                            return false;
                        }
                    });
                }
            },
            /**
            * 隐藏新增模块
            */
            cancelAddmedicament () {
                this.$emit('closeNew');
            },

            /**
            * 隐藏编辑模块
            * @param letItem
            */
            cancelEditmedicament () {
                this.$emit('closeEdit');
            },
            /**
            * CallBack函数,执行回调函数 
            */
            getMsgplantId (msg) {
                this.letItem.cultivate_id = msg;
                console.log(msg)
                 this.$http.get(this.$adminUrl('cultivate/query?params[cultivate_id]='+msg)).then((response)=>{
                    // console.log(response)
                        // console.log(response.body.cultivates.data[0]['cultivate_area'])
                        this.letItem.plant_name=response.body.cultivates.data[0]['plant_name'];
                        this.letItem.cultivate_date=response.body.cultivates.data[0]['cultivate_date'];
                        this.letItem.area=response.body.cultivates.data[0]['area'];
                        this.letItem.area_unit=response.body.cultivates.data[0]['area_unit'];
                        // this.$set(this, 'plantIds', response.body.cultivates.data);
                    }, (response)=>{
                    });

            },
            getMsgPlantationSelect (msg) {
                this.letItem.plantation_id = msg;      
                this.$http.get(this.$adminUrl('cultivate/query?params[plantation_id]='+msg+'&params[state]=0')).then((response)=>{
                        this.$set(this, 'plantIds', response.body.cultivates.data);
                    }, (response)=>{
                    });

            },
             getMsg (msg) {
                this.letItem.area_unit = msg;
            },
        },
        destroyed () {
            if(this.edit){
                for(let key of Object.keys(this.letItem)){
                        this.letItem[key] = this.tmp[key];
                    }
            }
        },
    }

</script>
