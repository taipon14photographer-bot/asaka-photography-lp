# LP実装前準備レポート

ステータス: 実装前準備  
作成日: 2026-06-11  

このレポートは、LP本体の実装に入る前に、確定コピー・Works構成・画像パス・alt文・チェック項目を整理するためのものです。  
まだ `src/pages/index.astro` へのLP本文実装は行いません。

## 1. 実装データ反映の準備

正とするコピー:

- `docs/lp-final-copy.md`

実装時のデータ化方針:

- Hero / Philosophy / About / Works / Price / Wedding Plans / Signature Plan / FAQ / Final CTA を同じデータファイルに集約する
- 想定ファイルは `src/data/siteContent.ts`
- Final CTAは補助ボタンを置かず、LINE相談のみ
- CTA文言は確定コピーに従う

実装データの想定構造:

```ts
export const siteContent = {
  hero: {
    title: ["何年後かに見返したとき、", "今日の幸せまで思い出せるように。"],
    brandName: "ASAKA Photography",
    slogan: ["人生の中にある幸せな瞬間を、", "綺麗に残せる人になりたい。"],
    body: [...],
    note: [...],
    cta: { label: "LINEで相談する", href: "" },
  },
  works: {
    title: "人生の節目を、続いていく時間として残す。",
    body: [...],
    cards: [...],
  },
  finalCta: {
    title: "まだ決まっていない時間から、一緒に考えます。",
    body: [...],
    note: "予約するかどうかは、相談してから決めても大丈夫です。",
    cta: { label: "LINEで相談する", href: "" },
  },
};
```

未入力にしておく値:

- LINE URL
- Instagram URLを使う場合の扱い
- Wedding Casual / Essentialの正式価格
- Wedding以外の正式価格と表示範囲

## 2. Worksカード構成の実装準備

正とするWorks設計:

- `docs/works-photo-selection-zerobase.md`
- `docs/works-lifecycle-redesign.md`

Worksの実装方針:

- ジャンル紹介ではなく、人生導線として実装する
- 表示順は `Wedding -> Maternity -> Newborn -> お宮参り -> 七五三 -> Family`
- カード内に強い予約CTAは置かない
- Works内CTAを置く場合は控えめな `写真を見る`
- 最終的な相談導線はFinal CTAのLINE相談へ集約する

実装用カードデータ案:

| id | label | title | source image |
| --- | --- | --- | --- |
| `wedding` | Wedding | ふたりで始まる、家族の時間 | `2023.11.07 窪井さまwedding-91.jpg` |
| `maternity` | Maternity | まだ会えない子と過ごす時間 | `2023.12.03 nakano family-175.jpg` |
| `newborn` | Newborn | 家族になったばかりのまなざし | `2024.02.09　稟々-66.jpg` |
| `omiyamairi` | お宮参り | はじめて、家族で祈る日 | `2021-09-19-永梛お宮参り-148.jpg` |
| `shichigosan` | 七五三 | 少し大きくなった今を、家族で見つめる日 | `yuma-sena 753-203.jpg` |
| `family` | Family | 何気ない日にも、残したい幸せがある | `2023.11.09 day camp-75.jpg` |

## 3. 選定写真の実ファイル存在確認

### Hero

Heroは `susuki-sunset` のまま固定します。

現プロジェクト内の状態:

- `public/images/hero/` には未配置
- `src/assets/photos/hero/` には未配置

参照元で存在確認済み:

| 用途 | 参照元 | 状態 | サイズ |
| --- | --- | --- | --- |
| desktop | `/Users/taipon/Library/Mobile Documents/com~apple~CloudDocs/01_写真・撮影/Codex関連/ASAKA_Photography_LP/public/images/hero/susuki-sunset-desktop.webp` | 存在確認済み | 7200x4800 |
| mobile | `/Users/taipon/Library/Mobile Documents/com~apple~CloudDocs/01_写真・撮影/Codex関連/ASAKA_Photography_LP/public/images/hero/susuki-sunset-mobile.webp` | 存在確認済み | 7200x4800 |

実装前に行うこと:

- 参照元を直接使わず、このプロジェクト内へコピーする
- 推奨配置は `src/assets/photos/hero/`
- 実装時のトリミング確認後、必要なら横長・縦長を別書き出しする

### Works

以下6枚は、すべて現プロジェクト内で存在確認済みです。

| genre | current path | 状態 | サイズ |
| --- | --- | --- | --- |
| Wedding | `src/assets/photos/works-candidates/01_wedding/2023.11.07 窪井さまwedding-91.jpg` | 存在確認済み | 7200x4800 |
| Maternity | `src/assets/photos/works-candidates/02_maternity/2023.12.03 nakano family-175.jpg` | 存在確認済み | 7200x4800 |
| Newborn | `src/assets/photos/works-candidates/03_newborn/2024.02.09　稟々-66.jpg` | 存在確認済み | 8640x5760 |
| お宮参り | `src/assets/photos/works-candidates/04_omiyamairi/2021-09-19-永梛お宮参り-148.jpg` | 存在確認済み | 6000x4000 |
| 七五三 | `src/assets/photos/works-candidates/05_shichigosan/yuma-sena 753-203.jpg` | 存在確認済み | 7200x4800 |
| Family | `src/assets/photos/works-candidates/06_family/2023.11.09 day camp-75.jpg` | 存在確認済み | 6453x4302 |

