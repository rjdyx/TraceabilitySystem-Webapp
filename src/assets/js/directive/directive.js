
/**
 * 长按提示删除
 */
exports.touchDelete = () => {
    return (el, binding) => {
        let time = null;
        el.addEventListener("touchstart", (event) => {
            time = setTimeout(() => {
                let vm = binding.value.vm;
                let type = binding.value.type;
                let id = binding.value.id;
                let index = binding.value.index;
                let flag = binding.value.flag;
                let tip = binding.value.tip;
                if(!flag) {
                    let deleteFunction = binding.arg;
                    vm[deleteFunction](type, id, index);
                }else {
                    vm.$alert(tip);
                }
                
            }, 500);
        });

        el.addEventListener("touchmove", (event) => {
            clearTimeout(time);
        });

        el.addEventListener("touchend", (event) => {
            clearTimeout(time);
        });
    }
};

/**
 * 自动获取焦点
 */
exports.focus = () => {
    return {
        inserted:(el, binding, vnode) => {
            el.focus();
        }
    };
};

/**
 * 失去焦点
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.unfocus = () => {
    return {
        inserted:(el, binding, vnode) => {
            // 参数必须为数组
            if(!(binding.value instanceof Array)){

                console.error('arguments must be array in v-touchstart');

            }else if(binding.value.length >= 1) {// 且参数数组不能为空

                // 参数数组第一个数据必须是vue实例
                if(!(binding.value[0] instanceof Vue && binding.value[0].constructor != Vue)){
                    console.error('the first argument must be Vue instance in v-touchstart');
                }else {
                    let params = binding.value.slice(1);
                    let myFunction = binding.arg;
                    let $el = $(el);
                    $el.blur(() => {
                        binding.value[0][myFunction](event, params)
                    });
                }
            }
            
        }
    };
};

/**
 * 触摸开始
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchstart = () => {
    return {
        bind: (el, binding) => {
            el.addEventListener("touchstart", (event) => {
                // 参数必须为数组
                if(!(binding.value instanceof Array)){

                    console.error('arguments must be array in v-touchstart');

                }else if(binding.value.length >= 1) {// 且参数数组不能为空

                    // 参数数组第一个数据必须是vue实例
                    if(!(binding.value[0] instanceof Vue && binding.value[0].constructor != Vue)){
                        console.error('the first argument must be Vue instance in v-touchstart');
                    }else {
                        let params = binding.value.slice(1);
                        let myFunction = binding.arg;
                        binding.value[0][myFunction](event, params);
                    }
                }
            });
        }
    } 
};

/**
 * 固定元素
 */
exports.sticky = () => {
    return {
        bind:(el, binding, vnode) => {
            let $el = $(el);
            $el.sticky({
                topSpacing:0,
                zIndex:19920218
            });
        }
    };
};