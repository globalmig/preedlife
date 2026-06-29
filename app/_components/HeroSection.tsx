import Image from "next/image";

const tags = [
  { name: "가전결합상조", icon: "/icons/washer.png" },
  { name: "순수상조", icon: "/icons/fridge.png" },
  { name: "즉시상조", icon: "/icons/tv.png" },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-5 pt-16 pb-10 md:pb-16 lg:px-16 lg:pt-28 lg:pb-0"
      style={{ background: "linear-gradient(150deg, #2196E8 0%, #1670D4 45%, #1055B8 100%)" }}
    >

      {/* ── 배경 원형 장식 ── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -left-28 -top-20">
          <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
            <circle cx="190" cy="190" r="184" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" fill="none" />
            <circle cx="190" cy="190" r="150" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.09)" }} />
        <div className="absolute -right-20 top-[30%]">
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
            <circle cx="130" cy="130" r="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute -left-10 top-[40%] h-40 w-40 rounded-full blur-2xl" style={{ background: "rgba(255,255,255,0.07)" }} />
        <div className="absolute -left-20 bottom-16 h-52 w-52 rounded-full blur-3xl" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="absolute -right-24 bottom-8">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="144" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute left-6 top-[45%] h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="absolute right-8 top-[22%] h-2 w-2 rounded-full bg-white/15" />
        <div className="absolute left-10 bottom-[30%] h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>

      {/* 대각선 그레이-흰색 도형 */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D8DFE8" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <polygon points="0,100 100,42 100,100" fill="url(#whiteGrad)" />
        </svg>
      </div>

      {/* ── 콘텐츠: 모바일/태블릿 단일컬럼 / 데스크탑 2컬럼 ── */}
      <div className="relative z-10 mx-auto max-w-md text-center lg:flex lg:max-w-6xl lg:items-center lg:gap-16 lg:text-left">

        {/* 좌측: 텍스트 콘텐츠 */}
        <div className="lg:flex-1">
          {/* 메인 헤드라인 */}
          <h1 className="mb-3 text-4xl font-black leading-tight text-white drop-shadow-md lg:text-5xl lg:leading-tight">
            프리드라이프
            <br />
            <span className="text-white/90">라이프케어(LC) 모집</span>
          </h1>

          {/* 수수료 배지 */}
          <div className="my-6 inline-block rounded-full bg-white/20 border border-white/40 px-5 py-2 text-sm font-bold text-white shadow-md backdrop-blur-sm">
            수수료 익월 즉시지급
          </div>

          {/* 상품 타입 태그 */}
          <div className="mb-6 grid grid-cols-3 divide-x divide-white/30">
            {tags.map((item) => (
              <span key={item.name} className="flex flex-col items-center justify-center gap-2 py-2 text-sm font-bold text-white">
                <Image src={item.icon} alt={item.name} width={40} height={40} className="h-10 w-10" style={{ filter: "brightness(0) invert(1)" }} />
                {item.name}
              </span>
            ))}
          </div>

          {/* 모바일/태블릿 전용 이미지 영역 */}
          <div className="relative -mx-5 lg:hidden" style={{ height: "420px" }}>
            <div className="absolute inset-0 flex items-end justify-center">
              <Image
                src="/images/hero-product_2.png"
                alt="제품 배경"
                width={900}
                height={700}
                className="w-full object-contain object-bottom"
              />
            </div>
            <Image
              src="/images/hero_person.png"
              alt="히어로 인물"
              fill
              sizes="100vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* 핵심 가치 요약 */}
          <div className="mb-0 grid grid-cols-3 divide-x divide-white/20 overflow-hidden rounded-2xl bg-white shadow-md lg:mb-10">
            {[
              { label: "가전 확보", sub: "가입 즉시" },
              { label: "100% 환급", sub: "납입만기 시" },
              { label: "목적자금", sub: "계획 준비" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 py-4">
                <CheckIcon />
                <span className="text-sm font-black text-primary-dark">{item.label}</span>
                <span className="text-xs text-text-gray">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 이미지 (데스크탑 전용) */}
        <div className="relative hidden lg:flex lg:flex-1 lg:items-end lg:self-stretch" style={{ minHeight: "560px" }}>
          <div className="absolute inset-0 flex items-end justify-center">
            <Image
              src="/images/hero-product_2.png"
              alt="제품 배경"
              width={1000}
              height={800}
              className="w-full object-contain object-bottom"
            />
          </div>
          <Image
            src="/images/hero_person.png"
            alt="히어로 인물"
            fill
            sizes="50vw"
            className="object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-primary" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4L6 11l-3-3" />
    </svg>
  );
}
