// ============================================================
// Innovation Life — SESAME ブランド紹介LP — /kaguraku/
// AIインテリア診断を主役に、SESAMEブランド訴求を組み合わせた集客導線。
// Reuses the corporate design system (.il-k2-* & shared components).
// ============================================================

const S_LINE_URL = 'https://lin.ee/5p0dQyV';

const SESAME = {
  heroImage: 'assets/s_hero_main.jpg',
  heroVariants: [
    {
      id: 'B',
      label: 'B｜課題解決・高コスパ',
      titleHtml: '狭くても、<br /><em>あきらめない<br />理想のお部屋。</em>',
      lead: '無料AIインテリア診断実施中。',
      sub: 'AIがあなたの好みを分析し、コスパ抜群の家具とコーディネートをご提案。LINEでサクッと、あなただけの「正解」が見つかります。',
    },
  ],
  heroBadges: [
    'カグラクと同じ4FULグループの家具ブランド',
    '即日配送可（平日8時までのご注文）',
    '楽天ランキング上位常連ブランド',
  ],

  // ② はじめまして、4FULグループです
  intro: {
    eyebrow: 'ABOUT 4FUL GROUP',
    title: '「住空間」×「ライフスタイル」=「住ライフスタイル創造企業」が、<em>4FULグループのコンセプト</em>です。',
    brands: [
      {
        name: 'SESAME（セサミ）',
        body: [
          '「カグラク」と同じ4FULグループが手がける、オリジナル家具ブランドです。',
          '北欧風、韓国風、ホワイトインテリア——好きなテイストから選べるラインナップで、一人暮らしの賃貸ワンルームでも「羨ましい」と言われるお部屋づくりをご提案します。キッチン収納から収納家具、テレビ台、ソファ、ベッド、こたつまで。オリジナルシリーズも豊富に取り揃えています。',
          '最大の特徴は、限られた空間を有効活用する「スペースパフォーマンス（スペパ）」設計。',
          '「ワンルームの一人暮らしでも、羨ましがられるお部屋づくり」がコンセプトです。狭いお部屋ならではの収納不足や配置の悩みを解決し、高品質でデザイン性に優れた家具をリーズナブルにお届けしています。',
        ],
      },
      {
        name: 'サヤンサヤン',
        body: [
          '同じく4FULグループの、絨毯・ラグのブランドです。',
          'ベルギー、トルコ、イラン、中国、インドをはじめとする世界各地の産地より、品質とデザインにこだわった敷物を直接買い付けております。実店舗を持たないインターネット販売を軸とし、流通の中間工程と過剰な包装を省くことで、輸入直販ならではの価格を実現してまいりました。',
          '取り扱う商品は、ベルギー製ウィルトン織り・モケット織りをはじめ、ゴブラン織り、手織りのインドキリムやギャッベなど多岐にわたります。玄関マットから6帖サイズのカーペット、円形ラグ、キッチンマット、廊下敷きまで、あらゆる住まいの空間にお応えできる品揃えを整えております。',
        ],
      },
    ],
    relation: [
      { k: '4FUL GROUP', v: '広島県尾道市に本社を置く大正7年（1918年）創業の老舗家具・インテリア企画開発・卸売企業です。2024年6月1日に「佐藤産業株式会社」から社名を変更しました。', url: 'https://4ful.co.jp/' },
      { k: 'カグラク', v: 'インテリアコーディネートの提案から、家具の購入、納品・設置までワンストップでご提供しております。' },
      { k: 'SESAME', url: 'https://www.sesame-kagu.jp/' },
      { k: 'サヤンサヤン', url: 'https://sayansayan.co.jp/' },
    ],
  },

  // ③ 共感（お悩み）
  worries: [
    { t: 'おしゃれ部屋の作り方が分からない', b: 'SNSで見かける韓国風や北欧風のお部屋に憧れるけれど、何から揃えればいいか分からない。' },
    { t: 'お部屋が狭くて片付かない', b: '1R・1K、6畳や4畳半で「収納が足りない」「家具を置くと圧迫感が出る」。' },
    { t: '予算や組み立てのハードルが高い', b: '「おしゃれな家具は高そう」「組み立てが大変そう」と諦めている。' },
    { t: '生活感が出やすい', b: '脱いだ服や充電コード、推し活グッズの「一時置き場」がなくて散らかってしまう。' },
  ],

  // ④ AI診断メイン
  aiSteps: [
    { n: '01', t: 'LINEで友だち追加', b: 'まずは公式LINEに登録。ここから診断フォームのご案内が届きます。' },
    { n: '02', t: '質問に答える', b: '届いたリンクから、カンタンな質問に答えるだけ（所要時間の目安：約10分）。' },
    { n: '03', t: 'AIが診断', b: 'あなたの好み・お部屋・予算をもとに、AIが分析します。' },
    { n: '04', t: '専用レポートが届く', b: 'あなただけのインテリア提案レポートをお届けします。' },
  ],
  aiReport: [
    { icon: '🏠', t: 'あなたのインテリアタイプ', b: '例：心安らぐ「ナチュラルハーモニー」など' },
    { icon: '🎨', t: 'おすすめカラーパレット', b: 'ベース／サブ／アクセントの黄金比を提案' },
    { icon: '📐', t: '空間活用の方向性', b: '家具配置・動線・収納のヒント' },
    { icon: '💡', t: '照明プランの提案', b: '暮らしに合う灯りの組み立て方' },
    { icon: '🛋️', t: '家具選びのヒント', b: 'あなたのタイプに合うSESAMEアイテム' },
    { icon: '💰', t: '予算活用のめやす', b: '無理なく理想に近づく予算配分' },
  ],
  aiSafe: '完全無料 ／ 約10分 ／ スマホで完結。LINE友だち追加でスタート、診断後は LINEで無料相談 も可能です。',
  aiNote: '※診断フォームのURLは、LINE登録後にLINE経由でのみご案内します（LP上では公開していません）。',

  // ⑤ ブランドコンセプト
  concept: {
    eyebrow: 'BRAND CONCEPT',
    title: '“困らない生活”から、<br><em>“ときめく心地よいお部屋”</em>へ。',
    body: [
      '「つかう人、つくる人、関わる全ての人を幸せに」という想いのもと、サイズ感・デザイン・価格のバランスを徹底追求しています。',
      '大がかりな模様替えをしなくても、ひとつ足すだけでお部屋がパッと垢抜ける「ちょい足し家具」や「ちょうどいい家具」をご提案します。',
    ],
    image: 'assets/s_concept.jpg',
  },

  // ⑥ 選ばれる4つの理由
  reasons: [
    { t: 'スペパ（スペースパフォーマンス）抜群', b: '奥行きを抑えた設計や隙間収納。縦ラインを活用する突っ張り壁面収納で、狭い部屋も広々使えます。', img: 'assets/item_shelf.png' },
    { t: 'トレンドを押さえたテイスト＆カラー', b: '白やアイボリーをベースにした韓国風・北欧ナチュラル・ホワイトインテリアの家具アイテムを多く取り揃えています。ラタン調やアーチ型デザインも豊富です。', img: 'assets/kg_gallery3.png' },
    { t: 'デザイン性と実用性を兼ねた家具アイテム', b: '「見せる収納」と「隠す収納」を両立した多機能設計。デザイン性と実用性を兼ね備えたアイテムを多数取り揃えております。', img: 'assets/item_tv_board.png' },
    { t: '憧れのデザインのラグをお手頃価格で。', b: 'サヤンサヤンは、世界の産地から直輸入で販売しているので、ペルシャ柄もベニワレンも、憧れのデザインがお手頃な価格でご提供しております。', img: 'assets/item_rug.png' },
  ],

  // ⑦ カグラク×SESAME トータルコーディネート（5テイスト）
  packages: [
    {
      tag: 'カジュアル',
      img: 'assets/taste_casual.jpg',
      gallery: ['assets/taste_casual.jpg', 'assets/photo_case_showroom.png', 'assets/photo_case_chairs.png', 'assets/photo_case_lamp.png'],
      coordinator: { name: '田中 美咲', role: 'インテリアコーディネーター', comment: '木目とアイアンの異素材を組み合わせると、それだけで空間に奥行きが出ます。壁面は突っ張りラックで“見せる収納”にして、床にはあえて何も置かない。狭いお部屋ほど、この抜け感が効きます。'},
      feature: 'ヴィンテージ木目とアイアンを組み合わせた、ラフで肩の力が抜けたお部屋づくり。',
      items: '突っ張りラック／ヴィンテージ調ローボード／アイアン脚センターテーブル',
    },
    {
      tag: 'シンプル・ベーシック',
      img: 'assets/taste_simple.jpg',
      gallery: ['assets/taste_simple.jpg', 'assets/series_alla.jpg', 'assets/item_tv_board.png', 'assets/photo_case_feature.png'],
      coordinator: { name: '佐々木 亮', role: 'インテリアコーディネーター', comment: '家具の色数は3色までに抑えるのが鉄則です。alla シリーズは高さの異なるアイテムを揃えられるので、横のラインを合わせるだけで、まとまりのあるリビングになります。'},
      feature: '色数を抑えたベーシックな木目家具で、どんな部屋にもなじむ飽きのこない空間に。',
      items: 'alla ローボード／alla キャビネット／alla チェスト',
    },
    {
      tag: 'ナチュラル',
      img: 'assets/taste_natural.jpg',
      gallery: ['assets/taste_natural.jpg', 'assets/photo_case_wood_living.png', 'assets/kg_gallery1.png', 'assets/item_chair.png'],
      coordinator: { name: '大野 千尋', role: 'インテリアコーディネーター', comment: '木の温かみを主役にしつつ、ラグとクッションで質感を足すのがポイント。ソファはあえて低めを選ぶと、天井が高く感じられてワンルームでも広々と見えます。'},
      feature: '温かみのある木目調家具とファブリックで、やわらかく心地よいリビングをつくるプラン。',
      items: 'カウチソファ SH8991（グレージュ）／NONIER ローボード／KILIGS センターテーブル',
    },
    {
      tag: 'ホワイトインテリア',
      img: 'assets/taste_white.jpg',
      gallery: ['assets/taste_white.jpg', 'assets/s_concept.jpg', 'assets/item_shelf.png', 'assets/item_desk.png'],
      coordinator: { name: '中村 遥', role: 'インテリアコーディネーター', comment: '同じ白でも、少しずつトーンを変えると平坦になりません。デスクとシェルフの高さを揃えてL字に配置すれば、在宅ワークのスペースも自然に確保できます。'},
      feature: 'ホワイトで統一した収納とデスクで、明るく広く見せる清潔感のあるお部屋。',
      items: 'オープンシェルフ／myuum ローボード／ホワイトデスク',
    },
    {
      tag: '北欧・韓国インテリア',
      img: 'assets/taste_nordic.jpg',
      gallery: ['assets/taste_nordic.jpg', 'assets/kg_gallery3.png', 'assets/s_hero_main.jpg', 'assets/item_zakka.png'],
      coordinator: { name: '林 あかり', role: 'インテリアコーディネーター', comment: 'アーチ型や曲線モチーフを1点入れるだけで、一気にトレンド感が出ます。全体はアイボリーでまとめ、ファブリックだけベージュを重ねると、写真映えする柔らかい空間に。'},
      feature: '淡いトーンとやわらかな曲線・アーチデザインでトレンド感のある空間を演出。',
      items: 'neine キャビネット／シープボア調2Pソファ／KILIGS センターテーブル',
    },
  ],

  // ⑦ シリーズ橋渡し
  series: [
    { tag: 'キッチン収納', name: 'LUFFY（ラフィ）', b: 'コンパクトながら家電・食器をまとめて収納。自炊を楽しくするベストセラーシリーズ。', img: 'assets/series_luffy.jpg' },
    { tag: '北欧風リビング収納', name: 'alla（アリア）', b: 'テレビボードとキャビネットを組み合わせて使える、北欧ナチュラルテイストのリビング収納。', img: 'assets/series_alla.jpg' },
    { tag: 'シンプルすき間収納', name: 'DOLLY（ドリー）', b: '15〜30cmのすき間をフル活用できるスリム設計。洗面所やキッチンのデッドスペースを収納に。', img: 'assets/series_dolly.jpg' },
  ],

  // ⑧ お客様の声
  voices: [
    { stars: 4, q: 'アーチ型の扉がとってもかわいいです', b: 'リビングに棚が欲しくて購入しました。アーチ型の扉がとってもかわいいです。', who: 'ゆき111さん / 2026.06.12' },
    { stars: 4, q: 'シンプルで使いやすそうです', b: '気に入りました。レンジとピッタリな雰囲気でシンプルで使いやすそうです。またsesamiシリーズチェックして行きたいと思います。良いお品をありがとうございました', who: '購入者さん / 2026.05.07' },
    { stars: 5, q: 'ラグが変わるだけでこんなに部屋の雰囲気が変わり、気持ちが上がるなんて', b: 'ご連絡通りの日時に到着しました。臭いもなく、シワもなく、美しい状態で受け取ることができました。ラグが変わるだけでこんなに部屋の雰囲気が変わり、気持ちが上がるなんて、思いませんでした。素敵なラグをリーズナブルに提供してくださりありがとうございます。', who: 'koo4303さん / 女性・40代 / 2026.08.18' },
    { stars: 5, q: 'お部屋が明るくきれいになりました', b: '組み立ては時間はかかりましたが、不器用な私でも1人で説明書が分かりやすかったので出来ました。とても可愛く、お部屋が明るくきれいになりました。ありがとうございました。', who: 'さおりん9510さん / 2026.03.29' },
    { stars: 5, q: 'とってもおしゃれで大満足です', b: '作るのは大人2人がかりで、大変でしたが、とってもおしゃれで大満足です。配送も届くのが早く、引っ越しで家を整える期間を短くしたかったので助かりました', who: 'れれれれれのおじさんさん / 2026.06.29' },
    { stars: 5, q: '肌触りも良く落ち着いた色合いでとても気に入りました！', b: '肌触りも良く落ち着いた色合いでとても気に入りました！厚さもちょうどいいです。', who: '購入者さん / 2026.07.26' },
    { stars: 5, q: 'キッチンとうまく調和してくれてよかったです', b: 'ホワイトの色味がどうかなと思ったのですけど、いい意味で明る過ぎず、キッチンとうまく調和してくれてよかったです！1人で組み立てるのは少し大変でした。', who: '購入者さん / 2026.04.04' },
    { stars: 5, q: 'とても満足のいく絨毯に出会えました', b: '豊富な柄やサイズの中から自分の好みに合うものを選ぶことができ、とても満足のいく絨毯に出会えました。', who: 'e4e0413さん / 女性・40代 / 2026.07.26' },
    { stars: 4, q: '棚の質感と出来栄えが、思ったよりよかった', b: '色合いが思い通りの良い色合いで、棚の質感と出来栄えが、思ったよりよかったからお気に入りです。', who: 'ホワイトNさん / 2026.06.05' },
    { stars: 5, q: '6畳のお部屋に200sizeを購入しましたがバッチリ', b: 'アイボリー購入　思った異常に　厚みもあり大満足　6畳のお部屋に200sizeを購入しましたがバッチリ　お値段以上のお品でした　ずれも無し', who: '4748ともさん / 女性・50代 / 2026.08.15' },
    { stars: 5, q: '良い色で、部屋に馴染んでいます', b: 'オフホワイトを注文しました。良い色で、部屋に馴染んでいます。座り心地も良い感じです。注文してすぐに届いたので良かったです！！', who: '購入者さん / 2026.03.07' },
    { stars: 5, q: '他にはないデザイン、痛いところに手が届く設計', b: 'とても可愛い家具が買えました。他にはないデザイン、痛いところに手が届く設計、理想的な家具でした！対応も早く、傷もありませんでした。また機会があれば利用したいです。', who: 'mamanoakijikanさん / 2026.03.01' },
    { stars: 5, q: 'めちゃくちゃ可愛いです。色味もとても良かったです', b: 'めちゃくちゃ可愛いです。色味もとても良かったです！組み立てが大変そうだったので完成品を購入しましたが取っ手を付けるだけだったので本当に良かったです！', who: '購入者さん / 2026.04.28' },
    { stars: 5, q: '厚みもあって高級感があり色合いも良く', b: '厚みもあって高級感があり色合いも良く、とても良商品です。', who: '購入者さん / 2026.08.27' },
    { stars: 4, q: 'おもちゃ感があるけど、安っぽくなくて良いです', b: 'とてもかわいいです。おもちゃ感があるけど、安っぽくなくて良いです。電池つきだと◎', who: 'ニノ8577さん / 2026.07.27' },
  ],

  // ⑨ クロージング
  closingTitleHtml: 'まだ迷っているなら、まずは<em>10分の“診断”</em>から。',
  closingSub: 'あなたの「理想のお部屋」の答えは、もう見つかります。',
};

