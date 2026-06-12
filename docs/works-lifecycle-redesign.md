# Worksセクション再設計

ステータス: 実装前設計

コピー設計は確定済み。  
この資料では、Worksをジャンル紹介ではなく、ASAKA Photographyが大切にしている「人生導線」を伝える構成へ再設計します。

Heroは `hero/susuki-sunset-desktop.webp` / `hero/susuki-sunset-mobile.webp` 前提で進めます。

最新のWorks写真選定は `docs/works-photo-selection-zerobase.md` を優先します。  
前回選定はリセットし、追加候補を含めてゼロベースで再評価済みです。

## 0. 最新採用候補

1. Wedding: `src/assets/photos/works-candidates/01_wedding/2023.11.07 窪井さまwedding-91.jpg`
2. Maternity: `src/assets/photos/works-candidates/02_maternity/2023.12.03 nakano family-175.jpg`
3. Newborn: `src/assets/photos/works-candidates/03_newborn/2024.02.09　稟々-66.jpg`
4. お宮参り: `src/assets/photos/works-candidates/04_omiyamairi/2021-09-19-永梛お宮参り-148.jpg`
5. 七五三: `src/assets/photos/works-candidates/05_shichigosan/yuma-sena 753-203.jpg`
6. Family: `src/assets/photos/works-candidates/06_family/2023.11.09 day camp-75.jpg`

## 1. Works全体構成

### セクション役割

Worksは「撮影ジャンル一覧」ではありません。

LP上の役割は、訪問者に次のことを感じてもらうことです。

- 結婚から家族写真まで、人生の節目がつながっている
- ASAKA Photographyは一度きりの撮影だけでなく、長く伴走できる
- 写真はジャンルごとの商品ではなく、家族の物語を残すもの
- 今の撮影相談が、将来の撮影にも自然につながる

### セクション見出し

人生の節目を、続いていく時間として残す。

### セクション説明

結婚の日のふたりから、家族が増えていく時間へ。  
ASAKA Photographyでは、撮影ジャンルを別々のものとしてではなく、人生の中にある幸せな瞬間のつながりとして見ています。

一度きりの写真ではなく、何年後かに見返したとき、家族の物語が少しずつ続いていることを思い出せるように。

### 表示順

1. Wedding
2. Maternity
3. Newborn
4. お宮参り
5. 七五三
6. Family

### UI方針

- 横並びのジャンルカードではなく、縦に流れる人生導線として見せる
- スマホでは1カードずつ、写真 -> タイトル -> 説明の順で読ませる
- 各カードに「次の節目へつながる一文」を入れる
- Works内では強いCTAを置かず、最後に控えめな `写真を見る` または次セクションへの流れを作る

## 2. 各カードタイトル・説明文・採用写真

### 01 Wedding

カードタイトル:

ふたりで始まる日

説明文:

結婚の前に残すのは、きれいな姿だけではありません。  
少し照れながら並んだこと、顔を見合わせて笑ったこと、これから一緒に歩いていく前のふたりの空気。  
家族の物語は、ここから少しずつ始まっていきます。

次へつながる一文:

ふたりの時間は、やがて新しい家族の時間へつながっていきます。

採用写真:

`src/assets/photos/works-candidates/01_wedding/2023.11.07 窪井さまwedding-91.jpg`

採用理由:

- ふたりの視線と表情に関係性がある
- ロケーションではなく、ふたりの空気が主役
- Weddingを「人生導線の始まり」として見せやすい

補助候補:

- `/images/works/wedding/wedding-05.webp`: 手元の記憶
- `/images/works/wedding/wedding-04.webp`: Signature / 一日の流れ
- `/images/works/wedding/wedding-08.webp`: 静かな余韻

追加候補フォルダ:

`src/assets/photos/works-candidates/01_wedding/`

### 02 Maternity

カードタイトル:

家族になる前の時間

説明文:

お腹の中にいる小さな命と、今を過ごす家族の時間。  
体調や気持ちに無理のない形で、これから家族になる前の静かな幸福を残します。

次へつながる一文:

まだ会えない存在が、もう家族の時間の中にいることを残します。

採用写真:

`src/assets/photos/works-candidates/02_maternity/2023.12.03 nakano family-175.jpg`

採用理由:

- お腹と子どもの手元があり、家族になる前後の関係性が見える
- マタニティを身体の記録だけでなく、家族の物語として見せられる
- 次のNewbornへ自然につながる

補助候補:

- `/images/works/maternity/maternity-04.webp`: パートナーとの関係性
- `/images/works/maternity/maternity-02.webp`: 上の子を含む家族の空気
- `/images/works/maternity/maternity-05.webp`: 静かな記憶性

追加候補フォルダ:

`src/assets/photos/works-candidates/02_maternity/`

### 03 Newborn

カードタイトル:

家族になったばかりの空気

説明文:

生まれたばかりの小ささ。  
抱っこする手のぎこちなさ。  
赤ちゃんを見つめる家族のまなざし。

ニューボーンは、赤ちゃんだけではなく、家族になったばかりの時間を残す撮影です。

次へつながる一文:

小さな命を迎えた時間は、はじめてのお参りへ続いていきます。

採用写真:

`src/assets/photos/works-candidates/03_newborn/2024.02.09　稟々-66.jpg`

採用理由:

- 赤ちゃん単体ではなく、家族で見守る空気がある
- 無理な演出ではなく、安心感が伝わる
- Newbornからお宮参りへつながる「家族になったばかり」の文脈が作れる

