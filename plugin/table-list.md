# table-list

该组件以plugin形式调用并已注册为全局组件

#### Props

| name | type | default | description |
| :--- | :--- | :--- | :--- |
| \_key | String |  | 显示此table-list的唯一标识 |
| component | Object | null | 存放“新增/编辑弹窗”组件、每一列的自定义组件和操作按钮组件 |
| args | Object | {edit: true} | 传递给编辑模块的参数 |
| theads | Array | \[''\] | table的thead里每一列显示的名字，例如\['种植区名称', '种植面积', '负责人'\] |
| protos | Array | \[''\] | table每一列对应的属性，例如\['name', 'area', 'director'\] |
| widths | Array | \[\] | table除去前后两列后的每一列的宽（单位%），合计不超过73%，例如\[32, 24, 17\] |
| showCheckbox | Boolean | true | 是否显示每一行的checkbox |
| showOperate | Boolean | true | 是否显示每一行的操作按钮 |
| showFooter | Boolean | true | 是否显示底部批量操作模块 |

#### Events

| name | return value | require | description |
| :--- | :--- | :--- | :--- |
| selectAll |  | false | 点击全选按钮时触发 |
| checkedBox | {'item':item, 'index':index} | false | 点击checkbox时触发 |
| longTouchEvent | {'item':item, 'index':index} | false | 长按某一行时触发 |
| troggleEdit | true/false | false | 点击每一行的操作按钮时触发 |

#### Slots

| name | description |
| :--- | :--- |
| batchButtons | 批量操作模块的按钮 |

### 使用：

示例代码：

```
<template>
    <div>
        <table-list
            ref="tableList"
            :_key="_key"
            :component="component"
            :theads="theads"
            :protos="protos"
            :widths="widths"
        >
            <button slot="batchButtons" class="btn btn-del" type="button">删除</button>
        </table-list>
    </div>
</template>

<script>
    import PopPlantation from '../components/basic/pop-plantation.vue';
    import AreaUnit from '../components/public/area-unit.vue';
    export default{
        name: 'Basic',
        data(){
            return{
                _key: 'plantation',
                component: {plantation: PopPlantation, area: AreaUnit},
                theads: ['种植场名称', '种植面积', '负责人'],
                protos: ['name', 'area', 'director'],
                widths: [32, 24, 17]
            }
        },
        components:{
            PopPlantation,
            AreaUnit
        }
    }
</script>

```

界面：

![](/assets/QQ截图20170221113019.png)

数据：

此页面获取到的json数据如下：

![](/assets/QQ截图20170221114022.png)

说明：



