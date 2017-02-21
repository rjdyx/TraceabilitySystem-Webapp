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

#### 全局变量：

| name | description |
| :--- | :--- |
| list | 存放列表项的数组 |
| selectedLists | 存放被选中的列表项的数组 |
| showList | 是否显示列表项 |
| slideList | 列表过渡效果 |
| slideListItem | 列表项出现/消失效果 |

可在plugin目录里的protoName.js里面修改变量名，默认代码如下：

```
const tableList = {
    list: 'list',
    selectedLists: 'selectedLists',
    showList: 'showList',
    slideList: 'slideList',
    slideListItem: 'slideListItem'
}
```

#### 全局方法：

| method | params | description |
| :--- | :--- | :--- |
| setList | list：存放列表项的数组 | 设置列表项数组 |
| spliceList | index：列表项在数组中的下标 | 删除列表项数组中的某一项 |
| unshiftList | item：列表项 | 把某个列表项插入列表项数组的首位置 |
| setSelectedLists | selectedLists：存放被选中的列表项的数组 | 设置被选列表项数组 |
| pushSelectedLists | selectedList：被选中的列表项 | 把某个被选中的列表项加入数组 |
| spliceSelectedLists | index：列表项在数组中的下标 | 删除被选中列表项数组中的某一项 |
| reverseSelectedLists | proto：属性名 | 按传入的属性名对selectedLists进行递增排序 |
| setShowList | type | 显示或者一次列表项，参数type只能传入true或false |
| setSlideList | name | 设置列表过渡效果，参数name传'slide-fade-left'表示左过渡效果，'slide-fade-right'表示右过渡效果，不传参数或传其他参数则会取消过渡效果 |
| setSlideListItem | name | 设置每个列表项出现或消失的效果，传入‘slide-up’表示收缩效果，不传参数或传其他参数则会取消过渡效果 |

---

### 自定义编辑模块：

所谓编辑模块，即默认情况下点击某一行最右边的操作按钮，这一行会在下方出现新的模块，默认情况下，此模块用于编辑之用，如下图所示，红框部分为编辑模块：

![](/assets/QQ截图20170221113445.png)

定义编辑模块的组件存放在component里面，对应的属性名与\_key保持一致，如下：

```
_key: 'plantation',
component: {plantation: PopPlantation}
```

传递给自定义组件的props有

| name | description |
| :--- | :--- |
| letItem | 传给此prop的值为这一行的数据 |
| args | 传给此prop的值为传给table-list组件的args |

Source:

```
<component 
    :is="component[_key]"
    :letItem="item"
    :args="args"
></component>
```

---

### 自定义编辑按钮：

默认情况下，每一行最右边的编辑按钮用于打开/关闭编辑模块，可自定义编辑按钮，只需给component定义open属性并传入相关组件即可，如下：

```
component: {open: Hispic}
```

传递给自定义组件的props有

| name | description |
| :--- | :--- |
| item | 传给此prop的值为这一行的数据 |

Source:

```
<component 
    :is="component.open"
    :item="item"
></component>
```

---

### 自定义列显示内容：

默认情况下，每一行显示的内容由protos里定义的属性名决定，即每一列默认情况下只是简单地显示后台传过来的json数据里对应的属性的值，如果想要对某一列的显示内容进行扩展，则需要把自定义的组件传给component，并且对应的属性名和protos里面的属性名保持一致，如下：

```
component: {plantation: PopPlantation, area: AreaUnit},
protos: ['name', 'area', 'director']
```

传递给自定义组件的props有

| name | description |
| :--- | :--- |
| item | 传给此prop的值为这一行的数据 |

Source:

```
<component 
    :is="component[proto]"
    :item="item"
></component>
```

---

### 例子：

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

