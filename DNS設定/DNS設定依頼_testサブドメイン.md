# DNS 設定依頼：test.kaguraku.jp サブドメインの追加

## 依頼日
2026-08-07

## 依頼者
井上（イノベーションライフ株式会社）

## 概要
`test.kaguraku.jp` サブドメインで、コーポレートサイトのテスト／プレビュー用ミラーサイトを公開したいです。以下の DNS 設定追加をお願いします。

## 追加してほしいレコード

| 種別 | ホスト名 | 値 | TTL |
|------|---------|---|-----|
| CNAME | `test.kaguraku.jp` | `ekzm-inoue.github.io.` | 3600（推奨） |

**注意点**
- 末尾のドット（`.`）が必要な場合があります（DNS プロバイダーによります）
- CNAME 先は「`ekzm-inoue.github.io`」（GitHub Pages のユーザードメイン、末尾に `/リポジトリ名` は不要）です

## 用途

- 本番 `kaguraku.jp` とは別に、外部関係者（クライアント等）へのプレビュー共有用
- GitHub Pages でホスティング（ソースは `github.com/ekzm-inoue/innovationlife-corporate-test`）
- コンテンツにはパスワードゲート、全ページに `noindex,nofollow` メタタグを設定済み

## 既存レコードへの影響

- `kaguraku.jp`（本番）、`www.kaguraku.jp`（www 転送）、`lp.kaguraku.jp`（HubSpot LP）、`preview.kaguraku.jp`（過去追加分）とは独立したサブドメインです
- MX（メール `@kaguraku.jp`）や既存の A/CNAME レコードには影響しません

## 完了確認方法

DNS 反映後（通常数分〜数時間）、以下のコマンドで確認できます：

```
nslookup test.kaguraku.jp
```

想定される応答：
- `Non-authoritative answer:`
- `test.kaguraku.jp canonical name = ekzm-inoue.github.io.`
- IPアドレスが `185.199.108.153` などGitHub Pages のもの

## 完了後の連絡

DNS 反映を確認後、井上までご連絡いただけますと、GitHub Pages 側の HTTPS 有効化（Let's Encrypt 自動発行）作業を進めます。

以上、よろしくお願いいたします。
