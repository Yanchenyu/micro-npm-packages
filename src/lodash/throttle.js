/**
 * @description throttle
 */


function throttle(fn, time) {

    let prevTime = Date.now();

    return function(...rest) {

        let currTime = Date.now();
        
        if (currTime - prevTime > time) {
            fn.apply(this, rest);
            prevTime = currTime;
        }

    }
    
}