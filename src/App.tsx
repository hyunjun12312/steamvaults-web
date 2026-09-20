import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChromeExtensionSection } from './components/ChromeExtensionSection';
import { SteamToolkitSection } from './components/SteamToolkitSection';
import { TrustSection } from './components/TrustSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-black text-white selection:bg-blue-500/25 selection:text-blue-300 overflow-x-hidden">
        {/* 1. Header Navigation */}
        <Navbar />

        {/* 2. Hero & Interactive Swap Terminal with 3D Sapphire Gem */}
        <main id="main-content">
          <div id="swap">
            <HeroSection />
          </div>

          {/* 3. Chrome Extension Feature Spotlight */}
          <ChromeExtensionSection />

          {/* 4. Free Steam Toolkit (CS2, Dota 2, TF2, Rust) */}
          <SteamToolkitSection />

          {/* 5. Things You Can Verify (Trust Architecture) */}
          <TrustSection />

          {/* 6. Interactive FAQ Accordion */}
          <FAQSection />

          {/* 7. Final Call to Action */}
          <FinalCTA />
        </main>

        {/* 8. Global Engineering Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
