import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { RadarItem } from '../data/radarData';
import { useLanguage } from '../context/LanguageContext';
import {
  rankedDeals as rankedDealsOriginal,
  rustGridItems as rustGridItemsOriginal,
  cs2GridItems as cs2GridItemsOriginal,
  dotaGridItems as dotaGridItemsOriginal,
  tf2GridItems as tf2GridItemsOriginal,
} from '../data/radarData';

// Deep clone helper
function cloneItems(items: RadarItem[]): RadarItem[] {
  return items.map(item => ({ ...item }));
}

// Helper for tile color based on discount or gain (Rich graded spectrum)
function getTileColor(item: RadarItem): string {
  if (item.isGain || item.changePct > 0.05) {
    const pct = item.changePct;
    if (pct >= 5) return '#16a34a'; // Vibrant emerald
    return '#15803d';                // Green-700
  }
  if (item.isFlat || Math.abs(item.changePct) <= 0.05) {
    return '#27272a';                // Neutral flat (0.00%)
  }
  const abs = Math.abs(item.changePct);
  if (abs >= 50) return '#ef4444'; // Red-500 (Vibrant crimson highlight)
  if (abs >= 35) return '#dc2626'; // Red-600
  if (abs >= 20) return '#b91c1c'; // Red-700
  if (abs >= 12) return '#991b1b'; // Red-800
  if (abs >= 6)  return '#7f1d1d'; // Red-900
  return '#501111';                // Deep wine red-950
}

