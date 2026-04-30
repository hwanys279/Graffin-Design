import Link from "next/link";
import { TeamApplicationForm } from "../../components/team-application-form";

const focusItems = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Figma",
];

const values = [
  {
    title: "Collaborative Flow",
    description: "혼자 배우는 과정이 아니라, 함께 작업하고 피드백을 주고받으며 결과물을 확장하는 흐름을 지향합니다.",
  },
  {
    title: "Practical Mentoring",
    description: "실무 감각을 바탕으로 한 자연스러운 멘토링 안에서 작업의 밀도와 완성도를 높입니다.",
  },
  {
    title: "Creative Archive",
    description: "개인의 작업이 포트폴리오와 공동 결과물로 이어질 수 있도록 기록과 축적의 구조를 함께 만듭니다.",
  },
];

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#07070b] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,77,255,0.18),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(47,107,255,0.16),transparent_22%)]" />
        <div className="relative mx-auto max-w-[1180px] px-5 pb-18 pt-8 md:px-8 md:pb-24 md:pt-10 xl:px-10 xl:pb-28">
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

          <div className="mt-14 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">
              Graffin Design Lab
            </p>
            <h1 className="mt-6 font-[var(--font-display)] text-[clamp(2.7rem,5.4vw,5.2rem)] font-normal leading-[1.03] tracking-[-0.02em] text-white">
              Mentoring
              <br />
              Team Apply
            </h1>
            <p className="mt-7 max-w-2xl text-[14px] leading-[2] tracking-[-0.01em] text-white/62 md:text-[15px]">
              Graffin Design Lab은 디자이너들이 함께 작업하고 협업하는 크리에이티브 디자인 연구소입니다.
              이번 신청은 멘토링과 협업 흐름 안에서 함께 성장할 디자이너를 위한 모집 페이지입니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-stretch">
            <section className="flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#9ea8ff] md:text-[11px]">
                Programs
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.5rem,2.4vw,2.2rem)] font-normal leading-[1.14] tracking-[-0.015em] text-white">
                지원 프로그램
              </h2>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                {focusItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[72px] items-center rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-[14px] leading-6 tracking-[0.01em] text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#9ea8ff] md:text-[11px]">
                Graffin Benefits
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.5rem,2.4vw,2.2rem)] font-normal leading-[1.14] tracking-[-0.015em] text-white">
                Graffin Benefits
              </h2>
              <div className="mt-6 space-y-4">
                {values.map((value) => (
                  <article key={value.title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/44">{value.title}</p>
                    <p className="mt-3 text-[14px] leading-7 tracking-[-0.01em] text-white/72">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
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
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere Pro</li>
                    <li>Adobe After Effects</li>
                    <li>Figma</li>
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


