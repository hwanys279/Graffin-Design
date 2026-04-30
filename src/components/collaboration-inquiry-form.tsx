"use client";

import { FormEvent, useState } from "react";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialStatus: Status = { type: "idle", message: "" };

export function CollaborationInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      brand: String(formData.get("brand") ?? "").trim(),
      inquiryType: String(formData.get("inquiryType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/collaboration-inquiries", {
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
        throw new Error(result?.message || "문의 저장 중 오류가 발생했습니다.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: "문의가 접수되었습니다. 확인 후 연락드릴게요.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "문의 저장 중 오류가 발생했습니다.";

      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex-1 min-w-[240px] space-y-5">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-12 items-center justify-center rounded-full border border-black/12 px-6 text-[12px] font-medium tracking-[0.03em] text-black transition hover:bg-black hover:text-white"
      >
        {isOpen ? "문의 폼 닫기" : "협업 문의하기"}
      </button>

      {isOpen ? (
        <form className="space-y-4 rounded-[24px] border border-black/8 bg-[#f7f7fa] p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/54">
                Name
              </span>
              <input
                name="name"
                type="text"
                required
                placeholder="이름 또는 담당자명"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22"
              />
            </label>

            <label className="space-y-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/54">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                placeholder="연락받을 이메일"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22"
              />
            </label>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_0.75fr]">
            <label className="space-y-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/54">
                Brand
              </span>
              <input
                name="brand"
                type="text"
                placeholder="브랜드 / 회사명"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[14px] text-black outline-none transition placeholder:text-black/28 focus:border-black/22"
              />
            </label>

            <label className="space-y-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/54">
                Type
              </span>
              <select
                name="inquiryType"
                defaultValue=""
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[14px] text-black outline-none transition focus:border-black/22"
              >
                <option value="">문의 유형 선택</option>
                <option value="branding">브랜딩 / 그래픽</option>
                <option value="web">웹 / 랜딩페이지</option>
                <option value="motion">영상 / 모션</option>
                <option value="partnership">협업 제안</option>
              </select>
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/54">
              Message
            </span>
            <textarea
              name="message"
              required
              placeholder="협업 내용, 일정, 원하는 작업 범위를 적어주세요."
              rows={6}
              className="w-full rounded-[24px] border border-black/10 bg-white px-4 py-3 text-[14px] leading-7 text-black outline-none transition placeholder:text-black/28 focus:border-black/22"
            />
          </label>

          <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
            <div className="min-h-6 text-[13px] leading-6">
              {status.type === "success" ? (
                <p className="text-[#245d2f]">{status.message}</p>
              ) : status.type === "error" ? (
                <p className="text-[#a12626]">{status.message}</p>
              ) : (
                <p className="text-black/42">문의 내용은 Graffin Design Lab으로 전달됩니다.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-[12px] font-medium tracking-[0.03em] text-white transition hover:bg-black/88 disabled:cursor-not-allowed disabled:bg-black/40"
            >
              {isSubmitting ? "전송 중..." : "협업 문의 보내기"}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