// ---------- ① Hero ----------
function SHero() {
  const v = SESAME.heroVariants[0];
  return (
    <section className="il-k2-hero il-s-hero">
      <div className="il-container il-k2-hero__inner">
        <div className="il-k2-hero__copy">
          <div className="il-s-hero__photo-sp" style={{ backgroundImage: `url(${SESAME.heroImage})` }}></div>
          <div className="il-s-hero__head">
            <p className="il-eyebrow">FREE AI INTERIOR</p>
            <h1 className="il-k2-hero__title" dangerouslySetInnerHTML={{ __html: v.titleHtml }} />
            <p className="il-k2-hero__lead">{v.lead}</p>
          </div>
          <p className="il-k2-hero__sub">{v.sub}</p>
          <div className="il-s-hero__logo-sp">
            <img className="il-s-collab__logo" src="assets/logo_kaguraku_yoko.png" alt="カグラク" />
            <span className="il-s-collab__x">×</span>
            <img className="il-s-collab__logo il-s-collab__logo--sesame" src="assets/logo_sesame.png" alt="SESAME" />
          </div>
          <div className="il-k2-cta-row">
            <a className="il-btn il-btn--primary il-btn--lg" href={S_LINE_URL} target="_blank" rel="noopener noreferrer">
              LINEで友だち追加して無料診断をはじめる
              <span className="il-k2-btn-note">無料・約10分</span>
            </a>
          </div>
          <p className="il-s-hero-note">※診断は公式LINEの友だち追加が入口です。登録後、LINEで診断フォームのリンクが届きます。</p>
        </div>
        <div className="il-k2-hero__media il-s-hero__media">
          <div className="il-k2-hero__photo" style={{ backgroundImage: `url(${SESAME.heroImage})` }} />
        </div>
        <div className="il-s-collab">
          <img className="il-s-collab__logo" src="assets/logo_kaguraku_yoko.png" alt="カグラク" />
          <span className="il-s-collab__x">×</span>
          <img className="il-s-collab__logo il-s-collab__logo--sesame" src="assets/logo_sesame.png" alt="SESAME" />
        </div>
      </div>
    </section>
  );
}

