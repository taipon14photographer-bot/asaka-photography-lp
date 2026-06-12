# LP v1 公開前最終調整レポート

作成日: 2026-06-11

## 反映内容

- Wedding料金を正式価格へ更新
  - Casual: 平日 34,800円 / 土日祝 39,800円
  - Essential: 平日 49,800円 / 土日祝 59,800円
  - Wedding Signature: 平日 79,800円 / 土日祝 89,800円
- Wedding Signatureの内容を正式版へ更新
  - 時間を気にせず撮影（目安4〜5時間）
  - 2〜3ロケーション
  - 衣装チェンジ対応
  - 夕景・マジックアワー対応
  - 事前打ち合わせ
  - ロケーション提案
  - セレクト・編集後全データ納品
  - A3プリント1枚
- 「150枚以上」表記を削除
- About写真を、森の中で笑顔でカメラを構える朝香大樹の写真へ差し替え
- About写真は円形トリミングではなく、通常の角丸写真として表示
- ASAKA Photography正式ロゴからfavicon一式を生成
  - favicon.ico
  - favicon-16x16.png
  - favicon-32x32.png
  - apple-touch-icon.png
- `lp-final-copy.md` のWedding料金表記を実装内容に合わせて更新

## スクリーンショット

- `docs/screenshots/lp-v1-final-mobile-hero.png`
- `docs/screenshots/lp-v1-final-mobile-about.png`
- `docs/screenshots/lp-v1-final-mobile-price.png`
- `docs/screenshots/lp-v1-final-desktop-about.png`
- `docs/screenshots/lp-v1-final-desktop-price.png`

## 確認結果

- Heroは `susuki-sunset` のまま
- Worksは人生導線順のまま
  - Wedding
  - Maternity
  - Newborn
  - お宮参り
  - 七五三
  - Family
- Final CTAはLINE相談のみ
- About写真のaltは「森の中で笑顔でカメラを構える朝香大樹」
- About写真の円形トリミングなし
- 旧表記の「150枚」「108,000円」「動画素材込み」は残存なし
- faviconは16x16、32x32、Apple Touch Iconを生成済み

## 検証

- `npm run check`: 0 errors / 0 warnings / 0 hints
- `npm run build`: 成功
