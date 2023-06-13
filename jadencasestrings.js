String.prototype.toJadenCase = function () {
    let y = [];
    let x = this.split(' ')
                .map(element => element.charAt(0).toUpperCase() + element.slice(1))
                .join(' ');
console.log(x);
return x;
  };



var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());



/*

String.prototype.toJadenCase = function () {
    let y = [];
    let x = this.split(' ');
    console.log(x.length, x);
    x.map(function(element, index, array){
      let v = element.replace(element[0], element[0].toUpperCase());
      y.push(v);   
});

y = y.join(' ');
console.log(y);
  };





String.prototype.toJadenCase = function () {
    let x = this.split(' ');
    x.map(function(element){

       let v = element.replace(element[0], element[0].toUpperCase()); 
       console.log(v);
})
  };
  */