// ---------- ② Intro (SESAME = 4FUL group) ----------
function SIntro() {
  const d = SESAME.intro;
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>{d.eyebrow}</p>
          <h2 className="il-h-section" dangerouslySetInnerHTML={{ __html: 'はじめまして、<em>4FULグループ</em>です' }} />
          <p className="il-section-lede il-section-lede--center" dangerouslySetInnerHTML={{ __html: d.title }} />
        </div>
        <div className="il-s-intro">
          <div className="il-s-intro__body">
            {d.brands.map((br, i) => (
              <div key={i} className="il-s-brand">
                <h3 className="il-s-brand__name">{br.name}</h3>
                {br.body.map((p, k) => <p key={k}>{p}</p>)}
              </div>
            ))}
          </div>
          <div className="il-s-relation">
            <p className="il-s-relation__label">GROUP RELATION</p>
            {d.relation.map((r, i) => (
              <div key={i} className="il-s-relation__row">
                <span className="il-s-relation__k">{r.k}</span>
                {r.v && <span className="il-s-relation__v">{r.v}</span>}
                {r.url && (
                  <a className="il-s-relation__link" href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    <span className="il-related-list__url-arrow"></span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- ③ Worries ----------
function SWorries() {
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>YOUR WORRIES</p>
          <h2 className="il-h-section">こんなお部屋のお悩み、<em>ありませんか？</em></h2>
        </div>
        <div className="il-s-worries">
          {SESAME.worries.map((w, i) => (
            <div key={i} className="il-s-worry">
              <span className="il-s-worry__q">Q</span>
              <h3 className="il-s-worry__title">{w.t}</h3>
              <p className="il-s-worry__body">{w.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ④ AI diagnosis (main) ----------
function SAiMain() {
  return (
    <section id="ai" className="il-section il-section--soft">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>AI INTERIOR DIAGNOSIS</p>
          <h2 className="il-h-section">「何から選べばいいか分からない」を、<br /><em>カグラクが解決</em>します。</h2>
          <p className="il-section-lede il-section-lede--center">
            かんたんな質問に答えるだけで、あなたにぴったりのインテリアスタイルと家具アイテムを提案。<br />理想の暮らしへの「最初の一歩」を、迷わず踏み出せます。
          </p>
        </div>

        <p className="il-k2-sub-label il-s-sub-label">かんたん4ステップ</p>
        <ol className="il-k2-steps il-s-steps4">
          {SESAME.aiSteps.map((s) => (
            <li key={s.n} className="il-k2-step">
              <span className="il-k2-step__num">{s.n}</span>
              <h3 className="il-k2-step__title">{s.t}</h3>
              <p className="il-k2-step__body">{s.b}</p>
            </li>
          ))}
        </ol>

        <p className="il-k2-sub-label il-s-sub-label" style={{ marginTop: 64 }}>診断でわかること</p>
        <div className="il-s-report">
          {SESAME.aiReport.map((r, i) => (
            <div key={i} className="il-s-report__item">
              <span className="il-s-report__icon" aria-hidden="true">{r.icon}</span>
              <div>
                <h4 className="il-s-report__t">{r.t}</h4>
                <p className="il-s-report__b">{r.b}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="il-k2-inset-note">{SESAME.aiSafe}<br/>{SESAME.aiNote}</p>
        <div className="il-k2-cta-row il-k2-cta-row--center">
          <a className="il-btn il-btn--primary il-btn--lg" href={S_LINE_URL} target="_blank" rel="noopener noreferrer">
            LINEで友だち追加して無料診断をはじめる
            <span className="il-k2-btn-note">無料</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- ⑤ Concept ----------
function SConcept() {
  const c = SESAME.concept;
  return (
    <section className="il-section">
      <div className="il-container">
        <div className="il-s-concept">
          <div className="il-s-concept__media" style={{ backgroundImage: `url(${c.image})` }} />
          <div className="il-s-concept__body">
            <p className="il-eyebrow">{c.eyebrow}</p>
            <h2 className="il-h-section" dangerouslySetInnerHTML={{ __html: c.title }} />
            {c.body.map((p, i) => <p key={i} className="il-s-concept__p">{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- ⑥ Reasons ----------
function SReasons() {
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>WHY 4FUL</p>
          <h2 className="il-h-section">SESAME・サヤンサヤンが<em>選ばれる理由</em></h2>
        </div>
        <div className="il-s-reasons">
          {SESAME.reasons.map((r, i) => (
            <div key={i} className="il-s-reason">
              <div className="il-s-reason__body">
                <span className="il-s-reason__no">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="il-s-reason__t">{r.t}</h3>
                <p className="il-s-reason__b">{r.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ⑦ Series ----------
function SPackages() {
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    if (open === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);
  const p = open === null ? null : SESAME.packages[open];
  return (
    <section id="coordinate" className="il-section">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>TOTAL COORDINATE</p>
          <h2 className="il-h-section">カグラクだからできる、<br /><em>SESAME家具でのトータルコーディネート</em></h2>
        </div>
        <div className="il-s-packs">
          {SESAME.packages.map((pk, i) => (
            <article key={i} className="il-s-pack">
              <div className="il-s-pack__img" style={{ backgroundImage: `url(${pk.img})` }} />
              <div className="il-s-pack__body">
                <h3 className="il-s-pack__tag">{pk.tag}</h3>
                <p className="il-s-pack__feature">{pk.feature}</p>
                {false && (
                <button type="button" className="il-btn il-btn--ghost il-s-pack__cta" onClick={() => setOpen(i)}>
                  コーディネート例を見る
                  <span className="il-arrow"></span>
                </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {p && (
        <div className="il-s-modal" role="dialog" aria-modal="true" aria-label={p.tag + 'のコーディネート例'} onClick={() => setOpen(null)}>
          <div className="il-s-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="il-s-modal__close" aria-label="閉じる" onClick={() => setOpen(null)}>×</button>
            <p className="il-eyebrow">COORDINATE CASE</p>
            <h3 className="il-s-modal__title">{p.tag}</h3>
            <p className="il-s-modal__lede">{p.feature}</p>
            <div className="il-s-modal__grid">
              {p.gallery.map((g, k) => (
                <div key={k} className="il-s-modal__shot" style={{ backgroundImage: `url(${g})` }} />
              ))}
            </div>
            <div className="il-s-modal__note">
              <p className="il-s-modal__note-label">コーディネーターより</p>
              <p className="il-s-modal__comment">{p.coordinator.comment}</p>
              <p className="il-s-modal__who">{p.coordinator.name}（{p.coordinator.role}）</p>
            </div>
            <p className="il-s-modal__items"><span>使用アイテム</span>{p.items}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function SSeries() {
  return (
    <section id="series" className="il-section">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>PICK YOUR SERIES</p>
          <h2 className="il-h-section"><em>SESAMEの人気シリーズ</em>紹介</h2>
          <p className="il-section-lede il-section-lede--center">
            診断で分かったスタイルやカラーパレットをヒントに、SESAMEの人気シリーズから最適な一品を選べます。
          </p>
        </div>
        <div className="il-s-series">
          {SESAME.series.map((s, i) => (
            <article key={i} className="il-s-serie">
              <div className="il-s-serie__img" style={{ backgroundImage: `url(${s.img})` }} />
              <div className="il-s-serie__body">
                <span className="il-s-serie__tag">{s.tag}</span>
                <h3 className="il-s-serie__name">{s.name}</h3>
                <p className="il-s-serie__b">{s.b}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ⑧ Voices ----------
function SVoices() {
  const ref = React.useRef(null);
  const [i, setI] = React.useState(0);
  const n = SESAME.voices.length;
  const [per, setPer] = React.useState(3);
  React.useEffect(() => {
    const calc = () => { const w = window.innerWidth; setPer(w >= 1040 ? 3 : w >= 700 ? 2 : 1); };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  const max = Math.max(0, n - per);
  const go = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('.il-s-voice');
    if (!card) return;
    const step = card.offsetWidth + 20;
    const next = Math.min(max, Math.max(0, i + dir));
    setI(next);
    const from = el.scrollLeft;
    const to = next * step;
    const t0 = performance.now();
    const dur = 360;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.scrollLeft = from + (to - from) * e;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  return (
    <section className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head il-section-head--center">
          <p className="il-eyebrow" style={{ justifyContent: 'center' }}>CUSTOMER VOICE</p>
          <h2 className="il-h-section">お客様の声</h2>
          <p className="il-s-voices__source">楽天市場「SESAME（セサミ）家具・インテリア」・「ラグマット通販のサヤンサヤン」のショップレビューより</p>
        </div>
        <div className="il-s-voices-wrap">
          <div className="il-s-voices il-s-voices--carousel" ref={ref}>
            {SESAME.voices.map((v, k) => (
              <figure key={k} className="il-s-voice">
                <p className="il-s-voice__stars" aria-label={'評価' + v.stars}>{'★'.repeat(v.stars)}<span>{'★'.repeat(5 - v.stars)}</span></p>
                <blockquote className="il-s-voice__q">「{v.q}」</blockquote>
                <p className="il-s-voice__b">{v.b}</p>
                <figcaption className="il-s-voice__who">{v.who}</figcaption>
              </figure>
            ))}
          </div>
          <div className="il-s-voices__nav">
            <button type="button" className="il-s-voices__arrow" aria-label="前へ" onClick={() => go(-1)} disabled={i === 0}>←</button>
            <span className="il-s-voices__count">{i + 1}–{Math.min(n, i + per)} / {n}</span>
            <button type="button" className="il-s-voices__arrow" aria-label="次へ" onClick={() => go(1)} disabled={i >= max}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SClosing() {
  return (
    <section className="il-k2-final">
      <div className="il-container il-k2-final__inner">
        <p className="il-eyebrow il-eyebrow--inverted" style={{ justifyContent: 'center' }}>GET STARTED</p>
        <h2 className="il-k2-final__title" dangerouslySetInnerHTML={{ __html: SESAME.closingTitleHtml }} />
        <p className="il-s-closing__sub">{SESAME.closingSub}</p>
        <div className="il-k2-cta-row il-k2-cta-row--center">
          <a className="il-btn il-btn--primary il-btn--lg" href={S_LINE_URL} target="_blank" rel="noopener noreferrer">
            LINEで友だち追加して無料診断をはじめる
            <span className="il-k2-btn-note">無料・約10分</span>
          </a>
          <a className="il-btn il-btn--ghost-inv il-btn--lg" href="#series">
            カテゴリーから家具を探す
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Page ----------
function SesamePage() {
  return (
    <>
      <ILHeader />
      <SHero />
      <SIntro />
      <SWorries />
      <SAiMain />
      <SConcept />
      <SReasons />
      <SPackages />
      <SSeries />
      <SVoices />
      <SClosing />
      <ILFooter />
    </>
  );
}

window.ILRemap(SESAME);
ReactDOM.createRoot(document.getElementById('root')).render(<SesamePage />);