export const SteamToolkitSection: React.FC = () => {
  const { t } = useLanguage();
  // Shock event item ID and live alert message
  const [shockId, setShockId] = useState<string | null>(null);
  const [shockAlert, setShockAlert] = useState<{ name: string; pct: number } | null>(null);
  const [tickCount, setTickCount] = useState<number>(1420);

  // Helper: dramatic flash style based on direction & shock status
  const getFlashStyle = useCallback((id: string, flashIds: Set<string>, dirs: Map<string, 'up' | 'down'>): React.CSSProperties => {
    if (!flashIds.has(id)) return {};
    
    // Shock event: golden yellow lightning flare
    if (id === shockId) {
      return {
        outline: '2.5px solid #fbbf24',
        outlineOffset: '-1px',
        boxShadow: '0 0 24px rgba(251, 191, 36, 0.95), inset 0 0 16px rgba(251, 191, 36, 0.45)',
        filter: 'brightness(1.9)',
        position: 'relative',
        zIndex: 45,
      };
    }

    const dir = dirs.get(id);
    const isUp = dir === 'up';
    return {
      outline: `2px solid ${isUp ? '#22c55e' : '#ef4444'}`,
      outlineOffset: '-1px',
      boxShadow: isUp
        ? '0 0 18px rgba(34, 197, 94, 0.85), inset 0 0 12px rgba(34, 197, 94, 0.35)'
        : '0 0 18px rgba(239, 68, 68, 0.85), inset 0 0 12px rgba(239, 68, 68, 0.35)',
      filter: 'brightness(1.55)',
      position: 'relative',
      zIndex: 35,
    };
  }, [shockId]);

  // Mutable live data stored in state so React re-renders on changes
  const [liveRankedDeals, setLiveRankedDeals] = useState<RadarItem[]>(() => cloneItems(rankedDealsOriginal));
  const [liveRustItems, setLiveRustItems] = useState<RadarItem[]>(() => cloneItems(rustGridItemsOriginal));
  const [liveCs2Items, setLiveCs2Items] = useState<RadarItem[]>(() => cloneItems(cs2GridItemsOriginal));
  const [liveDotaItems, setLiveDotaItems] = useState<RadarItem[]>(() => cloneItems(dotaGridItemsOriginal));
  const [liveTf2Items, setLiveTf2Items] = useState<RadarItem[]>(() => cloneItems(tf2GridItemsOriginal));

  // Currently inspected item (defaults to Charm | Lil' Hero from screenshot)
  const [selectedItem, setSelectedItem] = useState<RadarItem>(rankedDealsOriginal[0]);
  // Set of item IDs that just changed (for flash animation)
  const [flashingIds, setFlashingIds] = useState<Set<string>>(new Set());

  // Counts for header display
  const [counts, setCounts] = useState({ down: 98, up: 1, flat: 1 });

  // Real-time price fluctuation engine — HIGH FREQUENCY DRAMATIC MODE
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const microTickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Track flash direction: 'up' or 'down' for each changed item
  const [flashDirections, setFlashDirections] = useState<Map<string, 'up' | 'down'>>(new Map());

  const doTick = useCallback((isMicroTick = false) => {
    const arraysWithSetters: [RadarItem[], React.Dispatch<React.SetStateAction<RadarItem[]>>][] = [
      [liveRankedDeals, setLiveRankedDeals],
      [liveRustItems, setLiveRustItems],
      [liveCs2Items, setLiveCs2Items],
      [liveDotaItems, setLiveDotaItems],
      [liveTf2Items, setLiveTf2Items],
    ];

    const allEntries: { item: RadarItem; arrIdx: number; itemIdx: number }[] = [];
    arraysWithSetters.forEach(([arr], arrIdx) => {
      arr.forEach((item, itemIdx) => {
        allEntries.push({ item, arrIdx, itemIdx });
      });
    });

    // 4-8 items on main tick, 2-4 on micro tick
    const numToUpdate = isMicroTick
      ? 2 + Math.floor(Math.random() * 3)
      : 4 + Math.floor(Math.random() * 5);

    const shuffled = [...allEntries].sort(() => Math.random() - 0.5);
    const toUpdate = shuffled.slice(0, numToUpdate);

    const changedArrays = new Set<number>();
    const changedIds = new Set<string>();
    const directions = new Map<string, 'up' | 'down'>();

    // 12% chance of a SHOCK EVENT — one item experiences sudden large volatility
    const shockEvent = !isMicroTick && Math.random() < 0.12;
    let shockTarget: typeof toUpdate[0] | null = null;
    if (shockEvent && toUpdate.length > 0) {
      shockTarget = toUpdate[0];
      setShockId(shockTarget.item.id);
      setShockAlert({ name: shockTarget.item.name, pct: Math.round((Math.random() * 8 + 4) * 10) / 10 });
      setTimeout(() => {
        setShockId(null);
        setShockAlert(null);
      }, 1400);
    }

    for (const entry of toUpdate) {
      if (entry.item.isFlat || entry.item.isGain) {
        if (Math.random() > 0.25) continue;
      }

      let jitter: number;
      let priceDelta: number;

      if (entry === shockTarget) {
        // SHOCK: sharp 4-10% shift
        jitter = (Math.random() * 6 + 4) * (Math.random() > 0.35 ? -1 : 1);
        priceDelta = entry.item.priceUsd * (Math.random() * 0.08 + 0.03) * (jitter < 0 ? -1 : 1);
      } else {
        // Dynamic swings: ±0.2% to ±3.2%
        jitter = (Math.random() * 3.0 + 0.2) * (Math.random() > 0.40 ? -1 : 1);
        priceDelta = entry.item.priceUsd * (Math.random() * 0.035 + 0.005) * (Math.random() > 0.45 ? -1 : 1);
      }

      const newPct = Math.round((entry.item.changePct + jitter) * 100) / 100;
      const newPrice = Math.max(0.01, Math.round((entry.item.priceUsd + priceDelta) * 100) / 100);

      const direction = newPct > entry.item.changePct ? 'up' : 'down';

      entry.item.changePct = newPct;
      entry.item.priceUsd = newPrice;
      entry.item.isGain = newPct > 0;
      entry.item.isFlat = Math.abs(newPct) <= 0.05;

      changedArrays.add(entry.arrIdx);
      changedIds.add(entry.item.id);
      directions.set(entry.item.id, direction);
    }

    for (const arrIdx of changedArrays) {
      const [arr, setter] = arraysWithSetters[arrIdx];
      setter([...arr]);
    }

    setFlashingIds(changedIds);
    setFlashDirections(directions);
    setTickCount(c => c + 1);

    setTimeout(() => {
      setFlashingIds(new Set());
      setFlashDirections(new Map());
    }, 420);

    // Update counts
    const all = [
      ...arraysWithSetters[0][0],
      ...arraysWithSetters[1][0],
      ...arraysWithSetters[2][0],
      ...arraysWithSetters[3][0],
      ...arraysWithSetters[4][0],
    ];
    let up = 0, down = 0, flat = 0;
    for (const item of all) {
      if (item.changePct > 0.05) up++;
      else if (item.changePct < -0.05) down++;
      else flat++;
    }
    setCounts({ down, up, flat });

    setSelectedItem(prev => {
      for (const entry of toUpdate) {
        if (entry.item.id === prev.id) {
          return { ...entry.item };
        }
      }
      return prev;
    });
  }, [liveRankedDeals, liveRustItems, liveCs2Items, liveDotaItems, liveTf2Items]);

  useEffect(() => {
    // High-frequency dual-channel tick engine: 550ms heartbeat, 275ms micro offset
    tickRef.current = setInterval(() => doTick(false), 550);
    const startMicro = setTimeout(() => {
      microTickRef.current = setInterval(() => doTick(true), 550);
    }, 275);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
      if (microTickRef.current) clearInterval(microTickRef.current);
      clearTimeout(startMicro);
    };
  }, [doTick]);

  return (
    <section id="steam-toolkit-section" className="w-full bg-black text-white py-12 px-3 sm:px-6 lg:px-8 select-none font-sans">
      <div className="w-full max-w-[1580px] mx-auto space-y-6">

        {/* ============================================================ */}
        {/* HERO BENTO CARD: REAL STEAM ARBITRAGE RADAR (CENTERPIECE)   */}
        {/* ============================================================ */}
        <div className="w-full rounded-2xl border border-zinc-800/80 bg-[#050507] p-4 sm:p-6 overflow-hidden">
          
          {/* Card Header (Minimalist Vercel style) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-900/80">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {t.toolkit.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                {t.toolkit.subtitle}
              </p>
            </div>

            {/* Right Header Status: Live Stream Indicator, Counts & Shock Alerts */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-xs shrink-0 self-start sm:self-center">
              {/* Live Streaming Pulsing Pill */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-semibold tracking-wider">LIVE FEED</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400 text-[10px]">#{tickCount}</span>
              </div>

              {/* Real-time Shock Spike Alert Banner */}
              {shockAlert && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/60 text-[11px] font-mono text-amber-300 animate-pulse">
                  <span>⚡</span>
                  <span className="font-bold truncate max-w-[120px]">{shockAlert.name}</span>
                  <span className="text-red-400 font-extrabold">±{shockAlert.pct}%</span>
                </div>
              )}

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-500 font-bold">{t.toolkit.trendDown} {counts.down}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-500 font-bold">{t.toolkit.trendUp} {counts.up}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-400 font-bold">{t.toolkit.trendNeutral} {counts.flat}</span>
              </div>
            </div>
          </div>

          {/* Sub-header above Treemap and Sidebar */}
          <div className="hidden lg:flex items-center justify-end px-1 mb-1.5">
            <div className="flex items-center justify-between w-[330px] xl:w-[350px] text-zinc-500 text-[11px] font-sans px-2">
              <span>{t.toolkit.colItem}</span>
              <span>{t.toolkit.colTrend}</span>
            </div>
          </div>

          {/* MAIN 2-COLUMN RADAR: TREEMAP (LEFT 80%) + SIDEBAR (RIGHT 20%) */}
          <div className="flex flex-col lg:flex-row gap-1.5 w-full items-stretch">
            
            {/* LEFT: TREEMAP + BOTTOM INSPECTION BAR */}
            <div className="flex-1 min-w-0 flex flex-col justify-between gap-1">
              
              {/* TREEMAP CONTAINER (4 GAMES) */}
              <div className="w-full h-[540px] sm:h-[600px] grid grid-cols-12 bg-black gap-[1px] border border-zinc-900 overflow-hidden">
                
                {/* 1. RUST QUADRANT (FULL HEIGHT LEFT COLUMN: 63 ITEMS) */}
                <div className="col-span-6 sm:col-span-6 flex flex-col bg-black overflow-hidden border-r border-zinc-900">
                  <div className="bg-[#141414] px-2.5 py-1 border-b border-black flex items-center justify-between text-xs font-mono text-zinc-200 shrink-0">
                    <span className="font-bold">Rust</span>
                    <span className="text-zinc-500 text-[11px]">63</span>
                  </div>

                  {/* Rust Treemap Tiles */}
                  <div className="flex-1 grid grid-cols-8 bg-black gap-[1px] p-[1px] overflow-hidden">
                    
                    {/* Col 1 (4 Full Primary Items: Celestial Courser, Assorted Giftwrap, Camo Door, Disco Shirt) */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[0])}
                        style={{ backgroundColor: getTileColor(liveRustItems[0]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[0]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 relative overflow-hidden group hover:ring-1 hover:ring-white ${
                          selectedItem.id === liveRustItems[0].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[0].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Celestial Courser
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[0].changePct > 0 ? '+' : ''}{liveRustItems[0].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[0].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[1])}
                        style={{ backgroundColor: getTileColor(liveRustItems[1]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[1]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[1].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[1].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Assorted Giftwrap
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[1].changePct > 0 ? '+' : ''}{liveRustItems[1].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[1].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[2])}
                        style={{ backgroundColor: getTileColor(liveRustItems[2]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[2]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[2].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[2].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Camouflage Net Door
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[2].changePct > 0 ? '+' : ''}{liveRustItems[2].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[2].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[3])}
                        style={{ backgroundColor: getTileColor(liveRustItems[3]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[3]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[3].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[3].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Burlap Disco Shirt
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[3].changePct > 0 ? '+' : ''}{liveRustItems[3].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[3].priceUsd.toFixed(2)}
                        </div>
                      </button>
                    </div>

                    {/* Col 2 (4 Full Primary Items: Blackout MP5, Apocalypse Nomad, Blackout Poncho, Base Invaders) */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[4])}
                        style={{ backgroundColor: getTileColor(liveRustItems[4]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[4]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[4].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[4].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Blackout MP5
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[4].changePct > 0 ? '+' : ''}{liveRustItems[4].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[4].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[5])}
                        style={{ backgroundColor: getTileColor(liveRustItems[5]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[5]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[5].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[5].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Apocalypse Nomad
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[5].changePct > 0 ? '+' : ''}{liveRustItems[5].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[5].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[6])}
                        style={{ backgroundColor: getTileColor(liveRustItems[6]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[6]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[6].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[6].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Blackout Poncho
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[6].changePct > 0 ? '+' : ''}{liveRustItems[6].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[6].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[7])}
                        style={{ backgroundColor: getTileColor(liveRustItems[7]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[7]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[7].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[7].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Base Invaders
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[7].changePct > 0 ? '+' : ''}{liveRustItems[7].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[7].priceUsd.toFixed(2)}
                        </div>
                      </button>
                    </div>

                    {/* Col 3 (4 Full Primary Items: Black Gold Vest, Bone Dragon Hatchet, Neon Fuel Storage, Chocolate Hunter) */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[8])}
                        style={{ backgroundColor: getTileColor(liveRustItems[8]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[8]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[8].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[8].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Black Gold Vest
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[8].changePct > 0 ? '+' : ''}{liveRustItems[8].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[8].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[9])}
                        style={{ backgroundColor: getTileColor(liveRustItems[9]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[9]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[9].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[9].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Bone Dragon
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[9].changePct > 0 ? '+' : ''}{liveRustItems[9].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[9].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[10])}
                        style={{ backgroundColor: getTileColor(liveRustItems[10]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[10]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[10].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[10].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Neon Small Fuel
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[10].changePct > 0 ? '+' : ''}{liveRustItems[10].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[10].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[11])}
                        style={{ backgroundColor: getTileColor(liveRustItems[11]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[11]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[11].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[11].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Chocolate Hunter
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[11].changePct > 0 ? '+' : ''}{liveRustItems[11].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[11].priceUsd.toFixed(2)}
                        </div>
                      </button>
                    </div>

                    {/* Col 4 (Arctic Protection, Blackout SMG, Cloud Shot Crossbow, tactical & vest split) */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[12])}
                        style={{ backgroundColor: getTileColor(liveRustItems[12]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[12]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[12].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[12].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Arctic Protection
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[12].changePct > 0 ? '+' : ''}{liveRustItems[12].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[12].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[13])}
                        style={{ backgroundColor: getTileColor(liveRustItems[13]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[13]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[13].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[13].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Blackout SMG
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[13].changePct > 0 ? '+' : ''}{liveRustItems[13].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[13].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[14])}
                        style={{ backgroundColor: getTileColor(liveRustItems[14]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[14]).id, flashingIds, flashDirections) }}
                        className={`flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                          selectedItem.id === liveRustItems[14].id ? 'ring-2 ring-white z-20' : ''
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[14].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-full px-0.5">
                          Cloud Shot
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-white font-mono leading-tight my-0.5">
                          {liveRustItems[14].changePct > 0 ? '+' : ''}{liveRustItems[14].changePct.toFixed(2)}%
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] text-white/70 font-mono leading-none">
                          USD {liveRustItems[14].priceUsd.toFixed(2)}
                        </div>
                      </button>

                      <div className="flex-1 flex flex-col gap-[1px]">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveRustItems[15])}
                          style={{ backgroundColor: getTileColor(liveRustItems[15]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[15]).id, flashingIds, flashDirections) }}
                          className="flex-1 p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                        >
                          <div className="w-5 h-5 flex items-center justify-center shrink-0">
                            <img src={liveRustItems[15].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-[9px] font-extrabold text-white font-mono leading-none mt-0.5">
                            {liveRustItems[15].changePct > 0 ? '+' : ''}{liveRustItems[15].changePct.toFixed(2)}%
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveRustItems[16])}
                          style={{ backgroundColor: getTileColor(liveRustItems[16]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[16]).id, flashingIds, flashDirections) }}
                          className="flex-1 p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                        >
                          <div className="w-5 h-5 flex items-center justify-center shrink-0">
                            <img src={liveRustItems[16].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-[9px] font-extrabold text-white font-mono leading-none mt-0.5">
                            {liveRustItems[16].changePct > 0 ? '+' : ''}{liveRustItems[16].changePct.toFixed(2)}%
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Col 5 */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[17])}
                        style={{ backgroundColor: getTileColor(liveRustItems[17]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[17]).id, flashingIds, flashDirections) }}
                        className="flex-[1.6] p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[17].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7.5px] sm:text-[8px] font-semibold text-white/90 leading-tight truncate max-w-[52px]">Carrot Knife</div>
                        <div className="text-[10px] sm:text-[11px] font-black text-white font-mono leading-tight my-0.5">{liveRustItems[17].changePct > 0 ? '+' : ''}{liveRustItems[17].changePct.toFixed(2)}%</div>
                        <div className="text-[7px] text-white/70 font-mono leading-none">USD {liveRustItems[17].priceUsd.toFixed(2)}</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[18])}
                        style={{ backgroundColor: getTileColor(liveRustItems[18]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[18]).id, flashingIds, flashDirections) }}
                        className="flex-[1.4] p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mb-0.5 shrink-0">
                          <img src={liveRustItems[18].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                        </div>
                        <div className="text-[7px] sm:text-[7.5px] font-semibold text-white/90 leading-tight truncate max-w-[50px]">Black Diamond</div>
                        <div className="text-[9.5px] sm:text-[10px] font-black text-white font-mono leading-tight my-0.5">{liveRustItems[18].changePct > 0 ? '+' : ''}{liveRustItems[18].changePct.toFixed(2)}%</div>
                        <div className="text-[6.5px] sm:text-[7px] text-white/70 font-mono leading-none">USD {liveRustItems[18].priceUsd.toFixed(2)}</div>
                      </button>

                      <div className="flex-1 grid grid-cols-1 gap-[1px]">
                        {[liveRustItems[19], liveRustItems[20], liveRustItems[21]].map((it) => (
                          <button
                            key={it.id}
                            type="button"
                            onClick={() => setSelectedItem(it)}
                            style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-[7.5px] font-mono text-white font-bold cursor-pointer hover:ring-1 hover:ring-white"
                          >
                            <div className="w-2.5 h-2.5 flex items-center justify-center">
                              <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                            </div>
                            <span>{it.changePct.toFixed(2)}%</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Col 6 */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[24])}
                        style={{ backgroundColor: getTileColor(liveRustItems[24]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[24]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[24].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[8px] font-bold text-white font-mono">{liveRustItems[24].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[25])}
                        style={{ backgroundColor: getTileColor(liveRustItems[25]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[25]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[25].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[8px] font-bold text-white font-mono">{liveRustItems[25].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[26])}
                        style={{ backgroundColor: getTileColor(liveRustItems[26]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[26]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[26].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[8px] font-bold text-white font-mono">{liveRustItems[26].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[27])}
                        style={{ backgroundColor: getTileColor(liveRustItems[27]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[27]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[27].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[8px] font-bold text-white font-mono">{liveRustItems[27].changePct.toFixed(2)}%</div>
                      </button>
                      <div className="flex-1 grid grid-cols-2 gap-[1px]">
                        {[liveRustItems[28], liveRustItems[29], liveRustItems[30], liveRustItems[31]].map((it) => (
                          <button
                            key={it.id}
                            type="button"
                            onClick={() => setSelectedItem(it)}
                            style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-[7px] font-mono text-white cursor-pointer hover:ring-1 hover:ring-white truncate"
                          >
                            <div className="w-2.5 h-2.5 flex items-center justify-center">
                              <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                            </div>
                            <span>{it.changePct.toFixed(1)}%</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Col 7 */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[32])}
                        style={{ backgroundColor: getTileColor(liveRustItems[32]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[32]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[32].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[7.5px] font-bold text-white font-mono">{liveRustItems[32].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[33])}
                        style={{ backgroundColor: getTileColor(liveRustItems[33]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[33]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[33].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[7.5px] font-bold text-white font-mono">{liveRustItems[33].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[34])}
                        style={{ backgroundColor: getTileColor(liveRustItems[34]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[34]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[34].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[7.5px] font-bold text-white font-mono">{liveRustItems[34].changePct.toFixed(2)}%</div>
                      </button>
                      <div className="flex-[1.5] grid grid-cols-2 gap-[1px]">
                        {[liveRustItems[35], liveRustItems[36], liveRustItems[37], liveRustItems[38], liveRustItems[39], liveRustItems[40]].map((it) => (
                          <button
                            key={it.id}
                            type="button"
                            onClick={() => setSelectedItem(it)}
                            style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-[6.5px] font-mono text-white cursor-pointer hover:ring-1 hover:ring-white truncate"
                          >
                            <div className="w-2.5 h-2.5 flex items-center justify-center">
                              <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                            </div>
                            <span>{it.changePct.toFixed(1)}%</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Col 8 */}
                    <div className="col-span-1 flex flex-col gap-[1px]">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[41])}
                        style={{ backgroundColor: getTileColor(liveRustItems[41]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[41]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[41].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[7.5px] font-bold text-white font-mono">{liveRustItems[41].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[42])}
                        style={{ backgroundColor: getTileColor(liveRustItems[42]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[42]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <img src={liveRustItems[42].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[7.5px] font-bold text-white font-mono">{liveRustItems[42].changePct.toFixed(2)}%</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(liveRustItems[43])}
                        style={{ backgroundColor: getTileColor(liveRustItems[43]), transition: 'all 0.3s ease', ...getFlashStyle((liveRustItems[43]).id, flashingIds, flashDirections) }}
                        className="flex-1 p-0.5 flex flex-col justify-center items-center text-center cursor-pointer hover:ring-1 hover:ring-white"
                      >
                        <div className="w-3 h-3 flex items-center justify-center">
                          <img src={liveRustItems[43].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-[7px] text-white truncate max-w-[45px]">Blackberry</div>
                        <div className="text-[7px] font-bold text-white font-mono">{liveRustItems[43].changePct.toFixed(2)}%</div>
                      </button>
                      <div className="flex-[2] grid grid-cols-2 gap-[1px]">
                        {liveRustItems.slice(44, 56).map((it) => (
                          <button
                            key={it.id}
                            type="button"
                            onClick={() => setSelectedItem(it)}
                            style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-[6px] font-mono text-white cursor-pointer hover:ring-1 hover:ring-white truncate"
                          >
                            <div className="w-2.5 h-2.5 flex items-center justify-center">
                              <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                            </div>
                            <span>{it.changePct.toFixed(1)}%</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. RIGHT HALF: CS2 (TOP) + DOTA 2 & TF2 (BOTTOM) */}
                <div className="col-span-6 sm:col-span-6 flex flex-col bg-black overflow-hidden gap-[1px]">
                  
                  {/* 2A. COUNTER-STRIKE 2 (TOP 58% HEIGHT: 22 ITEMS) */}
                  <div className="h-[58%] flex flex-col bg-black overflow-hidden border-b border-black">
                    <div className="bg-[#141414] px-3 py-1 border-b border-black flex items-center justify-between text-xs font-mono text-zinc-200 shrink-0">
                      <span className="font-bold">Counter-Strike 2</span>
                      <span className="text-zinc-500 text-[11px]">22</span>
                    </div>

                    <div className="flex-1 grid grid-cols-12 bg-black gap-[1px] p-[1px] overflow-hidden">
                      
                      {/* CS2 Big Tile 1: Charm | Lil' Hero (-59.70%) */}
                      <div className="col-span-5 flex flex-col gap-[1px]">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[0])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[0]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[0]).id, flashingIds, flashDirections) }}
                          className={`flex-[1.8] p-2 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 relative overflow-hidden group hover:ring-1 hover:ring-white ${
                            selectedItem.id === liveCs2Items[0].id ? 'ring-2 ring-white z-20' : ''
                          }`}
                        >
                          <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-1 shrink-0">
                            <img src={liveCs2Items[0].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow-md" />
                          </div>
                          <div className="text-[11px] sm:text-xs font-semibold text-white/95 truncate max-w-full leading-tight px-1">
                            Charm | Lil' Hero
                          </div>
                          <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight my-0.5 leading-none">
                            {liveCs2Items[0].changePct > 0 ? '+' : ''}{liveCs2Items[0].changePct.toFixed(2)}%
                          </div>
                          <div className="text-[9.5px] sm:text-[10px] text-white/75 font-mono leading-none">
                            USD {liveCs2Items[0].priceUsd.toFixed(2)}
                          </div>
                        </button>

                        {/* CS2 Big Tile 2: Charm | Flash Bomb (-36.07%) */}
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[1])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[1]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[1]).id, flashingIds, flashDirections) }}
                          className={`flex-1 p-1.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                            selectedItem.id === liveCs2Items[1].id ? 'ring-2 ring-white z-20' : ''
                          }`}
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-1 shrink-0">
                            <img src={liveCs2Items[1].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-white/95 truncate max-w-full leading-tight px-1">
                            Charm | Flash Bomb
                          </div>
                          <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight my-0.5 leading-none">
                            {liveCs2Items[1].changePct > 0 ? '+' : ''}{liveCs2Items[1].changePct.toFixed(2)}%
                          </div>
                          <div className="text-[8.5px] sm:text-[9px] text-white/75 font-mono leading-none">
                            USD {liveCs2Items[1].priceUsd.toFixed(2)}
                          </div>
                        </button>
                      </div>

                      {/* CS2 Mid Column: Charm | Lil' Happy (-20.13%) & AWP Asiimov (-14.22%) */}
                      <div className="col-span-3 flex flex-col gap-[1px]">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[2])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[2]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[2]).id, flashingIds, flashDirections) }}
                          className={`flex-[1.2] p-1.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                            selectedItem.id === liveCs2Items[2].id ? 'ring-2 ring-white z-20' : ''
                          }`}
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-1 shrink-0">
                            <img src={liveCs2Items[2].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-white/95 truncate max-w-full leading-tight px-1">
                            Charm | Lil' Happy
                          </div>
                          <div className="text-lg sm:text-xl font-black text-white font-mono tracking-tight my-0.5 leading-none">
                            {liveCs2Items[2].changePct > 0 ? '+' : ''}{liveCs2Items[2].changePct.toFixed(2)}%
                          </div>
                          <div className="text-[8.5px] text-white/75 font-mono leading-none">
                            USD {liveCs2Items[2].priceUsd.toFixed(2)}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[3])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[3]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[3]).id, flashingIds, flashDirections) }}
                          className="flex-1 p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group"
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-0.5 shrink-0">
                            <img src={liveCs2Items[3].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-sm sm:text-base font-black text-white font-mono tracking-tight leading-none mt-0.5">
                            {liveCs2Items[3].changePct > 0 ? '+' : ''}{liveCs2Items[3].changePct.toFixed(2)}%
                          </div>
                        </button>
                      </div>

                      {/* CS2 Agents Column */}
                      <div className="col-span-2 flex flex-col gap-[1px]">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[4])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[4]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[4]).id, flashingIds, flashDirections) }}
                          className="flex-[1.2] p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mb-0.5 shrink-0">
                            <img src={liveCs2Items[4].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[9px] sm:text-[10px] font-extrabold text-white font-mono leading-none">{liveCs2Items[4].changePct.toFixed(2)}%</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[5])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[5]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[5]).id, flashingIds, flashDirections) }}
                          className="flex-[1.2] p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mb-0.5 shrink-0">
                            <img src={liveCs2Items[5].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[9px] sm:text-[10px] font-extrabold text-white font-mono leading-none">{liveCs2Items[5].changePct.toFixed(2)}%</div>
                        </button>
                        <div className="flex-1 grid grid-cols-2 gap-[1px]">
                          {[liveCs2Items[8], liveCs2Items[9], liveCs2Items[11], liveCs2Items[12]].map((it) => (
                            <button
                              key={it.id}
                              type="button"
                              onClick={() => setSelectedItem(it)}
                              style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                              className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                            >
                              <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                                <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                              </div>
                              <span className="text-[6.5px] sm:text-[7px] font-bold text-white font-mono leading-none mt-0.5">{it.changePct.toFixed(1)}%</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* CS2 Rightmost Column */}
                      <div className="col-span-2 flex flex-col gap-[1px]">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[6])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[6]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[6]).id, flashingIds, flashDirections) }}
                          className="flex-[1.2] p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mb-0.5 shrink-0">
                            <img src={liveCs2Items[6].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[9px] sm:text-[10px] font-extrabold text-white font-mono leading-none">{liveCs2Items[6].changePct.toFixed(2)}%</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveCs2Items[7])}
                          style={{ backgroundColor: getTileColor(liveCs2Items[7]), transition: 'all 0.3s ease', ...getFlashStyle((liveCs2Items[7]).id, flashingIds, flashDirections) }}
                          className="flex-[1.2] p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                        >
                          <div className="w-4 h-4 flex items-center justify-center mb-0.5 shrink-0">
                            <img src={liveCs2Items[7].imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-[7.5px] font-semibold text-white/90 truncate max-w-[45px] leading-tight">Charm | Lil'</div>
                          <div className="text-[8.5px] font-black text-white font-mono leading-none mt-0.5">{liveCs2Items[7].changePct.toFixed(2)}%</div>
                        </button>
                        <div className="flex-1 grid grid-cols-2 gap-[1px]">
                          {liveCs2Items.slice(14, 22).map((it) => (
                            <button
                              key={it.id}
                              type="button"
                              onClick={() => setSelectedItem(it)}
                              style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                              className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                            >
                              <div className="w-3 h-3 flex items-center justify-center shrink-0">
                                <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                              </div>
                              <span className="text-[6.5px] font-bold text-white font-mono leading-none mt-0.5">{it.changePct.toFixed(1)}%</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2B. DOTA 2 & TF2 (BOTTOM 42% HEIGHT) */}
                  <div className="h-[42%] grid grid-cols-12 bg-black gap-[1px]">
                    
                    {/* DOTA 2 (COL-SPAN-7: 11 ITEMS) */}
                    <div className="col-span-7 flex flex-col bg-black overflow-hidden border-r border-black">
                      <div className="bg-[#141414] px-3 py-1 border-b border-black flex items-center justify-between text-xs font-mono text-zinc-200 shrink-0">
                        <span className="font-bold">Dota 2</span>
                        <span className="text-zinc-500 text-[11px]">11</span>
                      </div>

                      <div className="flex-1 grid grid-cols-12 bg-black gap-[1px] p-[1px] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveDotaItems[0])}
                          style={{ backgroundColor: getTileColor(liveDotaItems[0]), transition: 'all 0.3s ease', ...getFlashStyle((liveDotaItems[0]).id, flashingIds, flashDirections) }}
                          className={`col-span-6 p-2 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                            selectedItem.id === liveDotaItems[0].id ? 'ring-2 ring-white z-20' : ''
                          }`}
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-1 shrink-0">
                            <img src={liveDotaItems[0].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-white/95 leading-tight truncate max-w-[95%] px-1">
                            Arms of the Boreal Sentinel
                          </div>
                          <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight my-0.5 leading-none">
                            {liveDotaItems[0].changePct > 0 ? '+' : ''}{liveDotaItems[0].changePct.toFixed(2)}%
                          </div>
                          <div className="text-[8.5px] sm:text-[9px] text-white/75 font-mono leading-none">
                            USD {liveDotaItems[0].priceUsd.toFixed(2)}
                          </div>
                        </button>

                        <div className="col-span-6 flex flex-col gap-[1px]">
                          <div className="flex-1 grid grid-cols-2 gap-[1px]">
                            <button
                              type="button"
                              onClick={() => setSelectedItem(liveDotaItems[1])}
                              style={{ backgroundColor: getTileColor(liveDotaItems[1]), transition: 'all 0.3s ease', ...getFlashStyle((liveDotaItems[1]).id, flashingIds, flashDirections) }}
                              className="p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                            >
                              <div className="w-5 h-5 flex items-center justify-center mb-0.5 shrink-0">
                                <img src={liveDotaItems[1].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                              </div>
                              <div className="text-[7.5px] text-white/90 truncate max-w-[50px] leading-tight">Astral Origins</div>
                              <div className="text-[8.5px] sm:text-[9px] font-black text-white font-mono leading-none mt-0.5">{liveDotaItems[1].changePct.toFixed(2)}%</div>
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedItem(liveDotaItems[2])}
                              style={{ backgroundColor: getTileColor(liveDotaItems[2]), transition: 'all 0.3s ease', ...getFlashStyle((liveDotaItems[2]).id, flashingIds, flashDirections) }}
                              className="p-1 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                            >
                              <div className="w-5 h-5 flex items-center justify-center mb-0.5 shrink-0">
                                <img src={liveDotaItems[2].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                              </div>
                              <div className="text-[7.5px] text-white/90 truncate max-w-[50px] leading-tight">Autographed</div>
                              <div className="text-[8.5px] sm:text-[9px] font-black text-white font-mono leading-none mt-0.5">{liveDotaItems[2].changePct.toFixed(2)}%</div>
                            </button>
                          </div>

                          <div className="flex-1 grid grid-cols-4 gap-[1px]">
                            {liveDotaItems.slice(3, 11).map((it) => (
                              <button
                                key={it.id}
                                type="button"
                                onClick={() => setSelectedItem(it)}
                                style={{ backgroundColor: getTileColor(it), transition: 'all 0.3s ease', ...getFlashStyle((it).id, flashingIds, flashDirections) }}
                                className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                              >
                                <div className="w-3 h-3 flex items-center justify-center shrink-0">
                                  <img src={it.imageUrl} alt="" className="max-w-full max-h-full object-contain" />
                                </div>
                                <span className="text-[6px] sm:text-[6.5px] font-bold text-white font-mono leading-none mt-0.5">{it.changePct.toFixed(1)}%</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TEAM FORTRESS 2 (COL-SPAN-5: 8 ITEMS) */}
                    <div className="col-span-5 flex flex-col bg-black overflow-hidden">
                      <div className="bg-[#141414] px-3 py-1 border-b border-black flex items-center justify-between text-xs font-mono text-zinc-200 shrink-0">
                        <span className="font-bold truncate">Team Fortress 2</span>
                        <span className="text-zinc-500 text-[11px]">8</span>
                      </div>

                      <div className="flex-1 flex flex-col bg-black gap-[1px] p-[1px] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(liveTf2Items[0])}
                          style={{ backgroundColor: getTileColor(liveTf2Items[0]), transition: 'all 0.3s ease', ...getFlashStyle((liveTf2Items[0]).id, flashingIds, flashDirections) }}
                          className={`flex-[1.5] p-2 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden group ${
                            selectedItem.id === liveTf2Items[0].id ? 'ring-2 ring-white z-20' : ''
                          }`}
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center mb-1 shrink-0">
                            <img src={liveTf2Items[0].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-white/95 leading-tight truncate max-w-[90px] px-1">
                            Atomic Bomber
                          </div>
                          <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight my-0.5 leading-none">
                            {liveTf2Items[0].changePct > 0 ? '+' : ''}{liveTf2Items[0].changePct.toFixed(2)}%
                          </div>
                          <div className="text-[8.5px] text-white/75 font-mono leading-none">
                            USD {liveTf2Items[0].priceUsd.toFixed(2)}
                          </div>
                        </button>

                        {/* TF2 Bottom Row: Coldfront, Australium, Antarctic Eyewear (+0.17% GREEN!), Mann Co Key (0.00% FLAT!) */}
                        <div className="flex-1 grid grid-cols-4 gap-[1px]">
                          <button
                            type="button"
                            onClick={() => setSelectedItem(liveTf2Items[1])}
                            style={{ backgroundColor: getTileColor(liveTf2Items[1]), transition: 'all 0.3s ease', ...getFlashStyle((liveTf2Items[1]).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                          >
                            <div className="w-4 h-4 flex items-center justify-center mb-0.5 shrink-0">
                              <img src={liveTf2Items[1].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                            </div>
                            <div className="text-[6.5px] text-white/90 truncate max-w-[35px] leading-tight">Coldfront</div>
                            <div className="text-[7.5px] font-black text-white font-mono leading-none mt-0.5">{liveTf2Items[1].changePct.toFixed(2)}%</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedItem(liveTf2Items[2])}
                            style={{ backgroundColor: getTileColor(liveTf2Items[2]), transition: 'all 0.3s ease', ...getFlashStyle((liveTf2Items[2]).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                          >
                            <div className="w-4 h-4 flex items-center justify-center mb-0.5 shrink-0">
                              <img src={liveTf2Items[2].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                            </div>
                            <div className="text-[6.5px] text-white/90 truncate max-w-[35px] leading-tight">Austral..</div>
                            <div className="text-[7.5px] font-black text-white font-mono leading-none mt-0.5">{liveTf2Items[2].changePct.toFixed(2)}%</div>
                          </button>
                          {/* GREEN TILE */}
                          <button
                            type="button"
                            onClick={() => setSelectedItem(liveTf2Items[6])}
                            style={{ backgroundColor: getTileColor(liveTf2Items[6]), transition: 'all 0.3s ease', ...getFlashStyle((liveTf2Items[6]).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer ring-1 ring-emerald-400 hover:ring-2 hover:ring-white relative overflow-hidden"
                          >
                            <div className="w-4 h-4 flex items-center justify-center mb-0.5 shrink-0">
                              <img src={liveTf2Items[6].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                            </div>
                            <div className="text-[6.5px] text-emerald-100 truncate max-w-[35px] leading-tight font-medium">Antarctic</div>
                            <div className="text-[8px] font-black text-white font-mono leading-none mt-0.5">{liveTf2Items[6].changePct > 0 ? '+' : ''}{liveTf2Items[6].changePct.toFixed(2)}%</div>
                          </button>
                          {/* FLAT TILE */}
                          <button
                            type="button"
                            onClick={() => setSelectedItem(liveTf2Items[7])}
                            style={{ backgroundColor: getTileColor(liveTf2Items[7]), transition: 'all 0.3s ease', ...getFlashStyle((liveTf2Items[7]).id, flashingIds, flashDirections) }}
                            className="p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:ring-1 hover:ring-white relative overflow-hidden"
                          >
                            <div className="w-4 h-4 flex items-center justify-center mb-0.5 shrink-0">
                              <img src={liveTf2Items[7].imageUrl} alt="" className="max-w-full max-h-full object-contain drop-shadow" />
                            </div>
                            <div className="text-[6.5px] text-zinc-400 truncate max-w-[35px] leading-tight">Key</div>
                            <div className="text-[7.5px] font-black text-amber-300 font-mono leading-none mt-0.5">{liveTf2Items[7].changePct.toFixed(2)}%</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM INSPECTION HUD (MATCHING SCREENSHOT WITH DRAMATIC LIVE PULSE) */}
              <div
                className={`w-full bg-[#050505] border px-3 py-2 flex items-center justify-between text-left transition-all duration-300 ${
                  flashingIds.has(selectedItem.id)
                    ? flashDirections.get(selectedItem.id) === 'up'
                      ? 'border-emerald-500/80 shadow-[0_0_24px_rgba(34,197,94,0.3)] bg-emerald-950/20'
                      : 'border-red-500/80 shadow-[0_0_24px_rgba(239,68,68,0.3)] bg-red-950/20'
                    : 'border-zinc-900'
                }`}
              >
                {/* Left Details */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 bg-black border border-zinc-800 p-1 flex items-center justify-center shrink-0 relative">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.name}
                      className="max-w-full max-h-full object-contain drop-shadow"
                    />
                    {flashingIds.has(selectedItem.id) && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          flashDirections.get(selectedItem.id) === 'up' ? 'bg-emerald-400' : 'bg-red-400'
                        }`} />
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${
                          flashDirections.get(selectedItem.id) === 'up' ? 'bg-emerald-500' : 'bg-red-500'
                        }`} />
                      </span>
                    )}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                        {selectedItem.game}
                      </span>
                      {flashingIds.has(selectedItem.id) && (
                        <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold tracking-wider animate-pulse ${
                          flashDirections.get(selectedItem.id) === 'up'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-red-500/20 text-red-300 border border-red-500/40'
                        }`}>
                          {flashDirections.get(selectedItem.id) === 'up' ? '▲ LIVE TICK' : '▼ LIVE TICK'}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      {selectedItem.name}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      최근 판매 완료 시간 : {selectedItem.timeAgo}
                    </div>
                  </div>
                </div>

                {/* Right Price & Metrics */}
                <div className="text-right font-mono shrink-0 pl-3">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className={`text-lg font-bold transition-colors duration-200 ${
                      flashingIds.has(selectedItem.id)
                        ? flashDirections.get(selectedItem.id) === 'up'
                          ? 'text-emerald-300'
                          : 'text-red-300'
                        : 'text-white'
                    }`}>
                      USD {selectedItem.priceUsd.toFixed(2)}
                    </span>
                    <span className={`text-sm font-bold flex items-center gap-1 ${
                      selectedItem.changePct > 0 ? 'text-emerald-400' : 'text-red-500'
                    }`}>
                      {flashingIds.has(selectedItem.id) && (
                        <span className={`text-[9px] font-extrabold ${
                          flashDirections.get(selectedItem.id) === 'up' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {flashDirections.get(selectedItem.id) === 'up' ? '▲' : '▼'}
                        </span>
                      )}
                      ({selectedItem.changePct > 0 ? '+' : ''}{selectedItem.changePct.toFixed(2)}%)
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    역대 최저 대칭가 (USD) : USD {selectedItem.histLowestUsd ? selectedItem.histLowestUsd.toFixed(2) : (selectedItem.priceUsd * 0.98).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR: RANKED DEALS LIST 01 TO 13 (MATCHING SCREENSHOT WITH LIVE FLUIDITY) */}
            <div className="w-full lg:w-[330px] xl:w-[350px] shrink-0 bg-[#050505] border border-zinc-900 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 flex flex-col justify-between divide-y divide-zinc-900/80">
                {liveRankedDeals.map((deal, idx) => {
                  const rankNum = String(idx + 1).padStart(2, '0');
                  const isSelected = selectedItem.id === deal.id;
                  const isFlashing = flashingIds.has(deal.id);
                  const dir = flashDirections.get(deal.id);

                  return (
                    <div
                      key={deal.id}
                      onClick={() => setSelectedItem(deal)}
                      className={`flex items-center justify-between px-2.5 py-1.5 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-zinc-900/70 border-l-2 border-red-500'
                          : 'hover:bg-zinc-900/40'
                      }`}
                      style={{
                        ...getFlashStyle(deal.id, flashingIds, flashDirections),
                        ...(isFlashing
                          ? {
                              backgroundColor: dir === 'up' ? 'rgba(34,197,94,0.18)' : 'rgba(239,68,68,0.18)',
                              borderLeft: dir === 'up' ? '2px solid #22c55e' : '2px solid #ef4444',
                            }
                          : {}),
                      }}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <span className="text-[10px] font-mono text-zinc-500 w-4 shrink-0">
                          {rankNum}
                        </span>
                        <div className="w-7 h-7 bg-black border border-zinc-800 p-0.5 flex items-center justify-center shrink-0">
                          <img
                            src={deal.imageUrl}
                            alt=""
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-white truncate max-w-[135px]">
                            {deal.name}
                          </div>
                          <div className="text-[9.5px] text-zinc-500 font-mono truncate max-w-[135px]">
                            {deal.game} · {deal.timeAgo}
                          </div>
                        </div>
                      </div>

                      <div className="text-right font-mono shrink-0">
                        <div className={`text-[10.5px] leading-tight font-medium transition-colors duration-200 ${
                          isFlashing
                            ? dir === 'up' ? 'text-emerald-300 font-bold' : 'text-red-300 font-bold'
                            : 'text-zinc-200'
                        }`}>
                          USD {deal.priceUsd.toFixed(2)}
                        </div>
                        <div className={`text-[11px] font-bold leading-tight mt-0.5 flex items-center justify-end gap-1 ${
                          deal.changePct > 0 ? 'text-emerald-400' : 'text-red-500'
                        }`}>
                          {isFlashing && (
                            <span className={`text-[8.5px] font-extrabold ${
                              dir === 'up' ? 'text-emerald-400' : 'text-red-400'
                            }`}>
                              {dir === 'up' ? '▲' : '▼'}
                            </span>
                          )}
                          <span>{deal.changePct > 0 ? '+' : ''}{deal.changePct.toFixed(2)}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* COMPANION BENTO CARDS: FEE ENGINE & INSTANT LIQUIDITY        */}
        {/* Styled identically to Vercel Bento Grid (media_1789790339270.png) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Valve Fee Engine (Exact Vercel Containers CLI Style) */}
          <div className="rounded-2xl border border-zinc-800/80 bg-[#050507] p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white tracking-tight">
                  Fee Engine
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[280px]">
                  Calculate exact 15% Valve marketplace fee math accounting for 5% Steam and 10% publisher cuts.
                </p>
              </div>

              {/* CLI Terminal Widget */}
              <div className="w-full sm:w-[280px] bg-[#0c0c0e] border border-zinc-800/90 rounded-xl p-4 font-mono text-[11px] text-zinc-300 shadow-2xl shrink-0">
                <div className="text-zinc-500 flex items-center gap-1.5 mb-2.5">
                  <span className="text-emerald-400 font-bold">▲</span>
                  <span className="text-white font-semibold">valve-fee calculate</span>
                </div>
                <div className="space-y-1 text-zinc-400">
                  <div className="text-zinc-500">Steam Community Market</div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span>✓</span>
                    <span>Target Seller Net: <strong className="text-white">$100.00</strong></span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span>✓</span>
                    <span>Steam Fee (5%): <span className="text-zinc-300">$5.00</span></span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span>✓</span>
                    <span>Game Fee (10%): <span className="text-zinc-300">$10.00</span></span>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/80 text-white font-bold flex justify-between">
                    <span>Buyer Pays:</span>
                    <span className="text-emerald-400">$115.00 USD</span>
                  </div>
                  <div className="text-zinc-500 text-[10px] flex justify-between">
                    <span>Effective Take Rate:</span>
                    <span className="text-blue-400 font-mono">13.04%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 24/7 Automated Settlement (Exact Vercel Passport Style) */}
          <div className="rounded-2xl border border-zinc-800/80 bg-[#050507] p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white tracking-tight">
                  Instant Liquidity
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[280px]">
                  24/7 automated trade bot settlement for TF2 Keys and Sacks of Gems with 0% slippage.
                </p>
              </div>

              {/* Bot Settlement Badge Card */}
              <div className="w-full sm:w-[280px] bg-[#0c0c0e] border border-zinc-800/90 rounded-xl p-4 font-mono text-[11px] text-zinc-300 shadow-2xl shrink-0">
                <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-zinc-800/80">
                  <span className="text-white font-bold tracking-wider">STEAMVAULTS</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">BOT ONLINE</span>
                </div>
                <div className="space-y-1.5 py-2.5 text-zinc-400">
                  <div className="flex justify-between">
                    <span>TF2 Mann Co. Key:</span>
                    <span className="text-amber-400 font-bold">$1.98 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sack of Gems (1,000):</span>
                    <span className="text-emerald-400 font-bold">$0.29 USD</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-500">
                    <span>Fixed Slippage:</span>
                    <span className="text-white font-mono">0.00%</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-zinc-800/80 text-[10px] text-zinc-400 space-y-0.5">
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span>✓</span>
                    <span>Trade Offer Accepted (3.8s)</span>
                  </div>
                  <div className="text-zinc-500">Settled: 49.50 USDT instantly</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
