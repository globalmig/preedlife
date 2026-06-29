import Image from "next/image";

const tags = [
  { name: "가전결합상조", icon: "/icons/washer.png" },
  { name: "순수상조", icon: "/icons/fridge.png" },
  { name: "즉시상조", icon: "/icons/tv.png" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20" style={{ background: "linear-gradient(150deg, #2196E8 0%, #1670D4 45%, #1055B8 100%)" }}>
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

      <div className="relative mx-auto max-w-md text-center">
        {/* 메인 헤드라인 */}
        <h1 className="mb-3 text-4xl font-black leading-tight text-white drop-shadow-md">
          프리드라이프
          <br />
          <span className="text-white/90">라이프케어(LC) 모집</span>
        </h1>

        {/* 수수료 배지 */}
        <div className="my-6 inline-block rounded-full bg-white/20 border border-white/40 px-5 py-2 text-sm font-bold text-white shadow-md backdrop-blur-sm">수수료 익월 즉시지급</div>

        {/* 상품 타입 태그 */}
        <div className="mb-6 flex w-full items-center justify-center divide-x divide-white/30">
          {tags.map((item) => (
            <span key={item.name} className="flex flex-col items-center justify-center gap-2 px-6 py-1.5 text-sm font-bold text-white">
              <Image src={item.icon} alt={item.name} width={40} height={40} style={{ filter: "brightness(0) invert(1)" }} />
              {item.name}
            </span>
          ))}
        </div>

        {/* 제품 + 인물 이미지 영역 */}
        <div className="relative -mx-16" style={{ height: "480px" }}>
          {/* 배경: 제품 이미지 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/hero-product_2.png"
              alt="제품 배경"
              width={900}
              height={700}
              className="w-full object-contain"
            />
          </div>
          {/* 전경: 인물 이미지 */}
          <Image
            src="/images/hero_person.png"
            alt="히어로 인물"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* 핵심 가치 요약 */}
        <div className="mb-7 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs font-bold text-primary-dark">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <CheckIcon />
              가전
            </span>
            <span className="text-text-gray">+</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <CheckIcon />
              환급
            </span>
            <span className="text-text-gray">+</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <CheckIcon />
              목적자금 준비
            </span>
          </div>
          <p className="mt-1.5 text-center text-xs text-text-gray">가입 시 가전 확보 / 납입만기 100% 환급</p>
        </div>

      </div>
    </section>
  );
}

function ProductIcon({ icon, label }: { icon: string; label: string }) {
  const icons: Record<string, string> = {
    washer: "M6 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    fridge: "M7 2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 9h10V4H7v7zm3-5v3",
    tv: "M2 7h20v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm0-3h20M8 22h8",
    chair: "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8H6V4zm-2 8h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2zm4 6v4m8-4v4",
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md">
        <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-primary fill-none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d={icons[icon]} />
        </svg>
      </div>
      <span className="text-[10px] font-medium text-text-gray">{label}</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-primary" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4L6 11l-3-3" />
    </svg>
  );
}
