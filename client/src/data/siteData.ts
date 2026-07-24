export const EVENT_INFO = {
  name: "日田イルミナージュ2026",
  period: "2026年10月31日（土）〜2027年1月31日（日）",
  hours: "17:00〜22:00（最終入場 21:30）",
  venue: "サッポロビール日田工場（大分県日田市）",
  venueShort: "サッポロビール日田工場",
  mainCopy: "光を見に来る。日田に泊まり、食べ、巡り、また訪れる。",
  ticketUrl: "#ticket",
};

export const TODAY_STATUS = {
  date: "2026年11月XX日（土）",
  status: "通常開催" as "通常開催" | "内容を一部変更して開催" | "開催時間を変更" | "中止",
  startTime: "17:00",
  endTime: "22:00",
  lastEntry: "21:30",
  ticketStatus: "販売中",
  parkingStatus: "空車" as "空車" | "混雑" | "満車" | "情報確認中",
  shuttleStatus: "通常運行" as "通常運行" | "遅延" | "運休" | "本日は運行なし",
  weatherNote: "本日は晴天の予報です。防寒対策をしてお越しください。",
  trafficNote: "",
  updatedAt: "2026年11月XX日 16:00",
};

export const RESTAURANTS = [
  { id: "r1", name: "日田やきそば 本家", genre: "和食・麺類", area: "日田駅周辺", description: "日田名物やきそばの老舗。甘辛い特製ソースと細麺が絶品。", hours: "11:00〜21:00", closed: "火曜日", phone: "0973-XX-XXXX", distance: "会場から徒歩10分", tags: ["ランチ", "ディナー"], image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80" },
  { id: "r2", name: "天領温泉 食事処", genre: "和食", area: "温泉街周辺", description: "温泉旅館直営の食事処。日田の食材を使った郷土料理が楽しめる。", hours: "11:30〜14:00 / 17:00〜21:00", closed: "水曜日", phone: "0973-XX-XXXX", distance: "会場から車で5分", tags: ["ランチ", "ディナー", "予約可能"], image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" },
  { id: "r3", name: "日田梨カフェ", genre: "カフェ", area: "会場周辺", description: "日田産梨を使ったスイーツが人気。イルミネーション鑑賞前後に立ち寄れる。", hours: "10:00〜20:00", closed: "月曜日", phone: "0973-XX-XXXX", distance: "会場から徒歩3分", tags: ["カフェ", "子ども連れ"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" },
  { id: "r4", name: "居酒屋 日田の灯", genre: "居酒屋", area: "日田駅周辺", description: "地元の食材と地酒が揃う居酒屋。イルミネーション後の一杯に最適。", hours: "17:00〜23:00", closed: "日曜日", phone: "0973-XX-XXXX", distance: "会場から徒歩15分", tags: ["ディナー", "予約可能"], image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" },
  { id: "r5", name: "天ぷら 日田屋", genre: "和食", area: "会場周辺", description: "旬の食材を使った天ぷらが自慢。家族連れにも人気の老舗。", hours: "11:00〜20:30", closed: "木曜日", phone: "0973-XX-XXXX", distance: "会場から徒歩5分", tags: ["ランチ", "ディナー", "子ども連れ"], image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80" },
  { id: "r6", name: "日田珈琲 光の町", genre: "カフェ", area: "日田駅周辺", description: "自家焙煎コーヒーと手作りケーキが楽しめる落ち着いた空間。", hours: "9:00〜19:00", closed: "火曜日", phone: "0973-XX-XXXX", distance: "会場から徒歩8分", tags: ["カフェ", "ランチ"], image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80" },
];

export const STAYS = [
  { id: "s1", name: "天領の宿 日田温泉", type: "温泉旅館", area: "温泉街", description: "日田温泉の老舗旅館。源泉かけ流しの温泉と旬の料理が自慢。", distance: "会場から車で10分", distanceTime: "車で約10分", hasOnsen: true, hasParking: true, hasShuttle: true, checkIn: "15:00", checkOut: "11:00", phone: "0973-XX-XXXX", bookingUrl: "#", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" },
  { id: "s2", name: "ホテル日田ステーション", type: "ホテル", area: "日田駅周辺", description: "日田駅から徒歩3分のビジネスホテル。観光の拠点として便利な立地。", distance: "会場から徒歩20分", distanceTime: "徒歩約20分", hasOnsen: false, hasParking: true, hasShuttle: false, checkIn: "15:00", checkOut: "10:00", phone: "0973-XX-XXXX", bookingUrl: "#", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { id: "s3", name: "日田の里 山荘", type: "旅館", area: "郊外", description: "自然に囲まれた静かな旅館。日田の山の幸を使った料理が評判。", distance: "会場から車で15分", distanceTime: "車で約15分", hasOnsen: true, hasParking: true, hasShuttle: true, checkIn: "14:00", checkOut: "11:00", phone: "0973-XX-XXXX", bookingUrl: "#", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" },
];

export const TOURISM_SPOTS = [
  { id: "t1", name: "豆田町 歴史的街並み", category: "歴史", description: "江戸時代の町並みが残る日田の中心地。白壁の商家が立ち並ぶ。", duration: "約1〜2時間", address: "大分県日田市豆田町", hours: "散策自由", fee: "無料", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
  { id: "t2", name: "日田温泉 天領の湯", category: "温泉", description: "日田を代表する温泉地。美肌の湯として知られる。", duration: "約1〜2時間", address: "大分県日田市天瀬町", hours: "10:00〜21:00", fee: "大人700円〜", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" },
  { id: "t3", name: "三隈川 水辺の散策", category: "自然", description: "日田市内を流れる三隈川沿いの遊歩道。イルミネーション会場にも隣接。", duration: "約30分〜1時間", address: "大分県日田市", hours: "散策自由", fee: "無料", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80" },
  { id: "t4", name: "日田祇園山鉾会館", category: "歴史", description: "国指定重要無形民俗文化財「日田祇園」の山鉾を展示。", duration: "約1時間", address: "大分県日田市豆田町", hours: "9:00〜17:00", fee: "大人300円", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80" },
];

export const FAQ_ITEMS = [
  { q: "開催期間はいつですか？", a: "2026年10月31日（土）から2027年1月31日（日）までの93日間を予定しています。" },
  { q: "チケットはどこで購入できますか？", a: "公式チケット販売サイト（外部）にてオンライン購入が可能です。当日券は会場入口でも販売予定ですが、混雑状況によっては販売を終了する場合があります。" },
  { q: "駐車場はありますか？", a: "会場周辺に複数の駐車場をご用意しています。開催期間中は混雑が予想されますので、公共交通機関やシャトルバスのご利用をおすすめします。" },
  { q: "シャトルバスはありますか？", a: "JR日田駅から会場まで無料シャトルバスを運行予定です。時刻表は開催前にお知らせします。" },
  { q: "雨天でも開催しますか？", a: "小雨程度であれば通常開催します。荒天の場合は中止または内容変更となる場合があります。当日の開催状況は「本日の開催情報」ページでご確認ください。" },
  { q: "子ども連れでも楽しめますか？", a: "はい、ご家族でお楽しみいただけるイベントです。ベビーカーでの入場も可能です。子ども向けのイベントも予定しています。" },
  { q: "ペットは入場できますか？", a: "ペットの入場については、開催時の規定に従います。詳細は開催前にお知らせします。" },
  { q: "所要時間はどのくらいですか？", a: "会場の規模によりますが、ゆっくり鑑賞する場合は1〜2時間程度を目安にしてください。" },
];

export const SPONSORS = [
  { id: "sp1", name: "株式会社〇〇", rank: "プラチナ", industry: "建設・不動産" },
  { id: "sp2", name: "△△商事株式会社", rank: "ゴールド", industry: "商社・流通" },
  { id: "sp3", name: "□□電機", rank: "ゴールド", industry: "製造業" },
  { id: "sp4", name: "◇◇観光", rank: "シルバー", industry: "観光・旅行" },
  { id: "sp5", name: "〇〇食品", rank: "シルバー", industry: "食品・飲料" },
  { id: "sp6", name: "△△銀行", rank: "シルバー", industry: "金融・保険" },
];
