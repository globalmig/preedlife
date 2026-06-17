import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const PURE_ROWS = [
  { product: "360상품", price: "26만" },
  { product: "450상품", price: "35만" },
  { product: "540상품", price: "45만" },
];

const INSTANT_ROWS = [
  { product: "360상품", price: "56만" },
  { product: "450상품", price: "64만" },
  { product: "540상품", price: "66만" },
];

function PriceRow({ product, price }: { product: string; price: string }) {
  return (
    <div className="flex items-center py-[9px]">
      <span className="text-sm font-bold text-text-dark">{product}</span>
      <span className="mx-2.5 text-gray-300 text-sm">|</span>
      <span className="text-xs text-text-gray">1구좌당</span>
      <span className="mx-2.5 text-gray-300 text-sm">|</span>
      <span className="text-lg font-black text-primary">{price}</span>
    </div>
  );
}

export default function CommissionSection() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-text-dark">수수료 안내</h2>
          <div className="mt-2 inline-block rounded-full bg-badge px-5 py-1.5 text-sm font-bold text-white">
            익월 즉시지급
          </div>
          <p className="mt-2 text-sm text-text-gray">다음 달 바로, 통장으로 지급됩니다</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* 가전결합상조 */}
          <div
            className="flex overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.13)" }}
          >
            {/* 좌측 아이콘 패널 */}
            <div className="flex w-[36%] flex-col items-center justify-between bg-primary px-2 pb-3 pt-4">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/icons/3d/things.png"
                  alt="가전결합상조"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <span className="mt-2.5 text-[11px] font-bold text-white">가전결합상조</span>
            </div>

            {/* 우측 내용 패널 */}
            <div className="flex w-[64%] flex-col items-center justify-center gap-2 bg-white px-5 py-5">
              <p className="text-lg font-bold text-text-dark">프리미엄 540</p>
              <div className="flex items-end gap-1">
                <span className="mb-2 text-xs text-text-gray">1구좌당</span>
                <span className="text-[3rem] font-black leading-none text-primary">30만</span>
              </div>
              {/* 행사 추가 뱃지: 연한 배경 + "10만" 강조 */}
              <div className="rounded-lg bg-sky-bg px-4 py-1.5 text-sm text-text-gray whitespace-nowrap">
                행사발생 시 추가{" "}
                <span className="font-black text-primary">10만</span>
              </div>
            </div>
          </div>

          {/* 순수상조 */}
          <div
            className="flex overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.13)" }}
          >
            {/* 좌측 아이콘 패널 */}
            <div className="flex w-[36%] flex-col items-center justify-between bg-sky-bg px-2 pb-3 pt-4">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/icons/3d/picture.png"
                  alt="순수상조"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <span className="mt-2.5 text-[11px] font-bold text-primary">순수상조</span>
            </div>

            {/* 우측 내용 패널 */}
            <div className="flex w-[64%] flex-col justify-center bg-white px-4 py-3">
              <div className="divide-y divide-gray-100">
                {PURE_ROWS.map((row) => (
                  <PriceRow key={row.product} {...row} />
                ))}
              </div>
              {/* 프로모션 뱃지: 연한 배경 + "프로모션" 강조 */}
              <div className="mt-2.5 rounded-lg bg-sky-bg px-3 py-1.5 text-center text-sm text-text-gray">
                추가 건수별{" "}
                <span className="font-black text-primary">프로모션</span>{" "}
                지급
              </div>
            </div>
          </div>

          {/* 즉시상조 */}
          <div
            className="flex overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.13)" }}
          >
            {/* 좌측 아이콘 패널 */}
            <div className="flex w-[36%] flex-col items-center justify-between bg-primary px-2 pb-3 pt-4">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/icons/3d/clock.png"
                  alt="즉시상조"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <span className="mt-2.5 text-[11px] font-bold text-white">즉시상조</span>
            </div>

            {/* 우측 내용 패널 */}
            <div className="flex w-[64%] flex-col justify-center bg-white px-4 py-3">
              <div className="divide-y divide-gray-100">
                {INSTANT_ROWS.map((row) => (
                  <PriceRow key={row.product} {...row} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-primary/20 bg-sky-bg p-4">
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
