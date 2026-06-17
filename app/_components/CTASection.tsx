'use client'

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { LuBanknote, LuGift, LuHandshake } from "react-icons/lu";

const PHONE = "010-7175-0009";

const highlights: { icon: ComponentType<{ className?: string }>; text: string }[] = [
  { icon: LuBanknote, text: "수수료 익월 즉시지급" },
  { icon: LuHandshake, text: "초보 상담 가능" },
  { icon: LuGift, text: "추가 프로모션 운영" },
];

export default function CTASection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary-dark px-5 py-20">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white/50">
          woongjin PREED 웅진프리드라이프
        </div>

        <h2 className="mb-2 text-3xl font-black text-white leading-tight">
          프리드라이프
          <br />
          <span className="text-primary-light">라이프케어(LC)</span> 모집
        </h2>
        <p className="mb-8 text-sm text-white/70">
          가전결합상조 / 순수상조 / 즉시상조 상담 가능
        </p>

        {/* 3가지 강점 카드 ROW */}
        <div className="mb-8 grid grid-cols-3 gap-3">
          {highlights.map((h, i) => {
            const isActive = active === i;
            return (
              <div
                key={h.text}
                className={`flex flex-col items-center gap-2.5 rounded-2xl px-2 py-4 transition-all duration-500 ${
                  isActive ? "bg-white shadow-xl" : "bg-white/10"
                }`}
              >
                <h.icon
                  className={`h-6 w-6 transition-colors duration-500 ${
                    isActive ? "text-primary" : "text-white/40"
                  }`}
                />
                <p
                  className={`text-xs font-bold leading-snug transition-colors duration-500 ${
                    isActive ? "text-primary" : "text-white/50"
                  }`}
                >
                  {h.text}
                </p>
                <div
                  className={`h-0.5 w-6 rounded-full transition-all duration-500 ${
                    isActive ? "bg-primary" : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* 마무리 멘트 */}
        <div className="rounded-2xl bg-white/8 px-5 py-6 text-left space-y-4">
          <p className="text-sm leading-relaxed text-white/80">
            월 <span className="font-bold text-white">3~5구좌</span>만 판매해도 익월에
            <span className="font-bold text-primary-light"> 90만~200만원</span>이 통장으로 입금됩니다.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            강제로 팔 필요 없습니다.
            고객이 <span className="font-bold text-white">가전제품을 먼저 받아가는 구조</span>라
            대화 시작 자체가 쉽습니다.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            처음 시작하시는 분들도
            <span className="font-bold text-white"> 첫 달부터 수수료</span>를 받아가고 있어요.
            부담 없이 1:1로 먼저 여쭤보세요.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}
