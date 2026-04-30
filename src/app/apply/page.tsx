import Link from "next/link";
import { TeamApplicationForm } from "../../components/team-application-form";

const focusItems = [
  "일러스트레이터",
  "포토샵",
  "프리미어 프로",
  "애프터이펙트",
  "피그마",
];

const benefits = [
  {
    title: "Creative Flow",
    description: "소속 디자이너들과 함께 작업하며 결과물을 확장하는 연구소형 협업 구조",
  },
  {
    title: "Mentoring",
    description: "실무 기반 피드백과 자연스러운 멘토링 안에서 작업 밀도를 높이는 과정",
  },
  {
    title: "Portfolio",
    description: "개인 작업과 공동 프로젝트를 통해 포트폴리오에 남는 결과물을 만드는 흐름",
  },
  {
    title: "Lab Culture",
    description: "혼자보다 함께 만들 때 더 좋아지는 감각과 협업의 리듬을 경험하는 환경",
  },
];

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#07070b] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,77,255,0.18),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(47,107,255,0.16),transparent_22%)]" />
        <div className="relative mx-auto max-w-[1180px] px-5 pb-14 pt-8 md:px-8 md:pb-18 md:pt-10 xl:px-10 xl:pb-20">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-[11px] uppercase tracking-[0.22em] text-white/56 transition hover:text-white"
            >
              Back to Graffin
            </Link>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#9ea8ff] md:text-[11px]">
              Team Application
            </span>
          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">
                Graffin Design Lab
              </p>
              <h1 className="mt-6 font-[var(--font-display)] text-[clamp(2.6rem,5.4vw,5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-white">
                Mentoring
                <br />
                Team Apply
              </h1>
              <p className="mt-6 max-w-xl text-[14px] leading-[1.95] tracking-[-0.01em] text-white/62 md:text-[15px]">
                Graffin Design Lab은 디자이너들이 함께 작업하고 협업하는 크리에이티브 디자인 연구소입니다.
                이번 신청은 멘토링과 협업 흐름 안에서 함께 성장할 디자이너를 위한 모집 페이지입니다.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {focusItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-[13px] leading-6 tracking-[0.01em] text-white/80 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">
                    {benefit.title}
                  </p>
                  <p className="mt-4 text-[14px] leading-7 tracking-[-0.01em] text-white/72">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f3f7] text-black">
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-8 xl:px-10 xl:py-18">
          <div className="rounded-[30px] border border-black/8 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(10,12,20,0.06)] md:px-10 md:py-10">
            <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/42 md:text-[11px]">
                  Application Form
                </p>
                <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.9rem,3.2vw,2.9rem)] font-normal leading-[1.12] tracking-[-0.015em] text-black">
                  Graffin Team Apply
                </h2>
                <p className="mt-5 text-[14px] leading-[1.9] tracking-[-0.01em] text-black/62 md:text-[15px]">
                  아래 폼에 기본 정보와 참여 배경을 남겨주시면, Graffin Design Lab의 현재 흐름과 맞는지 검토 후 연락드릴게요.
                </p>

                <div className="mt-8 space-y-3 rounded-[24px] border border-black/8 bg-[#f7f7fa] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/46">
                    지원 프로그램
                  </p>
                  <ul className="space-y-2 text-[14px] leading-7 text-black/70">
                    <li>일러스트레이터</li>
                    <li>포토샵</li>
                    <li>프리미어 프로</li>
                    <li>애프터이펙트</li>
                    <li>피그마</li>
                  </ul>
                </div>
              </div>

              <div>
                <TeamApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
