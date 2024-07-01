console.log("pop up verum");
a=8;
var a=8;
let g=23;
var b="hello";
var c=true;
var f;

{
    var a=12;
    let g=4;
    console.log(g)
}
console.log(a)
console.log(g)
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(f));
//Javascript Objects
 let person={
    name:"Arwin",
    age:19,
    gender:"male",
 }
console.log(person.name);
let arr=['hi','ji',10];
console.log(arr[2]);
let arr_obj=[{age:23,location:'tvm'},{age:33,location:'ekm'}]
console.log(arr_obj[1].location)
function add(a,b)
{  
     var sum=a+b;
    return sum;
    
}
let result=add(20,30)
add(20,40)
console.log(result)
var t=1;
    var n=t++;
console.log(n);
var a1=12;
var a2=11;
if(a1>a2)
    {
        console.log("a1 is big"+a1)
    }
else if(a1<a2){
    console.log("a2 is greater"+a2)
}
else
{
    console.log("equal")
}
var arr2=[10,20,30]

// for(let i=0;i<arr2.length;i++)
    // {
        // console.log(arr2[i])
    // }
    for(const i of arr2 )
        {
            console.log(i)
        }


