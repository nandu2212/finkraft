// function input: array returns two number array
// 
function targettedsum(array,target){
    for(let i=0;i<array.length;i++){
     for(let j=(i+1);j<array.length;j++){
         if(array[j]=== (target-array[i])){
             return [array[i],array[j]]
         }
     }
    }
 }
 let arr1=[2,3,4,6,8]
 console.log(targettedsum(arr1,9))


 
 //modified(optimized)
 let arr2=[2,3,4,7,8]
 function target(array,target){
    let map1=new Map();
    for(let i=0;i<array.length;i++){
        map1.set(array[i],target-array[i])
    }
    // return map1
    for(let j=0;j<array.length;j++){
        if(map1.has(map1.get(array[j]))){
            return [array[j],map1.get(array[j])]
        }
    }
 }
 console.log(target(arr2,9))