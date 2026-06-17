import Image from "next/image";

const products = [
  {
    icon: "/icons/3d/things.png",
    alt: "가전결합상조 아이콘",
    title: "가전결합상조",
    badge: "가전결합상조",
    subtitle: "프리미엄 540",
    headerBg: "bg-primary-dark",
    rows: [
      { label: "1구좌당", value: "30만", note: "기본 지급" },
      { label: "행사 발생 시", value: "+10만", note: "추가 지급" },
    ],
  },
  {
    icon: "/icons/3d/picture.png",
    alt: "순수상조 아이콘",
    title: "순수상조",
    badge: "순수상조",
    subtitle: "360상품 · 450상품 · 540상품",
    headerBg: "bg-primary-light",
    rows: [
      { label: "360상품 1구좌당", value: "26만", note: "" },
      { label: "450상품 1구좌당", value: "35만", note: "" },
      { label: "540상품 1구좌당", value: "45만", note: "" },
    ],
    footer: "추가 건수별 프로모션 별도 지급",
  },
  {
    icon: "/icons/3d/clock.png",
    alt: "즉시상조 아이콘",
    title: "즉시상조",
    badge: "즉시상조",
    subtitle: "360상품 · 450상품 · 540상품",
    headerBg: "bg-primary",
    rows: [
      { label: "360상품", value: "56만", note: "" },
      { label: "450상품", value: "64만", note: "" },
      { label: "540상품", value: "66만", note: "" },
    ],
    footer: "즉시 수령 가능한 최고 수수료",
  },
];

export default function ProductCards() {
  return (
    <section className="bg-sky-bg px-5 py-12">
      <div className="mx-auto max-w-3xl">
        <SectionTitle sub="익월 즉시 지급">수수료 안내</SectionTitle>

        <div className="mt-8 flex flex-col gap-5">
          {products.map((product) => (
            <div key={product.title} className="overflow-hidden rounded-[28px] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <div className={`${product.headerBg} flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-6`}>
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 p-3">
                  <Image src={product.icon} alt={product.alt} width={80} height={80} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold tracking-[0.24em] text-white/80">{product.badge}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{product.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{product.subtitle}</p>
                </div>
              </div>

              <div className="bg-white px-5 py-5 sm:px-6">
                <div className="space-y-3">
                  {product.rows.map((row, index) => (
                    <div key={index} className="flex items-center justify-between rounded-2xl bg-sky-bg px-4 py-3">
                      <span className="text-sm text-text-gray">{row.label}</span>
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-base font-black text-text-dark">{row.value}</span>
                        {row.note ? <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-bold text-primary">{row.note}</span> : null}
                      </div>
                    </div>
                  ))}
                </div>

                {product.footer ? <p className="mt-4 text-sm font-medium text-text-gray">{product.footer}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center">
      <div className="mb-2 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-primary opacity-40" />
        <h2 className="text-3xl font-black text-text-dark">{children}</h2>
        <span className="h-px w-10 bg-primary opacity-40" />
      </div>
      {sub && <p className="text-sm text-text-gray">{sub}</p>}
    </div>
  );
}
