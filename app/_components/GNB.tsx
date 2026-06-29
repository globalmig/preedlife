'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: '고객 혜택', href: '#benefits' },
  { label: '판매가 쉬운 이유', href: '#sales' },
  { label: '수수료 안내', href: '#commission' },
  { label: '왜 프리드라이프', href: '#why' },
  { label: '파트너 모집', href: '#recruit' },
]

export default function GNB() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'border-gray-100 shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-10">

          {/* 로고 */}
          <a href="#hero" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
            <span className="text-lg font-black tracking-tight text-primary">PREED</span>
          </a>

          {/* 데스크탑 네비게이션 (lg+) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-gray transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#recruit"
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              상담 문의
            </a>
          </nav>

          {/* 모바일/태블릿 햄버거 버튼 (< lg) */}
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-text-dark transition-colors hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* 모바일/태블릿 드로어 */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* 오버레이 */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* 드롭다운 메뉴 */}
        <nav
          className={`absolute left-0 right-0 top-[53px] bg-white shadow-xl transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
          }`}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center justify-center border-b border-gray-50 px-6 py-4 text-sm font-medium text-text-dark transition-colors hover:bg-gray-50 hover:text-primary"
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a
              href="#recruit"
              className="block w-full rounded-full bg-primary py-3 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              상담 문의
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="5" x2="17" y2="5" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="15" x2="17" y2="15" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  )
}
