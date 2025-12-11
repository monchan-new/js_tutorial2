let Phrase = require("monchan-palindrome");

let palindromeTester = (event) => {
  event.preventDefault();   
  // ここでのeventはフォームの送信であり、そのデフォルト動作は「送信 → ページリロード」である
  // この動作を防止することによりリロードされないようにし、JS処理でpタグ内に挿入した内容が素のHTMLで上書きされない(＝消されない)ようにする
  let phrase = new Phrase(event.target.phrase.value);
  // eventのtargetはformオブジェクト全体であり、この指定でname="phrase"のtestareaタグのvalue(内容)を取り出すことが出来る
  let palindromeResult = document.querySelector("#palindromeResult");

  if(phrase.palindrome()) {
    palindromeResult.innerHTML =`"<strong>${phrase.content}</strong>"はパリンドロームです`;
  } else {
    palindromeResult.innerHTML =`"<strong>${phrase.content}</strong>"はパリンドロームではありません`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
// DOMコンテンツの読み込みが完了していないと
// buttonオブジェクトの認識ができない
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", (event) =>  palindromeTester(event)); 

  // button.addEventListener("click", palindromeTester ); // この場合はcallback関数の省略形なので()はつけないことに注意。
});