
class TableList {

	constructor (list, selectedLists, showList) {
		this.list = list
		this.selectedLists = selectedLists
		this.showList = showList
        // 列表过渡效果
        this.slideList = 'slide-fade-right'
        // 列表项出现/消失效果
        this.slideListItem = 'slide-up'
	}

	setList(list) {
		this.list = list
	}

	spliceList(index) {
		this.list.splice(index, 1)
	}

	unshiftList(item) {
		this.list.unshift(item)
	}
 
	setSelectedLists(selectedLists) {
        this.selectedLists = selectedLists
    }

    pushSelectedLists(selectedList) {
        let protos = ['id', 'index', 'flag'];
        let result = protos.every(function(item, index) {
            if(item in selectedList) {
                return true
            }else {
                return false
            }
        })
        if (!result) console.error('传入的值必须是个包含id、index和flag这三个属性的对象')
        this.selectedLists.push(selectedList)
    }

    spliceSelectedLists(index) {
        this.selectedLists.splice(index, 1)
    }

    reverseSelectedLists(proto) {
        this.selectedLists = reverseObj(this.selectedLists, proto)
    }

    setShowList(type) {
        if (typeof type == 'boolean') {
            this.showList = type
        }else {
            console.error('传入的值必须是Boolean类型')
        }
    }

    setSlideList(name) {
        switch (name) {
            case 'slide-fade-left': this.slideList = name;break;
            case 'slide-fade-right': this.slideList = name;break;
            default: this.slideList = '';
        }
    }

    setSlideListItem(name) {
        switch (name) {
            case 'slide-up': this.slideListItem = name;break;
            default: this.slideListItem = '';
        }
    }

}

/**
 * 比较器
 * @param proto
 * @returns {function()}
 */
function compare(proto) {
    return (ob1, ob2) => {
        return ob1[proto] - ob2[proto];
    }
}

/**
 * 根据传过来的属性参数对对象数组继续逆序排序
 * @param arrObj 对象数组
 * @param proto 对象的属性
 * @returns {Array.<T>}
 */
function reverseObj(arrObj, proto){
    return arrObj.sort(compare(proto)).reverse();
};

let tableList = new TableList([], [], true)

module.exports = { tableList }