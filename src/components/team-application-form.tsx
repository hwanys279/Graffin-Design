"use client";

import { FormEvent, useState } from "react";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialStatus: Status = { type: "idle", message: "" };

export function TeamApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      age: String(formData.get("age") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      schoolMajorOrJob: String(formData.get("schoolMajorOrJob") ?? "").trim(),
      residenceDistrict: String(formData.get("residenceDistrict") ?? "").trim(),
      program: String(formData.get("program") ?? "").trim(),
      experienceLevel: String(formData.get("experienceLevel") ?? "").trim(),
      motivation: String(formData.get("motivation") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/team-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "신청 저장 중 오류가 발생했습니다.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: "신청이 접수되었습니다. 검토 후 연락드릴게요.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "신청 저장 중 오류가 발생했습니다.";

      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-[1fr_0.55fr]">
        <label className="space-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
            Name
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder="이름"
            className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22 focus:bg-white"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
            Age
          </span>
          <input
            name="age"
            type="number"
            min="1"
            required
            placeholder="나이"
            className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22 focus:bg-white"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
        <label className="space-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
            Phone
          </span>
          <input
            name="phone"
            type="text"
            required
            placeholder="연락처"
            className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22 focus:bg-white"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
            School / Job
          </span>
          <input
            name="schoolMajorOrJob"
            type="text"
            required
            placeholder="학교(전공) / 직업"
            className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22 focus:bg-white"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
        <label className="space-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
            Residence
          </span>
          <input
            name="residenceDistrict"
            type="text"
            required
            placeholder="거주지(구)"
            className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22 focus:bg-white"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
            Program
          </span>
          <select
            name="program"
            required
            defaultValue=""
            className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition focus:border-black/22 focus:bg-white"
          >
            <option value="">지원 프로그램 선택</option>
            <option value="illustrator">Adobe Illustrator</option>
            <option value="photoshop">Adobe Photoshop</option>
            <option value="premiere-pro">Adobe Premiere Pro</option>
            <option value="after-effects">Adobe After Effects</option>
            <option value="figma">피그마</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
          Experience Level
        </span>
        <select
          name="experienceLevel"
          required
          defaultValue=""
          className="h-13 w-full rounded-[22px] border border-black/10 bg-[#f7f7fa] px-4 text-[14px] text-black outline-none transition focus:border-black/22 focus:bg-white"
        >
          <option value="">경험 수준 선택</option>
          <option value="new">입문 전 단계</option>
          <option value="starter">첫 시작 단계</option>
          <option value="major">전공 기반 경험자</option>
          <option value="pro">실무형 숙련자</option>
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/52">
          Motivation / Purpose
        </span>
        <textarea
          name="motivation"
          rows={7}
          placeholder="지원 동기 또는 참여 목적이 있다면 자유롭게 적어주세요."
          className="w-full rounded-[26px] border border-black/10 bg-[#f7f7fa] px-4 py-4 text-[14px] leading-7 text-black outline-none transition placeholder:text-black/28 focus:border-black/22 focus:bg-white"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
        <div className="min-h-6 text-[13px] leading-6">
          {status.type === "success" ? (
            <p className="text-[#245d2f]">{status.message}</p>
          ) : status.type === "error" ? (
            <p className="text-[#a12626]">{status.message}</p>
          ) : (
            <p className="text-black/44">신청 내용은 Graffin Design Lab 데이터베이스에 저장됩니다.</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-[12px] font-medium tracking-[0.03em] text-white transition hover:bg-black/88 disabled:cursor-not-allowed disabled:bg-black/40"
        >
          {isSubmitting ? "전송 중..." : "팀원 신청 보내기"}
        </button>
      </div>
    </form>
  );
}


