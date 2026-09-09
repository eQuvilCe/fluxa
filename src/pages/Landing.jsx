import Nav from '../components/Nav.jsx';
import StripeCanvasBackground from '../components/StripeCanvasBackground.jsx';
import Hero from '../components/Hero.jsx';
import LogoCarousel from '../components/LogoCarousel.jsx';
import Products from '../components/Products.jsx';
import StatsBand from '../components/StatsBand.jsx';
import DevPlatform from '../components/DevPlatform.jsx';
import Stories from '../components/Stories.jsx';
import FutureTiles from '../components/FutureTiles.jsx';
import IntegrationBand from '../components/IntegrationBand.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import GlobalNetwork from '../components/GlobalNetwork.jsx';
import LiveActivity from '../components/LiveActivity.jsx';
import WelcomeBanner from '../components/WelcomeBanner.jsx';
import CursorGlow from '../components/CursorGlow.jsx';
import AuroraStage from '../components/AuroraStage.jsx';
import ParticleField from '../components/ParticleField.jsx';
import HoloCard from '../components/HoloCard.jsx';
import FinaleOrbit from '../components/FinaleOrbit.jsx';
import NeonPortal from '../components/NeonPortal.jsx';
import TrustBar from '../components/TrustBar.jsx';
import EnergyCore from '../components/EnergyCore.jsx';
import CurrencyLive from '../components/CurrencyLive.jsx';
import FluxaAI from '../components/FluxaAI.jsx';
import ApiDemo from '../components/ApiDemo.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

export default function Landing() {
  useRevealOnScroll();

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <WelcomeBanner />
      <StripeCanvasBackground />
      <div className="site-shell">
        <div className="stripe-ribbon" aria-hidden="true"></div>
        <Nav />
        <main>
          <Hero />
          <LogoCarousel />
        </main>
      </div>

      <Products />
      <StatsBand />
      <GlobalNetwork />
      <AuroraStage />
      <ParticleField />
      <HoloCard />
      <LiveActivity />
      <DevPlatform />
      <Stories />
      <FutureTiles />
      <IntegrationBand />
      <FinaleOrbit />
      <NeonPortal />
      <EnergyCore />
      <CurrencyLive />
      <FluxaAI />
      <ApiDemo />
      <TrustBar />
      <CTA />
      <Footer />
    </>
  );
}
