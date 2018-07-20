/*
* nextTick 排到下个事件队列的顶部
*
*
* */
console.log('a客人')
setTimeout(function () {
    console.log('a扫地setTime')
},0)
process.nextTick( function(){
    console.log('a扫地 nextTick')/*优先级比setTimeout高*/
} )
console.log('b厨师')
console.log('c厨师')