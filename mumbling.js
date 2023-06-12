function accum(s) {
    var y = [];
    let x = s.toLowerCase();
    console.log(x);
    for (let i = 0; i < x.length; i+=1){
        console.log(x[i], i);
      

    }
}
    
    /*
    .split('').forEach((element, index) => {
        for (var = )
        //console.log(element, index);
        //console.log(element.repeat(index + 1));
    });

	console.log(x);
}
*/

accum("abcd") // "A-Bb-Ccc-Dddd"
accum("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") // "C-Ww-Aaa-Tttt"