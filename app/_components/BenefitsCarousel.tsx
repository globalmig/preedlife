'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type { ComponentType } from 'react'
import {
  LuBanknote, LuCalendar, LuGift, LuHouse, LuTrendingUp,
  LuCreditCard, LuCrown, LuShoppingCart,
} from 'react-icons/lu'

type Benefit = {
  num: number
  title: string
  desc: string
  highlight: string
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  iconBg: string
  iconColor: string
}

const allBenefits: Benefit[] = [
  {
    num: 1, title: '가입시 선이자로 가전확보',
    desc: '가입과 동시에 원하는 가전제품을 먼저 가져가세요.',
    highlight: '즉시 가전', icon: LuHouse, iconBg: '#EFF6FF', iconColor: '#1B5EBF',
  },
  {
    num: 2, title: '납입만기 시 100% 환급',
    desc: '납입 기간 종료 후 납입금 전액을 돌려받습니다.',
    highlight: '100% 환급', icon: LuBanknote, iconBg: '#F0FDF4', iconColor: '#16A34A',
  },
  {
    num: 3, title: '계획적인 목적자금 준비',
    desc: '결혼, 교육, 노후 등 목표에 맞는 자금을 계획적으로 준비할 수 있습니다.',
    highlight: '목적자금', icon: LuCalendar, iconBg: '#FAF5FF', iconColor: '#7C3AED',
  },
  {
    num: 4, title: '소액이지만 고이율',
    desc: '선이자를 감안하면 실질 이율 24%의 높은 수익률을 기대할 수 있습니다.',
    highlight: '24% 이율', icon: LuTrendingUp, iconBg: '#FFF7ED', iconColor: '#EA580C',
  },
  {
    num: 5, title: '구좌당 80만~100만 상당 가전제품',
    desc: '1구좌 납입 시 80만~100만원 상당의 가전제품을 제공합니다.',
    highlight: '80~100만원', icon: LuGift, iconBg: '#FFF1F2', iconColor: '#E11D48',
  },
  {
    num: 6, title: '자유롭게 활용가능',
    desc: '누구든 자유롭게 증여가능. 가족, 친구, 지인 누구에게나 선물하세요.',
    highlight: '자유 증여', icon: LuGift, iconBg: '#FFFBEB', iconColor: '#D97706',
  },
  {
    num: 7, title: '원하는 가전이 다 있습니다',
    desc: '세탁기, 냉장고, TV, 안마의자, 공기청정기 등 원하는 브랜드와 제품을 선택하세요.',
    highlight: '자유 선택', icon: LuShoppingCart, iconBg: '#F0FDFA', iconColor: '#0D9488',
  },
  {
    num: 8, title: '직접가입 시 구좌당 30만원 수당',
    desc: '본인이 직접 가입하면 구좌당 30만원 수당이 지급됩니다.',
    highlight: '30만원', icon: LuHouse, iconBg: '#EFF6FF', iconColor: '#1B5EBF',
  },
  {
    num: 9, title: '제휴카드 최대 180만원 청구할인',
    desc: '제휴카드로 납입하면 최대 180만원까지 카드 청구 할인 혜택을 받을 수 있습니다.',
    highlight: '최대 180만원', icon: LuCreditCard, iconBg: '#EEF2FF', iconColor: '#4F46E5',
  },
  {
    num: 10, title: '멤버십 서비스 제공',
    desc: '한화콘도 1년 10박 / 켄싱턴호텔리조트 1년 1박 멤버십 서비스를 제공합니다.',
    highlight: 'PREMIUM', icon: LuCrown, iconBg: '#FFFBEB', iconColor: '#B45309',
  },
]

const slides = [
  { label: '혜택 1~5', items: allBenefits.slice(0, 5) },
  { label: '혜택 6~10', items: allBenefits.slice(5, 10) },
]

const DURATION = 5000

export default function BenefitsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number) => {
    setActiveSlide(index)
    setAnimKey((k) => k + 1)
  }, [])

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      goTo((activeSlide + 1) % slides.length)
    }, DURATION)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeSlide, goTo])

  return (
    <section className="px-5 py-20" style={{ background: '#F4F7FB' }}>
      <div className="mx-auto max-w-md">

        {/* 헤더 */}
        <div className="text-center mb-6">
          <div
            className="mb-1 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#4A90E2' }}
          >
            PREED lifecare
          </div>
          <h2 className="text-3xl font-black" style={{ color: '#0F172A' }}>
            고객 혜택
          </h2>
          <p className="mt-1 text-sm" style={{ color: '#64748B' }}>
            가입자가 누리는 10가지 핵심 혜택
          </p>
        </div>

        {/* 탭 스위처 */}
        <div
          className="relative flex rounded-full bg-white p-1 mb-3"
          style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}
        >
          {/* 슬라이딩 인디케이터 */}
          <div
            className="absolute top-1 bottom-1 rounded-full transition-transform duration-300 ease-in-out"
            style={{
              width: 'calc(50% - 4px)',
              left: '4px',
              background: '#1B5EBF',
              transform: `translateX(${activeSlide === 0 ? '0%' : 'calc(100% + 4px)'})`,
            }}
          />
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative z-10 flex-1 py-2.5 text-sm font-bold rounded-full transition-colors duration-300"
              style={{ color: activeSlide === i ? '#FFFFFF' : '#64748B' }}
            >
              {slide.label}
            </button>
          ))}
        </div>

        {/* 프로그레스 바 */}
        <div
          className="h-[3px] rounded-full mb-6 overflow-hidden"
          style={{ background: 'rgba(27,94,191,0.12)' }}
        >
          <div
            key={animKey}
            className="h-full rounded-full"
            style={{
              background: '#1B5EBF',
              animation: `benefits-progress ${DURATION}ms linear forwards`,
            }}
          />
        </div>

        {/* 슬라이드 영역 */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, si) => (
              <div key={si} className="w-full shrink-0 flex flex-col gap-3">
                {slide.items.map((b) => (
                  <BenefitCard key={b.num} {...b} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 닷 인디케이터 */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: activeSlide === i ? '24px' : '8px',
                background: activeSlide === i ? '#1B5EBF' : 'rgba(27,94,191,0.25)',
              }}
            />
          ))}
        </div>

        {/* 하단 CTA */}
        <div
          className="mt-6 rounded-2xl px-5 py-4 text-center"
          style={{ background: '#1B5EBF' }}
        >
          <p className="text-base font-black text-white">
            프리드라이프와 함께 더 큰 혜택을 누리세요!
          </p>
          <p className="mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.72)' }}>
            가입자 혜택 총 10가지, 빠짐없이 모두 제공합니다
          </p>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ num, title, desc, highlight, icon: Icon, iconBg, iconColor }: Benefit) {
  const numStr = num < 10 ? `0${num}` : `${num}`

  return (
    <div
      className="flex gap-3 rounded-2xl bg-white p-4"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.055)' }}
    >
      {/* 아이콘 */}
      <div className="shrink-0">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ background: iconBg }}
        >
          <Icon className="h-5 w-5" style={{ color: iconColor }} />
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <span
            className="text-[10px] font-black tracking-wider"
            style={{ color: 'rgba(27,94,191,0.35)' }}
          >
            {numStr}
          </span>
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"
            style={{ background: iconBg, color: iconColor }}
          >
            {highlight}
          </span>
        </div>
        <h3 className="text-sm font-bold leading-snug" style={{ color: '#0F172A' }}>
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed" style={{ color: '#64748B' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}
