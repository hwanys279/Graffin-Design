import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/data";

const goals = [
  "함께 성장할 크리에이터 발굴",
  "창작 커뮤니티 확장",
  "디자인 접근성 개선",
];

const audience = [
  "디자인에 관심 있는 누구나",
  "포토샵 또는 일러스트를 배우고 싶은 분",
  "영상이나 쇼츠를 직접 만들어보고 싶은 분",
  "초심자부터 중급자 이상까지 모두",
];

const curriculum = [
  {
    title: "1회차 · OT",
    description:
      "오리엔테이션, 레퍼런스 리서치, 무드보드 구성, 아이디어 스케치로 작업 방향을 잡습니다.",
  },
  {
    title: "2회차 · 디자인 기초 & 디테일",
    description:
      "초심자는 기초 도구와 실습을, 중급자 이상은 질감, 그림자, 빛 효과 등 심화 표현을 다룹니다.",
  },
  {
    title: "3회차 · 디자인 실습",
    description:
      "파트별 심화 효과를 실습하며 결과물의 완성도를 끌어올립니다.",
  },
  {
    title: "4회차 · 실무 디자인 & 포트폴리오",
    description:
      "셀프 브랜딩 기반 포트폴리오 기획, 목업, 상세페이지 제작까지 연결합니다.",
  },
];

const benefits = [
  "무료 디자인 프로젝트 참여",
  "실무 디자이너의 피드백 및 멘토링",
  "완성형 개인 포트폴리오 제작",
  "Graffin DesignLab 프로젝트 참여 기회",
  "우수 참여자 협업 기회 검토",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:px-10">
        <AnimatedSection className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700">
              Creative Open Project
            </p>
            <h1 className="mt-6 text-5xl font-black leading-tight text-neutral-950 md:text-7xl">
              디자인을 배우는 곳을 넘어,
              <br />
              함께 만드는
              <span className="text-brand-600"> 창작 실험실</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
              {siteConfig.name}은 그래픽, 영상, 웹 분야의 프리랜서 디자이너들이 함께
              운영하는 오픈 프로젝트 팀입니다. 처음 시작하는 사람도 자신만의
              결과물을 완성할 수 있도록 실무 기반 피드백과 프로젝트 경험을
              제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="https://walla.my/v/Vj8qveAPv7CS6yfVU1sK"
                target="_blank"
                rel="noreferrer"
                size="lg"
              >
                프로젝트 지원하기
              </Button>
              <Button
                href="https://grffindesignlab.myportfolio.com/"
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
              >
                포트폴리오 보기
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="border-brand-100 bg-white/80 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                모집 안내
              </p>
              <p className="mt-4 text-3xl font-bold text-neutral-950">상시 모집</p>
              <p className="mt-3 leading-7 text-neutral-700">
                포토샵, 일러스트, 웹디자인, 영상디자인에 관심 있는 누구나
                지원할 수 있습니다. 팀 구성 완료 시 마감됩니다.
              </p>
            </Card>
            <Card className="border-neutral-200 bg-neutral-950 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
                Contact
              </p>
              <p className="mt-4 text-xl font-semibold">graffin024@gmail.com</p>
              <a
                href="https://open.kakao.com/o/suEZVr2h"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-neutral-300 underline underline-offset-4"
              >
                카카오톡 오픈채팅으로 문의하기
              </a>
            </Card>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16">
        <AnimatedSection className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" delay={0.1}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold text-neutral-950 md:text-5xl">
              새로운 창작 생태계를
              <br />
              함께 실험하는 팀
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-neutral-700">
            <p>
              Graffin DesignLab은 그래픽, 영상, 웹디자인 분야의 프리랜서
              디자이너들이 모여 만든 크리에이티브 디자인 연구소입니다. 실무에서
              쌓은 경험을 바탕으로, 디자인을 처음 접하는 사람도 자신의 작품과
              포트폴리오를 완성할 수 있도록 돕는 오픈 프로젝트를 운영합니다.
            </p>
            <p>
              이 프로젝트는 단순한 교육 프로그램이 아니라, 함께 배우고 만들며
              성장하는 새로운 창작 생태계를 실험하는 팀 프로젝트입니다.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16">
        <AnimatedSection delay={0.15}>
          <div className="grid gap-5 md:grid-cols-3">
            {goals.map((goal) => (
              <Card
                key={goal}
                className="border-brand-100 bg-gradient-to-br from-white to-brand-50/70"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                  Direction
                </p>
                <p className="mt-5 text-2xl font-bold leading-9 text-neutral-950">
                  {goal}
                </p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16">
        <AnimatedSection className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]" delay={0.2}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
              Recruiting
            </p>
            <h2 className="mt-4 text-3xl font-bold text-neutral-950 md:text-5xl">
              프로젝트 팀원 모집
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              지금의 실력보다 앞으로 함께 만들고 싶은 마음을 더 중요하게 봅니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audience.map((item) => (
              <Card key={item} className="bg-white/80 backdrop-blur">
                <p className="text-base font-semibold leading-7 text-neutral-900">{item}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16">
        <AnimatedSection delay={0.25}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Curriculum
              </p>
              <h2 className="mt-4 text-3xl font-bold text-neutral-950 md:text-5xl">
                Graffin 디자인 커리큘럼
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-neutral-700 md:text-lg">
              총 4회차 과정으로 진행되며, 매주 4주 또는 격주 8주 형태로
              운영됩니다. 모든 회차는 피드백과 질의응답을 포함하며, 과정 전반에서
              개인 포트폴리오 제작을 함께 진행합니다.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {curriculum.map((item, index) => (
              <Card
                key={item.title}
                className="border-neutral-200 bg-white/85 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-neutral-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16">
        <AnimatedSection className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]" delay={0.3}>
          <Card className="border-neutral-900 bg-neutral-950 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">
              Benefits
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              처음이어도 완성도 있는 결과물까지
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300 md:text-lg">
              디자인이 처음이어도 괜찮습니다. 처음 시작하는 사람도 자신만의
              결과물을 만들 수 있도록 실제 제작 중심으로 함께합니다.
            </p>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <Card key={item} className="bg-gradient-to-br from-white to-brand-50/60">
                <p className="text-lg font-semibold leading-7 text-neutral-900">{item}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:pb-24">
        <AnimatedSection className="rounded-[2rem] bg-brand-900 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">
            Join Us
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            직접 만들며 성장할 팀원을 기다립니다
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-50/90">
            배우기만 하는 시간이 아니라, 직접 만들고 완성하는 경험이 필요하다면
            Graffin DesignLab 프로젝트에 참여해보세요. 혼자서는 막막했던
            디자인도 함께하면 결과물로 남길 수 있습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="https://walla.my/v/Vj8qveAPv7CS6yfVU1sK"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-brand-900 hover:bg-brand-50"
              size="lg"
            >
              지원서 작성하기
            </Button>
            <Button
              href="https://open.kakao.com/o/suEZVr2h"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
              size="lg"
            >
              문의하기
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
