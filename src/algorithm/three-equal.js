/**
 * @description 使得a === 1 && a === 2 && a === 3为true
 */


// function 1
var value = 0;
Object.defineProperty(window, 'a', {
    get: () => {
        return this.value += 1
    }
});

// function 2 
// 这种方法只能 a==1 && a==2 && a==3为true
var a = {value: 0};
a.valueOf = function() {
    return this.value += 1
}

