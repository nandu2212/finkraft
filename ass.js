// function input: array returns two number array

function targettedsum(array,target){
    for(let i=0;i<array.length;i++){
     let ele=array[i];
     for(let j=(i+1);j<array.length;j++){
         if(array[j]=== (target-array[i])){
             return [array[i],array[j]]
         }
     }
    }
 
 }
 let arr1=[2,3,4,6,8]
 console.log(targettedsum(arr1,9))