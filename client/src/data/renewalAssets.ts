/**
 * 集客サイト用アセット定義
 * デザイン方針: Immersive Celestial Festival。共有素材を主役にし、光の体験を写真で伝える。
 */

export const RENEWAL_ASSETS = {
  logo: "/manus-storage/illuminage-logo_8b4466de.png",
  logoDark: "/manus-storage/illuminage-logo-dark_aa97592c.png",
  logoTransparentCropped: "/manus-storage/hita-illuminage-logo-transparent-cropped_7db5d1fa.png",
  logoHiRes: "/images/hita-illuminage-logo-2026-light.webp",
  officialLogo: "/manus-storage/hita-illuminage-official-logo_84eb9588.png",
  officialLogoTransparent: "/manus-storage/hita-illuminage-logo-transparent-v2_a3751dc7.png",
  officialLogoTransparentWhite: "/manus-storage/hita-illuminage-logo-transparent-white_38acbf55.png",
  officialKeyvisual: "/manus-storage/hita-illuminage-official-keyvisual-2026_53d9ca24.png",
  mainNight: "/manus-storage/main-night_6d59f88e.webp",
  eventKeyvisual: "/manus-storage/event-keyvisual_65a32828.webp",
  aerial: "/manus-storage/aerial_352af9e6.webp",
  ebisuPond: "/manus-storage/ebisu-pond_79cd3f2f.webp",
  spacePlaza: "/manus-storage/space-plaza_a8a70cbb.webp",
  corridorPlaza: "/manus-storage/corridor-plaza_2bfe55ac.webp",
  corridorTunnel: "/manus-storage/corridor-tunnel_c7a9ff1f.webp",
  kidsCircle: "/manus-storage/kids-circle_986ead69.webp",
  kidsTwo: "/manus-storage/kids-2_9d2721d9.webp",
  ledSeesaw: "/manus-storage/led-seesaw_aaa32ba5.webp",
  parkRestaurant: "/manus-storage/park-restaurant_ca12ce25.webp",
  restaurantFront: "/manus-storage/restaurant-front_a184504d.webp",
  parking: "/manus-storage/parking_d12ee043.webp",
} as const;

export const TICKET_SELLERS: ReadonlyArray<{ readonly name: string; readonly href?: string }> = [
  { name: "アソビュー" },
  { name: "楽天", href: "https://experiences.travel.rakuten.co.jp/experiences/63163?scid=we_txp_illuminagegroup-hita-officialsite" },
  { name: "トリップドットコム" },
  { name: "KKDAY", href: "https://www.kkday.com/ja/product/771496?srsltid=AU7gw4WL8bk6Qk2FntKdj_-wJS6DALLI3hXYYCdD047AJxpv6Lhg-yn7" },
  { name: "セブンドリームドットコム" },
  { name: "ぴあ" },
  { name: "JTB" },
  { name: "ローソンチケット" },
  { name: "じゃらん" },
  { name: "チケットペイ" },
  { name: "Livepocket" },
  { name: "イープラス" },
];
