# LP v2 UI/UX改善レポート

作成日: 2026-06-12

## 目的

公開可能なv1を土台に、ASAKA Photographyの写真が主役になるようにUI/UXを再設計しました。

今回の主目的はコピー改修ではなく、世界観と成約導線の強化です。

## 主な変更

- Heroを全面写真レイアウトへ変更
  - `susuki-sunset` を画面全体で見せる構成へ変更
  - コピーは写真の上に重ね、左右分割レイアウトを廃止
- ヘッダーを正式ロゴ画像へ変更
  - `Logos.zip` 内の `asakaphotography_横カラー.png` を使用
  - テキスト打ち直しではなく画像ロゴを表示
- faviconを正式シンボル版由来へ更新
  - `asakaphotography_文字無し背景透過.png` から生成
- ブランドカラーを温かい方向へ再設計
  - Ivory / Off White / Warm Gray / Natural Beige
  - Logo Gold / Warm Brown
  - 黒背景を最小限に削減
- Worksを人生導線として見やすい構成へ変更
  - スマホでは横方向に流れるコンパクトカード
  - デスクトップでは3列グリッド
  - 表示順は Wedding → Maternity → Newborn → お宮参り → 七五三 → Family
- Works冒頭文を指定文へ差し替え
- PriceをSignature優先へ変更
  - Wedding Signature → Essential → Casual
  - 価格比較ではなく体験価値が先に伝わる構成へ調整
- Flowを復活
  - 相談 → 日程調整 → 撮影 → 編集 → 納品
- SNS導線を追加
  - Instagram
  - note
  - LINE
  - Final CTA前とFooterに配置
- アニメーションを控えめに追加
  - fade-up
  - hover
  - prefers-reduced-motion 対応

## 使用したロゴ

- 元データ: `/Users/taipon/Library/Mobile Documents/com~apple~CloudDocs/02_デザイン・グラフィック/Logos/ASAKA/Logos.zip`
- ヘッダー: `public/images/brand/asaka-photography-logo-horizontal.png`
- favicon: `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`

## スクリーンショット

- `docs/screenshots/lp-v2-mobile-hero.png`
- `docs/screenshots/lp-v2-mobile-works.png`
- `docs/screenshots/lp-v2-mobile-price.png`
- `docs/screenshots/lp-v2-mobile-flow.png`
- `docs/screenshots/lp-v2-desktop-hero.png`
- `docs/screenshots/lp-v2-desktop-works.png`
- `docs/screenshots/lp-v2-desktop-price.png`

## 検証

- `npm run check`: 成功
- `npm run build`: 成功

## 注意

最終の小調整後、ブラウザ側の安全ポリシーにより `localhost` での再スクリーンショット取得はブロックされました。
コード上の最終確認は `npm run check` と `npm run build` で完了しています。
