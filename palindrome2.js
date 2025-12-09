// 文字列を逆順にする
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  // プロパティ（コンストラクター変数でもある）
  this.content = content;

  // 文字列を小文字に変換するメソッド
  this.processor = (string) => string.toLowerCase();

  // パリンドロームのテスト用に、変換したcontentを返すメソッド
  this.processedContent = () => this.processor(this.content);

  // パリンドロームならtrueを、違うならfalseを返すメソッド
  this.palindrome = () => this.processedContent() === reverse(this.processedContent());
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
  // Phraseのコンストラクタを呼び出して継承
  Phrase.call(this, content);
  this.translation = translation;

  // (オーバライド)パリンドロームのテスト用に変換したtranslationを返すように変更
  this.processedContent = () => this.processor(this.translation);
}

// プロトタイプ継承
TranslatedPhrase.prototype = Object.create(Phrase.prototype);
// この行で TranslatedPhrase.prototype を「Phrase.prototypeを継承した新しいオブジェクト」に置き換える。

// しかし、その新しいオブジェクトの constructor プロパティ(instanceofと同様な元のクラスの型を示すもの)は デフォルトで Phrase を指すようになってしまう。
// constructorを修正
TranslatedPhrase.prototype.constructor = TranslatedPhrase;
// これで TranslatedPhrase.prototype.constructor を正しく「TranslatedPhrase自身」に戻せ、生成されたオブジェクトの型がTranslatedPhraseを示すようになる。