import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, X, RefreshCw } from 'lucide-react';
import gemSapphire4k from '../assets/sapphire_gem_4k.png';
import { RollingNumber } from './RollingNumber';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');
  const [quantity, setQuantity] = useState<number>(100);
  const [timeLeft, setTimeLeft] = useState<number>(23);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState<boolean>(false);
  const [tradeStep, setTradeStep] = useState<'pending' | 'success'>('pending');

  // Realistic Steam Sack of Gems rates (1 Sack = 1,000 Gems)
  // 100 Sacks = $27.40 ($0.274 per Sack) matches screenshot exactly
  const sellRate = 0.274;
  const buyRate = 0.285;
  const currentRate = activeTab === 'sell' ? sellRate : buyRate;
  const totalAmount = quantity * currentRate;

  // 30s countdown loop
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRefreshing(true);
          setTimeout(() => setIsRefreshing(false), 500);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeLeft(30);
    setTimeout(() => setIsRefreshing(false), 400);
  };

  const handleOpenTradeModal = () => {
    setTradeStep('pending');
    setIsTradeModalOpen(true);
  };

  const maxQuantity = 500;
  const sliderPercentage = ((quantity - 1) / (maxQuantity - 1)) * 100;

  return (
    <section className="relative pt-16 sm:pt-24 lg:pt-28 pb-0 overflow-hidden text-center bg-black">
      {/* Rich Diffuse Sapphire Blue Radial Aurora Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] sm:w-[980px] h-[560px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 48%, rgba(59, 130, 246, 0.35) 0%, rgba(37, 99, 235, 0.15) 42%, rgba(0, 0, 0, 0) 74%)',
          filter: 'blur(65px)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        {/* Eyebrow Pill: ● LIVE SACK OF GEMS QUOTE • POLYGON POS */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#16171a]/90 px-3.5 py-1 text-xs mb-4 shadow-sm">
          <span className="flex items-center gap-1 text-rose-500 font-semibold text-[10.5px]">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
            LIVE
          </span>
          <span className="text-zinc-400 font-medium tracking-wide text-[10.5px]">
            {t.hero.liveQuote} • {t.hero.polygonNetwork}
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.12] mb-8 sm:mb-12">
          {t.hero.titleLine1} <br />
          {t.hero.titleLine2}
        </h1>

        {/* The Enlarged Sell / Buy Card ITSELF */}
        <div className="relative mx-auto w-full max-w-[540px] sm:max-w-[570px]">
          {/* Floating Ultra-HD 4K Sapphire Crystal Gemstone Asset */}
          <div
            className="absolute z-20 pointer-events-none transition-transform select-none"
            style={{
              right: '-64px',
              top: '110px',
              filter: 'drop-shadow(0 0 26px rgba(59,130,246,0.7))',
            }}
          >
            <img
              src={gemSapphire4k}
              alt="Ultra-HD Sapphire Gem"
              className="w-[98px] sm:w-[112px] h-auto object-contain block drop-shadow-2xl"
            />
          </div>

          {/* Sell / Buy Card Container */}
          <div className="relative rounded-t-3xl rounded-b-none border-t border-x border-white/[0.16] border-b-0 bg-[#12151e]/95 backdrop-blur-md p-5 sm:p-6 pb-6 shadow-[0_-12px_40px_rgba(0,0,0,0.8)] text-left">
            {/* Subtle top chassis highlight sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            {/* Row 1: Top Tab Switcher [ Sell | Buy ] */}
            <div className="grid grid-cols-2 p-1 rounded-xl bg-[#0b0d12] border border-white/[0.06] mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('sell')}
                className={`py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'sell'
                    ? 'bg-white text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.hero.sellTab}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('buy')}
                className={`py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'buy'
                    ? 'bg-white text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.hero.buyTab}
              </button>
            </div>

            {/* Row 2: Sack of Gems & USDT Quote with Rolling Number Animation */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl select-none">💰</span>
                <span className="text-sm sm:text-base font-semibold text-white">{t.hero.sackOfGems}</span>
              </div>

              {/* Center % badge with hairline */}
              <div className="flex items-center gap-1.5 flex-1 px-4">
                <div className="h-[1px] bg-white/[0.1] flex-1" />
                <div className="w-4 h-4 rounded-full border border-white/20 bg-white/[0.05] flex items-center justify-center text-[8px] text-zinc-300 font-mono select-none">
                  %
                </div>
                <div className="h-[1px] bg-white/[0.1] flex-1" />
              </div>

              {/* Rolling Price Quote */}
              <div className="text-right">
                <div className="text-[10px] text-zinc-400 font-mono leading-none mb-1">
                  {t.hero.live} ${totalAmount.toFixed(2)}
                </div>
                <div className="text-2xl sm:text-[30px] font-extrabold tracking-tight text-white leading-none">
                  <RollingNumber value={totalAmount} prefix="$" />
                </div>
              </div>
            </div>

            {/* Row 3: Quantity Labels & Dynamic Sack Count */}
            <div className="flex items-center justify-between text-xs text-zinc-400 font-medium mb-1.5">
              <div className="flex items-center gap-1.5">
                <span>{t.hero.quantity}</span>
                <span className="text-[11px] font-mono text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.2 rounded">
                  {quantity} {t.hero.sacksUnit}
                </span>
              </div>
              <span className="text-zinc-400 font-mono text-[11px] pr-2 sm:pr-4 select-none">
                {t.hero.gemsPerSack}
              </span>
            </div>

            {/* Row 4: Custom Slider with Tick Marks & Real-time Sliding */}
            <div className="space-y-1.5 mb-4">
              <div className="relative flex items-center h-4">
                {/* Track background */}
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-75 shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                    style={{ width: `${sliderPercentage}%` }}
                  />
                </div>
                {/* Native Range Input over top */}
                <input
                  type="range"
                  min="1"
                  max={maxQuantity}
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer h-4 z-10"
                  aria-label="Quantity of Sacks of Gems"
                />
                {/* Custom White Knob Handle */}
                <div
                  className="pointer-events-none absolute w-3.5 h-3.5 bg-white rounded-full shadow-md -translate-x-1/2 transition-all duration-75 border border-black/20"
                  style={{ left: `${sliderPercentage}%` }}
                />
              </div>

              {/* Subtle vertical tick marks matching screenshot */}
              <div className="flex justify-between px-0.5 text-[7px] text-zinc-600 font-mono select-none">
                {Array.from({ length: 19 }).map((_, i) => (
                  <span key={i}>|</span>
                ))}
              </div>
            </div>

            {/* Row 5: Price Frozen Button with Live Countdown */}
            <button
              type="button"
              onClick={handleManualRefresh}
              title="Click to refresh 30s price quote"
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-[#171b24] hover:bg-[#1f2430] border border-white/[0.08] text-xs text-zinc-300 font-medium mb-3 transition-colors cursor-pointer"
            >
              <Clock className={`w-3 h-3 text-zinc-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>
                {t.hero.priceFrozen} {timeLeft} {t.hero.seconds}
              </span>
              {isRefreshing && (
                <RefreshCw className="w-2.5 h-2.5 text-blue-400 animate-spin ml-1" />
              )}
            </button>

            {/* Row 6: Sell / Buy for $XX.XX USDT → Button with Rolling Numbers */}
            <button
              type="button"
              onClick={handleOpenTradeModal}
              className="w-full py-3 sm:py-3.5 rounded-xl bg-white text-black font-extrabold text-sm flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-all shadow-lg cursor-pointer active:scale-[0.99]"
            >
              <span>{activeTab === 'sell' ? t.hero.sellBtn : t.hero.buyBtn}</span>
              <RollingNumber value={totalAmount} prefix="$" className="font-extrabold" />
              <span>USDT</span>
              <span className="font-bold">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Trade Execution Modal */}
      {isTradeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0e1017] border border-blue-500/30 p-6 shadow-2xl text-left space-y-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-bold text-white">
                  {activeTab === 'sell' ? t.hero.modalTitleSell : t.hero.modalTitleBuy}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsTradeModalOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            {tradeStep === 'pending' ? (
              <div className="space-y-4">
                <div className="rounded-xl bg-[#06070a] p-4 border border-white/[0.06] space-y-2.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">{t.hero.modalAsset}</span>
                    <span className="font-mono text-white font-semibold">
                      Sack of Gems × {quantity} ({(quantity * 1000).toLocaleString()} Gems)
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">{t.hero.modalPayout}</span>
                    <span className="font-mono text-blue-400 font-bold text-sm">
                      ${totalAmount.toFixed(2)} USDT
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">{t.hero.modalNetwork}</span>
                    <span className="font-mono text-zinc-300">Polygon PoS (POL)</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">{t.hero.modalFreezeRemaining}</span>
                    <span className="font-mono text-amber-400 font-semibold">{timeLeft}s (0% Slippage)</span>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>1. {t.hero.modalStep1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                    <Clock className="w-4 h-4" />
                    <span>2. {t.hero.modalStep2}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setTradeStep('success')}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.hero.modalSimulateBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://steamcommunity.com/my/tradeoffers"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.hero.modalOpenSteamBtn}</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">{t.hero.modalSuccessTitle}</h4>
                <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                  {t.hero.modalSuccessDesc}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsTradeModalOpen(false)}
                    className="px-6 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    {t.hero.modalConfirmBtn}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

