// ============================================================
// Innovation Life corporate site — content data
// Exposes window.IL_DATA for all components to read.
// ============================================================

// Standalone-export resolver: maps an asset path to its inlined blob URL
// when the page has been bundled (window.__resources present); otherwise
// returns the original path unchanged. Safe no-op on normal pages.
window.ILR = function (p) {
  return (window.__resources && typeof p === 'string' && window.__resources[p]) || p;
};
window.ILRemap = function (o) {
  if (typeof o === 'string') return window.ILR(o);
  if (Array.isArray(o)) { for (let i = 0; i < o.length; i++) o[i] = window.ILRemap(o[i]); return o; }
  if (o && typeof o === 'object') { for (const k in o) o[k] = window.ILRemap(o[k]); return o; }
  return o;
};

window.IL_DATA = {
  brand: {
    nameJa: 'イノベーションライフ株式会社',
    nameEn: 'innovation life',
    tag: '日常生活に、感動を。',
    desc: 'インテリア提案サービス「カグラク」をはじめ、住空間と暮らしの最適化を、家具メーカー・工務店様と共に追求しています。',
  },

  hero: {
    eyebrow: 'INNOVATION LIFE INC.',
    slides: [
      {
        image: 'assets/photo_hero_kitchen.png',
        alt: 'インテリアコーディネーターが住まいづくりを提案するシーン',
        category: '工務店・ハウスメーカー様へ',
        titleHtml: '住まいに、<em>暮らし</em>を<br/>添えるパートナー。',
        sub: '私たちは、インテリアの課題を解決し、一人ひとりの理想の暮らしを叶えるパートナーです。',
      },
      {
        image: 'assets/photo_consult_tabletop.png',
        alt: 'コーディネーターがご夫婦に家具の素材を案内している接客風景',
        category: '家具メーカー様へ',
        titleHtml: '工場の<em>うつわ</em>を、<br/>家庭の風景に。',
        sub: 'インテリアコーディネートを起点に、家具メーカー様の製品を最終ユーザーの暮らしへ届ける販路を共創します。',
      },
      {
        image: 'assets/photo_dining_corner.png',
        alt: 'ナチュラルな木製の丸テーブルとファブリックチェアを配したダイニングの一角',
        category: '個人のお客様へ',
        titleHtml: 'ひとりひとりの<br/><em>ライフスタイル</em>に、<br/>最適な一脚を。',
        sub: 'プロのインテリアコーディネーターが、お客様の暮らしに寄り添い、家具の選定から設置まで一括サポート。',
      },
    ],
  },

  targets: [
    {
      num: '01',
      audience: 'FOR BUILDERS',
      titleHtml: '<em>工務店様・ハウスメーカー様</em>',
      lede: '間取りの完成は、暮らしのはじまり。建つ家、空間にふさわしいインテリアを一括でご提案いたします。',
      points: [
        '完工前のインテリアトータルコーディネート',
        '提携家具・照明・カーテンを一括見積',
        'エンドユーザー様への直接ご提案も可能',
      ],
      cta: '工務店・ハウスメーカー様向けサービスを見る',
      href: 'builders.html',
      image: 'assets/hero_living_planning.png',
      overlay: 'FOR BUILDERS',
    },
    {
      num: '02',
      audience: 'FOR FURNITURE MAKERS',
      titleHtml: '<em>家具メーカー様</em>',
      lede: '商品を販売する、その先へ。大切な商品を、お客様の暮らしに寄り添うかたちでご提案いたします。',
      points: [
        '全国の工務店・ハウスメーカーへ製品紹介',
        '専属コーディネーターによる提案販売',
        '受発注・物流・施工までワンストップ対応',
      ],
      cta: '家具メーカー様向けサービスを見る',
      href: 'furnituremakers.html',
      image: 'assets/item_dining.png',
      overlay: 'FOR MAKERS',
    },
    {
      num: '03',
      audience: 'FOR VACATION RENTALS',
      titleHtml: '<em>民泊業者様</em>',
      lede: '家具の選定・調達から一括配送・組み立てまで。集客と収益を最大化する空間プロデュースをご提案いたします。',
      points: [
        'ワンストップで空間まるごとプロデュース',
        '集客に直結する「写真映え」設計',
        'バンクベッド等で収容人数を最大化',
      ],
      cta: '民泊業者様向けサービスを見る',
      href: 'minpaku.html',
      image: 'assets/item_living_table.png',
      overlay: 'FOR RENTALS',
    },
    {
      num: '04',
      audience: 'FOR INDIVIDUALS',
      titleHtml: '<em>個人</em>のお客様',
      lede: '理想の住まいの実現をプロのインテリアコーディネーターがサポート。LINEから気軽にご相談いただけます。',
      points: [
        '提案からお引渡しまで、ワンストップ',
        'LINE友だち登録で無料の体験相談',
        '提携170以上の家具・照明ブランドから選定',
      ],
      cta: '「カグラク」サービスサイトへ',
      href: 'https://lp.kaguraku.jp/',
      external: true,
      image: 'assets/hero_furniture_design.png',
      overlay: 'FOR YOU',
    },
  ],

  cases: [
    {
      tag: '個人住宅',
      meta: 'CASE 001 ・ TOKYO',
      title: '光を整え、家具で余白を編む。<br/>4LDKの家族のための一室。',
      lede: '無垢材のダイニングと、北欧のペンダントライト。お子様の成長を見据え、可変性のあるリビング設計を一括コーディネート。',
      image: 'assets/photo_case_feature.png',
      alt: 'インテリアコーディネーターが家族にインテリアプランを提案している様子',
      feature: true,
    },
    {
      tag: '工務店物件',
      meta: 'CASE 002',
      title: 'モデルハウスのための<br/>ホテルライク・コーディネート',
      lede: '完工後にお客様の心を動かす、ホテル品質のしつらえを提案。',
      image: 'assets/photo_case_sofa.png',
      alt: 'グレーのソファを中心にコーディネートされた落ち着きのあるリビング空間',
    },
    {
      tag: '個人住宅',
      meta: 'CASE 003',
      title: '吹き抜けの大開口、<br/>家族と過ごす森の家。',
      lede: '光と影を主役に据えた、植栽計画とラグを含めた一式提案。',
      image: 'assets/photo_case_wood_living.png',
      alt: 'ナチュラルウッドのローテーブルが映えるシンプルなリビングルーム',
    },
    {
      tag: '家具メーカー協業',
      meta: 'CASE 004',
      title: '無垢の椅子に、暮らしを編む',
      lede: '提携メーカー4社の椅子を中心に、3軒の住まいで継続的に展開。',
      image: 'assets/photo_case_chairs.png',
      alt: '鮮やかなオレンジ色のシンプルなデザインチェア',
    },
    {
      tag: '個人住宅',
      meta: 'CASE 005',
      title: '小さなマンションで、<br/>大きく暮らすための間取り',
      lede: '60㎡の住まいに、光と動線を取り戻すコーディネート。',
      image: 'assets/photo_case_lamp.png',
      alt: 'リビングに置かれたスタンドタイプのフロアランプ',
    },
    {
      tag: '店舗',
      meta: 'CASE 006',
      title: '商談を導く<br/>ショールームのしつらえ',
      lede: 'クライアントの感性をくすぐる、什器と光と素材の組み立て。',
      image: 'assets/photo_case_showroom.png',
      alt: '白を基調とした上品なインテリアとラグのコーディネート',
    },
  ],

  company: {
    eyebrow: 'ABOUT US',
    titleHtml: '<em>日常生活</em>に、<br/>感動を。',
    body: 'イノベーションライフ株式会社は、4FULグループの一員として、家具・インテリアの一括コーディネートを通じて、暮らしの質を高める事業を展開しています。インテリア提案サービス「カグラク」のほか、家具メーカー様・工務店様との協業を通じて、空間と暮らしを結ぶ新しい流通のかたちを追求しています。',
    image: 'assets/photo_about_plan_fit.png',
    imageAlt: '建築図面を確認しながら住まいづくりを進める様子',
    rows: [
      ['社名',     { type: 'text', value: 'イノベーションライフ株式会社' }],
      ['代表者',   { type: 'text', value: '代表取締役　佐藤 友彦' }],
      ['事業内容', { type: 'text', value: 'インテリア提案・販売／「カグラク」サービス運営' }],
      ['所在地',   { type: 'text', value: '〒729-0142　広島県尾道市西藤町 226' }],
      ['関連会社', { type: 'related', items: [
        {
          name: '4FUL株式会社（旧 佐藤産業株式会社）',
          addr: '〒729-0142　広島県尾道市西藤町 226',
          url: 'https://4ful.co.jp/',
        },
        {
          name: '株式会社 フェイス',
          addr: '〒980-0014　宮城県仙台市青葉区本町 3-2-1 ハーフムーンビル 4F',
          url: 'https://faith-1.co.jp/',
        },
      ]}],
    ],
  },

  news: {
    お知らせ: [
      { id: '003', date: '2026.04.27', cat: 'お知らせ', title: 'GW期間中の休業のお知らせ' },
      { id: '002', date: '2025.12.29', cat: 'お知らせ', title: '年末年始休業のお知らせ' },
      { id: '001', date: '2025.10.20', cat: 'お知らせ', title: '「アジア・ファニシング・フェア 2025」出展のお知らせ' },
    ],
    ブログ: [
      { id: 'b004', date: '2026.06.28', cat: '事例紹介', title: '【施工事例】爽やかなカラーと自然の癒しでまとめた、オフィスのインテリア提案事例' },
      { id: 'b003', date: '2026.06.22', cat: 'コラム', title: '【インテリアのコツ】部屋がごちゃごちゃして見える原因は？プロが教える「失敗しない配色の黄金ルール」' },
      { id: 'b002', date: '2026.06.15', cat: '事例紹介', title: '【施工事例】オフィス家具の納品と内装プチリノベーションで叶える、お客様を迎え入れる快適な商談スペース' },
      { id: 'b001', date: '2026.06.08', cat: '事例紹介', title: '【コーディネート事例】ご予算40万円で叶える、統一感のあるトータルインテリアコーディネート' },
    ],
  },

  faq: [
    {
      q: 'コーディネートの依頼から納品まで、どのくらいの期間がかかりますか？',
      a: 'お打合せ内容や物件の規模によりますが、初回ヒアリングからお引渡しまで、概ね2〜4ヶ月ほどお時間を頂戴しております。お引越し・お引渡し時期が決まっておられる場合は、お早めにご相談くださいませ。',
    },
    {
      q: '対応エリアはどちらでしょうか？',
      a: '東京・仙台を拠点に、全国へご対応いたします。お打合せはオンラインでも可能ですので、遠方のお客様もお気軽にご相談くださいませ。',
    },
    {
      q: '工務店として、御社の家具やインテリアを取り扱うことは可能ですか？',
      a: 'はい、可能でございます。工務店様向けには専用のお取引条件と、ご担当者様付きのサポート体制をご用意しております。「工務店の方へ」ページよりお問い合わせください。',
    },
    {
      q: '家具メーカーとして、製品を提案先に取り入れていただくことは可能でしょうか？',
      a: 'はい、もちろんです。当社が運営するサービスを通じ、工務店・エンドユーザーへ製品をご提案する協業の枠組みがございます。資料ダウンロードまたは「家具メーカーの方へ」よりお問い合わせください。',
    },
    {
      q: '個人ですが、まず気軽に相談してみたいです。',
      a: 'はい、ぜひお気軽にどうぞ。インテリア提案サービス「カグラク」では、LINE友だち登録から無料の体験相談を承っております。お見積もりまでは費用は発生いたしませんので、ご安心くださいませ。',
    },
    {
      q: '見積りや初回ヒアリングに費用はかかりますか？',
      a: '初回のヒアリングおよびお見積りまでは、原則無料でご対応いたします。ご提案内容のうえでご検討くださいませ。',
    },
  ],

  contactPaths: [
    {
      num: '01',
      title: '個人のお客様',
      sub: 'LINEから無料相談・「カグラク」サービス',
    },
    {
      num: '02',
      title: '工務店・家具メーカー様',
      sub: 'お取引のご相談・その他お問い合わせ',
    },
  ],

  partners: [
    'assets/partner_morita.png',
    'assets/partner_mikimoku.png',
    'assets/logo_kaibara.png',
    'assets/partner_fujishi.png',
    'assets/partner_asahi.png',
    'assets/partner_sue.png',
    'assets/partner_chiyoda.png',
    'assets/partner_hotta_n.png',
    'assets/partner_fourful.png',
  ],

  marquee: [
    'INTERIOR COORDINATION',
    '家具メーカー協業',
    'WORK WITH BUILDERS',
    '工務店パートナーシップ',
    'KAGURAKU SERVICE',
    '4FUL GROUP COMPANY',
    '日常生活に感動を',
    'SINCE INNOVATION LIFE',
  ],

  nav: [
    {
      label: 'サービス',
      href: 'index.html#services',
      children: [
        { label: '工務店様・ハウスメーカー様', href: 'builders.html', eyebrow: 'FOR BUILDERS' },
        { label: '家具メーカー様',         href: 'furnituremakers.html', eyebrow: 'FOR FURNITUREMAKERS' },
        { label: '民泊業者様',             href: 'minpaku.html',         eyebrow: 'FOR VACATION RENTALS' },
        { label: '個人のお客様（カグラクのご紹介）',     href: 'https://lp.kaguraku.jp/', external: true, eyebrow: 'FOR INDIVIDUALS' },
      ],
    },
    {
      label: '会社情報',
      href: 'company.html',
      children: [
        { label: '代表メッセージ',         href: 'company.html#message', eyebrow: 'MESSAGE FROM CEO' },
        { label: '会社概要',               href: 'company.html#profile', eyebrow: 'COMPANY PROFILE' },
        { label: 'パートナー一覧',         href: 'company.html#partners', eyebrow: 'PARTNERS' },
        { label: '4FULグループについて',   href: 'company.html#group',   eyebrow: 'OUR GROUP' },
      ],
    },
    /* 提案事例：コンテンツ準備中のため一時的に非表示。掲載時はこの行のコメントを外す */
    /* { label: '提案事例',     href: 'case-list.html' }, */
    { label: 'お知らせ・ブログ', href: 'news.html' },
    { label: 'よくあるご質問', href: 'faq.html' },
  ],
};

// Remap asset paths to inlined blobs when bundled (no-op otherwise).
window.ILRemap(window.IL_DATA);
