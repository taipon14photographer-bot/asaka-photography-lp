# ASAKA Photography LP 公開準備レポート

## 公開前に追加したもの

- Microsoft Clarity の導入口
- GA4 の導入口
- LINE CTAクリックイベント `line_cta_click`
- canonical
- OGP / Twitter Card
- OGP画像 `/ogp/asaka-photography-og.jpg`
- Google Search Console用の verification meta
- `sitemap.xml`
- `robots.txt`
- `404` ページ
- `.env.example`
- README の公開手順

## 環境変数

```bash
PUBLIC_SITE_URL=https://公開URL
PUBLIC_CLARITY_PROJECT_ID=ClarityのプロジェクトID
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GOOGLE_SITE_VERIFICATION=Search Consoleの認証値
```

## 確認URL

- `/`
- `/about/`
- `/works/`
- `/price/`
- `/flow/`
- `/faq/`
- `/404.html`
- `/sitemap.xml`
- `/robots.txt`

## 公開後に確認すること

- Clarityでセッションが記録されること
- GA4リアルタイムでページビューが表示されること
- LINEリンククリック時に `line_cta_click` が記録されること
- Search Consoleで所有権確認が通ること
- Search Consoleに `/sitemap.xml` を送信できること
- SNS共有時にタイトル、説明、Hero OGP画像が表示されること

## 注意点

- 本番URLが未確定の場合、`PUBLIC_SITE_URL` を仮URLのまま公開しないこと
- Clarity / GA4 はID未設定でもビルド可能だが、計測は開始されない
- Search ConsoleのHTMLタグ認証を使う場合は、認証値を環境変数に設定して再デプロイすること
