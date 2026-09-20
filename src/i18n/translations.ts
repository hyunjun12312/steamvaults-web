export type Language = 'ko' | 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ru' | 'es' | 'pt-BR' | 'de' | 'vi';

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
  "ko": {
    "nav": {
      "sell": "판매",
      "buy": "구매",
      "escrow": "에스크로",
      "tools": "도구",
      "howItWorks": "이용 방법",
      "signIn": "Steam 로그인"
    },
    "hero": {
      "liveQuote": "실시간 보석 시세",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Steam 지갑 간편 충전",
      "titleLine2": "아이템 판매하고 USDT 즉시 수령",
      "sellTab": "판매",
      "buyTab": "구매",
      "sackOfGems": "보석 주머니 (Sack of Gems)",
      "live": "실시간:",
      "quantity": "수량",
      "sacksUnit": "주머니",
      "gemsPerSack": "1 주머니 = 1,000 보석",
      "priceFrozen": "가격 동결 보장",
      "seconds": "초 남음",
      "sellBtn": "판매",
      "buyBtn": "구매",
      "modalTitleSell": "스팀 보석 판매 제안 (Trade Offer)",
      "modalTitleBuy": "스팀 보석 구매 (Deposit)",
      "modalAsset": "자산 수량",
      "modalPayout": "정산 금액 (USDT)",
      "modalNetwork": "네트워크",
      "modalFreezeRemaining": "가격 고정 잔여",
      "modalStep1": "SteamVaults 검증 봇 거래 제안 생성 완료",
      "modalStep2": "스마트폰 Steam Guard 모바일 인증기에서 승인 대기 중...",
      "modalSimulateBtn": "모바일 승인 완료 (시뮬레이션)",
      "modalOpenSteamBtn": "스팀 열기",
      "modalSuccessTitle": "거래 체결 및 정산 완료!",
      "modalSuccessDesc": "Steam Guard 2FA 승인이 정상 확인되었습니다. Polygon PoS 네트워크를 통해 잔고에 즉시 입금되었습니다.",
      "modalConfirmBtn": "확인"
    },
    "extension": {
      "spotlight": "CHROME 확장 프로그램",
      "title": "SteamVaults for Chrome v0.7.6",
      "subtitle": "스팀 장터 및 보관함에서 15% 밸브 수수료 자동 공제, 실시간 USDT 환산 가치, 아비트라지 차익을 즉시 확인하세요.",
      "installBtn": "Chrome 웹스토어 설치",
      "hudFeature1": "인벤토리 1클릭 즉시 가치 분석",
      "hudFeature2": "스팀 장터 시세 실시간 비교 및 내보내기"
    },
    "toolkit": {
      "eyebrow": "도구 및 레이더",
      "title": "차익거래 레이더 (Arbitrage Radar)",
      "subtitle": "100개 이상의 유동성 스팀 자산에 대한 실시간 장터간 가격 불일치 모니터링 엔진.",
      "trendDown": "하락",
      "trendUp": "상승",
      "trendNeutral": "보합",
      "colItem": "아이템",
      "colTrend": "현재 가격 등락률 / 변동",
      "badgeMarket": "Steam Market"
    },
    "trust": {
      "eyebrow": "보안 및 신뢰 아키텍처",
      "title": "직접 검증할 수 있는 안전 장치",
      "openIdTitle": "Steam OpenID",
      "openIdDesc": "Valve 공식 OpenID 프로토콜을 통해 로그인합니다. 플랫폼은 사용자의 비밀번호나 인증 정보에 일체 접근하지 않으며 API Key 등록을 요구하지 않습니다.",
      "steamGuardTitle": "Steam Guard 모바일 승인",
      "steamGuardDesc": "모든 거래는 사용자의 스마트폰 Steam 모바일 인증기(2FA)에서 최종 승인해야만 체결되므로 자산이 안전하게 보호됩니다.",
      "botTitle": "24/7 자동화 즉시 정산",
      "botDesc": "스팀 거래 교환 확인 즉시 Polygon PoS 블록체인 네트워크를 통해 1~3초 내로 정산 잔고가 지갑 또는 계정에 지급됩니다."
    },
    "faq": {
      "items": [
        {
          "q": "보석(Sack of Gems) 또는 TF2 열쇠 판매 시 USDT 정산까지 얼마나 걸리나요?",
          "a": "Steam 모바일 인증기(Steam Guard)에서 거래 제안을 최종 승인하는 즉시, 시스템 봇이 인벤토리 입고를 확인하고 Polygon PoS 블록체인을 통해 1~3초 내로 귀하의 지갑 또는 플랫폼 잔고로 정산됩니다. 은행 영업일 대기나 관리자 수동 승인 절차가 전혀 없는 100% 자동화 온체인 시스템입니다."
        },
        {
          "q": "30초 가격 동결(Freeze Price) 시스템은 어떻게 작동하며 슬리피지가 발생하나요?",
          "a": "암호화폐 및 스팀 장터의 급격한 시세 변동으로부터 사용자를 보호하기 위해, 수량을 입력하고 거래를 시작하면 해당 시점의 교환 단가가 30초간 100% 고정됩니다(0% Slippage 보장). 30초 카운트다운 이내에 스팀 가드로 거래를 승인하시면 화면에 표시된 단가 그대로 1원도 오차 없이 정산됩니다."
        },
        {
          "q": "30초가 지나거나 거래 제안을 거절/취소하면 어떻게 되나요? 수수료가 청구되나요?",
          "a": "어떠한 수수료나 페널티도 발생하지 않습니다. 30초 타이머가 만료되거나 사용자가 Steam 모바일 앱에서 거래 제안을 거절 또는 취소할 경우, 거래는 즉시 무효화되며 아이템은 귀하의 Steam 보관함에 온전히 남습니다. 블록체인 가스비나 취소 수수료는 0원입니다."
        },
        {
          "q": "대량 거래(Bulk Trade) 시 한 번에 최대 몇 개까지 교환할 수 있나요?",
          "a": "보석 자루(Sack of Gems)는 단일 거래당 최대 5,000개(500만 Gems), TF2 Mann Co. 보급 상자 열쇠는 1회 최대 500개까지 단일 Steam Trade Offer로 묶어서 즉시 일괄 교환할 수 있습니다. 스팀 인벤토리 슬롯 한도를 초과하지 않도록 분할 일괄 교환을 지원합니다."
        },
        {
          "q": "Steam 계정 비밀번호나 Steam Web API Key를 요구하나요? 계정 탈취 위험은 없나요?",
          "a": "절대로 요구하지 않습니다. SteamVaults는 Valve 공식 Steam OpenID 프로토콜만을 사용하여 사용자의 공개 64비트 SteamID만 확인합니다. 당사 플랫폼은 비밀번호, 이메일, 스팀 가드 코드를 수집할 수 없습니다. 특히 최근 빈번한 API Key 스캠(API Scam) 위험을 원천 차단하기 위해 사용자의 Steam Web API Key 등록을 일체 요구하지 않습니다."
        },
        {
          "q": "이 서비스를 이용하면 Steam 계정이 거래 정지(Trade Ban)나 제재를 받을 위험이 있나요?",
          "a": "전혀 없습니다. SteamVaults의 모든 자산 교환은 Valve의 공식 Steam Trade Offer(보관함 아이템 교환 제안) API 규격과 서비스 약관(SSA)을 철저히 준수합니다. 비인가 치트 소프트웨어나 무허가 스크립트가 아닌 정상적인 P2P 교환 시스템으로 안전하게 처리됩니다."
        },
        {
          "q": "15일 거래 보류(Trade Hold)가 발생하는 원인과 해결 조건은 무엇인가요?",
          "a": "Steam Guard 모바일 인증기(2FA)가 최소 7일 이상 활성화되어 있어야 하며, 거래 확인 기능이 켜져 있어야 합니다. 모바일 인증기가 없거나 최근 해제/재등록한 경우 Valve의 보안 정책에 따라 15일간 거래가 보류됩니다. SteamVaults는 보류가 발생하지 않는 정상 계정만을 대상으로 즉시 교환을 처리합니다."
        },
        {
          "q": "아비트라지 레이더(Arbitrage Radar)의 할인율(-XX%)과 마진은 어떻게 계산되나요?",
          "a": "레이더에 표시되는 할인율과 마진은 Valve 공식 수수료 15%(게임 개발사 10% + Steam 거래 수수료 5%)를 완전히 차감한 실제 순수령액(Net Payout)과 주요 외부 P2P 시장의 실거래 중간값을 실시간 비교하여 산출됩니다."
        },
        {
          "q": "Polygon PoS 네트워크 가스비(Gas Fee)는 누가 부담하며 얼마인가요?",
          "a": "사용자가 부담하는 온체인 가스비는 0원입니다. SteamVaults의 가스 릴레이어(Gas Relayer) 인프라가 모든 Polygon PoS 네트워크 트랜잭션 비용을 100% 전액 지원하므로, 사용자에게는 약정된 USDT 금액이 단 1센트의 수수료 차감도 없이 온전히 입금됩니다."
        },
        {
          "q": "SteamVaults Chrome 확장 프로그램(v0.7.6)은 어떤 기능을 제공하나요?",
          "a": "스팀 커뮤니티 장터 및 보관함 페이지에 즉시 오버레이되어, 밸브 15% 수수료가 제외된 실수령액 자동 계산, 실시간 USDT 환산 가치 표시, 현재 시장가 대비 즉시 판매(Quick Cashout) 견적 확인 및 원클릭 인벤토리 내보내기 기능을 제공합니다."
        },
        {
          "q": "어떤 아이템을 즉시 현금화할 수 있으며, 지원 예정 자산은 무엇인가요?",
          "a": "자동화 봇을 통해 1~3초 만에 USDT로 즉시 현금화(Swap)가 가능한 유동성 표준 자산은 Sack of Gems(보석 자루) 및 TF2 Mann Co. Supply Crate Key(팀포2 열쇠)입니다. CS2 스킨, Rust 아이템, Dota 2 불멸 세트 등은 아비트라지 레이더를 통해 실시간 시세 차익과 최적의 매수/매도 타이밍을 제공합니다."
        }
      ]
    },
    "finalCta": {
      "title": "지금 실시간 견적을 확인하고 즉시 거래하세요",
      "signInBtn": "Steam 로그인으로 시작",
      "liveQuoteBtn": "실시간 시세 확인"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. All rights reserved.",
      "disclaimer": "SteamVaults는 Valve Corporation과 제휴, 승인 또는 보증 관계가 아닙니다. Steam 및 Steam 로고는 미국 및 기타 국가에서 Valve Corporation의 상표 또는 등록 상표입니다."
    }
  },
  "en": {
    "nav": {
      "sell": "Sell",
      "buy": "Buy",
      "escrow": "Escrow",
      "tools": "Tools",
      "howItWorks": "How it works",
      "signIn": "Sign in with Steam"
    },
    "hero": {
      "liveQuote": "LIVE SACK OF GEMS QUOTE",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Top up Steam Wallet",
      "titleLine2": "or sell items for USDT",
      "sellTab": "Sell",
      "buyTab": "Buy",
      "sackOfGems": "Sack of Gems",
      "live": "Live:",
      "quantity": "Quantity",
      "sacksUnit": "Sacks",
      "gemsPerSack": "1 Sack = 1,000 Gems",
      "priceFrozen": "Price frozen for",
      "seconds": "seconds",
      "sellBtn": "Sell",
      "buyBtn": "Buy",
      "modalTitleSell": "Steam Gems Trade Offer",
      "modalTitleBuy": "Buy Steam Gems (Deposit)",
      "modalAsset": "Asset Quantity",
      "modalPayout": "Settlement (USDT)",
      "modalNetwork": "Network",
      "modalFreezeRemaining": "Price Lock Remaining",
      "modalStep1": "SteamVaults Verified Bot Offer Dispatched",
      "modalStep2": "Awaiting confirmation in Steam Mobile Authenticator...",
      "modalSimulateBtn": "Confirm Mobile Trade (Simulate)",
      "modalOpenSteamBtn": "Open Steam",
      "modalSuccessTitle": "Trade Executed & Settled!",
      "modalSuccessDesc": "Steam Guard 2FA confirmation verified. USDT has been credited instantly via the Polygon PoS network.",
      "modalConfirmBtn": "Done"
    },
    "extension": {
      "spotlight": "CHROME EXTENSION SPOTLIGHT",
      "title": "SteamVaults for Chrome v0.7.6",
      "subtitle": "Instant 1-click inventory inspection, real-time cashout USDT value, and net earnings after Valve 15% fee right inside Steam Community Market.",
      "installBtn": "Chrome Extension",
      "hudFeature1": "Instant 1-click inventory inspection",
      "hudFeature2": "Inspect & Export to Steam"
    },
    "toolkit": {
      "eyebrow": "TOOLKIT & RADAR",
      "title": "Arbitrage Radar",
      "subtitle": "Real-time cross-platform price discrepancy engine tracking 100+ liquid Steam assets.",
      "trendDown": "Drop",
      "trendUp": "Rise",
      "trendNeutral": "Flat",
      "colItem": "Item",
      "colTrend": "Price Spread / Fluctuation",
      "badgeMarket": "Steam Market"
    },
    "trust": {
      "eyebrow": "TRUST ARCHITECTURE",
      "title": "Things you can verify",
      "openIdTitle": "Steam OpenID",
      "openIdDesc": "Sign in securely via official Valve Steam OpenID. We never access passwords or 2FA credentials and never request your Steam Web API Key.",
      "steamGuardTitle": "Steam Guard Mobile 2FA",
      "steamGuardDesc": "Every trade offer must be manually confirmed in your personal Steam Mobile Authenticator, ensuring complete asset safety.",
      "botTitle": "24/7 Automated Settlement",
      "botDesc": "Upon trade confirmation, USDT is disbursed directly on the Polygon PoS network within 1–3 seconds with zero manual approval lag."
    },
    "faq": {
      "items": [
        {
          "q": "How long does USDT settlement take when selling Sack of Gems or TF2 Keys?",
          "a": "The moment you confirm the trade offer in your Steam Mobile Authenticator, our automated bot verifies inventory receipt and credits USDT to your balance via Polygon PoS within 1 to 3 seconds. There is zero manual review or banking delay."
        },
        {
          "q": "How does the 30-second Freeze Price mechanism work? Is there slippage?",
          "a": "When you begin a swap, the unit exchange quote is locked for exactly 30 seconds (0% slippage guarantee). Confirming the trade within 30 seconds guarantees settlement at the exact displayed price without any spread error."
        },
        {
          "q": "What happens if the 30 seconds expire or I decline the trade? Are there fees?",
          "a": "No fees or penalties occur. If the timer expires or you decline the offer, the transaction is cancelled and your items remain safely in your Steam inventory. Cancellation and gas fees are $0."
        },
        {
          "q": "What is the maximum quantity for bulk trading in a single transaction?",
          "a": "You can swap up to 5,000 Sacks of Gems (5,000,000 Gems) and up to 500 TF2 Mann Co. Supply Crate Keys in a single batch Steam Trade Offer without exceeding Steam inventory limitations."
        },
        {
          "q": "Do you require Steam passwords or Steam Web API Keys? Is there risk of API Scam?",
          "a": "Never. We authenticate strictly using official Valve Steam OpenID, retrieving only your public 64-bit SteamID. We never ask for your Steam Web API Key, eliminating the risk of API Scams completely."
        },
        {
          "q": "Is there any risk of receiving a Steam Community Trade Ban from using this service?",
          "a": "None whatsoever. All item exchanges adhere strictly to Valve's official Steam Trade Offer API specifications and Steam Subscriber Agreement (SSA) standards as legitimate P2P inventory transfers."
        },
        {
          "q": "What causes the 15-day Trade Hold and how can it be avoided?",
          "a": "Valve enforces a 15-day Trade Hold if your Steam Guard Mobile Authenticator has not been active for at least 7 days or if trade confirmations are disabled. Ensure 2FA has been active for over 7 days prior to initiating trades."
        },
        {
          "q": "How is the Arbitrage Radar discount (-XX%) and net margin calculated?",
          "a": "The Arbitrage Radar compares real-time external cash prices against the Steam Community Market median price, factoring in Valve's complete 15% platform fee (10% game developer + 5% Steam fee) for exact net payouts."
        },
        {
          "q": "Who covers the Polygon PoS blockchain Gas Fee, and how much is it?",
          "a": "You pay $0 in on-chain gas fees. SteamVaults covers 100% of all network transaction costs via our internal gas relayer, ensuring you receive the exact quoted USDT settlement to the cent."
        },
        {
          "q": "What features does the SteamVaults Chrome Extension (v0.7.6) provide?",
          "a": "The extension overlays directly onto Steam Market and inventory pages, instantly computing post-fee net earnings, live USDT equivalents, quick cashout quotes, and 1-click inventory export."
        },
        {
          "q": "Which assets are supported for instant USDT cashout, and what is coming next?",
          "a": "Currently, Sack of Gems and TF2 Mann Co. Supply Crate Keys are supported for 1–3s automated swaps. CS2 skins, Rust items, and Dota 2 items are fully tracked on our Arbitrage Radar for real-time market spreads."
        }
      ]
    },
    "finalCta": {
      "title": "Ready to check your live quote?",
      "signInBtn": "Sign in with Steam",
      "liveQuoteBtn": "Sign in live quote"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. All rights reserved.",
      "disclaimer": "SteamVaults is not affiliated with, authorized, or endorsed by Valve Corporation. Steam and the Steam logo are trademarks or registered trademarks of Valve Corporation in the U.S. and/or other countries."
    }
  },
  "zh-CN": {
    "nav": {
      "sell": "出售",
      "buy": "购买",
      "escrow": "托管",
      "tools": "工具",
      "howItWorks": "运作方式",
      "signIn": "通过 Steam 登录"
    },
    "hero": {
      "liveQuote": "宝箱宝石实时行情",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "充值 Steam 钱包",
      "titleLine2": "或出售饰品兑换 USDT",
      "sellTab": "出售",
      "buyTab": "购买",
      "sackOfGems": "宝箱宝石袋",
      "live": "实时单价:",
      "quantity": "数量",
      "sacksUnit": "袋",
      "gemsPerSack": "1 袋 = 1,000 宝石",
      "priceFrozen": "价格锁定倒计时",
      "seconds": "秒",
      "sellBtn": "出售",
      "buyBtn": "购买",
      "modalTitleSell": "Steam 宝石出售报价 (Trade Offer)",
      "modalTitleBuy": "Steam 宝石购买 (Deposit)",
      "modalAsset": "资产数量",
      "modalPayout": "结算金额 (USDT)",
      "modalNetwork": "网络",
      "modalFreezeRemaining": "价格锁定剩余",
      "modalStep1": "SteamVaults 验证机器人交易报价已生成",
      "modalStep2": "等待 Steam 手机令牌 (Steam Guard) 确认中...",
      "modalSimulateBtn": "确认手机授权 (模拟)",
      "modalOpenSteamBtn": "打开 Steam",
      "modalSuccessTitle": "交易达成并已结算！",
      "modalSuccessDesc": "Steam Guard 2FA 授权确认成功。USDT 已通过 Polygon PoS 网络即时到账。",
      "modalConfirmBtn": "完成"
    },
    "extension": {
      "spotlight": "CHROME 浏览器扩展精选",
      "title": "SteamVaults for Chrome v0.7.6",
      "subtitle": "在 Steam 社区市场和库存中自动扣除 15% Valve 手续费，实时折算 USDT 价值与套利差价。",
      "installBtn": "Chrome 网上应用店安装",
      "hudFeature1": "一键实时库存价值分析",
      "hudFeature2": "Steam 社区市场实时比价与导出"
    },
    "toolkit": {
      "eyebrow": "工具与雷达",
      "title": "套利雷达 (Arbitrage Radar)",
      "subtitle": "跟踪 100+ 个高流动性 Steam 资产的实时跨平台价格差异监控引擎。",
      "trendDown": "下跌",
      "trendUp": "上涨",
      "trendNeutral": "持平",
      "colItem": "物品",
      "colTrend": "当前价格涨跌幅 / 波动",
      "badgeMarket": "Steam 市场"
    },
    "trust": {
      "eyebrow": "信任架构",
      "title": "您可以自行验证的事实",
      "openIdTitle": "Steam OpenID 官方协议",
      "openIdDesc": "严格使用 Valve 官方 Steam OpenID 登录，平台绝不接触您的密码或验证码，且不要求提供 Steam Web API Key。",
      "steamGuardTitle": "Steam Guard 手机令牌 2FA 确认",
      "steamGuardDesc": "所有交易必须在您的手机 Steam 移动端上手动确认后方可成交，确保饰品资产绝对安全。",
      "botTitle": "24/7 全自动即时结算",
      "botDesc": "机器人确认饰品到账后，1~3 秒内通过 Polygon PoS 区块链网络极速发放 USDT，无人工审核等待。"
    },
    "faq": {
      "items": [
        {
          "q": "出售宝石袋或 TF2 钥匙后，多久可以收到 USDT?",
          "a": "在您的手机 Steam 令牌中确认交易报价后，自动化系统机器人会在 1~3 秒内完成入库核对并通过 Polygon PoS 区块链结算至您的账户。零人工审核，无银行工作日等待。"
        },
        {
          "q": "30秒锁定价格机制是如何运作的？是否存在滑点？",
          "a": "为了避免价格剧烈波动，开始交易时单价将锁定 30 秒（保证 0% 滑点）。在倒计时结束前完成手机确认，即按锁定价格 100% 结算。"
        },
        {
          "q": "如果 30 秒超时或拒绝交易会怎样？会扣手续费吗？",
          "a": "不会产生任何费用或罚金。超时或您主动取消交易报价，交易将立即终止，物品完好保留在您的 Steam 库存中，链上燃料费为 0。"
        },
        {
          "q": "单笔大额批量交易最多支持多少数量？",
          "a": "单次 Steam 报价最高支持打包 5,000 袋宝箱宝石（500万宝石）或 500 把 TF2 曼恩公司补给箱钥匙，完全兼容 Steam 背包上限。"
        },
        {
          "q": "需要提供 Steam 密码或 Steam Web API Key 吗？会有被盗号风险吗？",
          "a": "绝不需要。平台仅通过 Valve 官方 OpenID 获取您的公开 64 位 SteamID，绝不索要您的密码或 API Key，从根源杜绝 API 钓鱼风险。"
        },
        {
          "q": "使用该服务会导致 Steam 账号被红锁（Trade Ban）吗？",
          "a": "完全不会。所有物品交换均严格遵守 Valve 官方 Steam Trade Offer API 接口与用户服务协议（SSA），属于合规合法的正常玩家物品交换。"
        },
        {
          "q": "如何避免 15 天交易暂挂（Trade Hold）？",
          "a": "您的 Steam Guard 手机令牌必须激活启用至少 7 天以上，且已开启交易确认。若令牌解绑或未满 7 天将触发 Valve 官方 15 天暂挂。"
        },
        {
          "q": "套利雷达的折扣率（-XX%）是如何计算的？",
          "a": "雷达折扣率综合扣除了 Valve 官方 15% 交易费（游戏开发者 10% + Steam 市场 5%），将净实收额与外部市场中位数对比计算真实利润。"
        },
        {
          "q": "Polygon PoS 网络的 Gas 费是多少？由谁承担？",
          "a": "用户支付 0 元 Gas 费。所有链上转账手续费均由 SteamVaults 内部中继系统全额承担，您将分文不少地收到全额结算 USDT。"
        },
        {
          "q": "SteamVaults Chrome 扩展程序提供哪些功能？",
          "a": "插件可直接在 Steam 市场和库存中显示扣除 15% 后的净到手价、折合 USDT 实时价值、一键快速变现报价以及一键库存导出。"
        },
        {
          "q": "哪些饰品支持秒级即时变现？未来支持哪些饰品？",
          "a": "目前宝箱宝石袋（Sack of Gems）和 TF2 钥匙支持 1~3 秒自动化极速兑换。CS2 皮肤、Rust 和 Dota 2 饰品可在套利雷达中实时查看行情。"
        }
      ]
    },
    "finalCta": {
      "title": "准备好查看实时报价了吗？",
      "signInBtn": "通过 Steam 登录开始",
      "liveQuoteBtn": "查看实时行情"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. 保留所有权利。",
      "disclaimer": "SteamVaults 与 Valve Corporation 无关联、未获其授权或认可。Steam 及 Steam 徽标是 Valve Corporation 在美国和/或其他国家/地区的商标。"
    }
  },
  "zh-TW": {
    "nav": {
      "sell": "出售",
      "buy": "購買",
      "escrow": "託管",
      "tools": "工具",
      "howItWorks": "運作方式",
      "signIn": "透過 Steam 登入"
    },
    "hero": {
      "liveQuote": "寶箱寶石即時行情",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "儲值 Steam 錢包",
      "titleLine2": "或出售飾品兌換 USDT",
      "sellTab": "出售",
      "buyTab": "購買",
      "sackOfGems": "寶箱寶石袋 (Sack of Gems)",
      "live": "即時單價:",
      "quantity": "數量",
      "sacksUnit": "袋",
      "gemsPerSack": "1 袋 = 1,000 寶石",
      "priceFrozen": "價格鎖定倒數",
      "seconds": "秒",
      "sellBtn": "出售",
      "buyBtn": "購買",
      "modalTitleSell": "Steam 寶石出售報價 (Trade Offer)",
      "modalTitleBuy": "Steam 寶石購買 (Deposit)",
      "modalAsset": "資產數量",
      "modalPayout": "結算金額 (USDT)",
      "modalNetwork": "網路",
      "modalFreezeRemaining": "價格鎖定剩餘",
      "modalStep1": "SteamVaults 驗證機器人交易報價已生成",
      "modalStep2": "等待 Steam 行動驗證器 (Steam Guard) 授權中...",
      "modalSimulateBtn": "確認行動授權 (模擬)",
      "modalOpenSteamBtn": "開啟 Steam",
      "modalSuccessTitle": "交易完成並已結算！",
      "modalSuccessDesc": "Steam Guard 2FA 授權已確認。USDT 已透過 Polygon PoS 網路即時發放至您的帳戶。",
      "modalConfirmBtn": "完成"
    },
    "extension": {
      "spotlight": "CHROME 瀏覽器擴充功能精選",
      "title": "SteamVaults for Chrome v0.7.6",
      "subtitle": "在 Steam 市集與庫存中自動扣除 15% Valve 手續費，即時查看折合 USDT 價值與套利利潤。",
      "installBtn": "前往 Chrome 線上應用程式商店安裝",
      "hudFeature1": "一鍵即時庫存價值分析",
      "hudFeature2": "即時市集行情比對與匯出"
    },
    "toolkit": {
      "eyebrow": "工具與雷達",
      "title": "套利雷達 (Arbitrage Radar)",
      "subtitle": "追蹤 100+ 個高流動性 Steam 資產的即時跨平台價格差異引擎。",
      "trendDown": "下跌",
      "trendUp": "上漲",
      "trendNeutral": "持平",
      "colItem": "物品",
      "colTrend": "當前價格漲跌幅 / 波動",
      "badgeMarket": "Steam 市集"
    },
    "trust": {
      "eyebrow": "信任架構",
      "title": "您可以自行驗證的事實",
      "openIdTitle": "Steam OpenID 官方協議",
      "openIdDesc": "嚴格透過 Valve 官方 Steam OpenID 登入，平台絕不接觸您的密碼或驗證碼，亦不要求提供 Steam Web API Key。",
      "steamGuardTitle": "Steam Guard 行動雙重驗證 (2FA)",
      "steamGuardDesc": "每筆交易均須在您的手機 Steam 行動驗證器中手動核准，確保飾品與資產完全安全。",
      "botTitle": "24/7 自動化即時結算",
      "botDesc": "機器人確認飾品入庫後，1–3 秒內透過 Polygon PoS 區塊鏈發放 USDT，無任何人工審核延遲。"
    },
    "faq": {
      "items": [
        {
          "q": "出售寶石袋或 TF2 鑰匙後，多久可以收到 USDT?",
          "a": "在您的手機 Steam 行動驗證器中確認交易報價後，系統機器人會在 1~3 秒內完成入庫核對並透過 Polygon PoS 區塊鏈結算至您的帳戶。零人工審核，無銀行工作日等待。"
        },
        {
          "q": "30秒鎖定價格機制是如何運作的？是否存在滑點？",
          "a": "為了避免價格劇烈波動，開始交易時單價將鎖定 30 秒（保證 0% 滑點）。在倒數結束前完成手機確認，即按鎖定價格 100% 結算。"
        },
        {
          "q": "如果 30 秒逾時或拒絕交易會怎樣？會扣手續費嗎？",
          "a": "不會產生任何費用或罰金。逾時或您主動取消交易報價，交易將立即終止，物品完好保留在您的 Steam 庫存中，鏈上手續費為 0。"
        },
        {
          "q": "單筆大額批量交易最多支援多少數量？",
          "a": "單次 Steam 報價最高支援打包 5,000 袋寶箱寶石（500萬寶石）或 500 把 TF2 曼恩公司補給箱鑰匙，完全相容 Steam 背包上限。"
        },
        {
          "q": "需要提供 Steam 密碼或 Steam Web API Key 嗎？會有被盜帳號風險嗎？",
          "a": "絕不需要。平台僅透過 Valve 官方 OpenID 獲取您的公開 64 位元 SteamID，絕不索取您的密碼或 API Key，從根源杜絕 API 釣魚風險。"
        },
        {
          "q": "使用該服務會導致 Steam 帳號被交易封禁（Trade Ban）嗎？",
          "a": "完全不會。所有物品交換均嚴格遵守 Valve 官方 Steam Trade Offer API 介面與使用者服務條款（SSA），屬於合規合法的正常玩家物品交換。"
        },
        {
          "q": "如何避免 15 天交易暫掛（Trade Hold）？",
          "a": "您的 Steam Guard 手機驗證器必須啟用至少 7 天以上，且已開啟交易確認。若驗證器解除綁定或未滿 7 天將觸發 Valve 官方 15 天暫掛。"
        },
        {
          "q": "套利雷達的折扣率（-XX%）是如何計算的？",
          "a": "雷達折扣率綜合扣除了 Valve 官方 15% 交易費（遊戲開發商 10% + Steam 市集 5%），將淨實收額與外部市集中位數對比計算真實利潤。"
        },
        {
          "q": "Polygon PoS 網路的 Gas 費是多少？由誰承擔？",
          "a": "使用者支付 0 元 Gas 費。所有鏈上轉帳手續費均由 SteamVaults 內部中繼系統全額承擔，您將分文不少地收到全額結算 USDT。"
        },
        {
          "q": "SteamVaults Chrome 擴充功能提供哪些功能？",
          "a": "外掛程式可直接在 Steam 市集與庫存中顯示扣除 15% 後的實收價、折合 USDT 即時價值、一鍵快速變現報價以及一鍵庫存匯出。"
        },
        {
          "q": "哪些飾品支援秒級即時變現？未來支援哪些飾品？",
          "a": "目前寶箱寶石袋（Sack of Gems）與 TF2 鑰匙支援 1~3 秒自動化極速兌換。CS2 造型、Rust 與 Dota 2 飾品可在套利雷達中即時查看行情。"
        }
      ]
    },
    "finalCta": {
      "title": "準備好查看即時報價了嗎？",
      "signInBtn": "透過 Steam 登入開始",
      "liveQuoteBtn": "查看即時行情"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. 保留所有權利。",
      "disclaimer": "SteamVaults 與 Valve Corporation 無關聯、未獲其授權或認可。Steam 及 Steam 標誌是 Valve Corporation 在美國及/或其他國家/地區的商標。"
    }
  },
  "ja": {
    "nav": {
      "sell": "売却",
      "buy": "購入",
      "escrow": "エスクロー",
      "tools": "ツール",
      "howItWorks": "仕組み",
      "signIn": "Steam でログイン"
    },
    "hero": {
      "liveQuote": "宝石サックのリアルタイム見積",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Steam ウォレットをチャージ",
      "titleLine2": "またはアイテムを売却して USDT を受取",
      "sellTab": "売却",
      "buyTab": "購入",
      "sackOfGems": "サック・オブ・ジェム (Sack of Gems)",
      "live": "リアルタイム:",
      "quantity": "数量",
      "sacksUnit": "袋",
      "gemsPerSack": "1袋 = 1,000 ジェム",
      "priceFrozen": "価格固定中",
      "seconds": "秒",
      "sellBtn": "売却",
      "buyBtn": "購入",
      "modalTitleSell": "Steam ジェム売却オファー (Trade Offer)",
      "modalTitleBuy": "Steam ジェム購入 (Deposit)",
      "modalAsset": "資産数量",
      "modalPayout": "受取金額 (USDT)",
      "modalNetwork": "ネットワーク",
      "modalFreezeRemaining": "価格固定の残り時間",
      "modalStep1": "SteamVaults 認証 Bot からトレードオファー送信完了",
      "modalStep2": "Steam ガードモバイル認証アプリでの承認を待機中...",
      "modalSimulateBtn": "モバイル承認完了 (シミュレーション)",
      "modalOpenSteamBtn": "Steam を開く",
      "modalSuccessTitle": "取引成立および決済完了！",
      "modalSuccessDesc": "Steam Guard 2FA 承認を確認しました。Polygon PoS ネットワーク経由で残高に即時反映されました。",
      "modalConfirmBtn": "完了"
    },
    "extension": {
      "spotlight": "CHROME 拡張機能",
      "title": "SteamVaults for Chrome v0.7.6",
      "subtitle": "Steam マーケットやインベントリで Valve 手数料 15% を自動控除。リアルタイム USDT 換算価値とアービトラージ差益を瞬時に確認できます。",
      "installBtn": "Chrome ウェブストアからインストール",
      "hudFeature1": "1クリックでインベントリ価値を瞬時に査定",
      "hudFeature2": "Steam マーケット相場とリアルタイム比較"
    },
    "toolkit": {
      "eyebrow": "ツール＆レーダー",
      "title": "アービトラージ・レーダー (Arbitrage Radar)",
      "subtitle": "100以上の流動性 Steam 資産における市場間価格差をリアルタイムに追跡するエンジン。",
      "trendDown": "下落",
      "trendUp": "上昇",
      "trendNeutral": "横ばい",
      "colItem": "アイテム",
      "colTrend": "現在の価格騰落率 / 変動",
      "badgeMarket": "Steam マーケット"
    },
    "trust": {
      "eyebrow": "セキュリティ＆信頼設計",
      "title": "自分で確認できること",
      "openIdTitle": "Steam 公式 OpenID",
      "openIdDesc": "Valve 公式 OpenID 経由で安全にログイン。パスワードの入力は不要で、Steam Web API キーの提出も一切求めません。",
      "steamGuardTitle": "Steam ガード モバイル 2FA 承認",
      "steamGuardDesc": "すべての取引はご自身のスマートフォン上の Steam ガードで最終承認する必要があるため、資産が安全に保護されます。",
      "botTitle": "24/7 自動即時決済",
      "botDesc": "トレード受領確認後、Polygon PoS ブロックチェーンを通じて 1〜3 秒以内に USDT 残高へ即時反映されます。"
    },
    "faq": {
      "items": [
        {
          "q": "サック・オブ・ジェムや TF2 キーを売却後、USDT 反映までどれくらいかかりますか？",
          "a": "スマホの Steam ガードでトレードオファーを承認した瞬間、Bot が受取を確認し Polygon PoS ブロックチェーンを通じて 1〜3 秒以内に残高へ自動送金されます。手動審査や銀行営業日の待ち時間は一切ありません。"
        },
        {
          "q": "30秒間の価格固定（Freeze Price）はどのように機能しますか？スリッページはありますか？",
          "a": "急な相場変動を防ぐため、取引開始時の単価が 30 秒間 100% ロックされます（スリッページ 0% 保証）。カウントダウン内にスマホで承認すれば、提示された金額通りの USDT が支払われます。"
        },
        {
          "q": "30秒経過したり、トレードを拒否・キャンセルした場合はどうなりますか？",
          "a": "手数料やペナルティは一切発生しません。タイマーが切れるかオファーをキャンセルした場合、取引は無効となりアイテムは Steam インベントリに残ります。キャンセル料やガス代は 0 円です。"
        },
        {
          "q": "1回の大口取引で最大何個までまとめて交換できますか？",
          "a": "1 回の Steam トレードオファーで、ジェム袋は最大 5,000 個（500万ジェム）、TF2 キーは最大 500 個まで一括交換が可能です。インベントリの上限を超えないよう最適化されています。"
        },
        {
          "q": "Steam パスワードや Steam Web API キーの入力は必要ですか？乗っ取りのリスクは？",
          "a": "一切不要です。Valve 公式の Steam OpenID のみを使用し、公開 SteamID のみを取得します。パスワードや API キーを要求しないため、API スキャムの危険性はゼロです。"
        },
        {
          "q": "このサービスを利用すると Steam アカウントがトレード停止（Trade Ban）になるリスクはありますか？",
          "a": "全くありません。すべてのアイテム交換は Valve の公式 Steam Trade Offer API および加入者契約（SSA）に完全準拠した安全な P2P 取引です。"
        },
        {
          "q": "15日間のトレード保留（Trade Hold）が発生する原因と回避方法は？",
          "a": "Steam ガード モバイル認証が最低 7 日間有効であり、トレード確認がオンになっている必要があります。未設定または最近再設定した場合は Valve の規定により 15 日間保留されます。"
        },
        {
          "q": "アービトラージ・レーダーの割引率（-XX%）と利益率はどう計算されますか？",
          "a": "Valve の公式販売手数料 15%（開発元 10% + Steam 5%）を完全に控除した実際の手取り額と、外部 P2P 市場の中央値をリアルタイムに比較して算出しています。"
        },
        {
          "q": "Polygon PoS ネットワークのガス代（Gas Fee）は誰が負担しますか？",
          "a": "お客様のガス代負担は 0 円です。SteamVaults のリレーシステムがブロックチェーンの手数料を 100% 全額負担するため、表示された通りの USDT が入金されます。"
        },
        {
          "q": "SteamVaults Chrome 拡張機能（v0.7.6）にはどのような機能がありますか？",
          "a": "Steam マーケットおよびインベントリ画面に直接オーバーレイし、15% 手数料控除後の実質受取額の即時計算、リアルタイム USDT 換算、即時現金化見積もり、1クリック書き出しを提供します。"
        },
        {
          "q": "即時 USDT 現金化に対応しているアイテムと、今後の対応予定は？",
          "a": "現在はサック・オブ・ジェム（Sack of Gems）および TF2 マンコサプライキーが 1〜3 秒の即時自動スワップに対応しています。CS2 や Rust、Dota 2 アイテムはレーダーで価格追跡可能です。"
        }
      ]
    },
    "finalCta": {
      "title": "リアルタイム見積もりを確認して取引を始めましょう",
      "signInBtn": "Steam で始める",
      "liveQuoteBtn": "リアルタイム価格を見る"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. All rights reserved.",
      "disclaimer": "SteamVaults は Valve Corporation と提携、承認、または後援関係にはありません。Steam および Steam ロゴは、米国およびその他の国における Valve Corporation の商標または登録商標です。"
    }
  },
  "ru": {
    "nav": {
      "sell": "Продать",
      "buy": "Купить",
      "escrow": "Эскроу",
      "tools": "Инструменты",
      "howItWorks": "Как это работает",
      "signIn": "Войти через Steam"
    },
    "hero": {
      "liveQuote": "КУРС МЕШКОВ САМОЦВЕТОВ LIVE",
      "polygonNetwork": "СЕТЬ POLYGON POS",
      "titleLine1": "Пополняйте баланс Steam",
      "titleLine2": "или продавайте за USDT",
      "sellTab": "Продать",
      "buyTab": "Купить",
      "sackOfGems": "Мешок самоцветов",
      "live": "Курс:",
      "quantity": "Количество",
      "sacksUnit": "Мешков",
      "gemsPerSack": "1 мешок = 1 000 самоцветов",
      "priceFrozen": "Цена зафиксирована на",
      "seconds": "сек",
      "sellBtn": "Продать",
      "buyBtn": "Купить",
      "modalTitleSell": "Предложение обмена самоцветов Steam (Trade Offer)",
      "modalTitleBuy": "Покупка самоцветов Steam (Deposit)",
      "modalAsset": "Количество активов",
      "modalPayout": "Сумма выплаты (USDT)",
      "modalNetwork": "Сеть",
      "modalFreezeRemaining": "Фиксация цены действует",
      "modalStep1": "Предложение обмена от верифицированного бота SteamVaults создано",
      "modalStep2": "Ожидание подтверждения в мобильном приложении Steam Guard...",
      "modalSimulateBtn": "Подтвердить в мобильном Steam (Симуляция)",
      "modalOpenSteamBtn": "Открыть Steam",
      "modalSuccessTitle": "Сделка успешно завершена и оплачена!",
      "modalSuccessDesc": "Подтверждение Steam Guard 2FA успешно проверено. USDT мгновенно начислены через сеть Polygon PoS.",
      "modalConfirmBtn": "Готово"
    },
    "extension": {
      "spotlight": "РАСШИРЕНИЕ ДЛЯ CHROME",
      "title": "SteamVaults для Chrome v0.7.6",
      "subtitle": "Мгновенный вычет 15% комиссии Valve на Торговой площадке Steam, конвертация в USDT в реальном времени и расчет арбитражной прибыли.",
      "installBtn": "Установить расширение Chrome",
      "hudFeature1": "Мгновенная оценка инвентаря в 1 клик",
      "hudFeature2": "Сравнение с Торговой площадкой Steam"
    },
    "toolkit": {
      "eyebrow": "ИНСТРУМЕНТЫ И РАДАР",
      "title": "Арбитражный радар (Arbitrage Radar)",
      "subtitle": "Движок отслеживания разницы цен в реальном времени по более чем 100 ликвидным предметам Steam.",
      "trendDown": "Спад",
      "trendUp": "Рост",
      "trendNeutral": "Без изменений",
      "colItem": "Предмет",
      "colTrend": "Динамика цены / Колебания",
      "badgeMarket": "Торговая площадка Steam"
    },
    "trust": {
      "eyebrow": "АРХИТЕКТУРА ДОВЕРИЯ",
      "title": "Факты, которые вы можете проверить сами",
      "openIdTitle": "Официальный Steam OpenID",
      "openIdDesc": "Вход осуществляется строго через протокол Valve Steam OpenID. Мы никогда не получаем доступ к паролям и не запрашиваем Steam Web API Key.",
      "steamGuardTitle": "Мобильное подтверждение Steam Guard (2FA)",
      "steamGuardDesc": "Каждая сделка обязательно подтверждается вручную в мобильном приложении Steam на вашем телефоне, исключая потерю предметов.",
      "botTitle": "Круглосуточный автоматический расчет 24/7",
      "botDesc": "Сразу после подтверждения обмена ботом выплата в USDT поступает на ваш баланс через Polygon PoS за 1–3 секунды без ручных задержек."
    },
    "faq": {
      "items": [
        {
          "q": "Сколько времени занимает расчет в USDT при продаже мешков самоцветов или ключей TF2?",
          "a": "В ту же секунду, как вы подтверждаете обмен в мобильном аутентификаторе Steam Guard, бот фиксирует получение и выплачивает USDT в сети Polygon PoS за 1–3 секунды. Никаких банковских задержек или ручной модерации."
        },
        {
          "q": "Как работает 30-секундная заморозка цены (Freeze Price)? Есть ли проскальзывание?",
          "a": "Для защиты от резких скачков курса цена фиксируется ровно на 30 секунд (гарантия 0% проскальзывания). При подтверждении в течение 30 секунд расчет происходит копейка в копейку по указанному курсу."
        },
        {
          "q": "Что произойдет, если истечет 30 секунд или я отклоню обмен? Будет ли комиссия?",
          "a": "Никаких комиссий или штрафов нет. Если время истекло или вы отклонили обмен в Steam, сделка аннулируется, а предметы остаются в вашем инвентаре. Комиссия за отмену — $0."
        },
        {
          "q": "Каков максимальный объем для одной крупной оптовой сделки?",
          "a": "За одно предложение обмена Steam можно передать до 5 000 мешков самоцветов (5 000 000 гемов) и до 500 ключей TF2 Mann Co. без превышения лимитов слотов инвентаря."
        },
        {
          "q": "Требуется ли пароль от Steam или Steam Web API Key? Есть ли риск кражи аккаунта?",
          "a": "Ни в коем случае. Авторизация происходит исключительно через официальный протокол Valve Steam OpenID. Мы не запрашиваем API-ключи, что полностью защищает от API-скама."
        },
        {
          "q": "Есть ли риск получить трейд-бан (Trade Ban) в Steam при использовании сервиса?",
          "a": "Исключено. Все обмены осуществляются через официальный API Trade Offer в строгом соответствии с Пользовательским соглашением Steam (SSA) как легальные обмены предметами."
        },
        {
          "q": "Из-за чего возникает 15-дневное удержание обмена (Trade Hold) и как его избежать?",
          "a": "Удержание накладывается Valve, если мобильный аутентификатор Steam Guard не был активен минимум 7 дней или отключены подтверждения. Убедитесь, что 2FA включен более 7 дней."
        },
        {
          "q": "Как рассчитывается дисконт (-XX%) и чистая прибыль в Арбитражном радаре?",
          "a": "Радар сопоставляет цены внешних P2P-площадок с медианной ценой Торговой площадки Steam с полным учетом 15% комиссии Valve (10% разработчикам + 5% Steam)."
        },
        {
          "q": "Кто оплачивает комиссию за газ в блокчейне Polygon PoS и сколько она составляет?",
          "a": "Для пользователя комиссия за газ составляет 0 рублей / $0. Сервис SteamVaults полностью покрывает все транзакционные расходы блокчейна."
        },
        {
          "q": "Какие функции предоставляет расширение SteamVaults для Chrome (v0.7.6)?",
          "a": "Расширение встраивается прямо в Торговую площадку и инвентарь Steam, рассчитывая чистую сумму после вычета 15% комиссии, мгновенный эквивалент в USDT и быстрый вывод в 1 клик."
        },
        {
          "q": "Какие предметы можно обменять на USDT мгновенно и какие будут добавлены?",
          "a": "Мгновенный обмен за 1–3 секунды поддерживается для мешков самоцветов (Sack of Gems) и ключей TF2. Скины CS2, Rust и предметы Dota 2 отслеживаются в радаре арбитража."
        }
      ]
    },
    "finalCta": {
      "title": "Готовы узнать текущий курс и начать обмен?",
      "signInBtn": "Войти через Steam",
      "liveQuoteBtn": "Смотреть курс Live"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. Все права защищены.",
      "disclaimer": "SteamVaults не связан с Valve Corporation, не авторизован и не одобрен ею. Steam и логотип Steam являются товарными знаками Valve Corporation."
    }
  },
  "es": {
    "nav": {
      "sell": "Vender",
      "buy": "Comprar",
      "escrow": "Depósito en garantía",
      "tools": "Herramientas",
      "howItWorks": "Cómo funciona",
      "signIn": "Iniciar sesión con Steam"
    },
    "hero": {
      "liveQuote": "COTIZACIÓN EN VIVO DE SACO DE GEMAS",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Recarga saldo de Steam",
      "titleLine2": "o vende ítems por USDT al instante",
      "sellTab": "Vender",
      "buyTab": "Comprar",
      "sackOfGems": "Saco de Gemas (Sack of Gems)",
      "live": "En vivo:",
      "quantity": "Cantidad",
      "sacksUnit": "Sacos",
      "gemsPerSack": "1 Saco = 1.000 Gemas",
      "priceFrozen": "Precio congelado por",
      "seconds": "segundos",
      "sellBtn": "Vender",
      "buyBtn": "Comprar",
      "modalTitleSell": "Oferta de intercambio de Gemas (Trade Offer)",
      "modalTitleBuy": "Comprar Gemas de Steam (Depósito)",
      "modalAsset": "Cantidad de activos",
      "modalPayout": "Pago liquidado (USDT)",
      "modalNetwork": "Red",
      "modalFreezeRemaining": "Bloqueo de precio restante",
      "modalStep1": "Oferta del bot verificado de SteamVaults enviada",
      "modalStep2": "Esperando confirmación en el autenticador móvil de Steam Guard...",
      "modalSimulateBtn": "Confirmar intercambio móvil (Simular)",
      "modalOpenSteamBtn": "Abrir Steam",
      "modalSuccessTitle": "¡Intercambio ejecutado y liquidado!",
      "modalSuccessDesc": "Confirmación 2FA de Steam Guard verificada. Los USDT se han acreditado al instante a través de Polygon PoS.",
      "modalConfirmBtn": "Listo"
    },
    "extension": {
      "spotlight": "EXTENSIÓN DESTACADA DE CHROME",
      "title": "SteamVaults para Chrome v0.7.6",
      "subtitle": "Deducción automática de la tarifa del 15% de Valve, valor USDT en tiempo real y márgenes de arbitraje directamente en el Mercado de la Comunidad Steam.",
      "installBtn": "Instalar extensión de Chrome",
      "hudFeature1": "Inspección de inventario en 1 clic",
      "hudFeature2": "Comparación en tiempo real con el mercado de Steam"
    },
    "toolkit": {
      "eyebrow": "HERRAMIENTAS Y RADAR",
      "title": "Radar de Arbitraje (Arbitrage Radar)",
      "subtitle": "Motor de detección de discrepancias de precios en tiempo real para más de 100 activos líquidos de Steam.",
      "trendDown": "Baja",
      "trendUp": "Alza",
      "trendNeutral": "Estable",
      "colItem": "Ítem",
      "colTrend": "Variación / Fluctuación de precio",
      "badgeMarket": "Mercado de la Comunidad"
    },
    "trust": {
      "eyebrow": "ARQUITECTURA DE CONFIANZA",
      "title": "Cosas que puedes verificar por ti mismo",
      "openIdTitle": "Steam OpenID Oficial",
      "openIdDesc": "Inicia sesión mediante el protocolo oficial Steam OpenID de Valve. Nunca accedemos a contraseñas ni solicitamos tu clave API de Steam Web.",
      "steamGuardTitle": "Confirmación móvil 2FA de Steam Guard",
      "steamGuardDesc": "Cada intercambio debe ser confirmado manualmente en tu autenticador móvil de Steam, garantizando total seguridad.",
      "botTitle": "Liquidación automatizada 24/7",
      "botDesc": "Al confirmar el intercambio, los USDT se envían en 1-3 segundos a través de Polygon PoS sin demoras manuales."
    },
    "faq": {
      "items": [
        {
          "q": "¿Cuánto tarda la liquidación en USDT al vender Sacos de Gemas o Llaves TF2?",
          "a": "En el instante en que confirmas la oferta en tu Steam Guard móvil, nuestro bot verifica la recepción y acredita USDT en tu cuenta a través de Polygon PoS en 1 a 3 segundos, sin revisión manual ni demoras bancarias."
        },
        {
          "q": "¿Cómo funciona la congelación de precio de 30 segundos? ¿Hay deslizamiento (slippage)?",
          "a": "Para protegerte de la volatilidad, la cotización se bloquea durante exactamente 30 segundos (garantía de 0% de deslizamiento). Al confirmar dentro de los 30 segundos, recibes exactamente el importe mostrado."
        },
        {
          "q": "¿Qué pasa si expiran los 30 segundos o rechazo la oferta? ¿Se cobran tarifas?",
          "a": "No hay tarifas ni penalizaciones. Si el tiempo expira o cancelas la oferta en Steam, la operación queda anulada y tus artículos permanecen seguros en tu inventario. Costo de cancelación: $0."
        },
        {
          "q": "¿Cuál es la cantidad máxima para operaciones al por mayor en una sola transacción?",
          "a": "Puedes intercambiar hasta 5.000 Sacos de Gemas (5.000.000 de gemas) y hasta 500 Llaves de cajas de suministros de TF2 en una sola oferta de intercambio sin superar los límites de Steam."
        },
        {
          "q": "¿Se requiere contraseña de Steam o clave Steam Web API? ¿Hay riesgo de robo?",
          "a": "Nunca. Autenticamos exclusivamente mediante el protocolo oficial Valve Steam OpenID, accediendo solo a tu SteamID público. Nunca solicitamos tu Steam Web API Key, eliminando estafas de API."
        },
        {
          "q": "¿Existe riesgo de recibir una sanción o Trade Ban en Steam por usar este servicio?",
          "a": "Ninguno. Todos los intercambios cumplen estrictamente las directrices de la API oficial de ofertas de intercambio de Steam y el Acuerdo de Suscriptor a Steam (SSA)."
        },
        {
          "q": "¿Qué causa la retención de intercambios de 15 días (Trade Hold) y cómo evitarla?",
          "a": "Valve impone 15 días de retención si el autenticador móvil Steam Guard no ha estado activo al menos 7 días o si las confirmaciones están desactivadas. Asegúrate de tener 2FA activo más de 7 días."
        },
        {
          "q": "¿Cómo se calcula el descuento (-XX%) y margen neto en el Radar de Arbitraje?",
          "a": "El Radar compara los precios en efectivo externos contra la mediana del Mercado de Steam, deduciendo la tarifa completa del 15% de Valve (10% desarrollador + 5% Steam) para el cálculo neto."
        },
        {
          "q": "¿Quién paga la tarifa de Gas de Polygon PoS y cuánto cuesta?",
          "a": "Tú pagas $0. SteamVaults cubre el 100% de los costos de transacción de la red blockchain mediante nuestros retransmisores internos, recibiendo exactamente el monto USDT pactado."
        },
        {
          "q": "¿Qué funciones incluye la extensión para Chrome de SteamVaults (v0.7.6)?",
          "a": "Se integra en las páginas del Mercado e inventario de Steam calculando ganancias netas tras deducir el 15%, equivalencia en USDT en vivo, cotizaciones de retiro rápido y exportación en 1 clic."
        },
        {
          "q": "¿Qué artículos se pueden retirar a USDT al instante y cuáles vendrán después?",
          "a": "Actualmente los Sacos de Gemas y Llaves TF2 Mann Co. disponen de liquidación automatizada en 1-3 segundos. Skins de CS2, Rust y Dota 2 se rastrean en tiempo real en el Radar de Arbitraje."
        }
      ]
    },
    "finalCta": {
      "title": "¿Listo para comprobar tu cotización en vivo?",
      "signInBtn": "Iniciar sesión con Steam",
      "liveQuoteBtn": "Ver cotización en vivo"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. Todos los derechos reservados.",
      "disclaimer": "SteamVaults no está afiliado, autorizado ni respaldado por Valve Corporation. Steam y el logotipo de Steam son marcas comerciales o registradas de Valve Corporation en EE. UU. u otros países."
    }
  },
  "pt-BR": {
    "nav": {
      "sell": "Vender",
      "buy": "Comprar",
      "escrow": "Custódia",
      "tools": "Ferramentas",
      "howItWorks": "Como funciona",
      "signIn": "Iniciar sessão com Steam"
    },
    "hero": {
      "liveQuote": "COTAÇÃO AO VIVO DE SACO DE GEMAS",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Recarregue sua Carteira Steam",
      "titleLine2": "ou venda itens por USDT instantaneamente",
      "sellTab": "Vender",
      "buyTab": "Comprar",
      "sackOfGems": "Saco de Gemas (Sack of Gems)",
      "live": "Ao vivo:",
      "quantity": "Quantidade",
      "sacksUnit": "Sacos",
      "gemsPerSack": "1 Saco = 1.000 Gemas",
      "priceFrozen": "Preço congelado por",
      "seconds": "segundos",
      "sellBtn": "Vender",
      "buyBtn": "Comprar",
      "modalTitleSell": "Proposta de troca de Gemas Steam (Trade Offer)",
      "modalTitleBuy": "Comprar Gemas Steam (Depósito)",
      "modalAsset": "Quantidade de ativos",
      "modalPayout": "Pagamento liquidado (USDT)",
      "modalNetwork": "Rede",
      "modalFreezeRemaining": "Bloqueio de preço restante",
      "modalStep1": "Proposta enviada pelo bot verificado da SteamVaults",
      "modalStep2": "Aguardando confirmação no autenticador móvel Steam Guard...",
      "modalSimulateBtn": "Confirmar troca no celular (Simular)",
      "modalOpenSteamBtn": "Abrir Steam",
      "modalSuccessTitle": "Troca concluída e liquidada!",
      "modalSuccessDesc": "Confirmação 2FA do Steam Guard validada. USDT creditado instantaneamente via rede Polygon PoS.",
      "modalConfirmBtn": "Concluir"
    },
    "extension": {
      "spotlight": "DESTAQUE EXTENSÃO CHROME",
      "title": "SteamVaults para Chrome v0.7.6",
      "subtitle": "Dedução automática da taxa de 15% da Valve, cálculo do valor em USDT e margens de arbitragem direto no Mercado da Comunidade Steam.",
      "installBtn": "Instalar extensão Chrome",
      "hudFeature1": "Inspeção de inventário com 1 clique",
      "hudFeature2": "Comparação de mercado em tempo real"
    },
    "toolkit": {
      "eyebrow": "FERRAMENTAS E RADAR",
      "title": "Radar de Arbitragem (Arbitrage Radar)",
      "subtitle": "Monitoramento em tempo real de discrepâncias de preço entre plataformas em mais de 100 ativos da Steam.",
      "trendDown": "Queda",
      "trendUp": "Alta",
      "trendNeutral": "Estável",
      "colItem": "Item",
      "colTrend": "Variação / Oscilação de preço",
      "badgeMarket": "Mercado Steam"
    },
    "trust": {
      "eyebrow": "ARQUITETURA DE SEGURANÇA",
      "title": "O que você mesmo pode verificar",
      "openIdTitle": "Steam OpenID Oficial",
      "openIdDesc": "Login seguro através do protocolo oficial Valve OpenID. Nunca temos acesso à sua senha e jamais solicitamos sua chave Steam Web API.",
      "steamGuardTitle": "Autenticação móvel Steam Guard (2FA)",
      "steamGuardDesc": "Cada troca precisa ser confirmada manualmente no seu aplicativo autenticador Steam Guard, garantindo segurança absoluta.",
      "botTitle": "Liquidação automatizada 24/7",
      "botDesc": "Assim que a troca é aceita, o USDT é enviado em 1 a 3 segundos via blockchain Polygon PoS sem intermediários."
    },
    "faq": {
      "items": [
        {
          "q": "Quanto tempo leva a liquidação em USDT ao vender Sacos de Gemas ou Chaves TF2?",
          "a": "No exato instante em que você confirma a proposta no aplicativo Steam Guard, nosso bot valida a entrega e credita USDT em 1 a 3 segundos na sua carteira via Polygon PoS. Sem aprovações manuais nem espera bancária."
        },
        {
          "q": "Como funciona o congelamento de preço de 30 segundos? Há risco de slippage?",
          "a": "Para blindar contra flutuações rápidas de mercado, a cotação é congelada por 30 segundos (garantia de 0% slippage). Confirmando dentro de 30 segundos, você recebe exatamente o valor acordado."
        },
        {
          "q": "O que acontece se os 30 segundos expirarem ou eu recusar a troca? Há taxas?",
          "a": "Nenhuma taxa ou penalidade é aplicada. Se o tempo expirar ou você recusar a proposta na Steam, o processo é cancelado e os itens permanecem seguros no seu inventário. Taxa de cancelamento: $0."
        },
        {
          "q": "Qual a quantidade máxima permitida em uma única transação de lote?",
          "a": "Você pode negociar até 5.000 Sacos de Gemas (5.000.000 de gemas) e até 500 Chaves da Caixa de Suprimentos TF2 Mann Co. em uma única proposta de troca sem exceder os limites da Steam."
        },
        {
          "q": "É necessário informar senha Steam ou chave Steam Web API? Há risco de furto?",
          "a": "Nunca. A autenticação é feita exclusivamente via Steam OpenID oficial da Valve, identificando apenas seu SteamID público. Não solicitamos chaves de API, anulando o risco de API Scams."
        },
        {
          "q": "Existe risco de punição ou bloqueio de troca (Trade Ban) na Steam pelo uso do serviço?",
          "a": "Absolutamente nenhum. Todas as transações cumprem com precisão a API oficial Steam Trade Offer e o Acordo de Assinatura do Steam (SSA) como transferências legítimas entre usuários."
        },
        {
          "q": "O que causa a retenção de troca de 15 dias (Trade Hold) e como evitá-la?",
          "a": "A Valve impõe 15 dias de retenção caso o autenticador móvel Steam Guard não esteja ativo há pelo menos 7 dias ou as confirmações estejam desabilitadas. Mantenha o 2FA ativo por mais de 7 dias."
        },
        {
          "q": "Como é calculada a taxa de desconto (-XX%) e a margem no Radar de Arbitragem?",
          "a": "O Radar compara cotações externas com a mediana do Mercado Steam, deduzindo integralmente a taxa de 15% da Valve (10% do desenvolvedor + 5% da Steam) para apontar o ganho líquido real."
        },
        {
          "q": "Quem paga a taxa de gás da rede Polygon PoS e qual é o valor?",
          "a": "Você paga $0 de gás. A infraestrutura de relayers da SteamVaults cobre 100% de todas as taxas on-chain da Polygon PoS, creditando seu USDT integralmente sem desconto de centavos."
        },
        {
          "q": "Quais recursos a extensão SteamVaults para Chrome (v0.7.6) oferece?",
          "a": "A extensão exibe diretamente no Mercado e inventário Steam o cálculo de ganhos líquidos com dedução de 15%, cotação em USDT ao vivo, estimativa de venda rápida e exportação em 1 clique."
        },
        {
          "q": "Quais itens podem ser convertidos em USDT instantaneamente e quais serão adicionados?",
          "a": "Atualmente, Sacos de Gemas e Chaves TF2 contam com liquidação automatizada em 1 a 3 segundos. Skins de CS2, Rust e Dota 2 são monitorados em tempo real pelo Radar de Arbitragem."
        }
      ]
    },
    "finalCta": {
      "title": "Pronto para conferir sua cotação em tempo real?",
      "signInBtn": "Iniciar sessão com Steam",
      "liveQuoteBtn": "Ver cotação ao vivo"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. Todos os direitos reservados.",
      "disclaimer": "A SteamVaults não é afiliada, autorizada ou endossada pela Valve Corporation. Steam e o logotipo do Steam são marcas registradas da Valve Corporation nos EUA e outros países."
    }
  },
  "de": {
    "nav": {
      "sell": "Verkaufen",
      "buy": "Kaufen",
      "escrow": "Treuhand",
      "tools": "Tools",
      "howItWorks": "So funktioniert's",
      "signIn": "Mit Steam anmelden"
    },
    "hero": {
      "liveQuote": "LIVE-KURS FÜR EDELSTEIN-SÄCKE",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Steam-Guthaben aufladen",
      "titleLine2": "oder Items sofort für USDT verkaufen",
      "sellTab": "Verkaufen",
      "buyTab": "Kaufen",
      "sackOfGems": "Sack voller Edelsteine (Sack of Gems)",
      "live": "Live:",
      "quantity": "Menge",
      "sacksUnit": "Säcke",
      "gemsPerSack": "1 Sack = 1.000 Edelsteine",
      "priceFrozen": "Kurs eingefroren für",
      "seconds": "Sekunden",
      "sellBtn": "Verkaufen",
      "buyBtn": "Kaufen",
      "modalTitleSell": "Steam-Edelsteine Handelsangebot (Trade Offer)",
      "modalTitleBuy": "Steam-Edelsteine kaufen (Einzahlung)",
      "modalAsset": "Item-Menge",
      "modalPayout": "Auszahlung (USDT)",
      "modalNetwork": "Netzwerk",
      "modalFreezeRemaining": "Preisgarantie verbleibend",
      "modalStep1": "Angebot von verifiziertem SteamVaults-Bot gesendet",
      "modalStep2": "Warten auf Bestätigung im Steam Guard Mobile Authenticator...",
      "modalSimulateBtn": "Mobilen Handel bestätigen (Simulation)",
      "modalOpenSteamBtn": "Steam öffnen",
      "modalSuccessTitle": "Handel erfolgreich ausgeführt & abgewickelt!",
      "modalSuccessDesc": "Steam Guard 2FA-Bestätigung verifiziert. USDT wurden sofort über das Polygon PoS-Netzwerk gutgeschrieben.",
      "modalConfirmBtn": "Fertig"
    },
    "extension": {
      "spotlight": "CHROME-EXTENSION HIGHLIGHT",
      "title": "SteamVaults für Chrome v0.7.6",
      "subtitle": "Automatischer Abzug der 15% Valve-Gebühr, Echtzeit-USDT-Gegenwert und Arbitrage-Spreads direkt im Steam Community Markt.",
      "installBtn": "Im Chrome Web Store installieren",
      "hudFeature1": "1-Klick-Inventarbewertung in Echtzeit",
      "hudFeature2": "Live-Vergleich mit Steam-Marktpreisen"
    },
    "toolkit": {
      "eyebrow": "TOOLS & RADAR",
      "title": "Arbitrage Radar",
      "subtitle": "Echtzeit-Engine zur Erkennung von Preisunterschieden bei über 100 liquiden Steam-Assets.",
      "trendDown": "Minus",
      "trendUp": "Plus",
      "trendNeutral": "Unverändert",
      "colItem": "Item",
      "colTrend": "Kursänderung / Schwankung",
      "badgeMarket": "Steam Community Markt"
    },
    "trust": {
      "eyebrow": "SICHERHEITSARCHITEKTUR",
      "title": "Was Sie selbst überprüfen können",
      "openIdTitle": "Offizielles Valve Steam OpenID",
      "openIdDesc": "Melden Sie sich sicher über das offizielle Steam OpenID-Protokoll an. Wir erfassen niemals Passwörter und fordern keinen Steam Web API-Key an.",
      "steamGuardTitle": "Steam Guard Mobile 2FA-Bestätigung",
      "steamGuardDesc": "Jeder Handel muss manuell in Ihrer persönlichen Steam Mobile App bestätigt werden – maximaler Schutz für Ihre Items.",
      "botTitle": "24/7 automatisierte Sofortabwicklung",
      "botDesc": "Nach Bestätigung des Handels werden USDT innerhalb von 1–3 Sekunden über das Polygon PoS-Netzwerk übertragen."
    },
    "faq": {
      "items": [
        {
          "q": "Wie lange dauert die Auszahlung in USDT beim Verkauf von Edelstein-Säcken oder TF2-Schlüsseln?",
          "a": "In dem Moment, in dem Sie das Handelsangebot in Ihrer Steam Mobile App bestätigen, verifiziert unser Bot den Eingang und schreibt USDT innerhalb von 1 bis 3 Sekunden via Polygon PoS gut – ohne manuelle Prüfung oder Banklaufzeiten."
        },
        {
          "q": "Wie funktioniert die 30-Sekunden-Preisgarantie (Freeze Price)? Gibt es Slippage?",
          "a": "Um Sie vor Marktschwankungen zu schützen, wird der Kurs für exakt 30 Sekunden fixiert (0% Slippage-Garantie). Wenn Sie innerhalb von 30 Sekunden bestätigen, erhalten Sie exakt den angezeigten Betrag."
        },
        {
          "q": "Was passiert, wenn die 30 Sekunden ablaufen oder ich das Angebot ablehne? Fallen Gebühren an?",
          "a": "Es fallen keinerlei Gebühren oder Strafen an. Läuft die Zeit ab oder lehnen Sie das Angebot ab, wird der Vorgang storniert und Ihre Items bleiben sicher in Ihrem Inventar. Stornogebühr: 0 €."
        },
        {
          "q": "Wie viele Gegenstände können bei einer Großtransaktion auf einmal getauscht werden?",
          "a": "Sie können bis zu 5.000 Säcke voller Edelsteine (5.000.000 Edelsteine) und bis zu 500 TF2 Mann Co. Vorratskistenschlüssel in einem einzigen Angebot bündeln, ohne Inventargrenzen zu überschreiten."
        },
        {
          "q": "Werden Steam-Passwörter oder Steam Web API-Keys abgefragt? Besteht Risiko für Account-Diebstahl?",
          "a": "Niemals. Wir authentifizieren ausschließlich über das offizielle Valve Steam OpenID-Protokoll und rufen nur Ihre öffentliche 64-Bit SteamID ab. Wir verlangen niemals Ihren Steam Web API-Key."
        },
        {
          "q": "Besteht durch die Nutzung des Dienstes ein Risiko für einen Steam Trade Ban?",
          "a": "Absolut nicht. Sämtliche Tauschangebote entsprechen den offiziellen Steam Trade Offer API-Richtlinien und dem Steam Subscriber Agreement (SSA) als legitimer P2P-Tausch."
        },
        {
          "q": "Warum kommt es zu einer 15-tägigen Handelssperre (Trade Hold) und wie verhindert man sie?",
          "a": "Valve verhängt 15 Tage Wartezeit, wenn der Steam Guard Mobile Authenticator nicht seit mindestens 7 Tagen aktiv ist oder Handelsbestätigungen deaktiviert sind. Aktivieren Sie 2FA mindestens 7 Tage im Voraus."
        },
        {
          "q": "Wie wird der Rabatt (-XX%) und die Marge im Arbitrage Radar berechnet?",
          "a": "Das Radar vergleicht externe Echtzeit-Barpreise mit dem Median des Steam Community Markts unter vollständigem Abzug der 15% Valve-Gebühr (10% Spielentwickler + 5% Steam)."
        },
        {
          "q": "Wer übernimmt die Blockchain-Gasgebühren auf Polygon PoS und wie hoch sind diese?",
          "a": "Sie zahlen 0 € an Netzwerkgebühren. SteamVaults übernimmt über eigene Relayer 100% aller Transaktionskosten auf Polygon PoS, sodass Sie den vollen USDT-Betrag ohne Abzug erhalten."
        },
        {
          "q": "Welche Funktionen bietet die SteamVaults Chrome Extension (v0.7.6)?",
          "a": "Die Erweiterung berechnet direkt auf Steam-Markt- und Inventarseiten den Nettoerlös nach 15% Gebührenabzug, den aktuellen USDT-Gegenwert, Schnellverkaufsangebote und bietet 1-Klick-Inventarexport."
        },
        {
          "q": "Welche Items können sofort für USDT ausgezahlt werden und was folgt als Nächstes?",
          "a": "Aktuell unterstützen Edelstein-Säcke (Sack of Gems) und TF2 Mann Co. Schlüssel automatisierte Sofortauszahlungen in 1–3 Sekunden. CS2-Skins, Rust- und Dota 2-Items werden im Radar live erfasst."
        }
      ]
    },
    "finalCta": {
      "title": "Bereit für Ihr Live-Angebot?",
      "signInBtn": "Mit Steam starten",
      "liveQuoteBtn": "Live-Kurs ansehen"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. Alle Rechte vorbehalten.",
      "disclaimer": "SteamVaults steht in keiner Verbindung zu Valve Corporation und wird von dieser weder autorisiert noch unterstützt. Steam und das Steam-Logo sind Marken von Valve Corporation."
    }
  },
  "vi": {
    "nav": {
      "sell": "Bán",
      "buy": "Mua",
      "escrow": "Ký quỹ",
      "tools": "Công cụ",
      "howItWorks": "Cách hoạt động",
      "signIn": "Đăng nhập bằng Steam"
    },
    "hero": {
      "liveQuote": "GIÁ BAO ĐÁ QUÝ TRỰC TIẾP",
      "polygonNetwork": "POLYGON POS",
      "titleLine1": "Nạp tiền ví Steam",
      "titleLine2": "hoặc bán vật phẩm nhận ngay USDT",
      "sellTab": "Bán",
      "buyTab": "Mua",
      "sackOfGems": "Bao đá quý (Sack of Gems)",
      "live": "Giá trực tiếp:",
      "quantity": "Số lượng",
      "sacksUnit": "Bao",
      "gemsPerSack": "1 Bao = 1.000 Đá quý",
      "priceFrozen": "Khóa giá trong",
      "seconds": "giây",
      "sellBtn": "Bán",
      "buyBtn": "Mua",
      "modalTitleSell": "Lời mời giao dịch Đá quý Steam (Trade Offer)",
      "modalTitleBuy": "Mua Đá quý Steam (Nạp tiền)",
      "modalAsset": "Số lượng vật phẩm",
      "modalPayout": "Số tiền nhận (USDT)",
      "modalNetwork": "Mạng lưới",
      "modalFreezeRemaining": "Thời gian khóa giá còn lại",
      "modalStep1": "Bot xác thực của SteamVaults đã gửi lời mời giao dịch",
      "modalStep2": "Đang chờ xác nhận trên ứng dụng di động Steam Guard...",
      "modalSimulateBtn": "Xác nhận giao dịch di động (Mô phỏng)",
      "modalOpenSteamBtn": "Mở Steam",
      "modalSuccessTitle": "Giao dịch hoàn tất và đã thanh toán!",
      "modalSuccessDesc": "Xác thực Steam Guard 2FA thành công. USDT đã được ghi có tức thì qua mạng Polygon PoS.",
      "modalConfirmBtn": "Hoàn tất"
    },
    "extension": {
      "spotlight": "TIỆN ÍCH MỞ RỘNG CHROME",
      "title": "SteamVaults for Chrome v0.7.6",
      "subtitle": "Tự động trừ 15% phí Valve, tính giá trị quy đổi USDT tức thì và mức chênh lệch giá ngay trên Chợ cộng đồng Steam.",
      "installBtn": "Cài đặt tiện ích Chrome",
      "hudFeature1": "Định giá kho đồ tức thì chỉ với 1 cú nhấp",
      "hudFeature2": "So sánh giá thị trường Steam theo thời gian thực"
    },
    "toolkit": {
      "eyebrow": "CÔNG CỤ & RADAR",
      "title": "Radar chênh lệch giá (Arbitrage Radar)",
      "subtitle": "Công cụ theo dõi biến động và chênh lệch giá thời gian thực cho hơn 100 tài sản Steam có tính thanh khoản cao.",
      "trendDown": "Giảm",
      "trendUp": "Tăng",
      "trendNeutral": "Không đổi",
      "colItem": "Vật phẩm",
      "colTrend": "Biến động giá / Tỷ lệ thay đổi",
      "badgeMarket": "Chợ Steam"
    },
    "trust": {
      "eyebrow": "KIẾN TRÚC BẢO MẬT & NIỀM TIN",
      "title": "Những điều bạn có thể tự kiểm chứng",
      "openIdTitle": "Steam OpenID chính thức từ Valve",
      "openIdDesc": "Đăng nhập an toàn qua giao thức Steam OpenID chính thức. Chúng tôi không bao giờ lưu trữ mật khẩu và không yêu cầu cung cấp khóa Steam Web API.",
      "steamGuardTitle": "Xác nhận 2 bước Steam Guard trên điện thoại",
      "steamGuardDesc": "Mọi giao dịch đều phải được chính bạn xác nhận thủ công trên điện thoại qua Steam Guard, bảo đảm an toàn tuyệt đối cho tài sản.",
      "botTitle": "Quyết toán tự động tức thì 24/7",
      "botDesc": "Ngay sau khi bot nhận được vật phẩm, tiền USDT sẽ được chuyển thẳng về số dư qua blockchain Polygon PoS trong vòng 1-3 giây."
    },
    "faq": {
      "items": [
        {
          "q": "Sau khi bán Bao đá quý hoặc chìa khóa TF2, bao lâu thì nhận được USDT?",
          "a": "Ngay khi bạn xác nhận lời mời giao dịch trên Steam Guard di động, hệ thống bot sẽ kiểm tra vật phẩm và chuyển USDT qua mạng Polygon PoS trong vòng 1 đến 3 giây, hoàn toàn không cần duyệt thủ công hay chờ đợi ngân hàng."
        },
        {
          "q": "Cơ chế khóa giá 30 giây (Freeze Price) hoạt động như thế nào? Có bị trượt giá không?",
          "a": "Để bảo vệ bạn khỏi biến động thị trường, đơn giá được cố định chính xác trong 30 giây (cam kết 0% trượt giá). Xác nhận trong vòng 30 giây bảo đảm bạn nhận đúng 100% số tiền hiển thị."
        },
        {
          "q": "Nếu hết 30 giây hoặc tôi từ chối giao dịch thì sao? Có bị trừ phí không?",
          "a": "Không có bất kỳ khoản phí hay hình phạt nào. Nếu hết thời gian hoặc bạn từ chối trên Steam, giao dịch sẽ bị hủy bỏ và vật phẩm vẫn nằm an toàn trong kho đồ của bạn. Phí hủy: $0."
        },
        {
          "q": "Số lượng tối đa cho một giao dịch số lượng lớn là bao nhiêu?",
          "a": "Bạn có thể gộp tối đa 5.000 Bao đá quý (5.000.000 đá quý) hoặc 500 chìa khóa TF2 Mann Co. trong một lời mời giao dịch Steam duy nhất mà không vượt giới hạn kho đồ."
        },
        {
          "q": "Có cần cung cấp mật khẩu Steam hoặc khóa Steam Web API không? Có sợ bị hack không?",
          "a": "Tuyệt đối không. Chúng tôi chỉ xác thực qua giao thức Valve Steam OpenID chính thức để lấy SteamID 64-bit công khai. Chúng tôi không yêu cầu khóa API, loại bỏ hoàn toàn nguy cơ lừa đảo API Scam."
        },
        {
          "q": "Sử dụng dịch vụ này có nguy cơ bị cấm giao dịch (Trade Ban) trên Steam không?",
          "a": "Hoàn toàn không. Mọi giao dịch đều tuân thủ nghiêm ngặt các quy chuẩn của Steam Trade Offer API và Thỏa thuận người dùng Steam (SSA) như những trao đổi vật phẩm P2P hợp lệ."
        },
        {
          "q": "Nguyên nhân gây tạm giữ giao dịch 15 ngày (Trade Hold) và cách khắc phục là gì?",
          "a": "Valve áp dụng tạm giữ 15 ngày nếu ứng dụng Steam Guard trên điện thoại chưa kích hoạt đủ 7 ngày hoặc tắt tính năng xác nhận. Hãy đảm bảo 2FA đã hoạt động liên tục trên 7 ngày."
        },
        {
          "q": "Tỷ lệ chiết khấu (-XX%) và biên lợi nhuận trên Radar chênh lệch giá được tính thế nào?",
          "a": "Radar so sánh giá tiền mặt thực tế bên ngoài với giá trung vị trên Chợ Steam sau khi đã trừ toàn bộ 15% phí Valve (10% nhà phát triển + 5% phí Steam) để tính số tiền thực nhận."
        },
        {
          "q": "Ai chịu phí Gas trên mạng Polygon PoS và là bao nhiêu?",
          "a": "Bạn chịu $0 phí gas. Hệ thống hạ tầng truyền dẫn của SteamVaults đài thọ 100% phí giao dịch trên chuỗi, đảm bảo bạn nhận đủ từng xu USDT theo thỏa thuận."
        },
        {
          "q": "Tiện ích mở rộng SteamVaults Chrome (v0.7.6) cung cấp những tính năng gì?",
          "a": "Tiện ích hiển thị trực tiếp trên Chợ và kho đồ Steam để tính tiền thực nhận sau phí 15%, quy đổi sang USDT theo thời gian thực, báo giá bán nhanh và xuất kho đồ chỉ với 1 cú nhấp."
        },
        {
          "q": "Những vật phẩm nào có thể đổi ra USDT tức thì và những vật phẩm nào sắp ra mắt?",
          "a": "Hiện tại Bao đá quý (Sack of Gems) và Chìa khóa TF2 hỗ trợ hoán đổi tự động trong 1-3 giây. Skin CS2, vật phẩm Rust và Dota 2 được theo dõi biến động trực tiếp trên Radar chênh lệch giá."
        }
      ]
    },
    "finalCta": {
      "title": "Sẵn sàng xem báo giá trực tiếp ngay bây giờ?",
      "signInBtn": "Bắt đầu với Steam",
      "liveQuoteBtn": "Xem giá trực tiếp"
    },
    "footer": {
      "rights": "© 2026 SteamVaults. Mọi quyền được bảo lưu.",
      "disclaimer": "SteamVaults không liên kết, không được ủy quyền hoặc chứng thực bởi Valve Corporation. Steam và logo Steam là nhãn hiệu của Valve Corporation tại Hoa Kỳ và các quốc gia khác."
    }
  }
};
