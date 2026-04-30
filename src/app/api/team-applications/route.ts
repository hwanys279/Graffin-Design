import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      age?: string;
      phone?: string;
      schoolMajorOrJob?: string;
      residenceDistrict?: string;
      program?: string;
      experienceLevel?: string;
      motivation?: string;
    };

    const name = body.name?.trim() || "";
    const age = body.age?.trim() || "";
    const phone = body.phone?.trim() || "";
    const schoolMajorOrJob = body.schoolMajorOrJob?.trim() || "";
    const residenceDistrict = body.residenceDistrict?.trim() || "";
    const program = body.program?.trim() || "";
    const experienceLevel = body.experienceLevel?.trim() || "";
    const motivation = body.motivation?.trim() || null;

    if (!name || !age || !phone || !schoolMajorOrJob || !residenceDistrict || !program || !experienceLevel) {
      return NextResponse.json(
        { message: "이름, 나이, 연락처, 학교(전공)/직업, 거주지, 지원 프로그램, 경험 수준은 필수입니다." },
        { status: 400 },
      );
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { message: "Supabase 환경변수가 설정되지 않았습니다." },
        { status: 500 },
      );
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/team_applications`, {
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
          age,
          phone,
          school_major_or_job: schoolMajorOrJob,
          residence_district: residenceDistrict,
          program,
          experience_level: experienceLevel,
          motivation,
          source: "website",
        },
      ]),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        {
          message:
            detail ||
            "신청 저장에 실패했습니다. Supabase 테이블과 정책을 확인해 주세요.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "신청 전송 중 알 수 없는 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
