import Image from "next/image";

const tags = [
  { name: "가전결합상조", icon: "/icons/washer.png" },
  { name: "순수상조", icon: "/icons/fridge.png" },
  { name: "즉시상조", icon: "/icons/tv.png" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-16 pb-20">
      {/* 배경 원형 장식 */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #4A90E2, transparent)" }} />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1B5EBF, transparent)" }} />

      <div className="relative mx-auto max-w-md text-center">
        {/* 메인 헤드라인 */}
        <h1 className="mb-3 text-4xl font-black = leading-tight text-text-dark">
          프리드라이프
          <br />
          <span className="text-primary">라이프케어(LC) 모집</span>
        </h1>

        {/* 수수료 배지 */}
        <div className="my-6 inline-block rounded-full bg-badge px-5 py-2 text-sm font-bold text-white shadow-md">수수료 익월 즉시지급</div>

        {/* 상품 타입 태그 */}
        <div className="mb-6 flex w-full items-center justify-center divide-x divide-gray-200">
          {tags.map((item) => (
            <span key={item.name} className="flex flex-col items-center justify-center gap-2 px-6 py-1.5 text-sm font-bold text-primary">
              <Image src={item.icon} alt={item.name} width={40} height={40} />
              {item.name}
            </span>
          ))}
        </div>

        {/* 제품 일러스트 영역 */}
        <div className="mb-6 flex justify-center gap-4 py-4">
          <div className="w-full max-w-[1440px]">
            <Image src="/images/hero-product.png" alt="제품 일러스트" width={1352} height={1027} className="w-full" />
          </div>
          {/* <ProductIcon icon="washer" label="세탁기" />
          <ProductIcon icon="fridge" label="냉장고" />
          <ProductIcon icon="tv" label="TV" />
          <ProductIcon icon="chair" label="안마의자" /> */}
        </div>

        {/* 핵심 가치 요약 */}
        <div className="mb-7 rounded-2xl bg-white/80 p-4 shadow-sm">
          <div className="flex items-center justify-center gap-4 text-sm font-bold text-primary-dark">
            <span className="flex items-center gap-1">
              <CheckIcon />
              가전
            </span>
            <span className="text-text-gray">+</span>
            <span className="flex items-center gap-1">
              <CheckIcon />
              환급
            </span>
            <span className="text-text-gray">+</span>
            <span className="flex items-center gap-1">
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
