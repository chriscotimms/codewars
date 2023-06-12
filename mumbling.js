function accum(s) {
    var y = "";
    let x = s.toLowerCase();
    for (let i = 0; i < x.length; i+=1){
        let z = `${x[i].toUpperCase()}${x[i].repeat(i)}`; 
        if (i<1){
            y += z; 
        } else {
        y += "-"+z;
        }   
        
    }
    return y;
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