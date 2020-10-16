const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class Promise {
    constructor(executor) {

        this.status = PENDING;
        this.value = null;
        this.reason = null;
        
        this.onFulfilledCbs = [];   // 成功回调函数队列
        this.onRejectedCbs = [];    // 失败回调函数队列

        try {
            executor(this.resolve, this.reject);
        } catch (e) {
            this.reject(e);
        }
        
    }

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = RESOLVED;
            this.value = value;
            this.onFulfilledCbs.forEach(fn => fn(this.value));
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            this.onRejectedCbs.forEach(fn => fn(this.reason));
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === RESOLVED) {
            onFulfilled(this.value);
        }

        if (this.status === REJECTED) {
            onRejected(this.reason);
        }

        if (this.status === PENDING) {
            // 这里针对异步状态下通过发布订阅模式来解决状态异步改变
            this.onFulfilledCbs.push(value => {
                onFulfilled(value);
            });

            this.onRejectedCbs.push(reason => {
                onRejected(reason);
            });
        }
    }

    catch(fn) {
        this.then(null, fn);
    }

}
