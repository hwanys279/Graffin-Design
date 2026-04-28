import Image from "next/image";

const heroTags = ["Creative Lab", "Graphic", "Visual", "Web", "Motion"];

const primaryGallery = [
  "/graffin/gallery-01.png",
  "/graffin/gallery-02.png",
  "/graffin/gallery-03.png",
  "/graffin/gallery-04.png",
  "/graffin/gallery-05.png",
  "/graffin/gallery-06.png",
  "/graffin/gallery-07.png",
  "/graffin/gallery-08.png",
  "/graffin/gallery-09.png",
  "/graffin/gallery-10.png",
  "/graffin/gallery-11.jpg",
  "/graffin/gallery-12.jpg",
];

const extendedGallery = [
  "/graffin/gallery-13.jpg",
  "/graffin/gallery-14.jpg",
  "/graffin/gallery-15.jpg",
  "/graffin/gallery-16.jpg",
  "/graffin/gallery-17.jpg",
  "/graffin/gallery-18.jpg",
  "/graffin/gallery-19.jpg",
  "/graffin/gallery-20.jpg",
  "/graffin/gallery-21.jpg",
  "/graffin/gallery-22.jpg",
  "/graffin/gallery-23.jpg",
];

const designerCards = [
  "/graffin/designer-cards/card-01.png",
  "/graffin/designer-cards/card-02.png",
  "/graffin/designer-cards/card-03.png",
  "/graffin/designer-cards/card-04.png",
  "/graffin/designer-cards/card-05.png",
  "/graffin/designer-cards/card-06.png",
  "/graffin/designer-cards/card-07.png",
  "/graffin/designer-cards/card-08.png",
];

