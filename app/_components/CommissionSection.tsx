import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const PURE_ROWS = [
  { product: "360상품", price: "26만" },
  { product: "450상품", price: "35만" },
  { product: "540상품", price: "45만" },
];

const INSTANT_ROWS = [
  { product: "360상품", price: "56만" },
  { product: "450상품", price: "65만" },
  { product: "540상품", price: "73만" },
];

function PriceRow({ product, price }: { product: string; price: string }) {
  return (
    <div className="flex items-center justify-center py-2.25">
      <span className="text-sm font-bold text-text-dark">{product}</span>
      <span className="mx-2.5 text-sm text-gray-300">|</span>
      <span className="text-xs text-text-gray">1구좌당</span>
      <span className="mx-2.5 text-sm text-gray-300">|</span>
      <span className="text-lg font-black text-primary">{price}</span>
    </div>
  );
}

export default function CommissionSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 lg:px-16 lg:py-32">

      {/* ── 배경 글로우 원형 장식 ── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(96,165,250,0.07)" }} />
        <div className="absolute -right-16 top-10 h-56 w-56 rounded-full blur-3xl" style={{ background: "rgba(167,139,250,0.06)" }} />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]" style={{ background: "rgba(147,197,253,0.05)" }} />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(59,130,246,0.06)" }} />
        <div className="absolute -bottom-8 left-10 h-44 w-44 rounded-full blur-2xl" style={{ background: "rgba(196,181,253,0.08)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-md lg:max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-text-dark">수수료 안내</h2>
          <div className="mt-2 inline-block rounded-full bg-badge px-5 py-1.5 text-sm font-bold text-white">익월 즉시지급</div>
          <p className="mt-2 text-sm text-text-gray">다음 달 바로, 통장으로 지급됩니다</p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">

          {/* 가전결합상조 */}
          <div
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-1"
            style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.13)" }}
          >
            <div className="flex flex-row items-center justify-center gap-3 bg-primary px-4 py-3 lg:flex-col lg:py-6">
              <Image src="/icons/3d/things.png" alt="가전결합상조" width={52} height={52} className="object-contain lg:h-16 lg:w-16" />
              <span className="text-sm font-bold text-white">가전결합상조</span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-white px-5 py-5">
              <p className="text-lg font-bold text-text-dark">프리미엄 540</p>
              <div className="flex items-end gap-1">
                <span className="mb-2 text-xs text-text-gray">1구좌당</span>
                <span className="text-[3rem] font-black leading-none text-primary">30만</span>
              </div>
              <div className="rounded-lg bg-sky-bg px-4 py-1.5 text-sm text-text-gray whitespace-nowrap">
                행사발생 시 추가 <span className="font-black text-primary">30만</span>
              </div>
            </div>
          </div>

          {/* 순수상조 */}
          <div
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-1"
            style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.13)" }}
          >
            <div className="flex flex-row items-center justify-center gap-3 bg-sky-bg px-4 py-3 lg:flex-col lg:py-6">
              <Image src="/icons/3d/picture.png" alt="순수상조" width={52} height={52} className="object-contain lg:h-16 lg:w-16" />
              <span className="text-sm font-bold text-primary">순수상조</span>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-white px-4 py-3">
              <div className="divide-y divide-gray-100">
                {PURE_ROWS.map((row) => (
                  <PriceRow key={row.product} {...row} />
                ))}
              </div>
              <div className="mt-2.5 rounded-lg bg-sky-bg px-3 py-1.5 text-center text-sm text-text-gray">
                추가 건수별 <span className="font-black text-primary">프로모션</span> 지급
              </div>
            </div>
          </div>

          {/* 즉시상조 */}
          <div
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-1"
            style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.13)" }}
          >
            <div className="flex flex-row items-center justify-center gap-3 bg-primary px-4 py-3 lg:flex-col lg:py-6">
              <Image src="/icons/3d/clock.png" alt="즉시상조" width={52} height={52} className="object-contain lg:h-16 lg:w-16" />
              <span className="text-sm font-bold text-white">즉시상조</span>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-white px-4 py-3">
              <div className="divide-y divide-gray-100">
                {INSTANT_ROWS.map((row) => (
                  <PriceRow key={row.product} {...row} />
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-sky-bg p-5">
          <p className="text-center text-xs font-medium leading-relaxed text-text-gray">
            <BsCheckCircleFill className="mr-1 inline h-4 w-4 text-primary" />
            수수료는 가입 확정 익월에 즉시 지급됩니다
            <br />
            <BsCheckCircleFill className="mr-1 inline h-4 w-4 text-primary" />
            추가 건수 프로모션은 월별로 별도 안내됩니다
          </p>
        </div>
      </div>
    </section>
  );
}
