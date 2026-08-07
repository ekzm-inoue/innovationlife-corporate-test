# `www.kaguraku.jp` → `kaguraku.jp` 転送 DNS 設定依頼

## 1. 概要

`www.kaguraku.jp` にアクセスされた場合に、**ネイキッドドメイン `kaguraku.jp` へ自動転送（リダイレクト）**するよう設定したいので、DNS レコードの追加をお願いします。

- 期待される挙動: `https://www.kaguraku.jp/` → `https://kaguraku.jp/` へ 301 リダイレクト
- 公開元: GitHub Pages（`ekzm-inoue.github.io`）
- リダイレクト自体は **GitHub Pages 側で自動的に処理されます**（DNS を当てるだけで OK）

---

## 2. 現状の DNS（参考）

| サブドメイン / ホスト | 用途 | 現在の状態 |
|---|---|---|
| `kaguraku.jp`（apex） | コーポレートサイト（GitHub Pages） | A レコード4本設定済み・稼働中 |
| `lp.kaguraku.jp` | HubSpot で運用中の LP | CNAME 設定済み・稼働中 |
| `www.kaguraku.jp` | （今回追加したい） | 未設定（DNS 上に存在しない） |
| メール（@kaguraku.jp） | Google Workspace | MX / TXT 設定済み・稼働中 |

いずれも触らずに、**www だけを追加** する形でお願いします。

---

## 3. 依頼内容（追加するレコード）

下記 **CNAME レコード** を 1 本追加してください。

| Type  | Name (ホスト) | Value                      | TTL  |
|-------|----------------|----------------------------|------|
| CNAME | `www`          | `ekzm-inoue.github.io.`    | 3600 |

> ⚠️ 末尾のピリオド (`.`) はそのままで（DNS 表記上の慣例）。

### なぜ CNAME を GitHub Pages に向けるのか

GitHub Pages は、独自ドメインと `www`/apex の両方が登録されている場合、**プライマリでない方からプライマリへ 301 リダイレクト**してくれる仕様があります。

- 今回の構成: プライマリ = `kaguraku.jp`（apex）
- `www.kaguraku.jp` を GitHub Pages に向けると、GitHub のエッジが自動的に `https://kaguraku.jp/` へ 301 リダイレクト
- リダイレクト用に別途サーバーを立てる必要なし

参考: GitHub 公式ドキュメント [Configuring a subdomain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

---

## 4. 触らないでほしいレコード（重要）

下記は **絶対に編集・削除しないでください**。メール・既存LPが止まります。

### apex（`kaguraku.jp`）の Web 関連
- `A @ 185.199.108.153` ～ `185.199.111.153`（GitHub Pages 用、4本）

### メール関連（Google Workspace）
- `MX` レコード（`*.l.google.com` 等）
- `TXT` レコードのうち：
  - `v=spf1 include:_spf.google.com ~all`（SPF）
  - `v=DMARC1` で始まるもの（DMARC）
  - `google-site-verification=...`（Google ドメイン認証）
  - `selector*._domainkey` 系（DKIM）

### HubSpot LP 関連
- `CNAME lp` → HubSpot 側のホスト
- HubSpot SSL 用の `_acme-challenge` / `_pki-validation` 系 TXT があれば、それも維持

---

## 5. 確認方法（DNS 追加後）

DNS 伝播後（数分〜最大 24 時間）、下記コマンドで確認できます：

```bash
# CNAME が ekzm-inoue.github.io に向いているか
dig www.kaguraku.jp CNAME +short
# → ekzm-inoue.github.io. が返れば OK

# 最終的に解決されるIP（GitHub Pages の IP に解決されれば OK）
dig www.kaguraku.jp A +short
# → 185.199.108.153 ～ 185.199.111.153 のいずれかが返ること

# HTTP リクエストで 301 リダイレクトを確認
curl -I https://www.kaguraku.jp/
# → HTTP/2 301
#    location: https://kaguraku.jp/
# のような応答であれば成功

# メールが壊れていないか念のため確認
dig kaguraku.jp MX +short
# → 既存の smtp.google.com 系が変わらず返ること
```

---

## 6. GitHub 側で必要な作業（弊社で対応済み）

すでに完了しているため、エンジニア側で行う作業はありません。参考までに：

- GitHub Pages のカスタムドメインに `kaguraku.jp` を登録済み（プライマリ）
- HTTPS（Let's Encrypt 証明書）強制リダイレクト有効化済み
- `CNAME` ファイル（中身: `kaguraku.jp`）をリポジトリ直下に配置済み

DNS が伝播次第、GitHub Pages 側で **`www.kaguraku.jp` 用の SSL 証明書も自動発行**され、`https://www.kaguraku.jp/` → `https://kaguraku.jp/` の 301 リダイレクトが有効になります（自動）。

---

## 7. ご連絡事項

- 作業前に **現在の DNS 一覧をスクリーンショット等でバックアップ** いただけると安心です
- HTTPS 証明書の自動発行に DNS 伝播後 数分〜1時間 程度かかる場合があります（その間 `https://www.kaguraku.jp/` で証明書エラーが出ることがありますが、これは一時的なものです）
- 作業のタイミング・所要時間に制約がある場合は、事前にお知らせください

---

## 8. ソース / 参考資料

| 項目 | 出典 |
|---|---|
| **CNAME の向き先（`<user>.github.io.`）** | GitHub Docs: [Configuring a subdomain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) |
| **apex と www の両立・リダイレクト挙動** | GitHub Docs: [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) |
| **HTTPS 証明書の自動発行** | GitHub Docs: [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) |

---

## 9. 連絡先

| 項目 | 内容 |
|---|---|
| 依頼者 | 井上（イノベーションライフ） |
| メール | inoue@ekzm.co.jp |
| 関連リポジトリ | https://github.com/ekzm-inoue/innovationlife-corporate |
