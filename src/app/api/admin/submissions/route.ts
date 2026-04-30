import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_NAME = "graffin_admin";

async function fetchTable(path: string) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY || "",
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY || ""}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export async function GET() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  const expected = ADMIN_PASSWORD ? Buffer.from(ADMIN_PASSWORD).toString("base64url") : "";

  if (!token || token !== expected) {
    return NextResponse.json({ message: "관리자 인증이 필요합니다." }, { status: 401 });
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ message: "관리자 조회를 위해 SUPABASE_SERVICE_ROLE_KEY 환경변수가 필요합니다." }, { status: 500 });
  }

  try {
    const [collaborationInquiries, teamApplications] = await Promise.all([
      fetchTable("collaboration_inquiries?select=*&order=created_at.desc"),
      fetchTable("team_applications?select=*&order=created_at.desc"),
    ]);

    return NextResponse.json({ collaborationInquiries, teamApplications });
  } catch (error) {
    const message = error instanceof Error ? error.message : "관리자 데이터를 불러오지 못했습니다.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
