var merge_def = require( 'merge-defaults');

var person = {
    "name":'dingchaolin',
    age:23
}

var student = {
    garde:2,
    teacher:'cangjingkong',
    school:'pkingUS',
    age:34//此处的age会忽略  以第一次出现的为准
}

var mergeStu = merge_def( person, student );

console.log( mergeStu );//对象可以实现合并

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var mergeArr = merge_def( arr1, arr2 );
console.log( mergeArr );//对数组不起作用

