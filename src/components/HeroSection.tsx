import React, { useState, useEffect } from 'react';
import { Clock, RefreshCw } from 'lucide-react';
import gemSapphire4k from '../assets/sapphire_gem_4k.png';
import { RollingNumber } from './RollingNumber';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');
  const [quantity, setQuantity] = useState<number>(100);
  const [timeLeft, setTimeLeft] = useState<number>(23);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

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
            <a
              href={activeTab === 'sell' ? `/sell?quantity=${quantity}` : `/buy?quantity=${quantity}`}
              className="w-full py-3 sm:py-3.5 rounded-xl bg-white text-black font-extrabold text-sm flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-all shadow-lg cursor-pointer active:scale-[0.99]"
            >
              <span>{activeTab === 'sell' ? t.hero.sellBtn : t.hero.buyBtn}</span>
              <RollingNumber value={totalAmount} prefix="$" className="font-extrabold" />
              <span>USDT</span>
              <span className="font-bold">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

