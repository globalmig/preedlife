import type { ReactNode } from "react";

const reasons: { num: number; title: string; desc: string; icon: ReactNode }[] = [
  {
    num: 1,
    title: "운영 안정성",
    desc: "공시자료와 회계감사보고서로 확인 가능한 투명한 운영",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "고객 불입금 안전 관리",
    desc: "제1금융권 지급보증·예치계약으로 고객 납입금을 안전하게 관리",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "이해하기 쉬운 제안",
    desc: "고객이 이해하기 쉬운 가전결합 / 환급형 제안 방식",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "사람 모집 구조 아님",
    desc: "다단계나 인력 모집이 목적이 아닌, 순수한 상품 판매 활동",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    num: 5,
    title: "의무 가입 방식 아님",
    desc: "강제나 의무 가입이 아닌, 고객의 자유 의사에 따른 가입",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    num: 6,
    title: "상담 중심 활동",
    desc: "고객 니즈에 맞춘 1:1 상담 중심의 신뢰 기반 영업 방식",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function WhyPreed() {
  return (
    <section className="overflow-hidden bg-sky-bg py-20">
      <style>{`
        @keyframes why-marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        .why-track {
          animation: why-marquee 30s linear infinite;
        }
        .why-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 헤더 */}
      <div className="mx-auto mb-10 max-w-md px-5 text-center">
        <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-light">
          PREED 프리드라이프
        </div>
        <h2 className="text-3xl font-black text-text-dark">왜 프리드라이프인가</h2>
        <p className="mt-1 text-sm text-text-gray">신뢰할 수 있는 6가지 이유</p>
      </div>

      {/* 무한 스크롤 트랙 */}
      <div className="overflow-hidden">
        <div className="why-track flex gap-4" style={{ width: "max-content" }}>
          {[...reasons, ...reasons].map((r, i) => (
            <ReasonCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* 하단 슬로건 */}
      <div className="mx-auto mt-10 max-w-md px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-primary-dark px-6 py-4">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-base font-black text-white">함께 성장하는 프리드라이프(LC)</span>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ num, title, desc, icon }: {
  num: number;
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="flex w-54 shrink-0 flex-col rounded-2xl bg-white p-4"
      style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.10)" }}
    >
      {/* 아이콘 + 번호 */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
          {icon}
        </div>
        <span className="text-2xl font-black text-primary/10">
          {num < 10 ? `0${num}` : num}
        </span>
      </div>
      {/* 제목 */}
      <h3 className="mb-1.5 text-sm font-black leading-snug text-text-dark">{title}</h3>
      {/* 설명 */}
      <p className="text-xs leading-relaxed text-text-gray">{desc}</p>
    </div>
  );
}
