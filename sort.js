let a = [8, 17, 42, 99];
a.sort( (a, b) => { 
  return a-b;
}).forEach( (a) => {console.log(a)});