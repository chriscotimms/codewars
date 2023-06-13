function createPhoneNumber(numbers){
    let phNum = "";
    for (let i=0;i<3;i+=1){
        phNum += numbers[i];
    }
    phNum = "("+phNum+") ";
    for (let i=3;i<6;i+=1){
    phNum += numbers[i];
    }
    phNum = phNum+"-";
    for (let i=6;i<10;i+=1){
        phNum += numbers[i];
        }
  console.log(phNum);
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])//, "(123) 456-7890");
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])//, "(111) 111-1111");
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])//, "(123) 456-7890");