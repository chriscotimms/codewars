function findOdd(A) {
    let counter = {};
    let len = A.length; 
    for (let j=0;j<len;j+=1){
        //console.log("let j loop iteration = "+j);
        let x = 0; 
        //console.log("pre x is "+ x);

    for (let i=0;i<len;i+=1){
        //console.log("let i loop iteration = "+i);
        
        if (A[j] === A[i]) {
            //console.log("A[i] is "+A[i]+ ", A[j] is "+A[j] +", counter[A[j]] is "+counter[A[j]]);
            x+=1;
            //console.log("x is "+ x);
        }
    }
    counter[A[j]] = x;
    //console.log("counter[A[j]] ("+counter[A[j]]+") = "+x);       
}

let len2 = Object.keys(counter).length;
let valueChoice = 0;
//console.log(counter, len2);
for (let value of Object.values(counter)) {
    if (value%2 === 1) {
        valueChoice = value;
        //console.log(value);
    }
}

function findKeyByValue(obj, value){
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value){
            return key;
        }
    }
}

const key3 = findKeyByValue(counter, valueChoice);
return key3;


}

findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])//, -1);
 //findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])//, 5);
  //findOdd([5,4,3,2,1,5,4,3,2,10,10])//, 1)
  //findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])//, 5);

  /*
   findOdd([20,1,20, 1])//, 5);
  findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])//, -1);
  findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])//, 5);
  findOdd([10])//, 10);
  findOdd([1,1,1,1,1,1,10,1,1,1,1])//, 10);
  findOdd([5,4,3,2,1,5,4,3,2,10,10])//, 1)
  */



  /// working
  /*
  function findOdd(A) {
    let counter = {};
    let len = A.length; 
    for (let j=0;j<len;j+=1){
        console.log("let j loop iteration = "+j);
        let x = 0; 
        console.log("pre x is "+ x);

    for (let i=0;i<len;i+=1){
        console.log("let i loop iteration = "+i);
        
        if (A[i] === A[j] && A[j] !== counter[A[j]]) {
            console.log("A[i] is "+A[i], ", A[j] is "+A[j], ", counter[A[j]] is "+counter[A[j]]);
            x+=1;
            console.log("x is "+ x);
        }
        counter[A[j]] = x;
        console.log("counter[A[j]] is "+counter[A[j]])
    }
    
}
*/