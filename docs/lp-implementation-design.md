# LP実装設計

ステータス: 実装前設計

このドキュメントは、LP実装に入る前の構成設計です。コピーは `docs/lp-final-copy.md` を正とし、写真選定は `docs/photo-selection-plan.md` に従います。

実装直前のコピー・画像パス・alt・チェックリストは `docs/lp-implementation-prep-report.md` を優先します。

## 実装目的

目的は「綺麗なLP」ではなく「LINE相談につながるLP」です。

実装では以下を優先します。

1. スマホで読みやすい
2. HeroからLINE相談まで迷わない
3. 写真が主役だが、文字とCTAを邪魔しない
4. 価格とSignatureの価値が分かる
5. ASAKA Photographyの思想が一貫している
6. 後から写真・価格・CTAを差し替えやすい

## ページ構成

1. Hero
2. Philosophy
3. About
4. Works
5. Price
6. Wedding Plans
7. Signature Plan
8. FAQ
9. Final CTA

## CTA設計

第一導線:

- LINEで相談する

補助導線:

- 写真を見る

ただし、Final CTAでは補助ボタンを置かず、LINE相談に集中させます。

配置:

- Hero: LINEで相談する
- Works: 写真を見る
- Price: プランを相談する
- Signature: Signatureについて相談する
- Final CTA: LINEで相談するのみ

## データ設計

LP本文・FAQ・プランは、将来的に `src/data/siteContent.ts` のようなデータファイルへ集約します。

初回実装では、以下の単位で分けると保守しやすいです。

```text
src/data/
  siteContent.ts

src/components/
  Hero.astro
  Philosophy.astro
  About.astro
  Works.astro
  Price.astro
  SignaturePlan.astro
  FAQ.astro
  FinalCTA.astro
```

MVP実装では、コンポーネント分割をしすぎず、まず `src/pages/index.astro` で完成させてもよいです。  
ただし、コピーや写真の差し替えが多い部分はデータ化を優先します。

## 写真実装方針

Hero:

- スマホ縦表示を最優先
- 写真に文字を載せる場合は、必ずコントラストを確認
- ロケーションより人と時間が主役の写真を使う

About:

- 朝香大樹本人の信頼につながる写真
- 撮影中の距離感や声かけが伝わる写真を優先

Works:

- `docs/works-photo-selection-zerobase.md` と `docs/works-lifecycle-redesign.md` を正とする
- Wedding / Maternity / Newborn / お宮参り / 七五三 / Family の順
- ジャンル紹介ではなく、人生導線として見せる
- 各カードに「次の節目へつながる一文」を入れる
- 写真は、綺麗さやInstagram映えより、関係性・家族の物語・次ジャンルへのつながりを優先する

Signature:

- 景色訴求に寄せすぎない
- ふたりの時間、会話、余白、一日の流れが伝わる写真を使う

## レイアウト方針

スマホ:

- 1カラム
- 1セクションの文字量を抑える
- CTAは親指で押しやすいサイズ
- 価格・含まれるものは箇条書きで読みやすくする
- FAQはアコーディオンまたは縦に読みやすい構造

PC:

- 写真とテキストの余白を広めに取る
- 過度なカードUIを避ける
- Heroは写真とコピーの両方が第一視界で伝わる構成

## デザイン方針

トーン:

- soft premium
- natural light
- calm whitespace
- warm minimal
- quiet trust

避ける:

- 強い黒背景の多用
- 派手なグラデーション
- セール感のある価格表
- 写真より装飾が目立つUI
- カードだらけの構成

## 未決定事項

実装前に確認すること:

- LINE URLの最終確認
- Instagram URLの扱い
- Wedding Casual / Essential の正式価格と内容
- Wedding以外の正式価格と表示範囲
- Hero / About / Works 写真の掲載許可
- OGP画像
- ロゴ掲載有無
- 予約確定条件、支払い、キャンセルポリシーをLPに出すか

## 実装開始条件

次の条件がそろったら、LP実装に入れます。

- `docs/lp-final-copy.md` のコピー固定
- `docs/photo-selection-plan.md` に沿った写真候補の確定
- 掲載許可の確認
- LINE URLの確定
- 価格表示範囲の確定
