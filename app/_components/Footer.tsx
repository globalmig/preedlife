export default function Footer() {
  return (
    <footer className="bg-text-dark px-5 pb-28 pt-16">
      <div className="mx-auto max-w-md">
        {/* 로고 */}
        <div className="mb-6 border-b border-white/10 pb-6">
          <div className="text-2xl font-black tracking-tight text-white">
            PREED
          </div>
        </div>

        {/* 약관 링크 */}
        <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2">
          <button className="text-xs text-white/50 underline-offset-2 hover:text-white/80 hover:underline transition-colors">
            개인정보처리방침
          </button>
          <button className="text-xs text-white/50 underline-offset-2 hover:text-white/80 hover:underline transition-colors">
            이용약관
          </button>
        </div>

        {/* 하단 문구 */}
        <div className="border-t border-white/10 pt-5">
          <p className="text-xs leading-relaxed text-white/30">
            본 페이지는 프리드라이프 라이프케어(LC) 파트너 모집 안내 페이지입니다.
            수수료 및 혜택은 시기에 따라 변동될 수 있습니다.
            수집된 개인정보는 상담 목적 외에 사용되지 않습니다.
          </p>
          <p className="mt-3 text-xs text-white/20">
            © 2025 PREED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
