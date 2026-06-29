import GNB from "./_components/GNB";
import HeroSection from "./_components/HeroSection";
import BenefitsCarousel from "./_components/BenefitsCarousel";
import TargetCustomer from "./_components/TargetCustomer";
import CommissionSection from "./_components/CommissionSection";
import WhyPreed from "./_components/WhyPreed";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import StickyPhone from "./_components/StickyPhone";

export default function Home() {
  return (
    <main className="pt-13">
      <GNB />

      <div id="hero"><HeroSection /></div>
      <div id="benefits"><BenefitsCarousel /></div>
      <div id="sales"><TargetCustomer /></div>
      <div id="commission"><CommissionSection /></div>
      <div id="why"><WhyPreed /></div>
      <div id="recruit"><CTASection /></div>

      {/* S9 - Footer */}
      <Footer />

      {/* 고정 하단 전화 버튼 */}
      <StickyPhone />
    </main>
  );
}
