# `kaguraku.jp` DNS 設定依頼

## 1. 概要

GitHub Pages で公開するコーポレートサイトに、**独自ドメイン `kaguraku.jp` を割り当て**たいので、DNS レコードの追加をお願いします。

- 公開予定 URL（最終形）: `https://kaguraku.jp/`
- 公開元（オリジン）: `https://ekzm-inoue.github.io/innovationlife-corporate/`
- 公開方法: GitHub Pages（HTTPS は GitHub 側で Let's Encrypt 経由の証明書を自動発行）

---

## 2. 現状（DNS で生きているもの）

| サブドメイン / ホスト | 用途 | 関連レコード |
|---|---|---|
| `kaguraku.jp`（apex） | Google Workspace でメール受信中 | MX / TXT (SPF, DMARC, google-site-verification) |
| `lp.kaguraku.jp` | HubSpot で運用中のランディングページ | CNAME `lp` 等（HubSpot 用認証 TXT もあるかも） |

**いずれも止めずに継続稼働させたい**ので、これらは触らずに今回のレコードを **追加** する形でお願いします。

---

## 3. 依頼内容（追加するレコード）

### 案 A: apex `kaguraku.jp` を GitHub Pages に向ける（推奨想定）

下記 4 本の **A レコード** を `@`（apex）に追加してください。

| Type | Name (ホスト) | Value (向き先)       | TTL |
|------|----------------|----------------------|-------|
| A    | `@`            | `185.199.108.153`    | 3600  |
| A    | `@`            | `185.199.109.153`    | 3600  |
| A    | `@`            | `185.199.110.153`    | 3600  |
| A    | `@`            | `185.199.111.153`    | 3600  |

> 📚 **これらの IP の出典（公式ソース）：** GitHub Docs - [Configuring an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) に記載されている GitHub Pages 公式の Anycast IP アドレスです（2018 年から維持されている恒久的な値）。

> IPv6 もカバーするなら、下記 AAAA レコードも追加してください（必須ではない）：
> ```
> AAAA  @  2606:50c0:8000::153
> AAAA  @  2606:50c0:8001::153
> AAAA  @  2606:50c0:8002::153
> AAAA  @  2606:50c0:8003::153
> ```

### 案 B（代替）: サブドメイン `preview.kaguraku.jp` だけ向ける

apex を温存して、サブドメインに当てる場合は **CNAME レコード** を 1 本追加してください。

| Type  | Name (ホスト) | Value                      | TTL  |
|-------|----------------|----------------------------|------|
| CNAME | `preview`      | `ekzm-inoue.github.io.`    | 3600 |

> 末尾のピリオド（`.`）はそのままで（DNS 表記上の慣例）。

---

## 4. 触らないでほしいレコード（重要）

下記は **絶対に編集・削除しないでください**。メールや既存 LP が止まります。

### メール関連（Google Workspace）
- `MX` レコード（`*.l.google.com` 等が含まれているはず）
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
# 案 A の場合
dig kaguraku.jp A +short
# → 185.199.108.153 ～ 185.199.111.153 の 4 つが返れば OK

# 案 B の場合
dig preview.kaguraku.jp CNAME +short
# → ekzm-inoue.github.io. が返れば OK

# メールが壊れていないか念のため確認
dig kaguraku.jp MX +short
# → 既存の Google Workspace の MX が変わらず返ること
```

---

## 6. その後の作業（イノベーションライフ側で対応）

DNS の伝播が確認できたら、こちら（井上）側で下記を実施します：
1. GitHub Pages のカスタムドメイン設定に `kaguraku.jp`（または `preview.kaguraku.jp`）を登録
2. GitHub が DNS を検証
3. 「Enforce HTTPS」を有効化（Let's Encrypt 証明書が数分〜1 時間で自動発行）

DNS プロバイダ側での作業は **A レコード（または CNAME）の追加のみ** で完結します。

---

## 7. ご連絡事項

- **どちらの案（A or B）で進めるか**、井上から別途共有します
- 既存の `MX` / `lp` 関連レコードがあれば、念のため作業前にスクリーンショット等で **バックアップ** をお願いします
- 作業のタイミング・所要時間に制約がある場合は、事前にお知らせください

---

## 8. 連絡先

| 項目 | 内容 |
|---|---|
| 依頼者 | 井上（イノベーションライフ） |
| メール | inoue@ekzm.co.jp |
| 関連リポジトリ | https://github.com/ekzm-inoue/innovationlife-corporate |

---

## 9. ソース / 参考資料

本依頼書に記載した DNS 設定値（IP アドレス・CNAME 等）の出典：

| 項目 | 出典 |
|---|---|
| **A レコード（apex 用）の IP × 4** | GitHub Docs: [Configuring an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) |
| **AAAA レコード（IPv6）** | 同上 |
| **CNAME の向き先（`<user>.github.io.`）** | GitHub Docs: [Configuring a subdomain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) |
| **GitHub Pages の独自ドメイン設定全般** | GitHub Docs: [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) |
| **HTTPS / 証明書の自動発行** | GitHub Docs: [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) |

> いずれも GitHub 公式ドキュメント。仕様変更があれば最新版を参照してください。

