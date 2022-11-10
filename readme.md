# じゃんけん課題2回目

## 概要
- topkadai.html⇒1p目
- 特定の日時のカウントダウンを表示
- kadai.html⇒2p目
- 質問に回答して、正解、不正解を表示するクイズ

## 工夫した点
- 【1p目】
- cssを使ってフェードイン
- 【2p目】
- アラート表示 ok or キャンセル選択
- 「問題を選択」ボタンで、問題シャッフルして表示
- 設問はゆっくり表示
- 選択問題「checkbox」を1つのみ選択に設定
- 正解、不正解の表示
- 問題を回答後、あらたに「問題を選択」を押すとcheckboxをクリアして、別の問題を表示
- モーダルでヒント表示

## 苦戦した点
- フェードインなどをjsで使う場合と、cssで使う場合
- ボタン選択時に表示、非表示の切り変え

## 実装したかった点
- 正誤数の表示
- 時間制限を設けてカウントダウン表示

## 参考にしたサイト
- https://www.kuuneruch.com/javascript01/
- https://itsakura.com/jquery-checkbox
- https://qiita.com/bstyle6130/items/c3dfebdceaaef8e3860d