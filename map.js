var arr=[2,3,4,5];
var res=[];
for(var i=0;i<arr.length;i++)
{
res.push(sqrt(arr[i]));
}
function sqrt(num){
    return num*num;
}
console.log(res);