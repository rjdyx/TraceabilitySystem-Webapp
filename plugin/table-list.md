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
| checkedBox | {'id':item.id, 'index':index, flag:getAllState\(item\)} | false | 点击checkbox时触发 |
| destroy |  | false | 单个删除时触发 |
| batchDestroy |  | false | 批量删除时触发 |
| troggleEdit | true/false | false | 点击每一行的操作按钮时触发 |

#### Slots

| name | description |
| :--- | :--- |
| batchButtons | 批量操作模块的按钮 |



