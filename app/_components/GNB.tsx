export default function GNB() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-between px-5 py-3">
        {/* 로고 */}
        <div className="flex flex-col leading-none">
          <span className="text-[9px] font-medium uppercase tracking-widest text-primary-light">
            woongjin
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black tracking-tight text-primary">PREED</span>
            <span className="text-[11px] font-medium text-text-gray">웅진프리드라이프</span>
          </div>
        </div>

      </div>
    </header>
  );
}
