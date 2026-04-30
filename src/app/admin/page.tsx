import Link from "next/link";
import { AdminDashboard } from "../../components/admin-dashboard";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#07070b] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-8 md:px-8 xl:px-10">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-[11px] uppercase tracking-[0.22em] text-white/56 transition hover:text-white">
              Back to Graffin
            </Link>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#9ea8ff] md:text-[11px]">Admin</span>
          </div>
          <div className="mt-10">
            <AdminDashboard />
          </div>
        </div>
      </section>
    </main>
  );
}
