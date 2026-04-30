import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      brand?: string;
      inquiryType?: string;
      message?: string;
    };

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const brand = body.brand?.trim() || null;
    const inquiryType = body.inquiryType?.trim() || null;
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "이름, 이메일, 문의 내용은 필수입니다." },
        { status: 400 },
      );
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { message: "Supabase 환경변수가 설정되지 않았습니다." },
        { status: 500 },
      );
    }

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/collaboration_inquiries`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify([
          {
            name,
            email,
            brand,
            inquiry_type: inquiryType,
            message,
            source: "website",
          },
        ]),
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        {
          message:
            detail ||
            "문의 저장에 실패했습니다. Supabase 테이블과 정책을 확인해 주세요.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "문의 전송 중 알 수 없는 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
