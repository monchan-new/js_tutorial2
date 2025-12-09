let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返す
// 変換例: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// URL生成: 命令型バージョン
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach( (element) =>
    urls.push(urlify(element)));
  return urls;
}

// URL生成: 関数型バージョン
function functionalUrls(elements) {
  return elements.map( element => urlify(element));
}

// Create Full Urls 
function actualUrls(elements) {
  return elements.map( element => `https://example.com/${urlify(element)}`);
}

// console.log(imperativeUrls(states));
// console.log(functionalUrls(states));
// console.log(actualUrls(states));


// 1単語の文字列抽出: 命令型バージョン
function imepativeSingles(elements) {
  let singles = [];
  elements.forEach(element => {
    if(element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
// 1単語の文字列抽出: 関数型バージョン
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
// console.log(imepativeSingles(states));
// console.log(functionalSingles(states));

function returnDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
} 
// console.log(returnDakota(states));
function returnTwoNames(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
// console.log(returnTwoNames(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: 命令型バージョン
function imperativeSum(elements) {
  let total = 0;
  elements.forEach( n => total +=n )
  return total;  
}
// console.log(imperativeSum(numbers));
// sum: 関数型バージョン
function functionalSum(elements) {
  return elements.reduce((total,n) => { return total += n;});
}
// console.log(functionalSum(numbers));

function funcitonalProduct(elements) {
  return elements.reduce( (total,n) => total *= n);
}
console.log(funcitonalProduct(numbers));

// lengths: 命令型バージョン
function imepativeLengths(elements) {
  let lengths = {};
  elements.forEach( element => lengths[element] = element.length
  );
  return lengths;
}
console.log(imepativeLengths(states));
// lengths: 関数型バージョン
// function functionalLengths(elements) {
//   return elements.reduce(
//     (lengths, element) => {
//       lengths[element] = element.length;
//       return lengths;
//     }, 
//     {}
//   );
// }
let functionalLengths = elements => elements.reduce(
  (lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, 
  {}
);
console.log(functionalLengths(states));
