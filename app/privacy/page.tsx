import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | PREED",
};

export default function PrivacyPage() {
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
          <span className="text-sm text-text-gray">개인정보처리방침</span>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto max-w-3xl px-5 py-10 pb-20">
        <h1 className="mb-2 text-2xl font-black text-text-dark">개인정보처리방침</h1>
        <p className="mb-8 text-xs text-text-gray">시행일: 2026년 6월 30일</p>

        <div className="space-y-8 text-sm leading-relaxed text-text-dark">

          <Section title="1. 총칙">
            <p>
              PREED(이하 "운영자")는 라이프케어(LC) 파트너 모집 안내 페이지(이하 "본 페이지")를 운영하면서 이용자의 개인정보를 중요시하며,
              「개인정보 보호법」을 비롯한 관련 법령을 준수합니다. 본 방침은 운영자가 어떤 개인정보를, 왜, 어떻게 수집·이용하는지 알려드리기 위해 작성되었습니다.
            </p>
          </Section>

          <Section title="2. 수집하는 개인정보 항목">
            <p className="mb-3">운영자는 상담 신청 시 아래 항목을 수집합니다.</p>
            <Table
              headers={["구분", "수집 항목", "수집 방법"]}
              rows={[
                ["필수", "이름, 연락처(휴대폰 번호)", "웹 상담 신청 폼"],
                ["선택", "거주 지역, 관심 상품 유형", "웹 상담 신청 폼"],
              ]}
            />
            <p className="mt-3 text-xs text-text-gray">
              * 선택 항목은 제공하지 않아도 상담 신청이 가능합니다.
            </p>
          </Section>

          <Section title="3. 개인정보 수집 및 이용 목적">
            <p className="mb-3">수집된 개인정보는 아래 목적으로만 이용됩니다.</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>라이프케어(LC) 파트너 모집 관련 상담 연락 및 안내</li>
              <li>상담 예약 확인 및 일정 조율</li>
              <li>서비스 관련 고지 사항 전달</li>
            </ul>
            <p className="mt-3 text-xs text-text-gray">
              * 수집된 개인정보는 상담 목적 외의 용도로 이용하지 않습니다.
            </p>
          </Section>

          <Section title="4. 개인정보 보유 및 이용 기간">
            <p className="mb-3">
              상담 완료 또는 이용자가 삭제를 요청한 날로부터 <strong>6개월</strong> 이내에 파기합니다.
              단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
            <Table
              headers={["근거 법령", "보존 항목", "보존 기간"]}
              rows={[
                ["전자상거래법", "소비자 불만·분쟁 처리 기록", "3년"],
                ["통신비밀보호법", "웹사이트 방문 기록", "3개월"],
              ]}
            />
          </Section>

          <Section title="5. 개인정보의 제3자 제공">
            <p>
              운영자는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
              다만, 이용자가 사전에 동의한 경우, 또는 법령에 의해 요구되는 경우에 한하여 예외적으로 제공할 수 있습니다.
            </p>
          </Section>

          <Section title="6. 개인정보처리의 위탁">
            <p>
              현재 운영자는 개인정보 처리 업무를 외부 업체에 위탁하지 않습니다.
              위탁이 발생하는 경우 사전에 본 방침을 통해 공개합니다.
            </p>
          </Section>

          <Section title="7. 이용자의 권리 및 행사 방법">
            <p className="mb-3">이용자는 언제든지 아래 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>개인정보 열람 요구</li>
              <li>오류 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리 정지 요구</li>
            </ul>
            <p className="mt-3">
              권리 행사는 아래 개인정보 보호책임자에게 이메일 또는 전화로 요청하시면 지체 없이 조치합니다.
            </p>
          </Section>

          <Section title="8. 개인정보 파기 절차 및 방법">
            <p>
              보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기합니다.
              전자적 파일은 복구 불가능한 방법으로 영구 삭제하며, 서면 자료는 분쇄 또는 소각합니다.
            </p>
          </Section>

          <Section title="9. 개인정보 보호책임자">
            <Table
              headers={["항목", "내용"]}
              rows={[
                ["담당자", "김두환 본부장"],
                ["연락처", "문의 페이지를 통해 접수"],
              ]}
            />
          </Section>

          <Section title="10. 방침 변경 공지">
            <p>
              본 방침은 법령·정책 변경에 따라 수정될 수 있으며, 변경 시 본 페이지 상단의 시행일을 업데이트하여 안내합니다.
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-sky-bg">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-left font-semibold text-primary-dark">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-text-gray">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