const currentProjects = [
  {
    title: "Visual Archive System",
    category: "Graphic / Identity",
    description: "연구소의 작업물을 하나의 흐름으로 정리하는 비주얼 아카이브 시스템.",
  },
  {
    title: "Collaborative Web Frame",
    category: "Web / UX",
    description: "소속 디자이너들의 결과물을 더 잘 보여주기 위한 웹 전시 구조 리서치.",
  },
  {
    title: "Mentoring Flow",
    category: "Mentoring / Feedback",
    description: "실무 기반 피드백과 공동 창작 흐름 안에서 운영되는 멘토링 프로젝트.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07070b] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070b]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-8 xl:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden"><Image src="/graffin/logo-white.png" alt="Graffin logo" fill className="object-contain" sizes="44px" priority /></span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/76 md:text-xs">
              Graffin Design Lab
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[12px] tracking-[0.06em] text-white/54 md:flex">
            <a href="#gallery" className="transition hover:text-white">Gallery</a>
            <a href="#designers" className="transition hover:text-white">Designers</a>
            <a href="#join" className="transition hover:text-white">Join</a>
          </nav>

          <a
            href="#gallery"
            className="rounded-full border border-white/14 px-4 py-2 text-[12px] font-medium tracking-[0.03em] text-white transition hover:border-white/28 hover:bg-white hover:text-black"
          >
            작품 보기
          </a>
        </div>
      </header>

      <section id="top" className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(93,77,255,0.18),transparent_26%),radial-gradient(circle_at_18%_18%,rgba(47,107,255,0.12),transparent_20%)]" />
        <div className="relative mx-auto max-w-[1320px] px-5 pb-14 pt-14 md:px-8 md:pb-18 md:pt-18 xl:px-10 xl:pb-20">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/58"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="mt-8 font-[var(--font-display)] text-[clamp(2.6rem,5.6vw,5.1rem)] font-normal leading-[1.02] tracking-[-0.02em] text-white">
                Graffin
                <br />
                Design Lab
              </h1>

              <p className="mt-6 max-w-lg text-[14px] leading-[1.95] tracking-[-0.01em] text-white/58 md:text-[15px]">
                디자이너들이 함께 작업하고 협업하는 크리에이티브 디자인 연구소.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#gallery" className="rounded-full bg-white px-6 py-3 text-[12px] font-medium tracking-[0.03em] text-black transition hover:bg-white/90">
                  View Gallery
                </a>
                <a href="#designers" className="rounded-full border border-white/14 px-6 py-3 text-[12px] font-medium tracking-[0.03em] text-white/80 transition hover:border-white/26 hover:text-white">
                  Designers
                </a>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {primaryGallery.slice(0, 4).map((src, index) => (
                <div key={src} className={`relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] ${index === 1 ? "aspect-[0.9]" : "aspect-[0.76]"}`}>
                  <Image src={src} alt={`Graffin hero artwork ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 25vw, 22vw" priority />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="border-b border-white/10 bg-[#050509]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 xl:px-10 xl:py-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">Gallery</p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] font-normal leading-[1.14] tracking-[-0.015em] text-white">
                Curated Archive
              </h2>
            </div>
            <p className="max-w-sm text-[12px] leading-6 tracking-[0.02em] text-white/40">
              업로드한 에셋 중 화질이 안정적인 작업들만 추려 갤러리 형식으로 배치했습니다.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {primaryGallery.map((src, index) => (
              <article key={src} className="group">
                <div className="relative aspect-[0.8] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03]">
                  <Image
                    src={src}
                    alt={`Graffin gallery artwork ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </article>
            ))}
          </div>

          <details className="group mt-8">
            <summary className="list-none">
              <span className="inline-flex cursor-pointer rounded-full border border-white/14 px-5 py-2.5 text-[12px] font-medium tracking-[0.03em] text-white/82 transition hover:border-white/28 hover:text-white">
                더보기
              </span>
            </summary>
            <div className="mt-8 grid grid-cols-4 gap-2 md:gap-4">
              {extendedGallery.map((src, index) => (
                <article key={src} className="group/item">
                  <div className="relative aspect-[0.8] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03]">
                    <Image
                      src={src}
                      alt={`Graffin extended gallery artwork ${index + 1}`}
                      fill
                      className="object-cover transition duration-500 group-hover/item:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="designers" className="border-b border-white/10 bg-[#050506] text-white">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 xl:px-10 xl:py-18">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/38 md:text-[11px]">Affiliated Designers</p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.16] tracking-[-0.015em] text-white">
                소속 디자이너
              </h2>
            </div>
            <p className="max-w-sm text-[12px] leading-6 tracking-[0.02em] text-white/42">
              Affiliated designers of Graffin Design Lab.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {designerCards.map((src, index) => (
              <article key={src} className="overflow-hidden rounded-[22px] border border-white/10 bg-black/20 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[0.64] bg-black">
                  <Image
                    src={src}
                    alt={`Graffin designer card ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-[#07070b]">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 xl:px-10 xl:py-18">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">Current Projects</p>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.16] tracking-[-0.015em] text-white">
              현재 진행 중인 프로젝트
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {currentProjects.map((project) => (
              <article key={project.title} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/36">{project.category}</p>
                <h3 className="mt-4 text-[20px] font-medium tracking-[-0.02em] text-white">{project.title}</h3>
                <p className="mt-4 text-[14px] leading-[1.85] tracking-[-0.01em] text-white/60">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="bg-[#f2f3f7] text-black">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 xl:px-10 xl:py-18">
          <div className="rounded-[28px] border border-black/8 bg-white px-6 py-10 shadow-[0_18px_50px_rgba(10,12,20,0.06)] md:px-10 md:py-12">
            <p className="text-[10px] uppercase tracking-[0.24em] text-black/42 md:text-[11px]">Join Graffin</p>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.9rem,3.2vw,2.9rem)] font-normal leading-[1.12] tracking-[-0.015em] text-black">
              협업 또는 팀원 신청하기
            </h2>
            <p className="mt-5 max-w-2xl text-[14px] leading-[1.9] tracking-[-0.01em] text-black/62 md:text-[15px]">
              Graffin과 함께 작업하고 싶거나, 연구소의 흐름 안에서 협업하며 성장하고 싶다면 언제든 연결해 주세요.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://walla.my/v/Vj8qveAPv7CS6yfVU1sK" className="rounded-full bg-black px-6 py-3 text-[12px] font-medium tracking-[0.03em] text-white transition hover:bg-black/88">
                팀원 신청하기
              </a>
              <a href="https://open.kakao.com/o/suEZVr2h" className="rounded-full border border-black/12 px-6 py-3 text-[12px] font-medium tracking-[0.03em] text-black transition hover:bg-black hover:text-white">
                협업 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






