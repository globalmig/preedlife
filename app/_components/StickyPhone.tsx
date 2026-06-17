"use client";

import { useState } from "react";

const PHONE = "010-7175-0009";

export default function StickyPhone() {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (navigator.maxTouchPoints === 0) {
      e.preventDefault();
      navigator.clipboard.writeText(PHONE).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <>
      {/* 복사 토스트 */}
      <div
        className={`fixed bottom-24 right-5 z-50 rounded-full bg-primary-dark px-4 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        📋 전화번호가 복사됐어요!
      </div>

      {/* 플로팅 버튼 */}
      <a
        href={`tel:${PHONE}`}
        onClick={handleClick}
        aria-label="전화 상담"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95"
        style={{ boxShadow: "0 4px 20px rgba(27,94,191,0.45)" }}
      >
        <PhoneIcon className="h-6 w-6 fill-white" />
      </a>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}
