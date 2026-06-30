import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | PREED",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full text-text-gray transition-colors hover:bg-gray-100 hover:text-text-dark"
            aria-label="홈으로 돌아가기"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 14L6 9l5-5" />
            </svg>
          </Link>
          <span className="text-sm font-bold text-primary">PREED</span>
          <span className="text-sm text-text-gray">이용약관</span>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto max-w-3xl px-5 py-10 pb-20">
        <h1 className="mb-2 text-2xl font-black text-text-dark">이용약관</h1>
        <p className="mb-8 text-xs text-text-gray">시행일: 2026년 6월 30일</p>

        <div className="space-y-8 text-sm leading-relaxed text-text-dark">

          <Section title="제1조 (목적)">
            <p>
              본 약관은 PREED(이하 "운영자")가 운영하는 프리드라이프 라이프케어(LC) 파트너 모집 안내 페이지(이하 "본 페이지")를
              이용함에 있어 운영자와 이용자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>
          </Section>

          <Section title="제2조 (정의)">
            <ol className="list-decimal space-y-1.5 pl-5">
              <li><strong>"본 페이지"</strong>란 운영자가 운영하는 프리드라이프 LC 파트너 모집 안내 웹페이지를 말합니다.</li>
              <li><strong>"이용자"</strong>란 본 페이지에 접속하거나 상담 신청 등 서비스를 이용하는 자를 말합니다.</li>
              <li><strong>"상담 신청"</strong>이란 이용자가 파트너 모집 관련 상담을 요청하기 위해 개인정보를 제출하는 행위를 말합니다.</li>
            </ol>
          </Section>

          <Section title="제3조 (약관의 효력 및 변경)">
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>본 약관은 본 페이지에 공시함으로써 효력이 발생합니다.</li>
              <li>운영자는 관련 법령에 위반되지 않는 범위 내에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전부터 본 페이지에 공지합니다.</li>
              <li>이용자가 변경된 약관 시행일 이후에도 본 페이지를 계속 이용하면 변경된 약관에 동의한 것으로 봅니다.</li>
            </ol>
          </Section>

          <Section title="제4조 (서비스 내용)">
            <p className="mb-2">본 페이지에서 제공하는 서비스는 다음과 같습니다.</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>프리드라이프 라이프케어(LC) 파트너 모집 안내 정보 제공</li>
              <li>가전결합상조·순수상조·즉시상조 상품 개요 안내</li>
              <li>파트너 수수료 및 혜택 안내</li>
              <li>상담 신청 접수 및 연결</li>
            </ul>
          </Section>

          <Section title="제5조 (이용자의 의무)">
            <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>신청 폼에 타인의 정보를 도용하거나 허위 정보를 입력하는 행위</li>
              <li>본 페이지의 정상적인 운영을 방해하는 행위</li>
              <li>본 페이지에 게시된 정보를 운영자의 동의 없이 상업적으로 이용하는 행위</li>
              <li>그 밖에 관련 법령에 위반되는 행위</li>
            </ol>
          </Section>

          <Section title="제6조 (서비스 제한 및 중단)">
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>운영자는 시스템 점검, 서버 장애, 천재지변 등 불가피한 사유가 있을 경우 서비스 제공을 일시 중단할 수 있습니다.</li>
              <li>운영자는 서비스 중단으로 인한 이용자의 손해에 대해 고의 또는 중과실이 없는 한 책임을 지지 않습니다.</li>
            </ol>
          </Section>

          <Section title="제7조 (정보의 정확성)">
            <p>
              본 페이지에 게시된 수수료, 혜택, 상품 내용 등은 시기에 따라 변동될 수 있습니다.
              최신 정보는 상담을 통해 확인하시기 바라며, 운영자는 게시 정보와 실제 내용의 차이로 인한 손해에 대해 책임을 지지 않습니다.
            </p>
          </Section>

          <Section title="제8조 (면책 조항)">
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>운영자는 이용자가 본 페이지를 통해 얻은 정보를 기초로 내린 투자·가입 결정에 대해 책임을 지지 않습니다.</li>
              <li>운영자는 이용자의 귀책 사유로 발생한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
              <li>본 페이지는 제3자가 운영하는 외부 링크를 포함할 수 있으며, 해당 사이트의 내용에 대해서는 책임을 지지 않습니다.</li>
            </ol>
          </Section>

          <Section title="제9조 (지식재산권)">
            <p>
              본 페이지의 디자인, 텍스트, 이미지 등 모든 콘텐츠에 대한 저작권은 운영자에게 있으며,
              이용자는 운영자의 사전 동의 없이 이를 복제·배포·수정·2차 저작물 작성 등에 이용할 수 없습니다.
            </p>
          </Section>

          <Section title="제10조 (준거법 및 관할 법원)">
            <p>
              본 약관은 대한민국 법률에 따라 해석·적용되며, 분쟁 발생 시 민사소송법에 따른 법원을 관할 법원으로 합니다.
            </p>
          </Section>

        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-base font-bold text-text-dark">{title}</h2>
      <div className="text-sm leading-relaxed text-text-dark/80">{children}</div>
    </section>
  );
}
