# イノベーションライフ プレビューサイト

このリポジトリは **test.kaguraku.jp** で公開されているテスト／プレビュー用のサイトです。
本番 (`kaguraku.jp`) の姉妹リポジトリは `ekzm-inoue/innovationlife-corporate` です。

## 用途

- 新機能・新ページ（例：kaguraku_4 SESAME LP）の外部関係者向けプレビュー共有
- Claude Design で編集したデザインの本番反映前チェック
- クライアントへのデモ URL 送付

## アクセス

- URL: https://test.kaguraku.jp/
- パスワード: `il-preview-2026`

パスワードはページ表示時にプロンプトで求められます。認証成功で `localStorage` にトークンが保存され、次回以降は自動でスキップされます（ブラウザキャッシュを消すと再入力が必要）。

## 検索エンジンへの露出

全ページに `<meta name="robots" content="noindex,nofollow">` を入れているため、Google など検索エンジンにインデックスされません。

## 更新方法（ローカル）

```bash
cd C:\Users\inoue\Desktop\i_イノベーションライフ\コーポレートサイト\innovationlife-corporate
git checkout test-site
# ...ファイルを編集...
git add -A
git commit -m "変更内容"
git push test test-site:main
```

- `origin` : 本番リポジトリ（`kaguraku.jp`）
- `test`   : このテストリポジトリ（`test.kaguraku.jp`）

## 本番へ反映するには

テストサイトで OK になった内容を `main` ブランチにマージしてから、`origin` に push します。

```bash
git checkout main
git merge test-site           # 必要な部分のみなら cherry-pick
git push origin main
```