## 4. 画像パス整理

実装時は候補フォルダを直接参照せず、採用写真だけを実装用フォルダへ複製・変換します。

推奨配置:

```text
src/assets/photos/
  hero/
    susuki-sunset-desktop.webp
    susuki-sunset-mobile.webp
  works/
    wedding-lifecycle-start.webp
    maternity-before-birth.webp
    newborn-family-gaze.webp
    omiyamairi-first-prayer.webp
    shichigosan-siblings-growth.webp
    family-day-camp.webp
```

理由:

- 日本語・スペース入りファイル名を実装コードから切り離せる
- 採用写真と候補写真を混同しない
- 差し替え時にコード側の意味が保たれる
- Astroの画像最適化対象として扱いやすい

実装時の想定import:

```ts
import heroDesktop from "../assets/photos/hero/susuki-sunset-desktop.webp";
import heroMobile from "../assets/photos/hero/susuki-sunset-mobile.webp";
import worksWedding from "../assets/photos/works/wedding-lifecycle-start.webp";
import worksMaternity from "../assets/photos/works/maternity-before-birth.webp";
import worksNewborn from "../assets/photos/works/newborn-family-gaze.webp";
import worksOmiyamairi from "../assets/photos/works/omiyamairi-first-prayer.webp";
import worksShichigosan from "../assets/photos/works/shichigosan-siblings-growth.webp";
import worksFamily from "../assets/photos/works/family-day-camp.webp";
```

## 5. alt文

alt文は、写真の説明ではなく、LP内で伝える意味が分かる文にします。  
ただし詩的にしすぎず、画像が表示されない場合にも内容が伝わる長さに留めます。

| 用途 | alt文 |
| --- | --- |
| Hero desktop/mobile | 夕日のすすき野で寄り添う新郎新婦の後ろ姿 |
| Wedding | すすき野で見つめ合いながら寄り添う新郎新婦 |
| Maternity | お腹の赤ちゃんに家族で寄り添うマタニティの時間 |
| Newborn | 生まれたばかりの赤ちゃんを両親が見つめる家族の時間 |
| お宮参り | 神社で赤ちゃんを連れて歩くお宮参りの家族 |
| 七五三 | 七五三の着物姿できょうだいが笑い合う時間 |
| Family | キャンプ場で子どもを囲んで笑い合う家族 |

## 6. 実装前チェックリスト

### コピー

- [x] `docs/lp-final-copy.md` を正とする
- [x] Hero見出しは「何年後かに見返したとき、今日の幸せまで思い出せるように。」
- [x] `ASAKA Photography` とブランドスローガンをHero直下に置く
- [x] Final CTAはLINE相談のみ
- [ ] LINE URLを確定する
- [ ] Wedding Casual / Essentialの正式価格と内容を確定する
- [ ] Wedding以外の価格表示範囲を確定する

### 写真

- [x] Heroは `susuki-sunset` 固定
- [x] Hero参照元ファイルの存在確認
- [ ] Hero画像を現プロジェクト内へコピーする
- [x] Works採用候補6枚の存在確認
- [ ] Works採用候補6枚を実装用フォルダへ複製・WebP化する
- [ ] 採用写真6枚の掲載許可を確認する
- [ ] スマホ表示で顔・手元・関係性が切れないトリミングを確認する

### Works

- [x] Worksはジャンル紹介ではなく人生導線として実装する
- [x] 表示順は `Wedding -> Maternity -> Newborn -> お宮参り -> 七五三 -> Family`
- [x] 各カードのtitle / description / image / altの準備完了
- [ ] Worksカード内の次の節目へつながる一文を実装データへ入れるか最終判断する
- [ ] Works内CTA `写真を見る` の遷移先を決める

### 実装

- [ ] `src/data/siteContent.ts` を作成する
- [ ] `src/assets/photos/hero/` を作成する
- [ ] `src/assets/photos/works/` を作成する
- [ ] 画像を実装用ファイル名に整理する
- [ ] `src/pages/index.astro` へ実装する
- [ ] スマホ幅でHero / Works / Final CTAを確認する
- [ ] `npm run check` を実行する
- [ ] `npm run build` を実行する

## 7. 現時点の結論

- Works 6ジャンルの画像パスは実装可能
- Heroは `susuki-sunset` 固定で問題なし。ただし現プロジェクト内へのコピーが必要
- Final CTAはLINE相談のみで進める
- Worksはジャンル紹介ではなく、人生導線として実装する
- 実装開始前に必要なのは、画像の実装用整理、掲載許可、LINE URL、価格表示範囲の確定
