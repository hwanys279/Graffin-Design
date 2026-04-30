import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_NAME = "graffin_admin";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: string } | null;

  if (!ADMIN_PASSWORD) {
    return NextResponse.json({ message: "ADMIN_PASSWORD 환경변수가 설정되지 않았습니다." }, { status: 500 });
  }

  if (!body?.password || body.password !== ADMIN_PASSWORD) {
    return NextResponse.json({ message: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, Buffer.from(ADMIN_PASSWORD).toString("base64url"), {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return response;
}
