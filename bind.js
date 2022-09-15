var obj={num:2,
    num2:4};
    var addTOthis=function(a,b,c){
        return this.num+a+b+c;
    }
    var bound=addTOthis.bind(obj);
    console.log(bound(2,3,4));
    var average=function(n){
        return (this.num+this.num2)/n;
    }
    var bound2=average.bind(obj);
    console.log(bound2(3));