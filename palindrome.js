// 文字列を逆順にして返す
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  // プロパティ（コンストラクター変数でもある）
  this.content = content;

  // パリンドロームのテスト用に変換したcontentを返すメソッド
  this.processedContent = () => this.content.toLowerCase();

  // パリンドロームならtrueを、違うならfalseを返すメソッド
  this.palindrome = () => this.processedContent() === reverse(this.processedContent());
  // this.palindrome = function palindrome() {
  //  let processedContent = this.content.toLowerCase();
  //  return processedContent === reverse(processedContent);
  // }
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  
  // パリンドロームのテスト用に変換したcontentを返すメソッド
  this.processedContent = () => this.translation.toLowerCase();

  // // パリンドロームならtrueを、違うならfalseを返すメソッド
  // this.palindrome = () => this.processedContent() === reverse(this.processedContent());
}

TranslatedPhrase.prototype = new Phrase();

this.louder = () => {
  return this.content.toUpperCase();
}
