function DNAStrand(dna){
    let myString = "";
    let len = dna.length;
    for (let i = 0; i<len; i+=1){
        let x = dna[i].match(/[ATCG]/g);
        x == "A" ? myString += "T" :
        x == "T" ? myString += "A": 
        x == "G" ? myString += "C" :
        myString += "G";
        
    }
    return myString;
}
   




  DNAStrand("ATTGC");//"TAACG"
  //DNAStrand("GTAT"); //"CATA"



  /*
  function DNAStrand(dna){
    let myString = "";
    let len = dna.length;
    for (let i = 0; i<len; i+=1){
        let x = dna[i].match(/[ATCG]/g);
        x == "A" ? dna[i] = "T" :
        x == "T" ? dna[i] = "A": 
        x == "G" ? dna[i] = "C" :
        dna[i] = "G";
        
    }
    console.log(dna);
}
*/