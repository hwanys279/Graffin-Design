"use client";

import { useEffect, useState } from "react";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  brand: string | null;
  inquiry_type: string | null;
  message: string;
  created_at: string;
};

type Application = {
  id: number;
  name: string;
  age: string;
  phone: string;
  school_major_or_job: string;
  residence_district: string;
  program: string;
  experience_level: string;
  motivation: string | null;
  created_at: string;
};

type Payload = {
  collaborationInquiries: Inquiry[];
  teamApplications: Application[];
};

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<Payload | null>(null);

  async function loadData() {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/submissions", { cache: "no-store" });
      const result = (await response.json().catch(() => null)) as
        | (Payload & { message?: string })
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result && "message" in result ? result.message || "관리자 데이터를 불러오지 못했습니다." : "관리자 데이터를 불러오지 못했습니다.");
      }

      setData(result as Payload);
      setIsAuthed(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "관리자 데이터를 불러오지 못했습니다.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) {
        throw new Error(result?.message || "비밀번호가 올바르지 않습니다.");
      }
      setPassword("");
      await loadData();
    } catch (err) {
      const message = err instanceof Error ? err.message : "로그인에 실패했습니다.";
      setError(message);
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthed(false);
    setData(null);
    setError("");
  }

  if (!isAuthed) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">Admin Access</p>
        <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.9rem,3.1vw,2.8rem)] font-normal leading-[1.12] tracking-[-0.015em] text-white">
          Graffin Admin
        </h2>
        <p className="mt-5 max-w-xl text-[14px] leading-[1.9] tracking-[-0.01em] text-white/60 md:text-[15px]">
          관리자 비밀번호를 입력하면 문의와 팀원 신청 데이터를 확인할 수 있습니다.
        </p>

        <form className="mt-8 flex flex-col gap-4 sm:flex-row" onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="관리자 비밀번호"
            className="h-12 flex-1 rounded-full border border-white/10 bg-white/[0.05] px-5 text-[14px] text-white outline-none placeholder:text-white/28 focus:border-white/24"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[12px] font-medium tracking-[0.03em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/40"
          >
            {isLoading ? "확인 중..." : "로그인"}
          </button>
        </form>

        {error ? <p className="mt-4 text-[13px] leading-6 text-[#ff9b9b]">{error}</p> : null}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#9ea8ff] md:text-[11px]">Admin Overview</p>
          <h2 className="mt-3 font-[var(--font-display)] text-[clamp(1.9rem,3.1vw,2.8rem)] font-normal leading-[1.12] tracking-[-0.015em] text-white">
            수집 데이터 확인
          </h2>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 px-5 text-[12px] font-medium tracking-[0.03em] text-white/78 transition hover:bg-white hover:text-black"
        >
          로그아웃
        </button>
      </div>

      {error ? <p className="text-[13px] leading-6 text-[#ff9b9b]">{error}</p> : null}

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <h3 className="text-[12px] uppercase tracking-[0.18em] text-white/48">협업 문의</h3>
          <div className="mt-5 space-y-3">
            {data?.collaborationInquiries?.length ? data.collaborationInquiries.map((item) => (
              <div key={item.id} className="rounded-[20px] border border-white/8 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[14px] font-medium text-white">{item.name}</p>
                  <span className="text-[11px] text-white/36">{new Date(item.created_at).toLocaleString("ko-KR")}</span>
                </div>
                <p className="mt-2 text-[13px] text-white/58">{item.email}{item.brand ? ` / ${item.brand}` : ""}</p>
                <p className="mt-3 text-[14px] leading-7 text-white/74">{item.message}</p>
              </div>
            )) : <p className="text-[14px] leading-7 text-white/46">아직 저장된 협업 문의가 없습니다.</p>}
          </div>
        </article>

        <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <h3 className="text-[12px] uppercase tracking-[0.18em] text-white/48">팀원 신청</h3>
          <div className="mt-5 space-y-3">
            {data?.teamApplications?.length ? data.teamApplications.map((item) => (
              <div key={item.id} className="rounded-[20px] border border-white/8 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[14px] font-medium text-white">{item.name}</p>
                  <span className="text-[11px] text-white/36">{new Date(item.created_at).toLocaleString("ko-KR")}</span>
                </div>
                <p className="mt-2 text-[13px] text-white/58">{item.program} / {item.experience_level}</p>
                <p className="mt-2 text-[13px] text-white/58">{item.phone} / {item.residence_district}</p>
                <p className="mt-2 text-[13px] text-white/58">{item.school_major_or_job}</p>
                <p className="mt-3 text-[14px] leading-7 text-white/74">{item.motivation || "지원 동기 미작성"}</p>
              </div>
            )) : <p className="text-[14px] leading-7 text-white/46">아직 저장된 팀원 신청이 없습니다.</p>}
          </div>
        </article>
      </section>
    </div>
  );
}
