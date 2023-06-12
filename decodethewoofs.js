function woofDecoder(str) {
    let answer = [];
    let answer2 = [];
     
    if (str.length !== 0) {
    let x = str.split('!');
    x.splice(x.length-1);
        
    for (let i = 0; i < x.length; i+=1) {
      let newArray = x[i].split('-');
      answer.push(newArray);
    }
    }

    let yy = 0;
    for (let i=0; i < answer.length; i+=1) {

        for (let j=0; j<answer[i].length; j+=1) {

            const regex = /(.*w.*o.*o.*f)/gi;
            var searchedWords = answer[i][j].search(regex);
            if (searchedWords === 0) {
                yy = yy+1;
            }
        }

        if (yy > 0) {
            answer2.push(yy);
            yy = 0;
        } 

    }

    answer.length = 0;
    let xx = answer2.length;
    for (let k = 0; k < xx; k+=1) {
    
        if (answer2[k] > 26) {
            let v = "just barking!";
            answer.length=0;
            answer.push(v);
            k = xx;
      } else {
        let v = String.fromCharCode(answer2[k] + 96);
        answer.push(v);
      }
    }
    let result = answer.join('');
    if (result == 0) {
        console.log("nothing to decode!");
        return "nothing to decode!";
    } else {
        console.log(result);
        return result;
    }

  }


 
 
      
  woofDecoder("Woof! Woof" + "-woof".repeat(26) + "!");    
  //woofDecoder("Woof-woof-woof-woof-woof-woof-woof-" + "woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof!");
  //woofDecoder("Shhhhwoof-Shhhhwoof! Shhhhwoof!");
 //woofDecoder("Shwhhhogggojjjf-Shwhhhogggojjjf! woof-woof! woof-woof-woof! woof-woof-woof-woof!woof woof! woof ass bunder! woof");

//let text = "Shwhhhogggojjjf! woof woof! woof ass bunder";

//const myRe = /([\w]*w{1,}[\w]*o{1,}[\w]*o{1,}[\w]*f)/gi;
//const rr = text.match(/([\w]*w{1,}[\w]*o{1,}[\w]*o{1,}[\w]*f)/gi);
//console.log(rr);
