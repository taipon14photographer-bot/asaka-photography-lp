# ASAKA Photography LP

ASAKA Photography の公開用ランディングページです。

目的は、綺麗なページを作ることではなく、撮影を検討している人が写真を見て、人柄を知り、料金を理解し、LINEで相談できる状態を作ることです。

## 現在の状態

- Astro で実装済み
- TOP / About / Works / Price / Flow / FAQ を独立ページ化済み
- LINE相談を主導線として設計済み
- Microsoft Clarity / GA4 は環境変数を設定すると有効化される
- sitemap / robots / 404 / OGP / favicon を公開用に準備済み

## 使用技術

- Astro
- TypeScript
- HTML / CSS

## よく使うコマンド

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## 環境変数

`.env.example` を参考に、公開環境で以下を設定してください。

| 変数名 | 用途 | 必須 |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | canonical / OGP / sitemap / robots の正式URL | 公開時は必須 |
| `PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity のプロジェクトID | 推奨 |
| `PUBLIC_GA_MEASUREMENT_ID` | GA4 の測定ID | 推奨 |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console のHTMLタグ認証値 | Search Console登録時 |

## 公開手順

1. デプロイ先で `PUBLIC_SITE_URL` を本番URLに設定する
2. Microsoft Clarity のプロジェクトIDを `PUBLIC_CLARITY_PROJECT_ID` に設定する
3. GA4 の測定IDを `PUBLIC_GA_MEASUREMENT_ID` に設定する
4. `npm run check` を実行する
5. `npm run build` を実行する
6. `dist/` を公開する
7. 公開後に `/sitemap.xml` と `/robots.txt` を確認する
8. Search Console に登録し、必要に応じて `PUBLIC_GOOGLE_SITE_VERIFICATION` を設定して再デプロイする

## デプロイ先候補

- Vercel: Astro の静的サイト公開が簡単。環境変数設定とプレビュー確認がしやすい。
- Netlify: `dist/` 公開との相性が良く、フォームやリダイレクトも後から拡張しやすい。
- Cloudflare Pages: 静的サイトの表示速度と無料枠の相性が良い。

ビルドコマンドは `npm run build`、公開ディレクトリは `dist` です。

## 計測確認

- Clarity: 公開ページを開いたあと、Clarity管理画面でセッションが記録されるか確認する
- GA4: 公開ページを開いたあと、GA4のリアルタイムでページビューが出るか確認する
- LINE CTA: LINEリンククリック時に `line_cta_click` イベントを送信する

## Search Console登録

1. Google Search Console でプロパティを追加する
2. URLプレフィックス、またはドメインで本番URLを登録する
3. HTMLタグ認証を使う場合は、`content="..."` の値を `PUBLIC_GOOGLE_SITE_VERIFICATION` に設定する
4. 再デプロイ後に所有権を確認する
5. `https://公開URL/sitemap.xml` を送信する

## ディレクトリ

- `src/pages/`: Astro ページ
- `src/layouts/`: 共通レイアウト
- `src/components/`: 共通ヘッダー / フッター
- `src/data/`: コピー、リンク、料金などの実装データ
- `src/assets/`: Astro が最適化・バンドルする画像や素材
- `public/`: favicon、ロゴ、OGP画像など、そのまま公開する静的ファイル
- `docs/`: 制作方針、画像管理、実装レポート

## 参照資料の扱い

既存資料は、ブランド理解・構成検討・コピー方針の参考としてのみ使います。VSMS資料や外部の既存資料は直接編集しません。
