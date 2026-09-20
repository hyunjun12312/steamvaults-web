export type Language = 'ko' | 'en' | 'ru' | 'zh';

export interface TranslationSchema {
  nav: {
    sell: string;
    buy: string;
    escrow: string;
    tools: string;
    howItWorks: string;
    signIn: string;
  };
  hero: {
    liveQuote: string;
    polygonNetwork: string;
    titleLine1: string;
    titleLine2: string;
    sellTab: string;
    buyTab: string;
    sackOfGems: string;
    live: string;
    quantity: string;
    sacksUnit: string;
    gemsPerSack: string;
    priceFrozen: string;
    seconds: string;
    sellBtn: string;
    buyBtn: string;
    modalTitleSell: string;
    modalTitleBuy: string;
    modalAsset: string;
    modalPayout: string;
    modalNetwork: string;
    modalFreezeRemaining: string;
    modalStep1: string;
    modalStep2: string;
    modalSimulateBtn: string;
    modalOpenSteamBtn: string;
    modalSuccessTitle: string;
    modalSuccessDesc: string;
    modalConfirmBtn: string;
  };
  extension: {
    spotlight: string;
    title: string;
    subtitle: string;
    installBtn: string;
    hudFeature1: string;
    hudFeature2: string;
  };
  toolkit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    trendDown: string;
    trendUp: string;
    trendNeutral: string;
    colItem: string;
    colTrend: string;
    badgeMarket: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    openIdTitle: string;
    openIdDesc: string;
    steamGuardTitle: string;
    steamGuardDesc: string;
    botTitle: string;
    botDesc: string;
  };
  faq: {
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    signInBtn: string;
    liveQuoteBtn: string;
  };
  footer: {
    rights: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ko: {
    nav: {
      sell: '판매',
      buy: '구매',
      escrow: '에스크로',
      tools: '도구',
      howItWorks: '이용 방법',
      signIn: 'Steam 로그인',
    },
    hero: {
      liveQuote: '실시간 보석 시세',
      polygonNetwork: 'POLYGON POS',
      titleLine1: 'Steam 지갑 간편 충전',
      titleLine2: '아이템 판매하고 USDT 즉시 수령',
      sellTab: '판매',
      buyTab: '구매',
      sackOfGems: '보석 주머니 (Sack of Gems)',
      live: '실시간:',
      quantity: '수량',
      sacksUnit: '주머니',
      gemsPerSack: '1 주머니 = 1,000 보석',
      priceFrozen: '가격 동결 보장',
      seconds: '초 남음',
      sellBtn: '판매',
      buyBtn: '구매',
      modalTitleSell: '스팀 보석 판매 제안 (Trade Offer)',
      modalTitleBuy: '스팀 보석 구매 (Deposit)',
      modalAsset: '자산 수량',
      modalPayout: '정산 금액 (USDT)',
      modalNetwork: '네트워크',
      modalFreezeRemaining: '가격 고정 잔여',
      modalStep1: 'SteamVaults 검증 봇 거래 제안 생성 완료',
      modalStep2: '스마트폰 Steam Guard 모바일 인증기에서 승인 대기 중...',
      modalSimulateBtn: '모바일 승인 완료 (시뮬레이션)',
      modalOpenSteamBtn: '스팀 열기',
      modalSuccessTitle: '거래 체결 및 정산 완료!',
      modalSuccessDesc: 'Steam Guard 2FA 승인이 정상 확인되었습니다. Polygon PoS 네트워크를 통해 잔고에 즉시 입금되었습니다.',
      modalConfirmBtn: '확인',
    },
    extension: {
      spotlight: 'CHROME 확장 프로그램',
      title: 'SteamVaults for Chrome v0.7.6',
      subtitle: '스팀 장터 및 보관함에서 15% 밸브 수수료 자동 공제, 실시간 USDT 환산 가치, 아비트라지 차익을 즉시 확인하세요.',
      installBtn: 'Chrome 웹스토어 설치',
      hudFeature1: '인벤토리 1클릭 즉시 가치 분석',
      hudFeature2: '스팀 장터 시세 실시간 비교 및 내보내기',
    },
    toolkit: {
      eyebrow: '도구 및 레이더',
      title: '차익거래 레이더 (Arbitrage Radar)',
      subtitle: '100개 이상의 유동성 스팀 자산에 대한 실시간 장터간 가격 불일치 모니터링 엔진.',
      trendDown: '하락',
      trendUp: '상승',
      trendNeutral: '보합',
      colItem: '아이템',
      colTrend: '현재 가격 등락률 / 변동',
      badgeMarket: 'Steam Market',
    },
    trust: {
      eyebrow: '보안 및 신뢰 아키텍처',
      title: '직접 검증할 수 있는 안전 장치',
      openIdTitle: 'Steam OpenID',
      openIdDesc: 'Valve 공식 OpenID 프로토콜을 통해 로그인합니다. 플랫폼은 사용자의 비밀번호나 인증 정보에 일체 접근하지 않으며 API Key 등록을 요구하지 않습니다.',
      steamGuardTitle: 'Steam Guard 모바일 승인',
      steamGuardDesc: '모든 거래는 사용자의 스마트폰 Steam 모바일 인증기(2FA)에서 최종 승인해야만 체결되므로 자산이 안전하게 보호됩니다.',
      botTitle: '24/7 자동화 즉시 정산',
      botDesc: '스팀 거래 교환 확인 즉시 Polygon PoS 블록체인 네트워크를 통해 1~3초 내로 정산 잔고가 지갑 또는 계정에 지급됩니다.',
    },
    faq: {
      items: [
        {
          q: '보석(Sack of Gems) 또는 TF2 열쇠 판매 시 USDT 정산까지 얼마나 걸리나요?',
          a: 'Steam 모바일 인증기(Steam Guard)에서 거래 제안을 최종 승인하는 즉시, 시스템 봇이 인벤토리 입고를 확인하고 Polygon PoS 블록체인을 통해 1~3초 내로 귀하의 지갑 또는 플랫폼 잔고로 정산됩니다. 은행 영업일 대기나 관리자 수동 승인 절차가 전혀 없는 100% 자동화 온체인 시스템입니다.',
        },
        {
          q: '30초 가격 동결(Freeze Price) 시스템은 어떻게 작동하며 슬리피지가 발생하나요?',
          a: '암호화폐 및 스팀 장터의 급격한 시세 변동으로부터 사용자를 보호하기 위해, 수량을 입력하고 거래를 시작하면 해당 시점의 교환 단가가 30초간 100% 고정됩니다(0% Slippage 보장). 30초 카운트다운 이내에 스팀 가드로 거래를 승인하시면 화면에 표시된 단가 그대로 1원도 오차 없이 정산됩니다.',
        },
        {
          q: '30초가 지나거나 거래 제안을 거절/취소하면 어떻게 되나요? 수수료가 청구되나요?',
          a: '어떠한 수수료나 페널티도 발생하지 않습니다. 30초 타이머가 만료되거나 사용자가 Steam 모바일 앱에서 거래 제안을 거절 또는 취소할 경우, 거래는 즉시 무효화되며 아이템은 귀하의 Steam 보관함에 온전히 남습니다. 블록체인 가스비나 취소 수수료는 0원입니다.',
        },
        {
          q: '대량 거래(Bulk Trade) 시 한 번에 최대 몇 개까지 교환할 수 있나요?',
          a: '보석 자루(Sack of Gems)는 단일 거래당 최대 5,000개(500만 Gems), TF2 Mann Co. 보급 상자 열쇠는 1회 최대 500개까지 단일 Steam Trade Offer로 묶어서 즉시 일괄 교환할 수 있습니다. 스팀 인벤토리 슬롯 한도를 초과하지 않도록 분할 일괄 교환을 지원합니다.',
        },
        {
          q: 'Steam 계정 비밀번호나 Steam Web API Key를 요구하나요? 계정 탈취 위험은 없나요?',
          a: '절대로 요구하지 않습니다. SteamVaults는 Valve 공식 Steam OpenID 프로토콜만을 사용하여 사용자의 공개 64비트 SteamID만 확인합니다. 당사 플랫폼은 비밀번호, 이메일, 스팀 가드 코드를 수집할 수 없습니다. 특히 최근 빈번한 API Key 스캠(API Scam) 위험을 원천 차단하기 위해 사용자의 Steam Web API Key 등록을 일체 요구하지 않습니다.',
        },
        {
          q: '이 서비스를 이용하면 Steam 계정이 거래 정지(Trade Ban)나 제재를 받을 위험이 있나요?',
          a: '전혀 없습니다. SteamVaults의 모든 자산 교환은 Valve의 공식 Steam Trade Offer(보관함 아이템 교환 제안) API 규격과 서비스 약관(SSA)을 철저히 준수합니다. 비인가 치트 소프트웨어나 무허가 스크립트가 아닌 정상적인 P2P 교환 시스템으로 안전하게 처리됩니다.',
        },
        {
          q: '15일 거래 보류(Trade Hold)가 발생하는 원인과 해결 조건은 무엇인가요?',
          a: 'Valve의 스팀 보안 정책상, 스마트폰 Steam Mobile Authenticator(스팀 가드 앱)가 최소 7일 이상 연속으로 활성화되어 있어야 15일 거래 보류 없이 즉시 아이템 교환이 완료됩니다. 모바일 인증기를 등록한 지 7일이 경과하지 않았거나 이메일 인증만 사용하는 계정은 Valve 정책에 의해 15일 지연이 강제되므로 즉시 정산이 불가능합니다.',
        },
        {
          q: '아비트라지 레이더(Arbitrage Radar)의 할인율(-XX%)과 마진은 어떻게 계산되나요?',
          a: 'Steam 커뮤니티 장터의 최저 등록 가격(Lowest Ask)과 SteamVaults 유동성 풀 가격을 실시간 대조하여 산출합니다. 핵심은 Valve 공식 마켓 수수료 15%(Steam 기본 수수료 5% + 게임 퍼블리셔 수수료 10%)가 정확히 역산 반영된다는 점입니다. 단순 액면가 비교가 아닌, 사용자가 스팀 장터에 판매 후 수령하는 실제 순수령액 대비 차익 마진을 실시간 정밀 계산합니다.',
        },
        {
          q: 'Polygon PoS 네트워크 가스비(Gas Fee)는 누가 부담하며 얼마인가요?',
          a: 'SteamVaults는 이더리움 메인넷 대비 1,000배 이상 저렴하고 빠른 Polygon PoS(POL) 네트워크를 채택하여, 트랜잭션당 네트워크 가스비가 약 $0.005 ~ $0.01 미만에 불과합니다. 입금 및 스왑 시 가스비 부담이 사실상 없으며, 출금 시에도 사용자에게 불필요한 네트워크 수수료를 전가하지 않습니다.',
        },
        {
          q: 'SteamVaults Chrome 확장 프로그램은 스팀 장터에서 어떤 기능을 제공하나요?',
          a: '공식 Chrome 웹스토어 확장 프로그램을 설치하면 Steam 커뮤니티 장터 및 보관함 페이지에 실시간 HUD 오버레이가 활성화됩니다. 각 아이템마다 ① Valve 15% 수수료 공제 후 실수령액, ② SteamVaults 실시간 USDT 즉시 환전 가치, ③ 외부 마켓 대비 아비트라지 할인율을 별도의 계산기 없이 웹 브라우저에서 바로 확인할 수 있습니다.',
        },
        {
          q: '즉시 유동성 스왑(Instant Swap)과 아비트라지 레이더 지원 품목의 차이는 무엇인가요?',
          a: '자동화 봇을 통해 1~3초 만에 USDT로 즉시 현금화(Swap)가 가능한 유동성 표준 자산은 Sack of Gems(보석 자루) 및 TF2 Mann Co. Supply Crate Key(팀포2 열쇠)입니다. CS2 스킨, Rust 아이템, Dota 2 불멸 세트 등은 아비트라지 레이더를 통해 실시간 시세 차익과 최적의 매수/매도 타이밍을 제공합니다.',
        },
      ],
    },
    finalCta: {
      title: '지금 실시간 견적을 확인하고 즉시 거래하세요',
      signInBtn: 'Steam 로그인으로 시작',
      liveQuoteBtn: '실시간 시세 확인',
    },
    footer: {
      rights: '© 2026 SteamVaults. All rights reserved.',
      disclaimer: 'SteamVaults는 Valve Corporation과 제휴, 승인 또는 보증 관계가 아닙니다. Steam 및 Steam 로고는 미국 및 기타 국가에서 Valve Corporation의 상표 또는 등록 상표입니다.',
    },
  },
  en: {
    nav: {
      sell: 'Sell',
      buy: 'Buy',
      escrow: 'Escrow',
      tools: 'Tools',
      howItWorks: 'How it works',
      signIn: 'Sign in with Steam',
    },
    hero: {
      liveQuote: 'LIVE SACK OF GEMS QUOTE',
      polygonNetwork: 'POLYGON POS',
      titleLine1: 'Top up Steam Wallet',
      titleLine2: 'or sell items for USDT',
      sellTab: 'Sell',
      buyTab: 'Buy',
      sackOfGems: 'Sack of Gems',
      live: 'Live:',
      quantity: 'Quantity',
      sacksUnit: 'Sacks',
      gemsPerSack: '1 Sack = 1,000 Gems',
      priceFrozen: 'Price frozen for',
      seconds: 'seconds',
      sellBtn: 'Sell for',
      buyBtn: 'Buy for',
      modalTitleSell: 'Steam Gems Trade Offer',
      modalTitleBuy: 'Buy Steam Gems (Deposit)',
      modalAsset: 'Asset Quantity',
      modalPayout: 'Settlement (USDT)',
      modalNetwork: 'Network',
      modalFreezeRemaining: 'Price Lock Remaining',
      modalStep1: 'SteamVaults Verified Bot Offer Dispatched',
      modalStep2: 'Awaiting confirmation in Steam Mobile Authenticator...',
      modalSimulateBtn: 'Confirm Mobile Trade (Simulate)',
      modalOpenSteamBtn: 'Open Steam',
      modalSuccessTitle: 'Trade Executed & Settled!',
      modalSuccessDesc: 'Steam Guard 2FA confirmation verified. USDT has been credited instantly via the Polygon PoS network.',
      modalConfirmBtn: 'Done',
    },
    extension: {
      spotlight: 'CHROME EXTENSION SPOTLIGHT',
      title: 'SteamVaults for Chrome v0.7.6',
      subtitle: 'Instant 1-click inventory inspection, real-time cashout USDT value, and net earnings after Valve 15% fee right inside Steam Community Market.',
      installBtn: 'Chrome Extension',
      hudFeature1: 'Instant 1-click inventory inspection',
      hudFeature2: 'Inspect & Export to Steam',
    },
    toolkit: {
      eyebrow: 'TOOLKIT & RADAR',
      title: 'Arbitrage Radar',
      subtitle: 'Real-time cross-platform price discrepancy engine tracking 100+ liquid Steam assets.',
      trendDown: 'Drop',
      trendUp: 'Rise',
      trendNeutral: 'Flat',
      colItem: 'Item',
      colTrend: 'Price Spread / Fluctuation',
      badgeMarket: 'Steam Market',
    },
    trust: {
      eyebrow: 'TRUST ARCHITECTURE',
      title: 'Things you can verify',
      openIdTitle: 'Steam OpenID',
      openIdDesc: 'Sign in securely via official Valve Steam OpenID. We never access passwords or 2FA credentials and never request your Steam Web API Key.',
      steamGuardTitle: 'Steam Guard Mobile 2FA',
      steamGuardDesc: 'Every trade offer must be manually confirmed in your personal Steam Mobile Authenticator, ensuring complete asset safety.',
      botTitle: '24/7 Automated Settlement',
      botDesc: 'Upon trade confirmation, USDT is disbursed directly on the Polygon PoS network within 1–3 seconds with zero manual approval lag.',
    },
    faq: {
      items: [
        {
          q: 'How long does USDT settlement take when selling Sack of Gems or TF2 Keys?',
          a: 'The moment you confirm the trade offer in your Steam Mobile Authenticator, our automated bot verifies inventory receipt and credits USDT to your balance via Polygon PoS within 1 to 3 seconds. There is zero manual review or banking delay.',
        },
        {
          q: 'How does the 30-second Freeze Price mechanism work? Is there slippage?',
          a: 'When you begin a swap, the unit exchange quote is locked for exactly 30 seconds (0% slippage guarantee). Confirming the trade within 30 seconds guarantees settlement at the exact displayed price without any spread error.',
        },
        {
          q: 'What happens if the 30 seconds expire or I decline the trade? Are there fees?',
          a: 'No fees or penalties occur. If the timer expires or you decline the offer, the transaction is cancelled and your items remain safely in your Steam inventory. Cancellation and gas fees are $0.',
        },
        {
          q: 'What is the maximum quantity for bulk trading in a single transaction?',
          a: 'You can swap up to 5,000 Sacks of Gems (5,000,000 Gems) and up to 500 TF2 Mann Co. Supply Crate Keys in a single batch Steam Trade Offer without exceeding Steam inventory limitations.',
        },
        {
          q: 'Do you require Steam passwords or Steam Web API Keys? Is there risk of API Scam?',
          a: 'Never. We authenticate strictly using official Valve Steam OpenID, retrieving only your public 64-bit SteamID. We never ask for your Steam Web API Key, eliminating the risk of API Scams completely.',
        },
        {
          q: 'Is there any risk of Trade Ban or Community Ban by using this service?',
          a: 'No. All trades follow official Valve Steam Trade Offer API specifications and Steam Subscriber Agreement (SSA) terms, executed as legitimate P2P trades with verified bot accounts.',
        },
        {
          q: 'What are the requirements to avoid the 15-day Trade Hold?',
          a: 'Per Valve security policy, your Steam Mobile Authenticator (Steam Guard) must have been active for at least 7 consecutive days. Accounts with newly enabled authenticators or email-only 2FA will face Valve 15-day trade holds.',
        },
        {
          q: 'How is the Arbitrage Radar discount percentage calculated?',
          a: 'It compares the lowest Steam Community Market ask with our liquidity pool price, precisely deducting Valve 15% marketplace fee (5% Steam + 10% game developer cut) to display net profit spread.',
        },
        {
          q: 'Who pays the blockchain network gas fee on Polygon PoS?',
          a: 'SteamVaults operates on Polygon PoS where gas fees are negligible (<$0.01 per transaction). We optimize transactions via smart contract batching so users incur zero hidden network costs.',
        },
        {
          q: 'What capabilities does the SteamVaults Chrome Extension offer?',
          a: 'The extension injects a live HUD overlay directly onto Steam Community Market pages, showing net proceeds after Valve 15% cut, real-time USDT cashout value, and arbitrage margins without external calculators.',
        },
        {
          q: 'Which items support Instant Swap vs Arbitrage Radar tracking?',
          a: 'Instant liquidity swaps (1-3s payout) support Sack of Gems and TF2 Mann Co. Supply Crate Keys. CS2, Rust, and Dota 2 items are tracked via our Arbitrage Radar for real-time spread discovery.',
        },
      ],
    },
    finalCta: {
      title: 'Ready to check your live quote?',
      signInBtn: 'Sign in with Steam',
      liveQuoteBtn: 'Sign in live quote',
    },
    footer: {
      rights: '© 2026 SteamVaults. All rights reserved.',
      disclaimer: 'SteamVaults is not affiliated with, authorized, or endorsed by Valve Corporation. Steam and the Steam logo are trademarks or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
    },
  },
  ru: {
    nav: {
      sell: 'Продать',
      buy: 'Купить',
      escrow: 'Эскроу',
      tools: 'Инструменты',
      howItWorks: 'Как это работает',
      signIn: 'Войти через Steam',
    },
    hero: {
      liveQuote: 'КУРС МЕШКОВ САМОЦВЕТОВ LIVE',
      polygonNetwork: 'СЕТЬ POLYGON POS',
      titleLine1: 'Пополняйте баланс Steam',
      titleLine2: 'или продавайте за USDT',
      sellTab: 'Продать',
      buyTab: 'Купить',
      sackOfGems: 'Мешок самоцветов',
      live: 'Курс:',
      quantity: 'Количество',
      sacksUnit: 'Мешков',
      gemsPerSack: '1 мешок = 1 000 самоцветов',
      priceFrozen: 'Цена зафиксирована на',
      seconds: 'сек',
      sellBtn: 'Продать за',
      buyBtn: 'Купить за',
      modalTitleSell: 'Предложение обмена Steam',
      modalTitleBuy: 'Купить самоцветы Steam (Депозит)',
      modalAsset: 'Количество активов',
      modalPayout: 'Сумма выплаты (USDT)',
      modalNetwork: 'Сеть',
      modalFreezeRemaining: 'Осталось фиксации',
      modalStep1: 'Оффер от проверенного бота SteamVaults отправлен',
      modalStep2: 'Ожидание подтверждения в Steam Mobile Authenticator...',
      modalSimulateBtn: 'Подтвердить в приложении (Симуляция)',
      modalOpenSteamBtn: 'Открыть Steam',
      modalSuccessTitle: 'Обмен успешно завершен!',
      modalSuccessDesc: 'Подтверждение Steam Guard 2FA принято. Средства USDT моментально поступили на баланс через Polygon PoS.',
      modalConfirmBtn: 'Готово',
    },
    extension: {
      spotlight: 'РАСШИРЕНИЕ ДЛЯ CHROME',
      title: 'SteamVaults для Chrome v0.7.6',
      subtitle: 'Мгновенный расчет комиссии Valve 15%, чистый доход и оценка вывода в USDT прямо на торговой площадке Steam.',
      installBtn: 'Расширение Chrome',
      hudFeature1: 'Осмотр инвентаря в 1 клик',
      hudFeature2: 'Осмотр и экспорт в Steam',
    },
    toolkit: {
      eyebrow: 'ИНСТРУМЕНТЫ И РАДАР',
      title: 'Арбитражный радар',
      subtitle: 'Движок отслеживания разницы цен в реальном времени по более чем 100 ликвидным предметам Steam.',
      trendDown: 'Падение',
      trendUp: 'Рост',
      trendNeutral: 'Без изм.',
      colItem: 'Предмет',
      colTrend: 'Спред цен / Динамика',
      badgeMarket: 'Торговая площадка Steam',
    },
    trust: {
      eyebrow: 'АРХИТЕКТУРА БЕЗОПАСНОСТИ',
      title: 'Факты, которые можно проверить',
      openIdTitle: 'Steam OpenID',
      openIdDesc: 'Авторизация только через официальный протокол Valve Steam OpenID. Мы не запрашиваем пароли, коды 2FA и никогда не требуем Steam Web API Key.',
      steamGuardTitle: 'Подтверждение в Steam Guard',
      steamGuardDesc: 'Каждый обмен подтверждается вручную в мобильном аутентификаторе Steam на вашем телефоне, что исключает кражу предметов.',
      botTitle: 'Автовыплаты 24/7 за 1-3 сек',
      botDesc: 'Сразу после подтверждения трейда USDT отправляются через сеть Polygon PoS в течение 1–3 секунд без ручных задержек.',
    },
    faq: {
      items: [
        {
          q: 'Сколько времени занимает выплата USDT при продаже самоцветов или ключей TF2?',
          a: 'Сразу после подтверждения трейда в мобильном приложении Steam Guard бот фиксирует получение предметов, и USDT зачисляются на ваш кошелек или баланс через Polygon PoS за 1–3 секунды без ручных задержек.',
        },
        {
          q: 'Как работает 30-секундная фиксация цены? Возможен ли слиппейдж?',
          a: 'При создании обмена курс фиксируется ровно на 30 секунд с гарантией 0% проскальзывания. При подтверждении трейда в течение таймера вы получаете в точности указанную сумму.',
        },
        {
          q: 'Что будет, если время истечет или я отменю обмен? Есть ли комиссия?',
          a: 'Никаких штрафов и комиссий нет. Предметы остаются в вашем инвентаре Steam. Комиссия за отмену и газ составляет $0.',
        },
        {
          q: 'Какое максимальное количество предметов можно обменять за один раз?',
          a: 'До 5 000 мешков самоцветов (5 000 000 Gems) и до 500 ключей TF2 Mann Co. в одном обмене Steam Trade Offer.',
        },
        {
          q: 'Требуется ли пароль Steam или Steam Web API Key? Есть ли риск API-скама?',
          a: 'Категорически нет. Вход осуществляется исключительно через официальный Valve Steam OpenID. Мы не запрашиваем API Key, что на 100% исключает риск перехвата обменов.',
        },
        {
          q: 'Есть ли риск получить трейд-бан или блокировку аккаунта Steam?',
          a: 'Нет. Все обмены производятся строго по официальным стандартам Valve Steam Trade Offer и правилам SSA через верифицированных ботов.',
        },
        {
          q: 'Какие условия нужны, чтобы не получить 15-дневное удержание обмена (Trade Hold)?',
          a: 'Мобильный аутентификатор Steam Guard должен быть активен не менее 7 дней подряд. Если аутентификатор подключен менее 7 дней, Valve заморозит обмен на 15 дней.',
        },
        {
          q: 'Как рассчитывается процент скидки и спред в Арбитражном радаре?',
          a: 'Радар сравнивает минимальную цену на торговой площадке Steam с пулом ликвидности SteamVaults, вычитая комиссию Valve 15% (5% Steam + 10% разработчик), показывая чистую прибыль.',
        },
        {
          q: 'Кто оплачивает сетевой газ в Polygon PoS?',
          a: 'Платформа использует Polygon PoS, где транзакция обходится менее чем в $0.01. Скрытые комиссии для пользователей отсутствуют.',
        },
        {
          q: 'Что показывает расширение SteamVaults для Chrome?',
          a: 'Расширение добавляет оверлей прямо на страницы торговой площадки Steam: чистую стоимость после комиссии Valve 15%, эквивалент в USDT и арбитражный спред.',
        },
        {
          q: 'Какие предметы поддерживают мгновенный обмен, а какие только радар?',
          a: 'Мгновенный обмен за 1–3 секунды поддерживают Мешки самоцветов и Ключи TF2. Предметы CS2, Rust и Dota 2 отслеживаются в радаре для поиска арбитражных сделок.',
        },
      ],
    },
    finalCta: {
      title: 'Готовы узнать точный курс прямо сейчас?',
      signInBtn: 'Войти через Steam',
      liveQuoteBtn: 'Проверить курс',
    },
    footer: {
      rights: '© 2026 SteamVaults. Все права защищены.',
      disclaimer: 'SteamVaults не связан с Valve Corporation. Steam и логотип Steam являются товарными знаками Valve Corporation.',
    },
  },
  zh: {
    nav: {
      sell: '出售',
      buy: '购买',
      escrow: '托管',
      tools: '工具',
      howItWorks: '运作方式',
      signIn: '通过 Steam 登录',
    },
    hero: {
      liveQuote: '宝箱宝石实时行情',
      polygonNetwork: 'POLYGON POS',
      titleLine1: '充值 Steam 钱包',
      titleLine2: '或出售饰品兑换 USDT',
      sellTab: '出售',
      buyTab: '购买',
      sackOfGems: '宝箱宝石袋',
      live: '实时单价:',
      quantity: '数量',
      sacksUnit: '袋',
      gemsPerSack: '1 袋 = 1,000 宝石',
      priceFrozen: '价格锁定倒计时',
      seconds: '秒',
      sellBtn: '出售可得',
      buyBtn: '购买需付',
      modalTitleSell: 'Steam 宝石交易报价 (Trade Offer)',
      modalTitleBuy: '购买 Steam 宝石 (充值)',
      modalAsset: '资产数量',
      modalPayout: '结算金额 (USDT)',
      modalNetwork: '网络',
      modalFreezeRemaining: '报价锁定剩余',
      modalStep1: 'SteamVaults 官方验证机器人报价已发送',
      modalStep2: '请在手机 Steam 移动令牌中确认交易...',
      modalSimulateBtn: '手机确认完毕 (模拟测试)',
      modalOpenSteamBtn: '打开 Steam 报价',
      modalSuccessTitle: '交易完成并已结算！',
      modalSuccessDesc: 'Steam Guard 双重验证已确认。USDT 已通过 Polygon PoS 网络秒级到账。',
      modalConfirmBtn: '确定',
    },
    extension: {
      spotlight: 'CHROME 浏览器扩展精选',
      title: 'SteamVaults Chrome 扩展 v0.7.6',
      subtitle: '在 Steam 社区市场和个人库存中直接显示扣除 15% Valve 手续费后的净收入、实时 USDT 折算价值与套利空间。',
      installBtn: 'Chrome 扩展程序',
      hudFeature1: '一键库存极速检视',
      hudFeature2: '检视并导出至 Steam',
    },
    toolkit: {
      eyebrow: '实用工具与雷达',
      title: '饰品套利雷达',
      subtitle: '实时跨平台价差追踪引擎，持续监控 100+ 热门高流动性 Steam 饰品与资产。',
      trendDown: '下跌',
      trendUp: '上涨',
      trendNeutral: '持平',
      colItem: '饰品名称',
      colTrend: '当前价差 / 波动',
      badgeMarket: 'Steam 社区市场',
    },
    trust: {
      eyebrow: '信任与安全架构',
      title: '可供公开验证的事实',
      openIdTitle: 'Steam OpenID 官方协议',
      openIdDesc: '仅通过 Valve 官方 Steam OpenID 登录，平台绝不触碰用户密码或手机令牌代码，亦不索取 Steam Web API Key，杜绝 API 劫持。',
      steamGuardTitle: 'Steam Guard 手机令牌双重验证',
      steamGuardDesc: '每笔交易均需用户在本人手机 Steam 客户端中确认后方能生效，资产掌控权 100% 在用户手中。',
      botTitle: '24/7 全自动秒级结算',
      botDesc: '交易完成瞬间，系统通过超高速低 Gas 费的 Polygon PoS 网络在 1~3 秒内完成 USDT 结算。',
    },
    faq: {
      items: [
        {
          q: '出售宝石袋或 TF2 钥匙后，多久可以收到 USDT？',
          a: '只要您在手机 Steam 令牌中确认报价，系统机器人即刻确认入库，并通过 Polygon PoS 网络在 1~3 秒内将 USDT 发放至您的账户或钱包，无需任何人工审核。',
        },
        {
          q: '30秒锁定价格机制是如何运作的？是否存在滑点？',
          a: '开始交易后报价将锁定 30 秒（0% 滑点保证）。在 30 秒内完成 Steam 令牌确认，即可按锁定金额全额结算，不受市场波动影响。',
        },
        {
          q: '如果 30 秒超时或拒绝交易会怎样？会扣手续费吗？',
          a: '完全不会产生任何费用或惩罚。若报价超时或被取消，饰品仍完好保留在您的 Steam 库存中，取消费与 Gas 费均为 0 元。',
        },
        {
          q: '单笔大额批量交易最多支持多少数量？',
          a: '单笔交易支持最多 5,000 袋宝石（500万 Gems）以及 500 把 TF2 曼恩曼钥匙一键打包交易，并支持分批防爆仓功能。',
        },
        {
          q: '需要提供 Steam 密码或 Steam Web API Key 吗？会有被盗号风险吗？',
          a: '绝对不需要。平台严格采用 Valve 官方 Steam OpenID 登录，仅获取公开 64 位 SteamID，绝不索取 API Key，从根源杜绝 API 钓鱼风险。',
        },
        {
          q: '使用该服务会导致 Steam 账号被红锁（Trade Ban）吗？',
          a: '不会。所有交易均遵循 Valve 官方 Steam Trade Offer 规范和用户服务协议（SSA），通过正规认证机器人以 P2P 正常报价方式进行。',
        },
        {
          q: '如何避免 15 天交易暂挂（Trade Hold）？',
          a: '根据 Valve 安全政策，手机 Steam 令牌（Steam Guard）必须已连续启用 7 天以上。未绑定令牌或启用不足 7 天的账号会被 Valve 强制暂挂 15 天。',
        },
        {
          q: '套利雷达的折扣率（-XX%）是如何计算的？',
          a: '系统实时比对 Steam 市场最低售价与平台回收价，并精确扣除 Valve 官方 15% 交易手续费（Steam 5% + 游戏商 10%），呈现纯到手净利润率。',
        },
        {
          q: 'Polygon PoS 网络的 Gas 费是多少？由谁承担？',
          a: '平台基于极速低成本的 Polygon PoS 网络，单笔转账网络费用不足 $0.01。平台通过智能合约批量优化，绝不向用户转嫁额外隐性费用。',
        },
        {
          q: 'SteamVaults Chrome 扩展程序提供哪些功能？',
          a: '安装官方扩展后，Steam 社区市场及库存页面将实时悬浮显示：扣除 15% 后的实际到手金额、实时 USDT 回收价值及跨市场套利价差。',
        },
        {
          q: '即时闪兑支持哪些物品？雷达追踪支持哪些物品？',
          a: '1~3 秒即时自动兑换支持宝石袋（Sack of Gems）和 TF2 钥匙。CS2、Rust、Dota 2 热门饰品则通过套利雷达提供实时价差追踪。',
        },
      ],
    },
    finalCta: {
      title: '准备好查看您的实时报价了吗？',
      signInBtn: '通过 Steam 登录',
      liveQuoteBtn: '获取实时报价',
    },
    footer: {
      rights: '© 2026 SteamVaults. 保留所有权利。',
      disclaimer: 'SteamVaults 与 Valve Corporation 无附属或官方认证关系。Steam 及其徽标为 Valve Corporation 的注册商标。',
    },
  },
};
