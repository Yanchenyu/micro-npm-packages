/**
 * @description debounce
 */

function debounce(fn, time) {
    
    let timerId;

    return function(...rest) {
                
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            fn.apply(this, rest);
        }, time);

    }
}