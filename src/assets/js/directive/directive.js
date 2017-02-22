
/**
 * 长按事件
 */
exports.touchAction = () => {
    return (el, binding) => {
        let time = null;
        el.addEventListener("touchstart", (event) => {
            time = setTimeout(() => {
                let vm = binding.value.vm;
                let myFunction = binding.arg;
                vm[myFunction](binding.value);
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
                reactiveFn(
                    binding, 
                    'arguments must be array in v-touchstart', 
                    'the first argument must be Vue instance in v-touchstart'
                );
            });
        }
    } 
};

/**
 * 触摸移动
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchmove = () => {
    return {
        bind: (el, binding) => {
            el.addEventListener("touchmove", (event) => {
                reactiveFn(
                    binding, 
                    'arguments must be array in v-touchmove', 
                    'the first argument must be Vue instance in v-touchmove'
                );
            });
        }
    } 
};

/**
 * 触摸结束
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchend = () => {
    return {
        bind: (el, binding) => {
            el.addEventListener("touchend", (event) => {
                reactiveFn(
                    binding, 
                    'arguments must be array in v-touchend', 
                    'the first argument must be Vue instance in v-touchend'
                );
            });
        }
    } 
};

function reactiveFn(binding, firErr, SecErr) {
    // 参数必须为数组
    if(!(binding.value instanceof Array)){

        console.error(firErr);

    }else if(binding.value.length >= 1) {// 且参数数组不能为空

        // 参数数组第一个数据必须是vue实例
        if(!(binding.value[0] instanceof Vue && binding.value[0].constructor != Vue)){
            console.error(SecErr);
        }else {
            let params = binding.value.slice(1);
            let myFunction = binding.arg;
            binding.value[0][myFunction](event, params);
        }
    }
}

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