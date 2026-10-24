import family from "../assets/photos/works-gallery/newborn/01-riri-66.jpg";
import lifestyleIntro from "../assets/photos/newborn-preview/lifestyle-family-together.jpg";
import bath from "../assets/photos/works-gallery/newborn/02-riri-160.jpg";
import siblings from "../assets/photos/works-gallery/newborn/04-arii-213.jpg";
import parents from "../assets/photos/works-gallery/newborn/05-ao-birth-319.jpg";
import shoulder from "../assets/photos/works-gallery/newborn/06-riri-55.jpg";
import feeding from "../assets/photos/works-gallery/newborn/07-riri-36.jpg";
import basket from "../assets/photos/newborn-preview/art-basket.jpg";
import wrapped from "../assets/photos/newborn-preview/art-wrapped.jpg";
import cushion from "../assets/photos/newborn-preview/art-cushion.jpg";
import embrace from "../assets/photos/newborn-preview/story-embrace.jpg";
import { otherPlanCategories } from "./siteContent";

export const photos = {
  family: { src: family, alt: "赤ちゃんを抱き、顔を寄せて見つめるご両親" },
  lifestyleIntro: { src: lifestyleIntro, alt: "横になった赤ちゃんを、そばで見つめるご両親" },
  bath: { src: bath, alt: "窓辺で赤ちゃんを沐浴させる家族の時間" },
  siblings: { src: siblings, alt: "並んで寝転ぶ赤ちゃんと上のお子さま" },
  parents: { src: parents, alt: "赤ちゃんを腕に抱き、笑顔を交わすご両親" },
  shoulder: { src: shoulder, alt: "家族の肩に抱かれ、顔をのぞかせる赤ちゃん" },
  feeding: { src: feeding, alt: "家族に抱かれ、哺乳びんでミルクを飲む赤ちゃん" },
  basket: { src: basket, alt: "灰色のおくるみに包まれ、カゴの中で眠る赤ちゃん" },
  wrapped: { src: wrapped, alt: "落ち着いた無地の背景で、淡いピンクのおくるみに包まれた赤ちゃん" },
  cushion: { src: cushion, alt: "白い布の上で、頬を前腕に添えて眠る赤ちゃんの作品写真" },
  embrace: { src: embrace, alt: "おくるみの赤ちゃんを支え、そっと額を寄せるお母さん" },
};
const currentNewbornPlans = otherPlanCategories.find(c => c.key === "newborn")!.plans;
const currentLifestyle = currentNewbornPlans.find(p => p.key === "lifestyle-newborn")!;
const currentArt = currentNewbornPlans.find(p => p.key === "art-newborn")!;
const currentStory = currentNewbornPlans.find(p => p.key === "newborn-story")!;
const summary = (plan: typeof currentLifestyle) => "summary" in plan && typeof plan.summary === "string" ? plan.summary : "";
export const plans = [
  { key: "lifestyle_newborn", name: currentLifestyle.name, label: "家族の、いつもの時間", price: currentLifestyle.price.replace("円", ""), duration: currentLifestyle.duration, delivery: currentLifestyle.delivery, intro: "抱っこや家族のふれあいを中心に。自然体の表情と、ご自宅の空気を残します。", detail: summary(currentLifestyle), href: "/newborn/lifestyle/", image: photos.lifestyleIntro },
  { key: "art_newborn", name: currentArt.name, label: "生まれたての姿を、一枚に", price: currentArt.price.replace("円", ""), duration: currentArt.duration, delivery: currentArt.delivery, intro: "おくるみ・カゴ・クッションなどで、生まれたての姿を作品に。家族・兄弟写真も含む撮影です。", detail: summary(currentArt), href: "/newborn/art/", image: photos.basket },
  { key: "newborn_story", name: currentStory.name, label: "作品も、暮らしの場面も", price: currentStory.price.replace("円", ""), duration: currentStory.duration, delivery: currentStory.delivery, intro: "Art撮影に、抱っこや日常のふれあいを重ねて。", detail: summary(currentStory), href: "/newborn/#story", image: photos.embrace },
];
export const commonFaq = [
  { q: "家族やきょうだいも一緒に撮れますか？", a: "はい。Lifestyleに加え、Art・Storyにも家族・兄弟姉妹写真を含みます。残したい組み合わせや場面を事前に伺い、赤ちゃんとご家族の様子に合わせて進めます。" },
  { q: "撮影する部屋は、どう準備すればよいですか？", a: "撮影場所や光の入り方は、事前に相談できます。ご希望の撮影内容を伺いながら、撮影しやすい場所や必要な準備を一緒に確認します。" },
  { q: "出産前で、プランが決まっていなくても相談できますか？", a: "はい。出産予定日とお住まいの地域、気になっている写真をお知らせください。撮影日やプランが決まっていなくても、まずはご希望を伺います。" },
  { q: "泣いてしまったり、眠らなかったりしたら？", a: "授乳や抱っこ、休憩を挟み、赤ちゃんの状態を最優先に進めます。無理なポーズは行わず、ご家族と相談して撮影内容を調整します。当日の状態によっては、ご家族と相談のうえ日程変更もご提案します。特定のカットはお約束できません。" },
  { q: "交通費や駐車場代は別にかかりますか？", a: "遠方への出張費は、場所に応じて事前にご案内します。撮影場所で発生する駐車場代などは別途ご負担をお願いします。必要な費用は予約前にお伝えします。" },
  { q: "写真の掲載は必須ですか？", a: "必須ではありません。LPやInstagramには、事前に許可をいただいたお写真のみ使用します。掲載をご希望でない場合も、遠慮なくお知らせください。" },
];
