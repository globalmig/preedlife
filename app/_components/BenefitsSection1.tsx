import type { ComponentType } from "react";
import { LuBanknote, LuCalendar, LuGift, LuHouse, LuTrendingUp } from "react-icons/lu";

const benefits: { num: number; title: string; desc: string; highlight: string; icon: ComponentType<{ className?: string }> }[] = [
  {
    num: 1,
    title: "가입시 선이자로 가전확보",
    desc: "가입과 동시에 원하는 가전제품을 먼저 가져가세요.",
    highlight: "즉시 가전",
    icon: LuHouse,
  },
  {
    num: 2,
    title: "납입만기 시 100% 환급",
    desc: "납입 기간 종료 후 납입금 전액을 돌려받습니다.",
    highlight: "100% 환급",
    icon: LuBanknote,
  },
  {
    num: 3,
    title: "계획적인 목적자금 준비",
    desc: "결혼, 교육, 노후 등 목표에 맞는 자금을 계획적으로 준비할 수 있습니다.",
    highlight: "목적자금",
    icon: LuCalendar,
  },
  {
    num: 4,
    title: "소액이지만 고이율",
    desc: "선이자를 감안하면 실질 이율 24%의 높은 수익률을 기대할 수 있습니다.",
    highlight: "24% 이율",
    icon: LuTrendingUp,
  },
  {
    num: 5,
    title: "구좌당 80만~100만 상당 가전제품 제공",
    desc: "1구좌 납입 시 80만~100만원 상당의 가전제품을 제공합니다.",
    highlight: "80~100만원",
    icon: LuGift,
  },
];

export default function BenefitsSection1() {
  return (
    <section className="bg-sky-bg px-5 py-12">
      <div className="mx-auto max-w-md">
        <SectionHeader number="1" />

        <div className="mt-8 flex flex-col gap-4">
          {benefits.map((b) => (
            <BenefitItem key={b.num} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ number }: { number: string }) {
  return (
    <div className="text-center">
      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-light">
        PREED lifecare
      </div>
      <div className="flex items-baseline justify-center gap-2">
        <h2 className="text-3xl font-black text-text-dark">고객 혜택</h2>
        <span className="text-5xl font-black text-primary">{number}</span>
      </div>
      <p className="mt-1 text-sm text-text-gray">
        가입자가 누리는 5가지 핵심 혜택
      </p>
    </div>
  );
}

function BenefitItem({
  num,
  title,
  desc,
  highlight,
  icon: Icon,
}: {
  num: number;
  title: string;
  desc: string;
  highlight: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div
      className="flex gap-4 rounded-2xl bg-white p-4"
      style={{ boxShadow: "0 2px 12px rgba(27,94,191,0.08)" }}
    >
      <div className="shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-black text-white">
          {num}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-text-dark leading-snug">
            {title}
          </h3>
          <span className="shrink-0 rounded-full bg-sky-bg px-2.5 py-0.5 text-xs font-bold text-primary">
            {highlight}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-gray leading-relaxed">{desc}</p>
      </div>

      <div className="shrink-0 text-primary">
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
}
