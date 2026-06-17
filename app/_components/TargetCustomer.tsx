import type { ComponentType } from "react";
import { LuGem, LuPiggyBank, LuUsers } from "react-icons/lu";

const reasons = [
  {
    num: 1,
    text: "가입시 선이자로 가전확보",
    sub: "고객이 먼저 가전을 받아가므로 설득이 쉽습니다",
  },
  {
    num: 2,
    text: "납입만기 100% 환급",
    sub: "원금이 전부 돌아오기 때문에 부담이 없습니다",
  },
  {
    num: 3,
    text: "웨딩·여행·수연·홈인테리어까지 활용 가능",
    sub: "상조 기능 외에도 다양한 생활 서비스로 활용 가능",
  },
  {
    num: 4,
    text: "원하는 가전 선택 가능",
    sub: "고객이 원하는 브랜드와 제품을 자유롭게 선택",
  },
];

const targets: { icon: ComponentType<{ className?: string }>; title: string; desc: string }[] = [
  {
    icon: LuGem,
    title: "신혼 가전제품 준비",
    desc: "신혼집에 필요한 가전을 미리 확보하고 싶은 예비부부",
  },
  {
    icon: LuUsers,
    title: "부모님 가전선물",
    desc: "부모님께 고급 가전을 선물하고 싶은 자녀",
  },
  {
    icon: LuPiggyBank,
    title: "목적자금 준비",
    desc: "납입만기 100% 환급을 통해 목돈을 마련하려는 분",
  },
];

export default function TargetCustomer() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: "linear-gradient(160deg, #c7deff 0%, #EBF4FF 50%, #f5f9ff 100%)" }}
    >
      <div className="mx-auto max-w-md">
        {/* 판매가 쉬운 이유 */}
        <div className="mb-10">
          <div className="mb-6 text-center">
            <div className="mb-2 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
              당근마켓 · SNS 모집
            </div>
            <h2 className="text-2xl font-black text-text-dark">
              판매가 쉬운 이유
            </h2>
            <p className="mt-1 text-sm text-text-gray">
              고객 스스로 원하게 되는 상품입니다
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="flex items-start gap-4 rounded-2xl bg-white p-4"
                style={{ boxShadow: "0 2px 12px rgba(27,94,191,0.08)" }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                  {r.num}
                </div>
                <div>
                  <p className="font-bold text-text-dark">{r.text}</p>
                  <p className="mt-0.5 text-sm text-text-gray">{r.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 이런 고객에게 추천 */}
        <div>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-black text-text-dark">
              이런 고객에게 추천
            </h2>
            <p className="mt-1 text-sm text-text-gray">
              일상 속 어디서나 대화를 시작할 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {targets.map((t) => (
              <div
                key={t.title}
                className="flex flex-col items-center rounded-2xl bg-white p-5 text-center"
                style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.10)" }}
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-bg text-primary">
                  <t.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-1.5 text-sm font-black text-primary leading-snug">
                  {t.title}
                </h3>
                <p className="text-xs text-text-gray leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
