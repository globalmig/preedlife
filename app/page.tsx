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

      {/* S1 - Hero */}
      <HeroSection />

      {/* S2 - 고객 혜택 캐러셀 (1~10) */}
      <BenefitsCarousel />

      {/* S5 - 이런 고객에게 추천 + 판매가 쉬운 이유 */}
      <TargetCustomer />

      {/* S6 - 수수료 안내 */}
      <CommissionSection />

      {/* S7 - 왜 프리드라이프인가 */}
      <WhyPreed />

      {/* S8 - 파트너 모집 CTA 배너 */}
      <CTASection />

      {/* S9 - Footer */}
      <Footer />

      {/* 고정 하단 전화 버튼 */}
      <StickyPhone />
    </main>
  );
}
