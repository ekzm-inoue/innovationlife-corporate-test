// ============================================================
// Innovation Life — Section components
// All consume window.IL_DATA.
// ============================================================

const D = window.IL_DATA;

// ---------- Header ----------
function ILHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(-1);     // desktop hovered submenu
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSub, setMobileSub] = React.useState(-1); // mobile accordion expanded
  const closeTimer = React.useRef(null);

  // Hover-intent: keep the dropdown open while the cursor is over the
  // trigger OR the dropdown itself; only close after a short grace period
  // so crossing the gap between them doesn't dismiss the menu.
  const openMenu = (i) => { clearTimeout(closeTimer.current); setOpenIdx(i); };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIdx(-1), 180);
  };
  React.useEffect(() => () => clearTimeout(closeTimer.current), []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on resize-to-desktop
  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // lock body scroll while mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
    <header className={`il-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="il-header__inner">
        <a className="il-logo" href="index.html">
          <span className="il-logo__mark">innovation life</span>
          <span className="il-logo__sub">イノベーションライフ株式会社</span>
        </a>

        {/* Desktop nav */}
        <nav className="il-nav" onMouseLeave={scheduleClose}>
          {D.nav.map((n, i) => (
            <div
              key={n.label}
              className={`il-nav__item ${n.children ? 'has-children' : ''} ${openIdx === i ? 'is-open' : ''}`}
              onMouseEnter={() => openMenu(n.children ? i : -1)}
            >
              <a href={n.href} className="il-nav__link">{n.label}</a>
              {n.children && (
                <div
                  className="il-nav__dropdown"
                  role="menu"
                  onMouseEnter={() => openMenu(i)}
                  onMouseLeave={scheduleClose}
                >
                  <div className="il-nav__dropdown-inner">
                    <p className="il-nav__dropdown-eyebrow">SERVICES</p>
                    <ul>
                      {n.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined}>
                            <span className="il-nav__dropdown-en">{c.eyebrow}</span>
                            <span className="il-nav__dropdown-ja">
                              {c.label}
                              <span className="il-nav__dropdown-arrow"></span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="il-header__cta">
          <a className="il-btn il-btn--ghost" href="contact-corporate.html" style={{ padding: '14px 22px', fontSize: 12 }}>
            お問い合わせ
            <span className="il-arrow"></span>
          </a>
          {/* Hamburger */}
          <button
            className={`il-burger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      </header>

      {/* Mobile slide-in menu */}
      <div className={`il-mobile-nav ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="il-mobile-nav__inner">
          <ul className="il-mobile-nav__list">
            {D.nav.map((n, i) => (
              <li
                key={n.label}
                className={`il-mobile-nav__item ${n.children ? 'has-children' : ''} ${mobileSub === i ? 'is-open' : ''}`}
              >
                {n.children ? (
                  <>
                    <button
                      className="il-mobile-nav__toggle"
                      onClick={() => setMobileSub(mobileSub === i ? -1 : i)}
                      aria-expanded={mobileSub === i}
                    >
                      <span className="il-mobile-nav__label">{n.label}</span>
                      <span className="il-mobile-nav__sign"></span>
                    </button>
                    <ul className="il-mobile-nav__sub">
                      {n.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} onClick={() => setMobileOpen(false)}>
                            <span className="il-mobile-nav__sub-en">{c.eyebrow}</span>
                            <span className="il-mobile-nav__sub-ja">{c.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={n.href}
                    className="il-mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {n.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            className="il-btn il-btn--primary il-mobile-nav__cta"
            href="contact-corporate.html"
            onClick={() => setMobileOpen(false)}
          >
            お問い合わせ
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </>
  );
}

// ---------- Hero ----------
function ILHero() {
  const slide = D.hero.slides[0];

  return (
    <section id="top" className="il-hero">
      <div
        className="il-hero__slide is-active"
        style={{ backgroundImage: `url(${slide.image})` }}
        role="img"
        aria-label={slide.alt || ''}
      />
      <div className="il-hero__content">
        <div className="il-hero__inner">
          <div>
            <h1
              className="il-hero__title"
              dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
            />
          </div>
          <div className="il-hero__rail">
            <p className="il-hero__sub">{slide.sub}</p>
          </div>
        </div>
      </div>
      <div className="il-hero__scroll">SCROLL</div>
    </section>
  );
}

// ---------- Marquee ----------
function ILMarquee() {
  const items = D.marquee;
  // Doubled for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="il-marquee" aria-hidden="true">
      <div className="il-marquee__track">
        {doubled.map((m, i) => (
          <span key={i} className="il-marquee__item">{m}</span>
        ))}
      </div>
    </div>
  );
}

// ---------- Targets ----------
function ILTargets({ layout = 'cards' }) {
  return (
    <section id="services" className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">BEYOND BUILDING A HOME</p>
          <h2 className="il-h-section">
            家づくりに<em>+α</em>の価値を。
          </h2>
          <p className="il-section-lede">
            工務店様・家具メーカー様・民泊事業者様から、もちろん個人のお客様も。<br/>住空間に関わるすべての方へ、インテリアのご提案から家具の調達・配送・設置までをワンストップでサポートします。
          </p>
        </div>
        <div className="il-targets" data-layout={layout}>
          {D.targets.map((t) => (
            <a key={t.num} className="il-target-card" href={t.href || `#target-${t.num}`} target={t.external ? '_blank' : undefined} rel={t.external ? 'noopener noreferrer' : undefined}>
              <div
                className="il-target-card__image"
                style={{ backgroundImage: `url(${t.image})` }}
              >
              </div>
              <div className="il-target-card__body">
                <p className="il-eyebrow il-eyebrow--quiet" style={{ marginBottom: 14 }}>
                  {t.audience}
                </p>
                <h3
                  className="il-target-card__title"
                  dangerouslySetInnerHTML={{ __html: t.titleHtml }}
                />
                <p className="il-target-card__lede">{t.lede}</p>
                <span className="il-target-card__cta">
                  {t.cta}
                  <span className="il-arrow"></span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Cases ----------
function ILCases() {
  return (
    <section id="cases" className="il-section">
      <div className="il-container">
        <div className="il-section-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, textAlign: 'left', marginBottom: 64 }}>
          <div>
            <p className="il-eyebrow">OUR WORKS</p>
            <h2 className="il-h-section" style={{ marginBottom: 8 }}>
              インテリア提案<em>事例</em>のご紹介
            </h2>
            <p className="il-section-lede" style={{ margin: 0 }}>
              個人住宅、モデルハウス、ショールームまで。お客様の暮らしや事業に寄り添った、これまでのコーディネート事例の一部をご紹介いたします。
            </p>
          </div>
          <a className="il-link" href="case-list.html">すべての事例を見る<span className="il-arrow"></span></a>
        </div>
        <div className="il-cases-grid">
          {D.cases.map((c, i) => (
            <a key={i} className={`il-case ${c.feature ? 'il-case--feature' : ''}`} href="#case">
              <div className="il-case__image">
                <span className="il-case__tag">{c.tag}</span>
                <img src={c.image} alt={c.alt || ''} />
              </div>
              <div className="il-case__meta">{c.meta}</div>
              <h3
                className="il-case__title"
                dangerouslySetInnerHTML={{ __html: c.title }}
              />
              <p className="il-case__lede">{c.lede}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Partners strip ----------
function ILPartners() {
  return (
    <section className="il-section--paper" style={{ padding: '40px 0' }}>
      <div className="il-container">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p className="il-eyebrow">OUR PARTNERS</p>
          <p style={{ fontFamily: 'Noto Sans JP, sans-serif', fontSize: 13, color: 'var(--il-stone)', marginTop: 8, letterSpacing: '0.04em' }}>
            国内外の家具・インテリアブランドと連携し、最適なご提案を実現します
          </p>
        </div>
        <div className="il-partners">
          {D.partners.map((p, i) => (
            <img key={i} src={p} alt="Partner logo" />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a className="il-btn il-btn--ghost" href="company.html#partners">
            パートナー一覧を見る
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Company ----------
function ILCompany() {
  return (
    <section id="company" className="il-section">
      <div className="il-container" style={{ maxWidth: 1440, paddingInline: 0 }}>
        <div className="il-company">
          <div className="il-company__image" style={{ backgroundImage: `url(${D.company.image})` }} role="img" aria-label={D.company.imageAlt || ''} />
          <div className="il-company__panel">
            <p className="il-eyebrow il-eyebrow--inverted">{D.company.eyebrow}</p>
            <h2
              className="il-company__title"
              dangerouslySetInnerHTML={{ __html: D.company.titleHtml }}
            />
            <p className="il-company__body">{D.company.body}</p>
            <table className="il-company__table">
              <tbody>
                {D.company.rows.map(([k, v]) => (
                  <tr key={k}>
                    <th>{k}</th>
                    <td>
                      {v.type === 'text' && v.value}
                      {v.type === 'related' && (
                        <ul className="il-related">
                          {v.items.map((it, i) => (
                            <li key={i} className="il-related__item">
                              <div className="il-related__name">{it.name}</div>
                              <div className="il-related__addr">{it.addr}</div>
                              <a className="il-related__url" href={it.url} target="_blank" rel="noopener noreferrer">
                                {it.url}
                                <span className="il-related__arrow"></span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="il-company__cta">
              <a className="il-btn il-btn--ghost-inv" href="company.html">
                会社情報の詳細を見る
                <span className="il-arrow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- News + Blog ----------
function ILNews() {
  const tabs = Object.keys(D.news);
  const [tab, setTab] = React.useState(tabs[0]);
  const items = D.news[tab].slice(0, 3);

  return (
    <section id="news" className="il-section il-section--paper">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">NEWS & STORIES</p>
          <h2 className="il-h-section">
            お知らせ・ブログ
          </h2>
          <p className="il-section-lede">
            会社からのお知らせ、メディア掲載情報、インテリアの選び方やコーディネーターによるコラムをお届けしています。
          </p>
        </div>
        <div className="il-news-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={`il-news-tab ${t === tab ? 'is-active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="il-news-list">
          {items.map((n, i) => (
            <a key={i} className="il-news-item" href={n.id ? `news-detail.html?id=${n.id}` : 'news-detail.html'}>
              <span className="il-news-date">{n.date}</span>
              <span className="il-news-cat">{n.cat}</span>
              <span className="il-news-title">{n.title}</span>
              <span className="il-news-arrow"></span>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a className="il-btn il-btn--ghost" href="news.html">
            お知らせ・ブログ　一覧を見る
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function ILFAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="il-section">
      <div className="il-container">
        <div className="il-section-head">
          <p className="il-eyebrow">FREQUENTLY ASKED</p>
          <h2 className="il-h-section">
            よくあるご質問
          </h2>
        </div>
        <div className="il-narrow">
          <div className="il-faq">
            {D.faq.map((f, i) => (
              <div key={i} className={`il-faq-item ${i === open ? 'is-open' : ''}`}>
                <button
                  className="il-faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={i === open}
                >
                  {f.q}
                  <span className="il-faq-toggle"></span>
                </button>
                <div className="il-faq-a">
                  <div className="il-faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function ILContact() {
  return (
    <section id="contact" className="il-section il-section--tight" style={{ padding: 0 }}>
      <div className="il-container" style={{ maxWidth: 1440, paddingInline: 0 }}>
        <div className="il-contact">
          <div className="il-contact__body">
            <p className="il-eyebrow il-eyebrow--inverted">CONTACT</p>
            <h2 className="il-contact__title">
              お問い合わせ
            </h2>
            <p className="il-contact__lede">
              お立場に応じて、最適な担当者よりご返答いたします。お気軽にお問い合わせくださいませ。
            </p>
            <div className="il-contact__paths">
              {D.contactPaths.map((p) => (
                <a key={p.num} className="il-contact__path" href={p.num === '02' ? 'contact-corporate.html' : '#contact-form'}>
                  <span className="il-contact__path-num">{p.num}</span>
                  <span>
                    <span className="il-contact__path-title">{p.title}</span>
                    <span className="il-contact__path-sub" style={{ display: 'block' }}>{p.sub}</span>
                  </span>
                  <span className="il-contact__path-arrow"></span>
                </a>
              ))}
            </div>
          </div>
          <div
            className="il-contact__visual"
            style={{ backgroundImage: `url(${window.ILR('assets/flow_meeting.png')})` }}
          />
        </div>
      </div>
    </section>
  );
}

// ---------- Bottom Dual CTA (FAQ + Contact) ----------
function ILDualCTA() {
  return (
    <section id="contact" className="il-dual-cta">
      <div className="il-dual-cta__inner">
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">FAQ</p>
          <h3 className="il-dual-cta__col-title">よくあるご質問</h3>
          <a className="il-btn il-btn--ghost-inv" href="faq.html">
            よくあるご質問を見る
            <span className="il-arrow"></span>
          </a>
        </div>
        <div className="il-dual-cta__rule"></div>
        <div className="il-dual-cta__col">
          <p className="il-dual-cta__col-eyebrow">CONTACT</p>
          <h3 className="il-dual-cta__col-title">お問い合わせ</h3>
          <a className="il-btn il-btn--ghost-inv" href="contact-corporate.html">
            お問い合わせフォーム
            <span className="il-arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function ILFooter() {
  return (
    <footer className="il-footer">
      <div className="il-container">
        <div className="il-footer__top">
          <div className="il-footer__brand">
            <a className="il-logo" href="#top">
              <span className="il-logo__mark">innovation life</span>
              <span className="il-logo__sub" style={{ color: 'rgba(246,241,232,0.6)' }}>イノベーションライフ株式会社</span>
            </a>
            <p className="il-footer__brand-tag">{D.brand.tag}</p>
            <p className="il-footer__brand-addr">
              〒729-0142<br/>
              広島県尾道市西藤町 226
            </p>
            <div className="il-footer__social">
              <a
                href="https://www.youtube.com/@kaguraku-4FUL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="il-footer__social-link"
              >
                <img src={window.ILR('assets/sns_youtube.png')} alt="YouTube" />
              </a>
              <a
                href="https://www.instagram.com/kaguraku.interior/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="il-footer__social-link"
              >
                <span className="il-ig-glyph" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <defs>
                      <radialGradient id="ig-grad" cx="0.3" cy="1" r="1.1">
                        <stop offset="0" stopColor="#FDD56A"/>
                        <stop offset="0.25" stopColor="#FEA45C"/>
                        <stop offset="0.5" stopColor="#F65E78"/>
                        <stop offset="0.75" stopColor="#C9379D"/>
                        <stop offset="1" stopColor="#6F4EC9"/>
                      </radialGradient>
                    </defs>
                    <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig-grad)"/>
                    <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="#fff" strokeWidth="1.7"/>
                    <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.7"/>
                    <circle cx="16.4" cy="7.6" r="1.1" fill="#fff"/>
                  </svg>
                </span>
              </a>
              <a
                href="https://page.line.me/578gpbjx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                className="il-footer__social-link"
              >
                <img src={window.ILR('assets/sns_line.png')} alt="LINE" />
              </a>
              <a
                href="https://www.facebook.com/kaguraku.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="il-footer__social-link"
              >
                <img src={window.ILR('assets/sns_facebook.png')} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="il-footer__sitemap">
            <div className="il-footer__col">
              <p className="il-footer__col-head">SERVICES</p>
              <ul>
                <li><a href="builders.html">工務店様・ハウスメーカー様</a></li>
                <li><a href="furnituremakers.html">家具メーカー様</a></li>
                <li><a href="minpaku.html">民泊業者様</a></li>
                <li><a href="kaguraku.html">個人のお客様（カグラクのご紹介）</a></li>
              </ul>
            </div>
            <div className="il-footer__col">
              <p className="il-footer__col-head">COMPANY</p>
              <ul>
                <li><a href="company.html#message">代表メッセージ</a></li>
                <li><a href="company.html#profile">会社概要</a></li>
                <li><a href="company.html#partners">パートナー一覧</a></li>
                <li><a href="company.html#group">4FULグループについて</a></li>
              </ul>
            </div>
            <div className="il-footer__col">
              <p className="il-footer__col-head">STORIES</p>
              <ul>
                <li><a href="news.html">お知らせ・ブログ</a></li>
                {/* 提案事例：コンテンツ準備中のため一時的に非表示。掲載時はこの行のコメントを外す */}
                {/* <li><a href="case-list.html">提案事例</a></li> */}
              </ul>
            </div>
            <div className="il-footer__col">
              <p className="il-footer__col-head">CONTACT</p>
              <ul>
                <li><a href="faq.html">よくあるご質問</a></li>
                <li><a href="privacy.html">プライバシーポリシー</a></li>
                <li><a href="contact-corporate.html">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="il-footer__bottom">
          <div className="il-footer__legal"></div>
          <div>© 2026 INNOVATION LIFE INC. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
}

// Make components available globally for app.jsx
Object.assign(window, {
  ILHeader, ILHero, ILMarquee, ILTargets, ILCases, ILPartners,
  ILCompany, ILNews, ILDualCTA, ILFooter,
});
