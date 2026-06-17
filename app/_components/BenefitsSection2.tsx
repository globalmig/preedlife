import type { ComponentType } from "react";
import { LuCreditCard, LuCrown, LuGift, LuHouse, LuShoppingCart } from "react-icons/lu";

const benefits: { num: number; title: string; desc: string; highlight: string; icon: ComponentType<{ className?: string }> }[] = [
  {
    num: 6,
    title: "자유롭게 활용가능",
    desc: "누구든 자유롭게 증여가능. 가족, 친구, 지인 누구에게나 선물하세요.",
    highlight: "자유 증여",
    icon: LuGift,
  },
  {
    num: 7,
    title: "원하는 가전이 다 있습니다",
    desc: "세탁기, 냉장고, TV, 안마의자, 공기청정기 등 원하는 브랜드와 제품을 선택하세요.",
    highlight: "자유 선택",
    icon: LuShoppingCart,
  },
  {
    num: 8,
    title: "우리집 가전이 필요할 때",
    desc: "직접가입하면 구좌당 30만원 수당 지급. 본인이 직접 가입해도 혜택이 있습니다.",
    highlight: "구좌당 30만원",
    icon: LuHouse,
  },
  {
    num: 9,
    title: "제휴카드 납입 시 최대 180만원 청구할인",
    desc: "제휴카드로 납입하면 최대 180만원까지 카드 청구 할인 혜택을 받을 수 있습니다.",
    highlight: "최대 180만원",
    icon: LuCreditCard,
  },
  {
    num: 10,
    title: "멤버십 서비스 제공",
    desc: "한화콘도 1년 10박 / 켄싱턴호텔리조트 1년 1박 멤버십 서비스를 제공합니다.",
    highlight: "PREMIUM",
    icon: LuCrown,
  },
];

export default function BenefitsSection2() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-md">
        <SectionHeader number="2" />

        <div className="mt-8 flex flex-col gap-4">
          {benefits.map((b) => (
            <BenefitItem key={b.num} {...b} />
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-primary px-5 py-4 text-center text-white">
          <p className="text-base font-black">
            프리드라이프와 함께 더 큰 혜택을 누리세요!
          </p>
          <p className="mt-1 text-xs text-white/70">
            가입자 혜택 총 10가지, 빠짐없이 모두 제공합니다
          </p>
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
        더 많은 혜택을 함께 누려보세요
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
      className="flex gap-4 rounded-2xl bg-sky-bg p-4"
      style={{ boxShadow: "0 2px 12px rgba(27,94,191,0.06)" }}
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
          <span className="shrink-0 rounded-full border border-primary/20 bg-white px-2.5 py-0.5 text-xs font-bold text-primary">
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
