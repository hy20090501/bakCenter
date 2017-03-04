var Promise = require("es6-promise").Promise;

/**
 * 提供各种工具方法
 * @type {{*}}
 */
module.exports = {
    /**
     * 获取Defer对象
     * @return {[type]} [description]
     */
    getDefer: function (){
        var deferred = {};
        deferred.promise = new Promise(function(resolve, reject){
            deferred.resolve = resolve;
            deferred.reject = reject;
        });
        return deferred;
    },
    /**
     * promise when方法
     * @param promises promise数组
     * @returns {[type]} [description]
     */
    when: function(promises) {
        var deffered = this.getDefer();
        Promise.all(promises).then(function(data) {
            deffered.resolve(data);
        }, function(err) {
            deffered.reject(err);
        });
        return deffered.promise;
    }
}
// npm install es6-promise --save --verbos