補助候補:

- `/images/works/newborn/newborn-02.webp`: 小ささと家族の手
- `/images/works/newborn/newborn-01.webp`: 室内での家族の安心感
- `/images/works/newborn/newborn-03.webp`: 赤ちゃんの穏やかな記録

追加候補フォルダ:

`src/assets/photos/works-candidates/03_newborn/`

### 04 お宮参り

カードタイトル:

はじめて、家族で祈る日

説明文:

赤ちゃんが生まれて、家族で迎えるはじめての節目。  
抱っこする人、見守る人、少し緊張した空気まで含めて、その日の家族のかたちを残します。

次へつながる一文:

守られていた小さな子が、少しずつ自分の表情を見せる年齢へ進んでいきます。

採用写真:

`src/assets/photos/works-candidates/04_omiyamairi/2021-09-19-永梛お宮参り-148.jpg`

採用理由:

- 家族で神社を歩く空気があり、はじめての節目が伝わる
- 儀式感と家族の温度が両立している
- Newbornから七五三へつながる中間地点として機能する

追加候補フォルダ:

`src/assets/photos/works-candidates/04_omiyamairi/`

### 05 七五三

カードタイトル:

少し背伸びした、今の姿

説明文:

着物を着て、少し緊張して、でもふとした瞬間にはいつもの表情に戻る。  
七五三は、子どもが少し大きくなったことを、家族みんなで感じる日です。

次へつながる一文:

特別な日を越えて、また何気ない家族の日々へ戻っていきます。

採用写真:

`src/assets/photos/works-candidates/05_shichigosan/yuma-sena 753-203.jpg`

採用理由:

- 子どもの表情が強く、七五三の年齢感が伝わる
- 硬い記念写真ではなく、本人らしさがある
- スマホでも主役が明確

補助候補:

- `/images/works/family/family-04.webp`: 兄弟姉妹の七五三感
- 追加候補では、親子や兄弟姉妹との関係性が分かる写真を優先

追加候補フォルダ:

`src/assets/photos/works-candidates/05_shichigosan/`

### 06 Family

カードタイトル:

何気ない家族の日

説明文:

走る、甘える、抱っこを求める、ふざける。  
きれいに並んだ写真だけでは残らない、今の家族らしさがあります。

特別な節目だけでなく、いつもの時間にも、未来で見返したくなる幸せがあります。

次へつながる一文:

家族の物語は、これからも何度でも続いていきます。

採用写真:

`src/assets/photos/works-candidates/06_family/2023.11.09 day camp-75.jpg`

採用理由:

- 親子の距離感が一瞬で伝わる
- 子どものペースと家族の関係性が見える
- ASAKA Photographyの「家族の今を残す」思想に最も近い

補助候補:

- `/images/works/family/family-01.webp`: 家族全員の節目感
- `/images/works/family/family-06.webp`: 屋外で家族のまとまり
- `/images/works/family/family-02.webp`: 家族の自然な集合

追加候補フォルダ:

`src/assets/photos/works-candidates/06_family/`

## 3. WeddingからFamilyへつながる理由

ASAKA PhotographyのWorksは、撮影メニューを並べる場所ではありません。

Weddingで見せるのは、ふたりが家族になる前の時間。  
Maternityで見せるのは、まだ会えない命を含めた家族の時間。  
Newbornで見せるのは、家族になったばかりの空気。  
お宮参りで見せるのは、家族で迎えるはじめての節目。  
七五三で見せるのは、子どもが少し大きくなったことを家族で感じる日。  
Familyで見せるのは、特別ではない日にも残したい幸せ。

この流れにすることで、LP訪問者は「いま頼む撮影」だけでなく、「この先も節目ごとにお願いできそう」と感じやすくなります。

## 4. 成約率への期待効果

### 関係性が見える

写真をジャンル名で消費させず、ふたり・親子・家族の関係性として見せられるため、感情移入が強くなります。

### 家族の物語が見える

WeddingからFamilyまでの流れにより、ASAKA Photographyが「人生の中にある幸せな瞬間」を長く残すブランドだと伝わります。

### 次の撮影ジャンルへ自然につながる

Weddingを見た人がMaternityを想像し、Newbornを見た人がお宮参りやFamilyを想像できる導線になります。

### 将来のリピート導線になる

単発予約だけでなく、人生の節目ごとに思い出してもらえる設計になります。  
これは短期の問い合わせだけでなく、長期的なブランド資産につながります。

## 5. 追加候補写真フォルダ

追加候補写真は、以下のフォルダへ入れてください。

```text
src/assets/photos/works-candidates/
  01_wedding/
  02_maternity/
  03_newborn/
  04_omiyamairi/
  05_shichigosan/
  06_family/
  _review_contact_sheets/
```

各フォルダには `README.md` を置き、選定基準を記載しています。

追加後の評価手順:

1. 各フォルダに候補写真を入れる
2. 掲載許可が不明な写真はファイル名または別メモで `要確認` と分かるようにする
3. 接触シートを `_review_contact_sheets/` に作る
4. 関係性 / 家族の物語 / 次ジャンルへのつながり / リピート導線 の4軸で再評価する
5. 採用写真を実装用フォルダへ移す

## 6. 現時点の未解決事項

- 採用候補6枚の掲載許可の最終確認が必要
- 採用候補6枚を実装用にリサイズ・WebP化する必要がある
- About用の朝香大樹本人・撮影中写真は別途必要
